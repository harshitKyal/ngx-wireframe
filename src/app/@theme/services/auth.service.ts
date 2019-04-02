import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
  constructor(private _api: ApiService, private router: Router) { }

  login(body) {
    return this.onlogin(body)
      .map((result) => {
        if (result) {
          console.log('result login', result);
          localStorage.setItem('isLogged', 'true');
          // localStorage.setItem('currentUser', JSON.stringify(result[0].data[0]));
          // localStorage.setItem('currentUserToken', JSON.stringify(result[0].data[1]));
        }
        return result;
      }).catch((error: any) => Observable.throw(error || 'Server error'));
  }

  logout() {
    debugger
    localStorage.removeItem('isLogged');
    // localStorage.removeItem('currentUser');
    // localStorage.removeItem('currentUserToken')
    this.router.navigate(['/auth']);
  }

  onlogin(data: any): Observable<any> {
    return this._api.apiCaller('post', '/v0/login', data);
  }
}
