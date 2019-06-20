import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditBatchComponent } from './add-edit-batch/add-edit-batch.component';
import { BatchComponent } from './batch.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewBatchComponent } from './view-batch/view-batch.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'view-batch-list',
        component: ViewBatchComponent
      },
      {
        path: 'view-batch/:id',
        component: AddEditBatchComponent
      },
      {
        path: 'add-batch',
        component: AddEditBatchComponent,
      },
      {
        path: 'edit-batch/:id',
        component: AddEditBatchComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BatchRoutingModule { }
