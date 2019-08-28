import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessPlanningService {

  constructor(private apiService: ApiService) { }

  getAllprocessPlannings(processPlanningReqObj) {
    return this.apiService.apiCaller('post', '/productionPlanningList', processPlanningReqObj);
  }

  getprocessPlanningById(id) {
    return this.apiService.apiCaller('get', '/getProductionById/' + id);
  }

  updateprocessPlanning(processPlanning) {
    return this.apiService.apiCaller('post', '/updateProduction', processPlanning);
  }

  deleteprocessPlanningById(id) {
    return this.apiService.apiCaller('get', '/deleteProduction/' + id);
  }
  addProductionPlannig(obj) {
    return this.apiService.apiCaller('post', '/addProductionPlanning', obj);
  }
}
