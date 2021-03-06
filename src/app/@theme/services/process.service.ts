import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {


  constructor(private apiService: ApiService) { }

  getAllProcesss(processReqObj) {
    return this.apiService.apiCaller('post', '/processList', processReqObj);
  }

  getProcessGivenByList(processReqObj) {
    return this.apiService.apiCaller('post', '/processGivenByList', processReqObj);
  }

  addProcess(process) {
    return this.apiService.apiCaller('post', '/addProcess', process);
  }

  getProcessById(id) {
    return this.apiService.apiCaller('get', '/getProcessById/' + id);
  }

  updateProcess(process) {
    return this.apiService.apiCaller('post', '/updateProcess', process);
  }

  deleteProcessById(id) {
    return this.apiService.apiCaller('get', '/deleteProcess/' + id);
  }
  getAllDynamicProcesss(processReqObj) {
    return this.apiService.apiCaller('post', '/dynamicProcessList', processReqObj);
  }

  addDynamicProcess(process) {
    return this.apiService.apiCaller('post', '/adddynamicProcess', process);
  }

  getDynamicProcessById(id) {
    return this.apiService.apiCaller('get', '/getdynamicProcessById/' + id);
  }

  updateDynamicProcess(process) {
    return this.apiService.apiCaller('post', '/updatedynamicProcess', process);
  }

  deleteDynamicProcessById(id) {
    return this.apiService.apiCaller('get', '/deletedynamicProcess/' + id);
  }
}

