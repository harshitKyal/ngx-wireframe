import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessPlanningComponent } from './process-planning.component';
import { ViewProcessPlanningComponent } from './view-process-planning/view-process-planning.component';
import { AddEditProcessPlanningComponent } from './add-edit-process-planning/add-edit-process-planning.component';


const routes: Routes = [
  {
    path: '',
    component: ProcessPlanningComponent,
    children: [
      {
        path: 'view-process-planning-list',
        component: ViewProcessPlanningComponent
      },
      {
        path: 'add-process-planning',
        component: AddEditProcessPlanningComponent,
      },
      {
        path: 'edit-process-planning/:id',
        component: AddEditProcessPlanningComponent,
      },
      {
        path: '',
        redirectTo: 'view-process-planning-list',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessPlanningRoutingModule { }
