import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CountryService} from '../service/country.service';
import {LocalDataSource } from 'ng2-smart-table';
import {Country} from '../interface/country.interface';


@Component({
  selector: 'ngx-list-country',
  templateUrl: './list-country.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
      overflow-x: scroll;
    }
  `],
})
export class ListCountryComponent implements OnInit {


  message;
  messageClass;
  processing = false;
  columns =  {
    name: {
      title: 'Country Name',
      type: 'string',
      width: '25%',
    },
    code: {
      title: 'Country Code',
      type: 'string',
    },
  };

  settings = {
    noDataMessage: 'Carregando dados...',
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

  constructor(
    private router: Router,
    private service: CountryService) {
  }
  // Function to get all Countries from php api
  getAll(): void {
    this.service.getAll().subscribe(data => {
      this.source.load(data);
    });
  }


  ngOnInit() {
   this.getAll(); // Get all Countries
  }
}
