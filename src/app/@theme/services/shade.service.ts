import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShadeService {

  constructor(private apiService: ApiService) { }

  getAllShades(shadeReqObj) {
    return this.apiService.apiCaller('post', '/shadeList', shadeReqObj);
  }

  addShade(shade) {
    return this.apiService.apiCaller('post', '/addShade', shade);
  }

  getShadeById(id) {
    return this.apiService.apiCaller('get', '/getShadeById/' + id);
  }

  updateShade(shade) {
    return this.apiService.apiCaller('post', '/updateShade', shade);
  }

  deleteShadeById(id) {
    return this.apiService.apiCaller('get', '/deleteShade/' + id);
  }
}
