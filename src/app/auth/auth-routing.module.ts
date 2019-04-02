import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NbAuthComponent } from '@nebular/auth';

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [{
      path: '',
      component: LoginComponent,
    },]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}