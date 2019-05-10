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

@Component({
  selector: 'ngx-view-supplier-rate',
  templateUrl: './view-supplier-rate.component.html',
  styleUrls: ['./view-supplier-rate.component.scss']
})
export class ViewSupplierRateComponent implements OnInit {
  columnDefs = [
    { headerName: 'Actions', field: 'entry_id', width: 100 },
    { headerName: 'Supplier Name', field: 'supplier_name', sortable: true, filter: true },
    { headerName: 'Discount %', field: 'discount_percentage', sortable: true, filter: true },
    { headerName: 'GST %', field: 'gst_percentage', sortable: true, filter: true },
    { headerName: 'Payment Terms', field: 'payment_terms', sortable: true, filter: true },
    { headerName: 'Remark', field: 'remark', sortable: true, filter: true },
  ];
  addSupplierRatePermission = 0;
  rowData: any;

  supplierRateList: Supplier[] = [];

  constructor(private toasterService: ToastrService, private permissionService: PermissionService,
    private router: Router, private supplierService: SupplierService) {
    this.setColumns();

  }
  ngOnInit() {
    this.addSupplierRatePermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_add_quality);
    this.getSupplierRateData();
  }

  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'entry_id') {
        column.cellRendererFramework = SupplierRateRendererComponent;
        column.cellRendererParams = {
          inRouterLink: '/pages/supplier/edit-supplier-rate/',
          action: this
        };
      }
    });
  }

  onAddSupplierRate() {
    if (this.addSupplierRatePermission) {
      this.router.navigate(['/pages/supplier/add-supplier-rate']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add supplier rate. If you want to add supplier rate ask admin for permission.');

      if (res) {

      } else {

      }
    }
  }

  getSupplierRateData(): any {
    this.supplierService.getAllSupplierRateData().subscribe(data => {
      if (!data[0].error) {
        this.rowData = data[0].data;
        this.supplierRateList = data[0].data;
      } else
        this.toasterService.error(data[0].message)
    });
  }
}

@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2"  style="color:#4ca6ff" (click)="editSupplierRate()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteSupplierRate()"></i>`,
  styleUrls: ['./view-supplier-rate.component.scss']
})

export class SupplierRateRendererComponent implements AgRendererComponent {
  params: any;
  editSupplierRatePermission = 0;
  deleteSupplierRatePermission = 0;

  constructor(private router: Router, private modalService: NgbModal, private supplierService: SupplierService,
    private toasterService: ToastrService, private permissionService: PermissionService) {
  }

  agInit(params: any): void {
    this.params = params;
    this.editSupplierRatePermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_edit_quality);
    this.deleteSupplierRatePermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_delete_quality);
  }
  refresh(): boolean {
    return false;
  }
  editSupplierRate() {
    if (this.editSupplierRatePermission) {
      this.router.navigate([this.params.inRouterLink + this.params.value]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit supplier. If you want to edit supplier rate ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onDeleteSupplierRate() {
    if (this.deleteSupplierRatePermission) {
      const dialogRef = this.modalService.open(ConfirmDialogComponent);
      dialogRef.componentInstance.message = 'Are you sure you want to delete supplier rate ?';
      dialogRef.componentInstance.titleFrom = 'Delete Supplier Rate'
      dialogRef.result.then((result: any) => {
        if (result) {
          const id = this.params.value;
          this.supplierService.deleteSupplierRateById(id).subscribe(data => {
            if (!data[0].error) {
              this.params.action.getSupplierRateData();
              this.toasterService.success(data[0].message);
            } else {
              this.toasterService.error(data[0].message);
            }
          });
        }
      });
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete supplier rate. If you want to delete supplier rate ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}