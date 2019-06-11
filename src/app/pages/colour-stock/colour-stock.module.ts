import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColourStockComponent } from './colour-stock.component';
import { ViewColourStockComponent, CustomRendererColourStockComponent, CustomRendererIssueNonIssueColourStockComponent } from './view-colour-stock/view-colour-stock.component';
import { AddEditColourStockComponent, CustomRendererColourRecordComponent } from './add-edit-colour-stock/add-edit-colour-stock.component';
import { ColourStockRoutingModule } from './colour-stock-routing.module';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [
    ColourStockComponent,
    ViewColourStockComponent,
    AddEditColourStockComponent,
    CustomRendererColourStockComponent,
    CustomRendererIssueNonIssueColourStockComponent,
    CustomRendererColourRecordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule,
    NgbModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    NgSelectModule,
    ThemeModule,
    ColourStockRoutingModule
  ],
  entryComponents: [
    CustomRendererColourStockComponent,
    CustomRendererIssueNonIssueColourStockComponent,
    CustomRendererColourRecordComponent
  ]
})
export class ColourStockModule { }
