import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { ViewSupplierRateComponent, SupplierRateRendererComponent } from './view-supplier-rate/view-supplier-rate.component';
import { ViewSuppliersComponent, SupplierRendererComponent } from './view-suppliers/view-suppliers.component';
import { AddEditSupplierComponent } from './add-edit-supplier/add-edit-supplier.component';
import { AddEditSupplierRateComponent, CustomRendererSupplierRateComponent } from './add-edit-supplier-rate/add-edit-supplier-rate.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from '../../@theme/theme.module';
import { SupplierRoutingModule } from './supplier-routing.module';

@NgModule({
  declarations: [
    SupplierComponent,
    ViewSupplierRateComponent,
    ViewSuppliersComponent,
    AddEditSupplierComponent,
    AddEditSupplierRateComponent,
    SupplierRateRendererComponent,
    SupplierRendererComponent,
    CustomRendererSupplierRateComponent
  ],
  entryComponents: [
    SupplierRateRendererComponent,
    SupplierRendererComponent,
    CustomRendererSupplierRateComponent
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
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
