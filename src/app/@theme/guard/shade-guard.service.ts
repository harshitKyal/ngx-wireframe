import { Injectable } from '@angular/core';
import { User } from '../../@core/data/users';
import { Subscription } from 'rxjs';
import { UserPermission } from '../model/user-class';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PermissionService } from '../services/permission.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class ShadeGuardService {


  currentUser: User;
  currentUser$: Subscription;
  currentUserPermission = [];
  userPermission: UserPermission;

  constructor(private router: Router, private activateroute: ActivatedRoute,
    private authService: AuthService, private permissionService: PermissionService) {
    this.currentUser$ = this.authService.currentUser.subscribe(data => {
      if (data != null) {
        this.currentUser = data;
        this.currentUserPermission = data.user_permission;
        if (this.currentUserPermission.length) {
          this.currentUserPermission.forEach(ele => {
            if (ele.form_name === 'Shade') {
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
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Shade. If you want to View Shade ask admin for permission.');
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
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Shade. If you want to View Shade ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}

