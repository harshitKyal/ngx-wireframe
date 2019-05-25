import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LotService {

  constructor(private apiService: ApiService) { }

  getAllLots(lotReqObj) {
    return this.apiService.apiCaller('post', '/lotList', lotReqObj);
  }

  addLot(lot) {
    return this.apiService.apiCaller('post', '/addLot', lot);
  }

  getLotById(id) {
    return this.apiService.apiCaller('get', '/getLotById/' + id);
  }
  getGrListByQualityId(id) {
    return this.apiService.apiCaller('get', '/getGrListByQualityId/' + id);
  }

  updateLot(lot) {
    return this.apiService.apiCaller('post', '/updateLot', lot);
  }

  deleteLotById(id) {
    return this.apiService.apiCaller('get', '/deleteLot/' + id);
  }
}

