import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from '../../@theme/theme.module';
import { ProcessPlanningComponent } from './process-planning.component';
import { ViewProcessPlanningComponent, CustomRendererProcessPlanningComponent } from './view-process-planning/view-process-planning.component';
import { AddEditProcessPlanningComponent } from './add-edit-process-planning/add-edit-process-planning.component';
import { ProcessPlanningRoutingModule } from './process-planning-routing.module';

@NgModule({
  declarations: [
    ProcessPlanningComponent,
    ViewProcessPlanningComponent,
    AddEditProcessPlanningComponent,
    CustomRendererProcessPlanningComponent,
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
    ProcessPlanningRoutingModule
  ],
  entryComponents: [
    CustomRendererProcessPlanningComponent,
  ]
})
export class ProcessPlanningModule { }
