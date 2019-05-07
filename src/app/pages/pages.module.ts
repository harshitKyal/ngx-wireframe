import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PartyModule } from './party/party.module';
import { QualityModule } from './quality/quality.module';
import { BillInModule } from './bill-in/bill-in.module';
import { UserModule } from './user/user.module';
import { LotModule } from './lot/lot.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    MiscellaneousModule,
    PartyModule,
    QualityModule,
    BillInModule,
    UserModule,
    LotModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
