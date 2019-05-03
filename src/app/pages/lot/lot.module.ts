import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditLotComponent, CustomRendererLotDataComponent } from './add-edit-lot/add-edit-lot.component';
import { LotComponent, CustomRendererLotComponent } from './lot.component';
import { LotRoutingModule } from './lot-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule,
    NgbModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    NgSelectModule,
    LotRoutingModule,
    TagInputModule
  ],
  declarations: [AddEditLotComponent, LotComponent, CustomRendererLotDataComponent, CustomRendererLotComponent],
  entryComponents: [CustomRendererLotDataComponent, CustomRendererLotComponent]
})

export class LotModule { }
