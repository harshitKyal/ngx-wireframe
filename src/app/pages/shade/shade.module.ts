import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShadeComponent } from './shade.component';
import { AddEditShadeComponent } from './add-edit-shade/add-edit-shade.component';
import { ViewShadeListComponent } from './view-shade-list/view-shade-list.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from '../../@theme/theme.module';
import { ShadeRoutingModule } from './shade-routing.module';

@NgModule({
  declarations: [ShadeComponent, AddEditShadeComponent, ViewShadeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule,
    NgbModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    NgSelectModule,
    ThemeModule,
    ShadeRoutingModule
  ]
})
export class ShadeModule { }
