import { Component, OnInit } from '@angular/core';
import { Supplier, SupplierRate, SupplierRateRecord } from '../../../@theme/model/supplier-class';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../../../@theme/services/supplier.service';
import { NgForm } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import { ViewReqObj } from '../../../@theme/model/user-class';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../@theme/services/auth.service';
import { CustomRendererStockRecordComponent } from '../../fabric-in/add-edit-fabric-in/add-edit-fabric-in.component';

@Component({
  selector: 'ngx-add-edit-supplier-rate',
  templateUrl: './add-edit-supplier-rate.component.html',
  styleUrls: ['./add-edit-supplier-rate.component.scss']
})
export class AddEditSupplierRateComponent implements OnInit {

  supplierRateRecord: SupplierRateRecord;
  supplierRateList: SupplierRateRecord[] = [];
  supplierModal: SupplierRate;
  supplierList: Supplier[] = [];
  selectedSupplier: Supplier;
  id: any;
  subBtnName = '';
  topHeader = '';
  columnDefs = [
    { headerName: 'Actions', field: 'index' },
    { headerName: 'Item Name', field: 'item_name' },
    { headerName: 'Rate', field: 'rate' },
    { headerName: 'Discount Rate', field: 'discount_rate' },
    { headerName: 'GST Rate', field: 'gst_rate' },
  ];
  rowData: any;
  supplierReqObj = new ViewReqObj();
  currentUserId: any;
  currentUser$: Subscription;
  currentUser;
  currentUserGroupUserIds: any;

  constructor(private toasterService: ToastrService, private route: ActivatedRoute, private authService: AuthService,
    private router: Router, private supplierService: SupplierService) {
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserGroupUserIds = ele.user.group_user_ids;
      }
    });
    this.supplierRateRecord = new SupplierRateRecord();
    this.supplierModal = new SupplierRate();
    this.selectedSupplier = new Supplier();
  }

  ngOnInit() {
    this.getSupplierList();
    this.onPageLoad();
    this.setColumns();
  }
  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'index') {
        column.cellRendererFramework = CustomRendererStockRecordComponent;
        column.cellRendererParams = {
          action: this
        };
      }
    });
  }
  onSupplierSelect(value) {
    this.selectedSupplier = this.supplierList[this.supplierList.findIndex(v => v.entry_id == value)];
  }
  getSupplierList() {
    this.supplierReqObj = new ViewReqObj();
    this.supplierReqObj.current_user_id = this.currentUserId;
    this.supplierReqObj.user_head_id = this.currentUser.user_head_id;
    this.supplierReqObj.group_user_ids = this.currentUserGroupUserIds;
    this.supplierReqObj.view_group = true;
    this.supplierService.getAllSupplierData(this.supplierReqObj).subscribe(
      data => {
        if (!data[0].error) {
          this.supplierList = data[0].data;
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
      return false;
    }
    return true;
  }

  onPageLoad() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.subBtnName = 'Update';
      this.topHeader = 'Add/Edit Supplier Rate';
      this.supplierService.getSupplierRateById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.supplierModal.supplier_control_id = data[0].data.supplier_control_id;
            this.onSupplierSelect(this.supplierModal.supplier_control_id);
            this.supplierRateList = data[0].data.supplier_rate_list;
            this.supplierRateList.forEach((ele, index) => {
              ele.index = index + 1;
              ele.discount_rate = Math.floor(Number(ele.rate) - Math.floor((this.selectedSupplier.discount_percentage * ele.rate) / 100))
              ele.gst_rate = Math.floor(Number(ele.discount_rate) + Math.floor((this.selectedSupplier.gst_percentage * ele.discount_rate) / 100))
            })
            this.rowData = [...this.supplierRateList]
            this.supplierModal.supplier_rate_list = this.supplierRateList;
          } else {
            this.toasterService.error(data[0].message);
          }
        }, error => {
          this.toasterService.error(error);
        });
    }
    else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add Supplier Rate';
    }
  }

  getRateCalculation(value) {
    if (this.selectedSupplier.entry_id != null || this.selectedSupplier.entry_id != undefined) {
      this.supplierRateRecord.discount_rate = Math.floor(Number(value) - Math.floor((this.selectedSupplier.discount_percentage * value) / 100))
      this.supplierRateRecord.gst_rate = Math.floor(Number(this.supplierRateRecord.discount_rate) + Math.floor((this.selectedSupplier.gst_percentage * this.supplierRateRecord.discount_rate) / 100))
    }
  }

  onAddItem(form: NgForm) {
    let flag = 0;
    let j = 1;
    if (this.supplierRateList.length) {
      this.supplierRateRecord.index = j;
    } else if (this.supplierRateRecord.index == undefined) {
      this.supplierRateRecord.index = this.supplierRateList.length + 1;
    }
    this.supplierRateList.forEach(ele => {
      if (ele.item_name == this.supplierRateRecord.item_name) {
        ele = this.supplierRateRecord
        flag = 1;
      }
    });
    if (!flag) {
      this.supplierRateList.push(this.supplierRateRecord);
    }
    this.rowData = [...this.supplierRateList];
    this.supplierRateRecord = new SupplierRateRecord();
    form.resetForm();
  }

  onEditRecord(data) {
    let i = this.supplierRateList.findIndex(v => v.index == data);
    this.supplierRateRecord = this.supplierRateList[i];
  }

  deleteRecord(data) {
    let i = this.supplierRateList.findIndex(v => v.index == data);
    this.supplierRateList.splice(i, 1);
    this.rowData = [...this.supplierRateList]
  }
  onCustomFormSubmit(form: NgForm) {
    this.supplierModal.supplier_rate_list = this.supplierRateList;
    if (this.id) {
      this.supplierModal.supplier_rate_list.forEach(ele => {
        if (ele.entry_id) {
          ele.updated_by = this.currentUserId;
        } else {
          ele.created_by = this.currentUserId;
        }
      })
      this.supplierService.updateSupplierRate(this.supplierModal).subscribe(data => {
        if (!data[0].error) {
          this.toasterService.success("Updated Successfully");
          form.resetForm();
          this.router.navigate(['/pages/supplier/view-supplier-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
      this.supplierModal.supplier_rate_list.forEach(ele => {
        ele.created_by = this.currentUserId;
      })
      this.supplierService.addSupplierRate(this.supplierModal).subscribe(data => {
        // data = data[0]
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/supplier/view-supplier-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    }
  }
}
@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editRecord()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteRecord()"></i>`,
  styleUrls: ['./add-edit-supplier-rate.component.scss']
})

export class CustomRendererSupplierRateComponent implements AgRendererComponent {
  params: any;

  constructor(private _modalService: NgbModal, private toasterService: ToastrService) {
  }
  agInit(params: any): void {
    this.params = params;
  }
  refresh(): boolean {
    return false;
  }

  editRecord() {
    this.params.action.onEditRecord(this.params.value)
  }
  onDeleteRecord() {
    const modalRef = this._modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.titleFrom = 'Delete record ';
    modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
    modalRef.result
      .then((result) => {
        if (result) {
          this.params.action.deleteRecord(this.params.value)
        }
      });
  }
}


