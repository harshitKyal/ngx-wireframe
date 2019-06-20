import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FabricInService {

  constructor(private apiService: ApiService) { }

  getAllFabricIns(billReqObj) {
    return this.apiService.apiCaller('post', '/stockList', billReqObj);
  }

  addFabricIn(bill) {
    return this.apiService.apiCaller('post', '/addStock', bill);
  }

  getFabricInById(id) {
    return this.apiService.apiCaller('get', '/getStockById/' + id);
  }

  updateFabricIn(bill) {
    return this.apiService.apiCaller('post', '/updateStock', bill);
  }

  deleteFabricInById(id) {
    return this.apiService.apiCaller('get', '/deleteStock/' + id);
  }
}
