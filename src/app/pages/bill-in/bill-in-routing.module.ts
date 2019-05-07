import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBillInComponent } from './add-edit-bill-in/add-edit-bill-in.component';
import { BillInComponent } from './bill-in.component';
import { ViewBillInComponent } from './view-bill-in/view-bill-in.component';

const routes: Routes = [
  {
    path: '',
    component: BillInComponent,
    children: [
      {
        path: 'view-bill-list',
        component: ViewBillInComponent
      },
      {
        path: 'view-bill/:id',
        component: AddEditBillInComponent
      },
      {
        path: 'add-bill',
        component: AddEditBillInComponent,
      },
      {
        path: 'edit-bill/:id',
        component: AddEditBillInComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BillInRoutingModule { }
