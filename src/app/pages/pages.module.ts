import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PartyModule } from './party/party.module';
import { QualityModule } from './quality/quality.module';
import { UserModule } from './user/user.module';
import { BatchModule } from './batch/batch.module';
import { SupplierModule } from './supplier/supplier.module';
import { ProgramModule } from './program/program.module';
import { ShadeModule } from './shade/shade.module';
import { ColourStockModule } from './colour-stock/colour-stock.module';
import { FabricInModule } from './fabric-in/fabric-in.module';

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
    FabricInModule,
    UserModule,
    BatchModule,
    SupplierModule,
    ProgramModule,
    ShadeModule,
    ProgramModule,
    ColourStockModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
