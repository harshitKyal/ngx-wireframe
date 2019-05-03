import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPartyComponent } from './add-edit-party/add-edit-party.component';
import { PartyComponent } from './party.component';
import { ViewPartyComponent } from './view-party/view-party.component';

const routes: Routes = [
  {
    path: '',
    component:PartyComponent,
    children: [
      {
        path: 'view-party',
        component: ViewPartyComponent
      },
      {
        path: 'add-party',
        component: AddEditPartyComponent,
      },
      {
        path: 'edit-party/:id',
        component: AddEditPartyComponent,
      },
      {
        path: '',
        redirectTo: 'view-party',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PartyRoutingModule { }
