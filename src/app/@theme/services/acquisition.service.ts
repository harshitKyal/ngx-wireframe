import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AcquisitionService {

  constructor(private _api: ApiService) { }

  getUsersCount(reqObj): Observable<any> {
    return this._api.apiCaller('get', '/v0/users/count', this._api.getParams(reqObj));
  }

  getLeadsCount(reqObj): Observable<any> {
    return this._api.apiCaller('get', '/v0/leads/count', this._api.getParams(reqObj));
  }

  getCustomersCount(reqObj): Observable<any> {
    return this._api.apiCaller('get', '/v0/customers/count', this._api.getParams(reqObj));
  }

  getCustomersRate(reqObj): Observable<any> {
    return this._api.apiCaller('get', '/v0/customers/rate', this._api.getParams(reqObj));
  }

  getLeadsRate(reqObj): Observable<any> {
    return this._api.apiCaller('get', '/v0/leads/rate', this._api.getParams(reqObj));
  }

  getBarChartData(reqObj): Observable<any> {
    return this._api.apiCaller('get', '/v0/charts/bar', this._api.getBarChartParams(reqObj));
  }
}
