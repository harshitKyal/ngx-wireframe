import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UserComponent } from './user.component';
import { TreeviewModule } from 'ngx-treeview';
import { ViewUserComponent, CustomRendererUserComponent } from './view-user/view-user.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule,
    NgbModule,
    Ng2SmartTableModule,
    NgSelectModule,
    ThemeModule,
    UserRoutingModule,
    TreeviewModule.forRoot(),
  ],
  declarations: [AddEditUserComponent, UserComponent, CustomRendererUserComponent, ViewUserComponent],
  entryComponents: [CustomRendererUserComponent]
})
export class UserModule { }
