import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private apiService: ApiService) { }

  getAllPrograms(programReqObj) {
    return this.apiService.apiCaller('post', '/programList', programReqObj);
  }

  getProgramGivenByList(programReqObj) {
    return this.apiService.apiCaller('post', '/programGivenByList', programReqObj);
  }

  addProgram(program) {
    return this.apiService.apiCaller('post', '/addProgram', program);
  }

  getProgramById(id) {
    return this.apiService.apiCaller('get', '/getProgramById/' + id);
  }

  updateProgram(program) {
    return this.apiService.apiCaller('post', '/updateProgram', program);
  }

  deleteProgramById(id) {
    return this.apiService.apiCaller('get', '/deleteProgram/' + id);
  }
}
