import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FabricInService {

  constructor(private apiService: ApiService) { }

  getAllFabricIns(fabricReqObj) {
    return this.apiService.apiCaller('post', '/stockList', fabricReqObj);
  }

  getAllFabricByParty(fabricReqObj) {
    return this.apiService.apiCaller('post', '/stockListByParty', fabricReqObj);
  }

  addFabricIn(fabric) {
    return this.apiService.apiCaller('post', '/addStock', fabric);
  }

  getFabricInById(id) {
    return this.apiService.apiCaller('get', '/getStockById/' + id);
  }

  updateFabricIn(fabric) {
    return this.apiService.apiCaller('post', '/updateStock', fabric);
  }

  deleteFabricInById(id) {
    return this.apiService.apiCaller('get', '/deleteStock/' + id);
  }
}
