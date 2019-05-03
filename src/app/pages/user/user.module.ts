import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UserComponent, CustomRendererUserComponent } from './user.component';
import { TreeviewModule } from 'ngx-treeview';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    AgGridModule,
    NgbModule,
    TreeviewModule.forRoot(),
    Ng2SmartTableModule
  ],
  declarations: [AddEditUserComponent, UserComponent,CustomRendererUserComponent],
  entryComponents : [CustomRendererUserComponent]
})
export class UserModule { }
