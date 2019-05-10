import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {


  constructor(private apiService: ApiService) { }

  getAllSupplierData() {
    return this.apiService.apiCaller('get', '/supplierList');
  }

  addSupplier(supplier) {
    return this.apiService.apiCaller('post', '/addSupplier', supplier);
  }

  getSupplierById(id) {
    return this.apiService.apiCaller('get', '/getSupplier/' + id);
  }

  updateSupplier(supplier) {
    return this.apiService.apiCaller('post', '/updateSupplier', supplier);
  }

  deleteSupplierById(id) {
    return this.apiService.apiCaller('get', '/deleteSupplierList/' + id);
  }
  getAllSupplierRateData() {
    return this.apiService.apiCaller('get', '/supplierList');
  }

  addSupplierRate(supplier) {
    return this.apiService.apiCaller('post', '/addSupplier', supplier);
  }

  getSupplierRateById(id) {
    return this.apiService.apiCaller('get', '/getSupplier/' + id);
  }

  updateSupplierRate(supplier) {
    return this.apiService.apiCaller('post', '/updateSupplier', supplier);
  }

  deleteSupplierRateById(id) {
    return this.apiService.apiCaller('get', '/deleteSupplierList/' + id);
  }
}
