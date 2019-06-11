import { NgModule } from '@angular/core';
import { ColourStockComponent } from './colour-stock.component';
import { ViewColourStockComponent } from './view-colour-stock/view-colour-stock.component';
import { AddEditColourStockComponent } from './add-edit-colour-stock/add-edit-colour-stock.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ColourStockComponent,
    children: [
      {
        path: 'view-colour-stock-list',
        component: ViewColourStockComponent
      },
      {
        path: 'add-colour-stock',
        component: AddEditColourStockComponent,
      },
      {
        path: 'edit-colour-stock/:id',
        component: AddEditColourStockComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ColourStockRoutingModule { }
