import { Component, OnInit, OnDestroy } from '@angular/core';
import { Supplier } from '../../../@theme/model/supplier-class';
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from '../../../@theme/services/permission.service';
import { Router } from '@angular/router';
import { SupplierService } from '../../../@theme/services/supplier.service';
import { ColDef } from 'ag-grid-community';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import { NbMenuService } from '@nebular/theme';
import { AuthService } from '../../../@theme/services/auth.service';
import { Subscription } from 'rxjs';
import { ViewReqObj } from '../../../@theme/model/user-class';

@Component({
  selector: 'ngx-view-suppliers',
  templateUrl: './view-suppliers.component.html',
  styleUrls: ['./view-suppliers.component.scss']
})
export class ViewSuppliersComponent implements OnInit, OnDestroy {

  columnDefs = [
    { headerName: 'Actions', field: 'entry_id', width: 100 },
    { headerName: 'Supplier Name', field: 'supplier_name', sortable: true, filter: true },
    { headerName: 'Discount %', field: 'discount_percentage', sortable: true, filter: true },
    { headerName: 'GST %', field: 'gst_percentage', sortable: true, filter: true },
    { headerName: 'Payment Terms', field: 'payment_terms', sortable: true, filter: true },
    { headerName: 'Remark', field: 'remark', sortable: true, filter: true },
  ];
  addSupplierPermission = 0;
  rowData: any;
  addSupplierRatePermission = 0;
  supplierList: Supplier[] = [];
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;
  viewAllDataPermission: any = false;
  viewOwnDataPermission: any = false;
  viewGroupDataPermission = false;
  radioSelected: any = 1;
  supplierReqObj = new ViewReqObj();
  constructor(private toasterService: ToastrService, private permissionService: PermissionService,
    private router: Router, private supplierService: SupplierService, private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserPermission = ele.user_permission;
      }
    });
    this.setColumns();

  }
  ngOnInit() {
    if (this.currentUserPermission.length) {
      this.currentUserPermission.forEach(ele => {
        if (ele.form_name === 'Supplier') {
          // this.addUserPermission = ele.can_add;
          this.addSupplierPermission = 1;
          this.viewAllDataPermission = ele.can_view_all;
          this.viewGroupDataPermission = ele.can_view_group;
          this.viewOwnDataPermission = ele.can_view;
        }
        if (ele.form_name === 'Supplier Rate') {
          this.addSupplierRatePermission = 1;
        }
      })
    } this.getSupplierData();
  }

  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'entry_id') {
        column.cellRendererFramework = SupplierRendererComponent;
        column.cellRendererParams = {
          inRouterLink: '/pages/supplier/edit-supplier/',
          action: this
        };
      }
    });
  }

  onAddSupplier() {
    if (this.addSupplierPermission) {
      this.router.navigate(['/pages/supplier/add-supplier']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add supplier. If you want to add supplier ask admin for permission.');

      if (res) {

      } else {

      }
    }
  }

  getSupplierData(value?): any {
    this.supplierReqObj = new ViewReqObj();
    if (value) {
      this.radioSelected = value;
    }
    if (this.viewOwnDataPermission && this.radioSelected == 1) {
      this.supplierReqObj.created_by = this.currentUserId;
    }
    if (this.viewGroupDataPermission && this.radioSelected == 2) {
      this.supplierReqObj.created_by = this.currentUserId;
      this.supplierReqObj.user_head_id = this.currentUser.user_head_id;
    }
    if (this.viewAllDataPermission && this.radioSelected == 3) {
      this.supplierReqObj.created_by = null;
      this.supplierReqObj.user_head_id = null;
    }
    this.supplierService.getAllSupplierData(this.supplierReqObj).subscribe(data => {
      if (!data[0].error) {
        this.rowData = data[0].data;
        this.supplierList = data[0].data;
      } else
        this.toasterService.error(data[0].message)
    });
  }
  onAddRate() {
    if (this.addSupplierRatePermission) {
      this.router.navigate(['/pages/supplier/add-supplier-rate']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add supplier rate. If you want to add supplier rate ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}

@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2"  style="color:#4ca6ff" (click)="editSupplier()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteSupplier()"></i>
  <i class="ft-menu font-medium-1 mr-2" style="color:#4ca6ff" [nbContextMenu]="items" nbContextMenuTrigger="click"></i>`,
  styleUrls: ['./view-suppliers.component.scss']
})

export class SupplierRendererComponent implements AgRendererComponent {
  params: any;
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;
  editSupplierPermission = 0;
  deleteSupplierPermission = 0;
  editSupplierRatePermission = 0;
  addSupplierRatePermission = 0;
  items = [
    { title: 'Add/Edit Supplier Rate', value: '' },
  ];
  constructor(private router: Router, private modalService: NgbModal, private supplierService: SupplierService,
    private toasterService: ToastrService, private permissionService: PermissionService, private menuService: NbMenuService,
    private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserPermission = ele.user_permission;
      }
    });
    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContecxtItemSelection(event.item);
      });
  }

  agInit(params: any): void {
    this.params = params;
    this.items[0].value = this.params.value
    this.currentUserPermission.forEach(ele => {
      if (ele.form_name === 'Supplier') {
        if (this.params.action.radioSelected == 1) {
          this.editSupplierPermission = ele.can_edit;
          this.deleteSupplierPermission = ele.can_delete;
        } else if (this.params.action.radioSelected == 2) {
          this.editSupplierPermission = ele.can_edit_group;
          this.deleteSupplierPermission = ele.can_delete_group;
        } else if (this.params.action.radioSelected == 3) {
          this.editSupplierPermission = ele.can_edit_all;
          this.deleteSupplierPermission = ele.can_delete_all;
        }
      }
      if (ele.form_name === 'Supplier Rate') {
        this.editSupplierRatePermission = 1;
        this.addSupplierRatePermission = 1;
      }
    })
  }
  onContecxtItemSelection(item) {
    if (item.title === 'Add/Edit Supplier Rate') {
      this.onEditRate(item.value);
    }
  }
  onEditRate(id) {
    if (this.editSupplierRatePermission || this.addSupplierRatePermission) {
      this.router.navigate(['/pages/supplier/edit-supplier-rate/' + id]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit supplier rate. If you want to edit supplier rate ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  refresh(): boolean {
    return false;
  }
  editSupplier() {
    if (this.editSupplierPermission) {
      this.router.navigate([this.params.inRouterLink + this.params.value]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit supplier. If you want to edit supplier ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onDeleteSupplier() {
    if (this.deleteSupplierPermission) {
      const dialogRef = this.modalService.open(ConfirmDialogComponent);
      dialogRef.componentInstance.message = 'Are you sure you want to delete supplier ?';
      dialogRef.componentInstance.titleFrom = 'Delete Supplier'
      dialogRef.result.then((result: any) => {
        if (result) {
          const id = this.params.value;
          this.supplierService.deleteSupplierById(id).subscribe(data => {
            if (!data[0].error) {
              this.params.action.getSupplierData();
              this.toasterService.success(data[0].message);
            } else {
              this.toasterService.error(data[0].message);
            }
          });
        }
      });
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete supplier. If you want to delete supplier ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}
