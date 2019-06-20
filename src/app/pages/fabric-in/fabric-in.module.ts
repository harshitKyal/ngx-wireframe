import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from '../../@theme/theme.module';
import { FabricInRoutingModule } from './fabric-in-routing.module';
import { AddEditFabricInComponent, CustomRendererStockRecordComponent } from './add-edit-fabric-in/add-edit-fabric-in.component';
import { FabricInComponent } from './fabric-in.component';
import { CustomRendererFabricInComponent, ViewFabricInComponent } from './view-fabric-in/view-fabric-in.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule,
    NgbModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    NgSelectModule,
    FabricInRoutingModule,
    ThemeModule
  ],
  declarations: [AddEditFabricInComponent, FabricInComponent, CustomRendererFabricInComponent, CustomRendererStockRecordComponent, ViewFabricInComponent],
  entryComponents: [CustomRendererFabricInComponent, CustomRendererStockRecordComponent]
})
export class FabricInModule { }
