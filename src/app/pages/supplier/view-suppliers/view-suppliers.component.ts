import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'ngx-view-suppliers',
  templateUrl: './view-suppliers.component.html',
  styleUrls: ['./view-suppliers.component.scss']
})
export class ViewSuppliersComponent implements OnInit {

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

  supplierList: Supplier[] = [];

  constructor(private toasterService: ToastrService, private permissionService: PermissionService,
    private router: Router, private supplierService: SupplierService) {
    this.setColumns();

  }
  ngOnInit() {
    this.addSupplierPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_add_quality);
    this.getSupplierData();
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

  getSupplierData(): any {
    this.supplierService.getAllSupplierData().subscribe(data => {
      if (!data[0].error) {
        this.rowData = data[0].data;
        this.supplierList = data[0].data;
      } else
        this.toasterService.error(data[0].message)
    });
  }
  onAddRate() {
    this.router.navigate(['/pages/supplier/add-supplier-rate']);
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
  editSupplierPermission = 0;
  deleteSupplierPermission = 0;
  items = [
    // { title: 'Add Supplier Rate', value: '' },
    { title: 'Add/Edit Supplier Rate', value: '' },
  ];
  constructor(private router: Router, private modalService: NgbModal, private supplierService: SupplierService,
    private toasterService: ToastrService, private permissionService: PermissionService, private menuService: NbMenuService, ) {
    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContecxtItemSelection(event.item);
      });
  }

  agInit(params: any): void {
    this.params = params;
    this.items[0].value = this.params.value
    this.editSupplierPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_edit_quality);
    this.deleteSupplierPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_delete_quality);
  }
  onContecxtItemSelection(item) {
    // if (item.title === 'Add Supplier Rate') {
    //   this.onAddRate();
    // } else 
    if (item.title === 'Add/Edit Supplier Rate') {
      this.onEditRate(item.value);
    }
  }
  onEditRate(id) {
    this.router.navigate(['/pages/supplier/edit-supplier-rate/' + id]);
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
