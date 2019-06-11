import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, UserPermission } from '../model/user-class';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PermissionService } from '../services/permission.service';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramGuardService {


  currentUser: User;
  currentUser$: Subscription;
  currentUserPermission = [];
  userPermission: UserPermission;

  constructor(private router: Router, private activateroute: ActivatedRoute, private permissionService: PermissionService,
    private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser.subscribe(data => {
      if (data != null) {
        this.currentUser = data;
        this.currentUserPermission = data.user_permission;
        if (this.currentUserPermission.length) {
          this.currentUserPermission.forEach(ele => {
            if (ele.form_name === 'Program') {
              this.userPermission = new UserPermission();
              this.userPermission = ele;
            }
          });
        }
      }
    })
  }

  canLoad(route: Route) {
    if (this.currentUser !== undefined && this.userPermission.can_view) {
      return true;
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Program. If you want to View Program ask admin for permission.');
      if (res) {

      } else {

      }
      return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser !== undefined && this.userPermission.can_view) {
      return true;
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Program. If you want to View Program ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}

