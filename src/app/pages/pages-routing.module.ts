import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AuthGuard } from '../@theme/guard/auth.guard';
import { WebsitesComponent } from './websites/websites.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'websites',
    component: WebsitesComponent,
  },
  {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  },
  {
    path: '',
    redirectTo: 'websites',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
  canActivate: [AuthGuard],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
