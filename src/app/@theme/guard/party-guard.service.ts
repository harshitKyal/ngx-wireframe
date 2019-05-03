import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute, Route, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../model/user-class';

@Injectable({
  providedIn: 'root'
})
export class PartyGuardService  implements CanLoad, CanActivate {

  constructor() { }

  canLoad(route: Route) {
    const isLoggedIn = localStorage.getItem('isLogged');
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    if (isLoggedIn && user && parseInt(user.have_party)) {
      return true;
    } else {
      return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoggedIn = localStorage.getItem('isLogged');
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    if (isLoggedIn && user && parseInt(user.have_party)) {
      return true;
    }
  }
}
