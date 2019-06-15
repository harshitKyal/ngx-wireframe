import { Component, OnInit, OnDestroy } from '@angular/core';
import { Shade, ShadeRecord } from '../../../@theme/model/shade-class';
import { Quality } from '../../../@theme/model/quality-class';
import { SupplierItemRecord, Supplier } from '../../../@theme/model/supplier-class';
import { ViewReqObj, User } from '../../../@theme/model/user-class';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../../../@theme/services/supplier.service';
import { QualityService } from '../../../@theme/services/quality.service';
import { ColDef } from 'ag-grid-community';
import { NgForm } from '@angular/forms';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import { ColourStockService } from '../../../@theme/services/colour-stock.service';
import { ColourStock, ColourStockRecord } from '../../../@theme/model/colour-stock-class';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../@theme/services/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-add-edit-colour-stock',
  templateUrl: './add-edit-colour-stock.component.html',
  styleUrls: ['./add-edit-colour-stock.component.scss']
})
export class AddEditColourStockComponent implements OnInit, OnDestroy {


  colourStockModal: ColourStock;
  id: any;
  subBtnName = '';
  topHeader = '';
  viewFlag = false;
  rowData: any;
  colourStockRecord: ColourStockRecord[] = [];
  record: ColourStockRecord;
  supplierItemList: SupplierItemRecord[] = [];
  supplierNameList: Supplier[] = [];
  supplierReqObj = new ViewReqObj();
  columnDefs = [
    { headerName: 'Actions', field: 'index' },
    { headerName: 'Item Name', field: 'item_name' },
    { headerName: 'Qunatity Per Box', field: 'quantity_per_box' },
    { headerName: 'No. of Box', field: 'no_of_box' },
    { headerName: 'Total Quantity', field: 'total_quantity' },
    { headerName: 'Rate', field: 'rate' },
    { headerName: 'Amount', field: 'amount' },

  ];
  currentUserId: any;
  currentUserHeadid: any;
  currentUser$: Subscription;
  currentUser: User;
  currentUserGroupUserIds: any;

  constructor(private toasterService: ToastrService, private route: ActivatedRoute, private supplierService: SupplierService,
    private router: Router, private colourStockService: ColourStockService, private authService: AuthService,
    private datePipe: DatePipe) {
    this.colourStockModal = new ColourStock();
    this.record = new ColourStockRecord();
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserHeadid = ele.user.user_head_id;
        this.currentUserGroupUserIds = ele.user.group_user_ids;
      }
    });
    this.setColumns();
  }
  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  ngOnInit() {
    this.getSupplierNameList();
    // this.getSupplierItemList();
    this.onPageLoad();
  }

  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'index') {
        column.cellRendererFramework = CustomRendererColourRecordComponent;
        column.cellRendererParams = {
          // inRouterLink: '/user/edit-user/',
          action: this
        };
      }
    });
  }

  getSupplierNameList() {
    this.supplierReqObj.current_user_id = this.currentUserId;
    this.supplierReqObj.user_head_id = this.currentUser.user_head_id;
    this.supplierReqObj.group_user_ids = this.currentUserGroupUserIds;
    this.supplierReqObj.view_group = true;
    this.supplierService.getAllSupplierData(this.supplierReqObj).subscribe(data => {
      if (!data[0].error) {
        this.supplierNameList = data[0].data;
      }
    })
  }

  getSupplierItemList(id) {
    this.supplierService.getSupplierRateById(id).subscribe(data => {
      if (!data[0].error) {
        this.supplierItemList = data[0].data.supplier_rate_list;
      }
    })
  }
  onItemSelect(item) {
    const i = this.supplierItemList.findIndex(v => v.entry_id == item);
    this.record.item_id = this.supplierItemList[i].entry_id;
    this.record.item_name = this.supplierItemList[i].item_name;
    this.record.rate = this.supplierItemList[i].gst_rate;
  }

  onSupplierSelect(value) {
    this.getSupplierItemList(value);
  }

  onPageLoad() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      if (this.id) {
        this.subBtnName = 'Update';
        this.topHeader = 'Edit Colour Stock';

      } else {
        this.topHeader = 'Colour Stock View';
        this.viewFlag = true;
      }
      this.colourStockService.getColourStockById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.colourStockModal = data[0].data.colourStock[0];
            this.colourStockModal.bill_date = this.datePipe.transform(this.colourStockModal.bill_date, "yyyy-MM-dd");
            this.colourStockModal.chl_date = this.datePipe.transform(this.colourStockModal.chl_date, "yyyy-MM-dd");
            this.colourStockRecord = data[0].data.colourStock_record;
            let i = this.supplierNameList.findIndex(v => v.entry_id == this.colourStockModal.supplier_id);
            this.colourStockModal.supplier_name = this.supplierNameList[i].supplier_name;
            this.getSupplierItemList(this.colourStockModal.supplier_id);
            this.colourStockRecord.forEach((ele, index) => {
              ele.index = index + 1;
              let i = this.supplierItemList.findIndex(v => v.entry_id == ele.item_id);
              if (i > -1) {
                ele.rate = this.supplierItemList[i].gst_rate;
                ele.item_name = this.supplierItemList[i].item_name;
              }
            })
            this.rowData = [...this.colourStockRecord]
            this.colourStockModal.colour_stock_record = this.colourStockRecord
          } else {
            this.toasterService.error(data.message);
          }
        }, error => {
          this.toasterService.error('Server Error');
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add Colour Stock';
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
      return false;
    }
    return true;
  }
  onAddRecord(form: NgForm) {
    let flag = 0;
    let j = 1;
    if (this.colourStockRecord.length) {
      this.record.index = j;
    } else {
      this.record.index = this.colourStockRecord.length + 1;
    }
    this.colourStockRecord.forEach(ele => {
      if (ele.item_name == this.record.item_name) {
        ele = this.record
        flag = 1;
      }
    });
    if (!flag) {
      this.colourStockRecord.push(this.record);
    }
    this.rowData = [...this.colourStockRecord];
    this.record = new ColourStockRecord();
    form.resetForm();
  }

  onEditRecord(data) {
    let i = this.colourStockRecord.findIndex(v => v.index == data);
    this.record = this.colourStockRecord[i];
  }

  deleteRecord(data) {
    let i = this.colourStockRecord.findIndex(v => v.index == data);
    this.colourStockRecord.splice(i, 1);
    this.rowData = [...this.colourStockRecord]
  }

  onQuantityChange(value) {
    if (value && this.record.no_of_box && this.record.quantity_per_box) {
      this.record.total_quantity = this.record.no_of_box * this.record.quantity_per_box;
    }
  }

  onRateChange(value) {
    if (value && this.record.total_quantity) {
      this.record.amount = this.record.rate * this.record.total_quantity;
    }
  }

  onCustomFormSubmit(form: NgForm) {
    let i = this.supplierNameList.findIndex(v => v.entry_id == this.colourStockModal.supplier_id);
    this.colourStockModal.supplier_name = this.supplierNameList[i].supplier_name;
    this.colourStockModal.colour_stock_record = this.colourStockRecord;
    console.log('shade', this.colourStockModal);
    // for update
    if (this.id) {
      this.colourStockModal.updated_by = this.currentUserId;

      this.colourStockService.updateColourStock(this.colourStockModal).subscribe(data => {
        console.log(data)
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/colour-stock/view-colour-stock-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
      this.colourStockModal.created_by = this.currentUserId;
      this.colourStockModal.user_head_id = this.currentUserHeadid;
      console.log(this.colourStockModal)
      this.colourStockService.addColourStock(this.colourStockModal).subscribe(data => {
        data = data[0]
        if (!data.error) {
          this.toasterService.success(data.message);
          form.resetForm();
          this.router.navigate(['/pages/colour-stock/view-colour-stock-list']);
        } else {
          this.toasterService.error(data.message);
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
  styleUrls: ['./add-edit-colour-stock.component.scss']
})

export class CustomRendererColourRecordComponent implements AgRendererComponent {
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
