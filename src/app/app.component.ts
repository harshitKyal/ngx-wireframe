/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { NbMenuService } from '@nebular/theme/components/menu/menu.service';
import { AuthService } from './@theme/services/auth.service';
import { PrintService } from './@theme/services/print.service';

@Component({
  selector: 'ngx-app',
  template: '<div [class.isPrinting]="printService.isPrinting">  <router-outlet></router-outlet><router-outlet id="print1" name="print"></router-outlet></div>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private menuService: NbMenuService,
    private authService: AuthService, public printService: PrintService) {
    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContecxtItemSelection(event.item.title);
      });
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }


  onContecxtItemSelection(title) {
    if (title === 'Log Out') {
      this.authService.logout();
    }
  }
}
