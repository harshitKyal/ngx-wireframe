import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ColourStockService {

  constructor(private apiService: ApiService) { }


  getAllColourStock(colourStockReqObj) {
    return this.apiService.apiCaller('post', '/colourStockList', colourStockReqObj);
  }
  getIssuedNonIssueData(isIssued) {
    return this.apiService.apiCaller('get', '/getIssuedNonIssuedList/' + isIssued);
  }

  issueBox(obj) {
    return this.apiService.apiCaller('get', '/issueColourBox/' + obj);
  }

  addColourStock(colourStock) {
    return this.apiService.apiCaller('post', '/addColourStock', colourStock);
  }

  getColourStockById(id) {
    return this.apiService.apiCaller('get', '/getColourStockById/' + id);
  }

  updateColourStock(colourStock) {
    return this.apiService.apiCaller('post', '/updateColourStock', colourStock);
  }

  deleteColourStockById(id) {
    return this.apiService.apiCaller('get', '/deleteColourStock/' + id);
  }
}
