import { Component, OnInit, OnDestroy } from '@angular/core';
import { BatchMast } from '../../../@theme/model/batch-class';
import { BatchService } from '../../../@theme/services/batch.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from '../../../@theme/services/permission.service';
import { Papa } from 'ngx-papaparse';
import { ColDef } from 'ag-grid-community';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import * as XLSX from 'xlsx';
import { AuthService } from '../../../@theme/services/auth.service';
import { Subscription } from 'rxjs';
import { ViewReqObj } from '../../../@theme/model/user-class';

@Component({
  selector: 'ngx-view-batch',
  templateUrl: './view-batch.component.html',
  styleUrls: ['./view-batch.component.scss']
})
export class ViewBatchComponent implements OnInit, OnDestroy {

  batchList: BatchMast[] = [];
  currentUser;
  rowData;
  gridApi;
  gridColumnApi;
  addBatchPermission = 1;
  columnDefs = [
    { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
    { headerName: 'Batch No.', field: 'entry_id', sortable: true, filter: true },
    { headerName: 'Quality Id', field: 'quality_id', sortable: true, filter: true },
    { headerName: 'Quality Name', field: 'quality_name', sortable: true, filter: true },
    { headerName: 'Quality Type', field: 'quality_type', sortable: true, filter: true },
  ];
  columnExportDefs = [
    'batch_id', 'quality_id', 'quality_name', 'quality_type'];
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  viewAllDataPermission: any = false;
  viewOwnDataPermission: any = false;
  viewGroupDataPermission = false;
  radioSelected: any = 1;

  currentUserGroupUserIds: any;
  batchReqObj = new ViewReqObj();

  constructor(private batchService: BatchService, private router: Router, private tosterService: ToastrService
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
        if (ele.form_name === 'Batch') {
          // this.addBatchPermission = ele.can_add;
          this.addBatchPermission = 1;
          this.viewAllDataPermission = ele.can_view_all;
          this.viewGroupDataPermission = ele.can_view_group;
          this.viewOwnDataPermission = ele.can_view;

          this.batchReqObj.current_user_id = this.currentUserId;
          this.batchReqObj.user_head_id = this.currentUser.user_head_id;
          this.batchReqObj.group_user_ids = this.currentUserGroupUserIds;
        }
      })
    }
    this.getBatchData();
  }
  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  getBatchData(value?) {

    this.batchReqObj.view_all = false;
    this.batchReqObj.view_group = false;
    this.batchReqObj.view_own = false;

    if (value)
      this.radioSelected = value;

    //check which radio button is selected
    if (this.radioSelected == 1)
      this.batchReqObj.view_own = true;
    else if (this.radioSelected == 2)
      this.batchReqObj.view_group = true;
    else if (this.radioSelected == 3)
      this.batchReqObj.view_all = true;

    this.batchService.getAllBatchs(this.batchReqObj).subscribe(data => {
      if (!data[0].error) {
        this.batchList = data[0].data;
        this.rowData = data[0].data;
      } else {
        this.tosterService.error(data[0].message);
      }
    });
  }
  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'entry_id' && column.headerName === 'Actions') {
        column.cellRendererFramework = CustomRendererBatchComponent;
        column.cellRendererParams = {
          inRouterLink: '/pages/batch/edit-batch/',
          inViewLink: '/pages/batch/view-batch/',
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
  onAddBatch() {
    if (this.addBatchPermission) {
      this.router.navigate(['/pages/batch/add-batch']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add batch. If you want to add batch ask admin for permission.');
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
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editBatch()"></i>
  <i class="ft-info font-medium-1 mr-2" style="color:#4ca6ff"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteBatch()"></i>`,
  styleUrls: ['./view-batch.component.scss']
})

export class CustomRendererBatchComponent implements AgRendererComponent {
  params: any;
  editBatchPermission = 1;
  deleteBatchPermission = 1;
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;

  constructor(private router: Router, private _modalService: NgbModal, private batchService: BatchService,
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
      if (ele.form_name === 'Batch') {
        if (this.params.action.radioSelected == 1) {
          this.editBatchPermission = ele.can_edit;
          this.deleteBatchPermission = ele.can_delete;
        } else if (this.params.action.radioSelected == 2) {
          this.editBatchPermission = ele.can_edit_group;
          this.deleteBatchPermission = ele.can_delete_group;
        } else if (this.params.action.radioSelected == 3) {
          this.editBatchPermission = ele.can_edit_all;
          this.deleteBatchPermission = ele.can_delete_all;
        }
      }
    })
    // this.editBatchPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_edit_batch);
    // this.deleteBatchPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_delete_batch);
  }
  refresh(): boolean {
    return false;
  }

  viewBill() {
    //  this.router.navigate([this.params.inViewLink + 0]);
  }

  editBatch() {
    if (this.editBatchPermission) {
      this.router.navigate([this.params.inRouterLink + this.params.value]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit batch. If you want to edit batch ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onDeleteBatch() {
    if (this.deleteBatchPermission) {
      const modalRef = this._modalService.open(ConfirmDialogComponent);
      modalRef.componentInstance.titleFrom = 'Delete Batch ';
      modalRef.componentInstance.message = 'Are you sure you want to delete this batch?';
      modalRef.result
        .then((result) => {
          if (result) {
            const id = this.params.value;
            this.batchService.deleteBatchById(id).subscribe(data => {
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
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete batch. If you want to delete batch ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}
