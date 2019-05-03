import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditBillInComponent, CustomRendererStockRecordComponent } from './add-edit-bill-in/add-edit-bill-in.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { BillInComponent, CustomRendererBillInComponent } from './bill-in.component';
import { BillInRoutingModule } from './bill-in-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule,
    NgbModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    NgSelectModule,
    BillInRoutingModule
  ],
  declarations: [AddEditBillInComponent, BillInComponent, CustomRendererBillInComponent, CustomRendererStockRecordComponent],
  entryComponents: [CustomRendererBillInComponent, CustomRendererStockRecordComponent]
})
export class BillInModule { }
