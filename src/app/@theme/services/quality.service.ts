import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { id } from '@swimlane/ngx-charts/release/utils';

@Injectable({
  providedIn: 'root'
})
export class QualityService {

  constructor(private apiService: ApiService) { }

  getAllQualityData(data?) {
    return this.apiService.apiCaller('post', '/qualityData', data);
  }

  addQuality(quality) {
    return this.apiService.apiCaller('post', '/addQuality', quality);
  }

  getQualityById(id) {
    return this.apiService.apiCaller('get', '/getQualityDataById/' + id);
  }

  getTypeList() {
    return this.apiService.apiCaller('get', '/qualityTypeList');
  }

  getSubTypeListByType(type) {
    return this.apiService.apiCaller('get', '/qualitySubTypeList/' + type);
  }

  updateQuality(quality) {
    return this.apiService.apiCaller('post', '/updateQuality', quality);
  }

  deleteQualityById(id) {
    return this.apiService.apiCaller('get', '/qualityData/' + id);
  }
}
