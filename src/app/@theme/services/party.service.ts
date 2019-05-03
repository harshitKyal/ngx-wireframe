import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Party } from '../model/party-class';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  constructor(private apiService: ApiService) { }

  getPartyList() {
    return this.apiService.apiCaller('get', '/partyData');
  }
  updateParty(party: Party) {
    return this.apiService.apiCaller('post', '/updateParty', party);
  }
  addParty(party: Party) {
    return this.apiService.apiCaller('post', '/addParty', party);
  }
  deleteParty(id) {
    return this.apiService.apiCaller('get', '/deleteParty/' + id);
  }
  getPartyById(id) {
    return this.apiService.apiCaller('get', '/getPartyById/' + id);
  }
}
