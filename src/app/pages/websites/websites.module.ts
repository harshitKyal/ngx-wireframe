import { NgModule } from '@angular/core';
import { WebsitesComponent } from './websites.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { StatusCardComponent } from './status-card/status-card.component';
import { DashboardSampleService } from '../../@core/mock/dashboard-sample.service';
@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    LeafletModule,
    HttpClientModule,
  ],
  declarations: [
    StatusCardComponent,
    WebsitesComponent,
  ],
  providers: [
    DashboardSampleService,
  ],
})
export class WebsitesModule { }
