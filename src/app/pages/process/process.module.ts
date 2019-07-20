import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProcessComponent, CustomRendererProcessComponent } from './view-process/view-process.component';
import { ProcessComponent } from './process.component';
import { AddEditProcessComponent, CustomRendererScouringRecordComponent, CustomRendererColdWashRecordComponent, CustomRendererDyingRecordComponent, CustomRendererRCRecordComponent } from './add-edit-process/add-edit-process.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from '../../@theme/theme.module';
import { ProcessRoutingModule } from './process-routing.module';
import { DynamicProcessComponent } from './dynamic-process/dynamic-process.component';
import { AddStepComponent } from './add-step/add-step.component';
import { AddEditFunctionComponent } from './add-edit-function/add-edit-function.component';

@NgModule({
  declarations: [
    ProcessComponent,
    AddEditProcessComponent,
    ViewProcessComponent,
    CustomRendererProcessComponent,
    CustomRendererScouringRecordComponent,
    CustomRendererColdWashRecordComponent,
    CustomRendererDyingRecordComponent,
    CustomRendererRCRecordComponent,
    DynamicProcessComponent,
    AddStepComponent,
    AddEditFunctionComponent
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
    ProcessRoutingModule
  ],
  entryComponents: [
    AddStepComponent,
    CustomRendererProcessComponent,
    CustomRendererScouringRecordComponent,
    CustomRendererColdWashRecordComponent,
    CustomRendererDyingRecordComponent,
    CustomRendererRCRecordComponent,
    AddEditFunctionComponent
  ]
})
export class ProcessModule { }
