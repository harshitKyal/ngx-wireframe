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
