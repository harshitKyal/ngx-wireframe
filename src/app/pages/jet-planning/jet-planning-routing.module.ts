import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JetPlanningComponent } from './jet-planning.component';

const routes: Routes = [
  {
    path: '',
    component: JetPlanningComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JetPlanningRoutingModule { }
