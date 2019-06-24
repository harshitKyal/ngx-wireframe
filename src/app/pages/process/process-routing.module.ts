import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessComponent } from './process.component';
import { ViewProcessComponent } from './view-process/view-process.component';
import { AddEditProcessComponent } from './add-edit-process/add-edit-process.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessComponent,
    children: [
      {
        path: 'view-process-list',
        component: ViewProcessComponent
      },
      {
        path: 'add-process',
        component: AddEditProcessComponent,
      },
      {
        path: 'edit-process/:id',
        component: AddEditProcessComponent,
      },
      {
        path: '',
        redirectTo: 'view-process-list',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ProcessRoutingModule { }
