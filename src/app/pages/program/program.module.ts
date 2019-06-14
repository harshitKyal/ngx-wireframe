import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramComponent } from './program.component';
import { AddEditProgramComponent, CustomRendererProgramRecordComponent } from './add-edit-program/add-edit-program.component';
import { ViewProgramListComponent, CustomRendererProgramComponent } from './view-program-list/view-program-list.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from '../../@theme/theme.module';
import { ProgramRoutingModule } from './program-routing.module';

@NgModule({
  declarations: [
    ProgramComponent,
    AddEditProgramComponent,
    ViewProgramListComponent,
    CustomRendererProgramRecordComponent,
    CustomRendererProgramComponent
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
    ProgramRoutingModule
  ],
  entryComponents: [
    CustomRendererProgramRecordComponent,
    CustomRendererProgramComponent
  ]
})
export class ProgramModule { }
