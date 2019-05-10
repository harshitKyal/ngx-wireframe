import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { ViewSupplierRateComponent } from './view-supplier-rate/view-supplier-rate.component';
import { ViewSuppliersComponent } from './view-suppliers/view-suppliers.component';
import { AddEditSupplierComponent } from './add-edit-supplier/add-edit-supplier.component';
import { AddEditSupplierRateComponent } from './add-edit-supplier-rate/add-edit-supplier-rate.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SupplierComponent,
    children: [
      {
        path: 'view-supplier-list',
        component: ViewSuppliersComponent
      },
      {
        path: 'add-supplier',
        component: AddEditSupplierComponent,
      },
      {
        path: 'edit-supplier/:id',
        component: AddEditSupplierComponent,
      },
      {
        path: 'view-supplier-rate-list',
        component: ViewSupplierRateComponent
      },
      {
        path: 'add-supplier-rate',
        component: AddEditSupplierRateComponent,
      },
      {
        path: 'edit-supplier-rate/:id',
        component: AddEditSupplierRateComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SupplierRoutingModule { }
