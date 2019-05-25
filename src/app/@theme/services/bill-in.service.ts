import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BillInService {

  constructor(private apiService: ApiService) { }

  getAllBills(billReqObj){
    return this.apiService.apiCaller('post', '/stockList',billReqObj);
  }

  addBill(bill) {
    return this.apiService.apiCaller('post', '/addStock',bill);
  }

  getBillById(id) {
    return this.apiService.apiCaller('get', '/getStockById/' + id);
  }

  updateBill(bill) {
    return this.apiService.apiCaller('post', '/updateStock', bill);
  }

  deleteBillById(id) {
    return this.apiService.apiCaller('get', '/deleteStock/' + id);
  }
}
