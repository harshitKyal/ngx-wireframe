import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QualityComponent } from './quality.component';
import { AddEditQualityComponent } from './add-edit-quality/add-edit-quality.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'view-quality',
        component: QualityComponent,
        // data: {
        //   title: 'Dashboard 1'
        // }
      },
      {
        path: 'add-quality',
        component: AddEditQualityComponent,
      },
      {
        path: 'edit-quality/:id',
        component: AddEditQualityComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class QualityRoutingModule { }
