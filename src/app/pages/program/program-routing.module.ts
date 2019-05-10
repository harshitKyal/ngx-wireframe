import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramComponent } from './program.component';
import { ViewProgramListComponent } from './view-program-list/view-program-list.component';
import { AddEditProgramComponent } from './add-edit-program/add-edit-program.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramComponent,
    children: [
      {
        path: 'view-program-list',
        component: ViewProgramListComponent
      },
      {
        path: 'add-program',
        component: AddEditProgramComponent,
      },
      {
        path: 'edit-program/:id',
        component: AddEditProgramComponent,
      },
      {
        path: '',
        redirectTo: 'view-program-list',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ProgramRoutingModule { }
