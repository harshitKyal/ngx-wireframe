import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlcComponent } from './plc.component';
import { ViewPlcComponent } from './view-plc/view-plc.component';

const routes: Routes = [
  {
    path: '',
    component: PlcComponent,
    children: [{
      path: '',
      component: ViewPlcComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlcRoutingModule { }
