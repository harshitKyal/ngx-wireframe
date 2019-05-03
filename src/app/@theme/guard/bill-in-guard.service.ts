import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute, Route, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../model/user-class';

@Injectable({
  providedIn: 'root'
})
export class BillInGuardService  implements CanLoad, CanActivate{

  constructor() { }

  canLoad(route: Route) {debugger
    const isLoggedIn = localStorage.getItem('isLogged');
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    if (isLoggedIn && user && parseInt(user.have_stock)) {
      return true;
    } else {
      return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {debugger
    const isLoggedIn = localStorage.getItem('isLogged');
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    if (isLoggedIn && user && parseInt(user.have_stock)) {
      return true;
    }
  }
}
