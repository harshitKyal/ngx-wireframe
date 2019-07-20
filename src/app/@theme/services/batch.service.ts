import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private apiService: ApiService) { }

  getAllBatchs(batchReqObj) {
    return this.apiService.apiCaller('post', '/batchList', batchReqObj);
  }

  getAllBatchByQualityId(batchReqObj) {
    return this.apiService.apiCaller('post', '/batchListByQualityId', batchReqObj);
  }
  getAllBatchByProgramQualityId(batchReqObj) {
    return this.apiService.apiCaller('post', '/batchListByProgramQualityId', batchReqObj);
  }

  addBatch(batch) {
    return this.apiService.apiCaller('post', '/addBatch', batch);
  }

  getBatchById(id) {
    return this.apiService.apiCaller('get', '/getBatchById/' + id);
  }
  getGrListByQualityId(id) {
    return this.apiService.apiCaller('get', '/getGrListByQualityId/' + id);
  }

  updateBatch(batch) {
    return this.apiService.apiCaller('post', '/updateBatch', batch);
  }

  deleteBatchById(id) {
    return this.apiService.apiCaller('get', '/deleteBatch/' + id);
  }
}

