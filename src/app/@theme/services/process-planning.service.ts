import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessPlanningService {

  constructor(private apiService: ApiService) { }

  getAllprocessPlannings(processPlanningReqObj) {
    return this.apiService.apiCaller('post', '/processPlanningList', processPlanningReqObj);
  }

  getprocessPlanningGivenByList(processPlanningReqObj) {
    return this.apiService.apiCaller('post', '/processPlanningGivenByList', processPlanningReqObj);
  }

  addprocessPlanning(processPlanning) {
    return this.apiService.apiCaller('post', '/addprocessPlanning', processPlanning);
  }

  getprocessPlanningById(id) {
    return this.apiService.apiCaller('get', '/getprocessPlanningById/' + id);
  }

  updateprocessPlanning(processPlanning) {
    return this.apiService.apiCaller('post', '/updateprocessPlanning', processPlanning);
  }

  deleteprocessPlanningById(id) {
    return this.apiService.apiCaller('get', '/deleteprocessPlanning/' + id);
  }
}
