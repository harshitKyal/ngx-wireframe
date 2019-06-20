import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditBatchComponent, CustomRendererBatchDataComponent } from './add-edit-batch/add-edit-batch.component';
import { BatchComponent } from './batch.component';
import { BatchRoutingModule } from './batch-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TagInputModule } from 'ngx-chips';
import { ViewBatchComponent, CustomRendererBatchComponent } from './view-batch/view-batch.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule,
    NgbModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    NgSelectModule,
    BatchRoutingModule,
    TagInputModule,
    BatchRoutingModule,
    ThemeModule
  ],
  declarations: [AddEditBatchComponent, BatchComponent, CustomRendererBatchDataComponent, CustomRendererBatchComponent, ViewBatchComponent],
  entryComponents: [CustomRendererBatchDataComponent, CustomRendererBatchComponent]
})

export class BatchModule { }
