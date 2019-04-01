import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { CountryOrdersComponent } from './country-orders/country-orders.component';
import { CountryOrdersMapComponent } from './country-orders/map/country-orders-map.component';
import { CountryOrdersChartComponent } from './country-orders/chart/country-orders-chart.component';
import { CountryOrdersMapService } from './country-orders/map/country-orders-map.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { DashboardSampleService } from '../../@core/mock/dashboard-sample.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    LeafletModule,
    HttpClientModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    CountryOrdersChartComponent,
  ],
  providers: [
    CountryOrdersMapService,
    DashboardSampleService,
  ],
})
export class DashboardModule { }
