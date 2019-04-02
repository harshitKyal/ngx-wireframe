/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { NbMenuService } from '@nebular/theme/components/menu/menu.service';
import { AuthService } from './@theme/services/auth.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private menuService: NbMenuService,
    private authService: AuthService) {
    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContecxtItemSelection(event.item.title);
      });
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }


  onContecxtItemSelection(title) {
    debugger
    if (title === 'Log Out') {
      this.authService.logout();
    }
  }
}
