import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AuthGuard } from '../@theme/guard/auth.guard';

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
    },
    {
      path: 'quality',
      loadChildren: './quality/quality.module#QualityModule',
    },
    {
      path: 'user',
      loadChildren: './user/user.module#UserModule',
    },
    {
      path: 'bill',
      loadChildren: './bill-in/bill-in.module#BillInModule',
    },
    {
      path: 'lot',
      loadChildren: './lot/lot.module#LotModule',
    },
    {
      path: 'program',
      loadChildren: './program/program.module#ProgramModule',
    },
    {
      path: 'supplier',
      loadChildren: './supplier/supplier.module#SupplierModule',
    },
    {
      path: 'shade',
      loadChildren: './shade/shade.module#ShadeModule',
    },
    {
      path: '',
      redirectTo: 'party',
      pathMatch: 'full',
    }, {
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
