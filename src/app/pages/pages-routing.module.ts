import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { FabricInGuardService } from '../@theme/guard/fabric-in-guard.service';
import { UserGuardService } from '../@theme/guard/user-guard.service';
import { PartyGuardService } from '../@theme/guard/party-guard.service';
import { QualityGuardService } from '../@theme/guard/quality-guard.service';
import { SupplierGuardService } from '../@theme/guard/supplier-guard.service';
import { ShadeGuardService } from '../@theme/guard/shade-guard.service';
import { BatchGuardService } from '../@theme/guard/batch-guard.service';
import { ProcessGuardService } from '../@theme/guard/process-guard.service';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'miscellaneous',
      loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
    },
    {
      path: 'party',
      loadChildren: './party/party.module#PartyModule',
      canActivate: [PartyGuardService],
      canLoad: [PartyGuardService]
    },
    {
      path: 'quality',
      loadChildren: './quality/quality.module#QualityModule',
      canActivate: [QualityGuardService],
      canLoad: [QualityGuardService]
    },
    {
      path: 'user',
      loadChildren: './user/user.module#UserModule',
      canActivate: [UserGuardService],
      canLoad: [UserGuardService]
    },
    {
      path: 'fabric-in',
      loadChildren: './fabric-in/fabric-in.module#FabricInModule',
      canActivate: [FabricInGuardService],
      canLoad: [FabricInGuardService],
    },
    {
      path: 'batch',
      loadChildren: './batch/batch.module#BatchModule',
      canActivate: [BatchGuardService],
      canLoad: [BatchGuardService],
    },
    {
      path: 'program',
      loadChildren: './program/program.module#ProgramModule',
      // canActivate: [ProgramGuardService],
      // canLoad: [ProgramGuardService],
    },
    {
      path: 'process',
      loadChildren: './process/process.module#ProcessModule',
      // canActivate: [ProcessGuardService],
      // canLoad: [ProcessGuardService],
    },
    {
      path: 'supplier',
      loadChildren: './supplier/supplier.module#SupplierModule',
      canActivate: [SupplierGuardService],
      canLoad: [SupplierGuardService],
    },
    {
      path: 'shade',
      loadChildren: './shade/shade.module#ShadeModule',
      canActivate: [ShadeGuardService],
      canLoad: [ShadeGuardService],
    },
    {
      path: 'colour-stock',
      loadChildren: './colour-stock/colour-stock.module#ColourStockModule',
      // canActivate: [ColourStockGuardService],
      // canLoad: [ColourStockGuardService],
    },
    {
      path: '**',
      component: NotFoundComponent,
    }],
  // canActivate: [AuthGuard],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
