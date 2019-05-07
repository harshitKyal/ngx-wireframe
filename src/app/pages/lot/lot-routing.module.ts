import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditLotComponent } from './add-edit-lot/add-edit-lot.component';
import { LotComponent } from './lot.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewLotComponent } from './view-lot/view-lot.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'view-lot-list',
        component: ViewLotComponent
      },
      {
        path: 'view-lot/:id',
        component: AddEditLotComponent
      },
      {
        path: 'add-lot',
        component: AddEditLotComponent,
      },
      {
        path: 'edit-lot/:id',
        component: AddEditLotComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class LotRoutingModule { }
