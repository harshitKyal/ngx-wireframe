import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;
  currentUser$: Subscription;
  userMenu = [{ title: 'Profile' }, { title: 'Log Out' }];
  currentUser;

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserData,
    private authService: AuthService,
    private layoutService: LayoutService) {
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
      }
    });
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
