import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UserComponent } from './user.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'view-user',
        component: ViewUserComponent,
      },
      {
        path: 'add-user',
        component: AddEditUserComponent,
      },
      {
        path: 'edit-user/:id',
        component: AddEditUserComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
