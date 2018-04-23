import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ModalComponent} from './modal/modal.component';
import {ListCountryComponent} from './table/list-country.component';
import {Ng2SmartTableModule } from 'ng2-smart-table';
import {CountryService} from './service/country.service';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    DashboardComponent,
    ModalComponent,
    ListCountryComponent,
  ],
  entryComponents: [
    ModalComponent,
    ListCountryComponent,
  ],
  providers: [
    CountryService,
  ],
})
export class DashboardModule { }
