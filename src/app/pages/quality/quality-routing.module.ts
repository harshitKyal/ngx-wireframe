import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QualityComponent } from './quality.component';
import { AddEditQualityComponent } from './add-edit-quality/add-edit-quality.component';
import { ViewQualityComponent } from './view-quality/view-quality.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'view-quality',
        component: ViewQualityComponent,
      },
      {
        path: 'add-quality',
        component: AddEditQualityComponent,
      },
      {
        path: 'edit-quality/:id',
        component: AddEditQualityComponent,
      },
      {
        path: '',
        redirectTo: 'view-quality',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class QualityRoutingModule { }
