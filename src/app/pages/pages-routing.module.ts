import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { BillInGuardService } from '../@theme/guard/bill-in-guard.service';
import { UserGuardService } from '../@theme/guard/user-guard.service';
import { PartyGuardService } from '../@theme/guard/party-guard.service';
import { QualityGuardService } from '../@theme/guard/quality-guard.service';
import { LotGuardService } from '../@theme/guard/lot-guard.service';
import { SupplierGuardService } from '../@theme/guard/supplier-guard.service';
import { AuthGuard } from '../@theme/guard/auth-guard.service';
import { ShadeGuardService } from '../@theme/guard/shade-guard.service';

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
      path: 'bill',
      loadChildren: './bill-in/bill-in.module#BillInModule',
      canActivate: [BillInGuardService],
      canLoad: [BillInGuardService],
    },
    {
      path: 'lot',
      loadChildren: './lot/lot.module#LotModule',
      canActivate: [LotGuardService],
      canLoad: [LotGuardService],
    },
    {
      path: 'program',
      loadChildren: './program/program.module#ProgramModule',
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
