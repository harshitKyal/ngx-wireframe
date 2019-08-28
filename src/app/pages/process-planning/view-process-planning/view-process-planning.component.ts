import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import { AgRendererComponent } from 'ag-grid-angular';
import {  ProductionPlanningReq } from '../../../@theme/model/process-planning-class';
import { Subscription } from 'rxjs';
import { ViewReqObj } from '../../../@theme/model/user-class';
import { Quality } from '../../../@theme/model/quality-class';
import { Party } from '../../../@theme/model/party-class';
import { ProcessPlanningService } from '../../../@theme/services/process-planning.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from '../../../@theme/services/permission.service';
import { Papa } from 'ngx-papaparse';
import { AuthService } from '../../../@theme/services/auth.service';
import { QualityService } from '../../../@theme/services/quality.service';
import { PartyService } from '../../../@theme/services/party.service';
import { ColDef } from 'ag-grid-community';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-view-process-planning',
  templateUrl: './view-process-planning.component.html',
  styleUrls: ['./view-process-planning.component.scss']
})
export class ViewProcessPlanningComponent implements OnInit {

  processPlanningList: any = [];
  rowData;
  gridApi;
  gridColumnApi;
  addProcessPlanningPermission = 1;
  columnDefs = [
    // { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
    { headerName: 'Program  No.', field: 'program_control_id', sortable: true, filter: true },
    { headerName: 'Batch No.', field: 'batch_control_id', sortable: true, filter: true },
    { headerName: 'Created By', field: 'created_by', sortable: true, filter: true },
    { headerName: 'Updated By', field: 'updated_by', sortable: true, filter: true },
  ];
  columnExportDefs = [
    'program_control_id', 'batch_control_id', 'created_by', 'updated_by'];
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;
  viewAllDataPermission: any = false;
  viewOwnDataPermission: any = false;
  viewGroupDataPermission = false;
  radioSelected: any = 1;
  currentUserGroupUserIds: any;
  processPlanningReqObj = new ViewReqObj();
  viewPartyReqOb = new ViewReqObj();

  constructor(private processPlanningService: ProcessPlanningService, private router: Router, private tosterService: ToastrService
    , private permissionService: PermissionService, private papa: Papa, private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserPermission = ele.user_permission;
        this.currentUserGroupUserIds = ele.user.group_user_ids;
      }
    });
    // this.setColumns();
  }


  ngOnInit() {
    if (this.currentUserPermission && this.currentUserPermission.length) {
      this.currentUserPermission.forEach(ele => {
        if (ele.form_name === 'Process') {
          this.addProcessPlanningPermission = 1;
          this.viewAllDataPermission = ele.can_view_all;
          this.viewGroupDataPermission = ele.can_view_group;
          this.viewOwnDataPermission = ele.can_view;
          this.processPlanningReqObj.current_user_id = this.currentUserId;
          this.processPlanningReqObj.user_head_id = this.currentUser.user_head_id;
          this.processPlanningReqObj.group_user_ids = this.currentUserGroupUserIds;
        }
      })
    }
    this.getProcessPlanningData();
  }
  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }

  getProcessPlanningData(value?) {
    this.processPlanningReqObj.view_all = false;
    this.processPlanningReqObj.view_group = false;
    this.processPlanningReqObj.view_own = false;

    if (value)
      this.radioSelected = value;

    //check which radio button is selected
    if (this.radioSelected == 1)
      this.processPlanningReqObj.view_own = true;
    else if (this.radioSelected == 2)
      this.processPlanningReqObj.view_group = true;
    else if (this.radioSelected == 3)
      this.processPlanningReqObj.view_all = true;

    this.processPlanningService.getAllprocessPlannings(this.processPlanningReqObj).subscribe(data => {
      if (!data[0].error) {
        this.processPlanningList = data[0].data;
        this.rowData = this.processPlanningList;
      } else {
        this.tosterService.error(data[0].message);
      }
    });
  }
  // setColumns() {
  //   this.columnDefs.forEach((column: ColDef) => {
  //     if (column.field === 'entry_id') {
  //       column.cellRendererFramework = CustomRendererProcessPlanningComponent;
  //       column.cellRendererParams = {
  //         inRouterLink: '/pages/process-planning/edit-process-planning/',
  //         action: this
  //       };
  //     }
  //   });
  // }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onAddProcessPlanning() {
    if (this.addProcessPlanningPermission) {
      this.router.navigate(['/pages/process-planning/add-process-planning']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add process planning. If you want to add process planning ask admin for permission.');
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
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="onEditProcessPlanning()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteProcessPlanning()"></i>`,
  styleUrls: ['./view-process-planning.component.scss']
})

export class CustomRendererProcessPlanningComponent implements AgRendererComponent, OnDestroy {
  params: any;
  editProcessPlanningPermission = 1;
  deleteProcessPlanningPermission = 1;
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;

  constructor(private router: Router, private _modalService: NgbModal, private processPlanningService: ProcessPlanningService,
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
      if (ele.form_name === 'Process') {
        if (this.params.action.radioSelected == 1) {
          this.editProcessPlanningPermission = ele.can_edit;
          this.deleteProcessPlanningPermission = ele.can_delete;
        } else if (this.params.action.radioSelected == 2) {
          this.editProcessPlanningPermission = ele.can_edit_group;
          this.deleteProcessPlanningPermission = ele.can_delete_group;
        } else if (this.params.action.radioSelected == 3) {
          this.editProcessPlanningPermission = ele.can_edit_all;
          this.deleteProcessPlanningPermission = ele.can_delete_all;
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

  viewProcessPlanning() {
  }

  onEditProcessPlanning() {
    if (this.editProcessPlanningPermission) {
      this.router.navigate([this.params.inRouterLink + this.params.value]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit process. If you want to edit process ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onDeleteProcessPlanning() {
    if (this.deleteProcessPlanningPermission) {
      const modalRef = this._modalService.open(ConfirmDialogComponent);
      modalRef.componentInstance.titleFrom = 'Delete Process Planning ';
      modalRef.componentInstance.message = 'Are you sure you want to delete this process planning?';
      modalRef.result
        .then((result) => {
          if (result) {
            const id = this.params.value;
            this.processPlanningService.deleteprocessPlanningById(id).subscribe(data => {
              if (!data[0].error) {
                this.params.action.getProcessData();
                this.toasterService.success(data[0].message);
              } else {
                this.toasterService.error(data[0].message);
              }
            });
          }
        });
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete process planning. If you want to delete process planning ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}


