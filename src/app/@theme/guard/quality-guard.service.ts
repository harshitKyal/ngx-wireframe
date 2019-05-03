import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../model/user-class';

@Injectable({
  providedIn: 'root'
})
export class QualityGuardService implements CanLoad, CanActivate {

  constructor( private router: Router, private activateroute: ActivatedRoute) { }

  canLoad(route: Route) {
    const isLoggedIn = localStorage.getItem('isLogged');
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    if (isLoggedIn && user && parseInt(user.have_quality)) {
      return true;
    } else {
      return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoggedIn = localStorage.getItem('isLogged');
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    if (isLoggedIn && user && parseInt(user.have_quality)) {
      return true;
    }
  }
}
