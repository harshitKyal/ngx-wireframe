import { Component, OnInit } from '@angular/core';
import { StateService } from '../@core/utils';
import { NbMenuService, NbThemeService, NbMediaBreakpointsService, NbSidebarService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-plc',
  templateUrl: './plc.component.html',
  styleUrls: ['./plc.component.scss']
})
export class PlcComponent implements OnInit {

  layout: any = {};

  private alive = true;

  currentTheme: string;

  constructor(protected stateService: StateService,
    protected menuService: NbMenuService,
    protected themeService: NbThemeService,
    protected bpService: NbMediaBreakpointsService,
    protected sidebarService: NbSidebarService) {
    this.stateService.onLayoutState()
      .pipe(takeWhile(() => this.alive))
      .subscribe((layout: string) => this.layout = layout);

    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnInit() {
  }
}
