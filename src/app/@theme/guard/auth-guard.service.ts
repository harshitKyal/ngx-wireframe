import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../model/user-class';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {
  currentUser: User;
  currentUser$: Subscription;

  constructor(private router: Router, private activateroute: ActivatedRoute,
    private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser.subscribe(data => {
      if (data != null) {
        this.currentUser = data;
      }
    })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser !== undefined) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
  ngOnDestroy() {

  }
}
