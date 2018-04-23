import {Injectable} from '@angular/core';
import {Country} from '../interface/country.interface';
import {Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {API_BASE} from '../../../app.constants';

@Injectable()
export class CountryService  {

  constructor(protected http: HttpClient) {
  }

  countrues: Array<Country> = [];

  /**
   * GET COUNTRIES
   * @return {Array}
   */

  getAll(): Observable<Array<Country>> {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Array<Country>>(`${API_BASE}/country`, { headers});
  }

}
