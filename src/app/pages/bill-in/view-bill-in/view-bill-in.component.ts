import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bill } from '../../../@theme/model/bill-class';
import { BillInService } from '../../../@theme/services/bill-in.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from '../../../@theme/services/permission.service';
import { Papa } from 'ngx-papaparse';
import { ColDef } from 'ag-grid-community';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import * as XLSX from 'xlsx';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../@theme/services/auth.service';

@Component({
  selector: 'ngx-view-bill-in',
  templateUrl: './view-bill-in.component.html',
  styleUrls: ['./view-bill-in.component.scss']
})
export class ViewBillInComponent implements OnInit, OnDestroy {


  billList: Bill[] = [];
  rowData;
  gridApi;
  gridColumnApi;
  addBillPermission = 1;
  columnDefs = [
    { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
    { headerName: 'Stock Id', field: 'stock_id', sortable: true, filter: true, width: 100 },
    { headerName: 'Stock In Type', field: 'stock_in_type', sortable: true, filter: true, width: 100 },
    { headerName: 'Party Name', field: 'party_name', sortable: true, filter: true },
    { headerName: 'Bill No.', field: 'bill_no', sortable: true, filter: true, width: 100 },
    { headerName: 'Bill Date', field: 'bill_date', sortable: true, filter: true },
    { headerName: 'Chl No.', field: 'chl_no', sortable: true, filter: true, width: 100 },
    { headerName: 'Chl Date', field: 'chl_date', sortable: true, filter: true },
    { headerName: 'Batch', field: 'batch_no', sortable: true, filter: true, width: 90 },
    { headerName: 'Record Count', field: 'record_count', sortable: true, filter: true, width: 90 },
    // { headerName: 'GSTIN', field: 'GSTIN', sortable: true, filter: true },
  ];
  columnExportDefs = [
    'stock_id', 'stock_in_type', 'party_name', 'bill_no', 'bill_date', 'chl_no', 'chl_date', 'batch',];
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;

  constructor(private billService: BillInService, private router: Router, private tosterService: ToastrService
    , private permissionService: PermissionService, private papa: Papa, private authService: AuthService) {
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
        if (ele.form_name === 'Bill') {
          // this.addUserPermission = ele.can_add;
          this.addBillPermission = 1;
        }
      })
    }
    this.getBillData();
  }
  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  getBillData() {
    this.billService.getAllBills().subscribe(data => {
      if (!data[0].error) {
        this.billList = data[0].data;
        this.rowData = data[0].data;
      } else {
        this.tosterService.error(data[0].message);
      }
    });
  }
  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'entry_id') {
        column.cellRendererFramework = CustomRendererBillInComponent;
        column.cellRendererParams = {
          inRouterLink: '/pages/bill/edit-bill/',
          inViewLink: '/pages/bill/view-bill/',
          action: this
        };
      }
    });
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.getUserList(this.currentUserId);
  }
  onAddBill() {
    if (this.addBillPermission) {
      this.router.navigate(['/pages/bill/add-bill']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add bill. If you want to add bill ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onExport() {
    var params = {
      columnKeys: this.columnExportDefs
    };
    var data = this.gridApi.getDataAsCsv(params);
    this.papa.parse(data, {
      complete: (result) => {
        this.exportExcel(result.data);
      }
    });
  }

  exportExcel(data) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, 'my_file.xls', { bookType: 'xls', type: 'buffer' });
  }
}

@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editBill()"></i>
  <i class="ft-info font-medium-1 mr-2" style="color:#4ca6ff" (click)="viewBill()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteBill()"></i>`,
  styleUrls: ['./view-bill-in.component.scss']
})

export class CustomRendererBillInComponent implements AgRendererComponent , OnDestroy{
  params: any;
  editBillPermission = 1;
  deleteBillPermission = 1;
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;

  constructor(private router: Router, private _modalService: NgbModal, private billService: BillInService,
    private toasterService: ToastrService, private permissionService: PermissionService, private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserPermission = ele.user_permission;
      }
    });
  }
  agInit(params: any): void {
    this.params = params;
    this.currentUserPermission.forEach(ele => {
      if (ele.form_name === 'Bill') {
        // this.editBillPermission = ele.can_edit;
        // this.deleteBillPermission = ele.can_delete;
        this.editBillPermission = 1;
        this.deleteBillPermission = 1;
      }
    })
    // this.editPartyPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_edit_user);
    // this.deletePartyPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_delete_user);
  }
  ngOnDestroy(){
    this.currentUser$.unsubscribe();
  }
  refresh(): boolean {
    return false;
  }

  viewBill() {
    //  this.router.navigate([this.params.inViewLink + 0]);
  }

  editBill() {
    if (this.editBillPermission) {
      this.router.navigate([this.params.inRouterLink + this.params.value]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit bill. If you want to edit bill ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onDeleteBill() {
    if (this.deleteBillPermission) {
      const modalRef = this._modalService.open(ConfirmDialogComponent);
      modalRef.componentInstance.titleFrom = 'Delete Bill ';
      modalRef.componentInstance.message = 'Are you sure you want to delete this bill?';
      modalRef.result
        .then((result) => {
          if (result) {
            const id = this.params.value;
            this.billService.deleteBillById(id).subscribe(data => {
              if (!data[0].error) {
                this.params.action.getBillData();
                this.toasterService.success(data[0].message);
              } else {
                this.toasterService.error(data[0].message);
              }
            });
          }
        });
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete bill. If you want to delete bill ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}


