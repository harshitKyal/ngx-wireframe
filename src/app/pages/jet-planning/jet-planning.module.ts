import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JetPlanningRoutingModule } from './jet-planning-routing.module';
import { JetPlanningComponent } from './jet-planning.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [JetPlanningComponent],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule,
    NgbModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    NgSelectModule,
    ThemeModule,
    JetPlanningRoutingModule
  ]
})
export class JetPlanningModule { }
