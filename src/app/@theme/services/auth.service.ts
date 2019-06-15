import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginModal } from '../model/login-class';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/Rx';
import { ApiService } from '../services/api.service';
import { User } from '../model/user-class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  loggedOn: BehaviorSubject<any> = new BehaviorSubject(false);
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private router: Router, private api: ApiService) {
  }

  signinUser(username: string, password: string) {
    const user = new LoginModal();
    user.UserName = username;
    user.Password = password;

    return this.onLogin(user)
      .map((result) => {
        if (!result[0].error && result[0].data.hasRows) {
          console.log('result login', result);
          // const res = JSON.parse(result);
          localStorage.setItem('isLogged', 'true');
          this.currentUser.next({ 'user': result[0].data.user, 'user_permission': result[0].data.user_permission, 'token': result[0].data.token, 'group_user_ids': result[0].data.group_user_ids });
          localStorage.setItem('currentUser', JSON.stringify(result[0].data.user));
          localStorage.setItem('currentUserPermission', JSON.stringify(result[0].data.user_permission));
          localStorage.setItem('currentUserToken', JSON.stringify(result[0].data.token));
        }
        return result;
      }).catch((error: any) => Observable.throw(error || 'Server error'));

    // your code for checking credentials and getting tokens for for signing in user

  }

  logout() {
    localStorage.removeItem('isLogged');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserToken')
    localStorage.removeItem('currentUserPermission')
    this.currentUser.next(null);
    this.router.navigate(['/auth']);
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {

  }
  onLogin(data: LoginModal): Observable<any> {
    // alert(data.UserName)
    return this.api.apiCaller('post', '/SignIn', data);
  }
}
