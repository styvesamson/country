import {Component, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {CountryService} from '../service/country.service';
import {LocalDataSource } from 'ng2-smart-table';
import {Country} from '../interface/country.interface';

@Component({
  selector: 'ngx-modal',
  templateUrl: './modal.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
      overflow-x: scroll;
    }
  `],
})
export class ModalComponent  implements OnInit {

  modalHeader: string;
  modalContent: string;
  settings = {
    noDataMessage: 'Carregando dados...',
    actions: false,
    hideSubHeader: true,
    columns: {
      name: {
        title: 'Country Name',
        type: 'string',
      },
      code: {
        title: 'Country Code',
        type: 'string',
        width: '25%',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private activeModal: NgbActiveModal,
              private service: CountryService) { }

  // Function to get all Countries from php api
  getAll(): void {
    this.service.getAll().subscribe(data => {
      this.source.load(data);
    });
  }


  ngOnInit() {
    this.getAll(); // Get all Countries
  }
  closeModal() {
    this.activeModal.close();
  }
}
