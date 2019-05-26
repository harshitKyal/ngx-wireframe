import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute, Route, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { User, UserPermission } from '../model/user-class';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { PermissionService } from '../services/permission.service';

@Injectable({
  providedIn: 'root'
})
export class PartyGuardService implements CanLoad, CanActivate {

  currentUser: User;
  currentUser$: Subscription;
  currentUserPermission = [];
  userPermission: UserPermission;

  constructor(private router: Router, private activateroute: ActivatedRoute,private permissionService:PermissionService,
    private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser.subscribe(data => {
      if (data != null) {
        this.currentUser = data;
        this.currentUserPermission = data.user_permission;
        if (this.currentUserPermission.length) {
          this.currentUserPermission.forEach(ele => {
            if (ele.form_name === 'Party') {
              this.userPermission = new UserPermission();
              this.userPermission = ele;
            }
          });
        }
      }
    })
  }

  canLoad(route: Route) {
    const isLoggedIn = localStorage.getItem('isLogged');
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser !== undefined && this.userPermission.can_view) {
      return true;
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Party. If you want to View Party ask admin for permission.');
      if (res) {

      } else {

      }
      return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoggedIn = localStorage.getItem('isLogged');
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser !== undefined && this.userPermission.can_view) {
      return true;
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Party. If you want to View Party ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}
