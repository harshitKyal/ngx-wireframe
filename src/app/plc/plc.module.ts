import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlcRoutingModule } from './plc-routing.module';
import { PlcComponent } from './plc.component';
import { ThemeModule } from '../@theme/theme.module';
import { ViewPlcComponent } from './view-plc/view-plc.component';
import { StatusCardComponent } from './status-card/status-card.component';

@NgModule({
  declarations: [PlcComponent, ViewPlcComponent, StatusCardComponent],
  imports: [
    CommonModule,
    PlcRoutingModule,
    ThemeModule
  ]
})
export class PlcModule { }
