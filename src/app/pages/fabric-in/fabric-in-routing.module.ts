import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FabricInComponent } from './fabric-in.component';
import { ViewFabricInComponent } from './view-fabric-in/view-fabric-in.component';
import { AddEditFabricInComponent } from './add-edit-fabric-in/add-edit-fabric-in.component';

const routes: Routes = [
  {
    path: '',
    component: FabricInComponent,
    children: [
      {
        path: 'view-fabric-in-list',
        component: ViewFabricInComponent
      },
      {
        path: 'view-fabric-in/:id',
        component: AddEditFabricInComponent
      },
      {
        path: 'add-fabric-in',
        component: AddEditFabricInComponent,
      },
      {
        path: 'edit-fabric-in/:id',
        component: AddEditFabricInComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class FabricInRoutingModule { }
