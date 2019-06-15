
import { Component, OnInit, OnDestroy } from '@angular/core';
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
import { ViewReqObj } from '../../../@theme/model/user-class';
import { ColourStock } from '../../../@theme/model/colour-stock-class';
import { ColourStockService } from '../../../@theme/services/colour-stock.service';

@Component({
  selector: 'ngx-view-colour-stock',
  templateUrl: './view-colour-stock.component.html',
  styleUrls: ['./view-colour-stock.component.scss']
})
export class ViewColourStockComponent implements OnInit {

  colourStockList: ColourStock[] = [];
  rowData;
  gridApi;
  gridColumnApi;
  addColourStockPermission = 1;
  columnDefs = [
    { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
    { headerName: 'Supplier Name', field: 'supplier_name', sortable: true, filter: true },
    { headerName: 'Bill No.', field: 'bill_no', sortable: true, filter: true },
    { headerName: 'Bill Date', field: 'bill_date', sortable: true, filter: true },
    { headerName: 'Chl No.', field: 'chl_no', sortable: true, filter: true },
    { headerName: 'Chl Date', field: 'chl_date', sortable: true, filter: true },
    { headerName: 'Remark', field: 'remark', sortable: true, filter: true },
    { headerName: 'Bill Amount', field: 'bill_amount', sortable: true, filter: true },
  ];

  columnDefsForIssuedNonIssued = [
    { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
    { headerName: 'Supplier Name', field: 'supplier_name', sortable: true, filter: true },
    { headerName: 'Bill No.', field: 'bill_no', sortable: true, filter: true },
    { headerName: 'Bill Date', field: 'bill_date', sortable: true, filter: true },
    { headerName: 'Chl No.', field: 'chl_no', sortable: true, filter: true },
    { headerName: 'Chl Date', field: 'chl_date', sortable: true, filter: true },
    { headerName: 'Item Name', field: 'item_name', sortable: true, filter: true },
    { headerName: 'Quantity', field: 'quantity', sortable: true, filter: true },
    { headerName: 'Rate', field: 'rate', sortable: true, filter: true },
    { headerName: 'Amount', field: 'amount', sortable: true, filter: true },
  ];

  columnExportDefs = [
    'supplier_name', 'bill_no', 'bill_date', 'chl_no', 'chl_date', 'remark', 'bill_amount'];
  columnExportIssueNonIssueDefs = [
    'supplier_name', 'bill_no', 'bill_date', 'chl_no', 'chl_date', 'item_name', 'quantity', 'rate', 'amount'];

  rowIssueNonIssueData;
  gridIssueNonIssueApi;
  gridColumnIssueNonIssueApi;
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;
  currentUserGroupUserIds : any;
  viewAllDataPermission: any = false;
  viewOwnDataPermission: any = false;
  viewGroupDataPermission = false;
  radioSelected: any = 1;
  colourStockReqObj = new ViewReqObj();
  constructor(private colourStockService: ColourStockService, private router: Router, private tosterService: ToastrService
    , private permissionService: PermissionService, private papa: Papa, private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserPermission = ele.user_permission;
        this.currentUserGroupUserIds = ele.user.group_user_ids;
      }
    });
    this.setColumns();
  }


  ngOnInit() {
    if (this.currentUserPermission.length) {
      this.currentUserPermission.forEach(ele => {
        if (ele.form_name === 'Colour Stock') {
          // this.addUserPermission = ele.can_add;
          this.addColourStockPermission = 1;
          
        }
      })
    }
    this.getColourStockData();
  }
  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  onradioChange(value) {
    this.radioSelected = value;
    if (value == 1) {
      this.getColourStockData();
    } else {
      this.getIssuedNonIssuedData(value);
    }
  }

  getIssuedNonIssuedData(value) {
    this.rowIssueNonIssueData = this.colourStockList;
  }

  getColourStockData() {
    this.colourStockReqObj = new ViewReqObj();
    
    this.colourStockService.getAllColourStock(this.colourStockReqObj).subscribe(data => {
      if (!data[0].error) {
        this.colourStockList = data[0].data;
        this.rowData = data[0].data;
      } else {
        this.tosterService.error(data[0].message);
      }
    });
  }
  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'entry_id') {
        column.cellRendererFramework = CustomRendererColourStockComponent;
        column.cellRendererParams = {
          inRouterLink: '/pages/colour-stock/edit-colour-stock/',
          inViewLink: '/pages/colour-stock/view-colour-stock/',
          action: this
        };
      }
    });
    this.columnDefsForIssuedNonIssued.forEach((column: ColDef) => {
      if (column.field === 'entry_id') {
        column.cellRendererFramework = CustomRendererIssueNonIssueColourStockComponent;
        column.cellRendererParams = {
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
  onIssueNonIssueGridReady(params) {
    this.gridIssueNonIssueApi = params.api;
    this.gridColumnIssueNonIssueApi = params.columnApi;
    // this.getUserList(this.currentUserId);
  }
  onAddColourStock() {
    if (this.addColourStockPermission) {
      this.router.navigate(['/pages/colour-stock/add-colour-stock']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add Colour Stock. If you want to add Colour Stock ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onExport() {
    var params;
    if (this.radioSelected == 1) {
      params = {
        columnKeys: this.columnExportDefs
      };
    } else {
      params = {
        columnKeys: this.columnExportIssueNonIssueDefs
      };
    }
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
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editColourStock()"></i>
  <i class="ft-info font-medium-1 mr-2" style="color:#4ca6ff" (click)="viewColourStock()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteColourStock()"></i>`,
  styleUrls: ['./view-colour-stock.component.scss']
})

export class CustomRendererColourStockComponent implements AgRendererComponent, OnDestroy {
  params: any;
  editColourStockPermission = 1;
  deleteColourStockPermission = 1;
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;

  constructor(private router: Router, private _modalService: NgbModal, private colourStockService: ColourStockService,
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
      if (ele.form_name === 'ColourStock') {
        if (this.params.action.radioSelected == 1) {
          this.editColourStockPermission = ele.can_edit;
          this.deleteColourStockPermission = ele.can_delete;
        } else if (this.params.action.radioSelected == 2) {
          this.editColourStockPermission = ele.can_edit_group;
          this.deleteColourStockPermission = ele.can_delete_group;
        } else if (this.params.action.radioSelected == 3) {
          this.editColourStockPermission = ele.can_edit_all;
          this.deleteColourStockPermission = ele.can_delete_all;
        }
      }
    })
  }
  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  refresh(): boolean {
    return false;
  }

  viewColourStock() {
  }

  editColourStock() {
    if (this.editColourStockPermission) {
      this.router.navigate([this.params.inRouterLink + this.params.value]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit colourStock. If you want to edit colourStock ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onDeleteColourStock() {
    if (this.deleteColourStockPermission) {
      const modalRef = this._modalService.open(ConfirmDialogComponent);
      modalRef.componentInstance.titleFrom = 'Delete ColourStock ';
      modalRef.componentInstance.message = 'Are you sure you want to delete this colourStock?';
      modalRef.result
        .then((result) => {
          if (result) {
            const id = this.params.value;
            this.colourStockService.deleteColourStockById(id).subscribe(data => {
              if (!data[0].error) {
                this.params.action.getColourStockData();
                this.toasterService.success(data[0].message);
              } else {
                this.toasterService.error(data[0].message);
              }
            });
          }
        });
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete colourStock. If you want to delete colourStock ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}

@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="issueBox()"></i>`,
  styleUrls: ['./view-colour-stock.component.scss']
})

export class CustomRendererIssueNonIssueColourStockComponent implements AgRendererComponent {
  params: any;


  constructor(private router: Router, private _modalService: NgbModal, private colourStockService: ColourStockService,
    private toasterService: ToastrService, private permissionService: PermissionService, private authService: AuthService) {

  }
  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  issueBox() {

  }
}



