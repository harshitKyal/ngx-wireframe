import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditLotComponent, CustomRendererLotDataComponent } from './add-edit-lot/add-edit-lot.component';
import { LotComponent } from './lot.component';
import { LotRoutingModule } from './lot-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TagInputModule } from 'ngx-chips';
import { ViewLotComponent, CustomRendererLotComponent } from './view-lot/view-lot.component';
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
    LotRoutingModule,
    TagInputModule,
    LotRoutingModule,
    ThemeModule
  ],
  declarations: [AddEditLotComponent, LotComponent, CustomRendererLotDataComponent, CustomRendererLotComponent, ViewLotComponent],
  entryComponents: [CustomRendererLotDataComponent, CustomRendererLotComponent]
})

export class LotModule { }
