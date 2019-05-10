import { NgModule } from '@angular/core';
import { ShadeComponent } from './shade.component';
import { AddEditShadeComponent } from './add-edit-shade/add-edit-shade.component';
import { ViewShadeListComponent } from './view-shade-list/view-shade-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShadeComponent,
    children: [
      {
        path: 'view-shade-list',
        component: ViewShadeListComponent
      },
      {
        path: 'add-shade',
        component: AddEditShadeComponent,
      },
      {
        path: 'edit-shade/:id',
        component: AddEditShadeComponent,
      },
      {
        path: '',
        redirectTo: 'view-shade-list',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ShadeRoutingModule { }
