import { Component, OnInit, OnDestroy } from '@angular/core';
import { Process } from '../../../@theme/model/process-class';
import { Subscription } from 'rxjs';
import { ViewReqObj } from '../../../@theme/model/user-class';
import { Quality } from '../../../@theme/model/quality-class';
import { Party } from '../../../@theme/model/party-class';
import { ProcessService } from '../../../@theme/services/process.service';
import { PermissionService } from '../../../@theme/services/permission.service';
import { QualityService } from '../../../@theme/services/quality.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Papa } from 'ngx-papaparse';
import { PartyService } from '../../../@theme/services/party.service';
import { AuthService } from '../../../@theme/services/auth.service';
import { ColDef } from 'ag-grid-community';
import * as XLSX from 'xlsx';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'ngx-view-process',
  templateUrl: './view-process.component.html',
  styleUrls: ['./view-process.component.scss']
})
export class ViewProcessComponent implements OnInit {

  processList: Process[] = [];
  rowData;
  gridApi;
  gridColumnApi;
  addProcessPermission = 1;
  columnDefs = [
    { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
    { headerName: 'Party Name', field: 'party_name', sortable: true, filter: true },
    { headerName: 'Process By', field: 'process_given_by', sortable: true, filter: true },
    { headerName: 'Quality Id', field: 'quality_id', sortable: true, filter: true },
    { headerName: 'Quality Name', field: 'quality_name', sortable: true, filter: true },
    { headerName: 'Quality Type', field: 'quality_type', sortable: true, filter: true },
    { headerName: 'remark', field: 'remark', sortable: true, filter: true },
  ];
  columnExportDefs = [
    'party_name', 'process_given_by', 'quality_id', 'quality_name', 'quality_type', 'remark'];
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;
  viewAllDataPermission: any = false;
  viewOwnDataPermission: any = false;
  viewGroupDataPermission = false;
  radioSelected: any = 1;
  currentUserGroupUserIds: any;
  processReqObj = new ViewReqObj();
  qualityViewReqObj = new ViewReqObj();
  qualityList: Quality[] = [];
  partyNameList: Party[] = [];
  viewPartyReqOb = new ViewReqObj();

  constructor(private processService: ProcessService, private router: Router, private tosterService: ToastrService
    , private permissionService: PermissionService, private papa: Papa, private authService: AuthService,
    private qualityService: QualityService, private partyService: PartyService) {
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
        if (ele.form_name === 'Process') {
          // this.addUserPermission = ele.can_add;
          this.addProcessPermission = 1;
          this.viewAllDataPermission = ele.can_view_all;
          this.viewGroupDataPermission = ele.can_view_group;
          this.viewOwnDataPermission = ele.can_view;

          this.processReqObj.current_user_id = this.currentUserId;
          this.processReqObj.user_head_id = this.currentUser.user_head_id;
          this.processReqObj.group_user_ids = this.currentUserGroupUserIds;
        }
      })
    }
    this.getQualityData();
    this.getPartyList();
    this.getProcessData();
  }
  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  getPartyList() {
    this.partyNameList = [];
    this.viewPartyReqOb.view_group = true;
    this.viewPartyReqOb.current_user_id = this.currentUserId;
    this.viewPartyReqOb.user_head_id = this.currentUser.user_head_id;
    this.viewPartyReqOb.group_user_ids = this.currentUserGroupUserIds;
    this.partyService.getPartyList(this.viewPartyReqOb).subscribe(
      data => {
        if (!data[0].error) {
          this.partyNameList = data[0].data;
        } else {
          this.tosterService.error(data[0].message);
        }
      }, error => {
        this.tosterService.error(error);
      });
  }
  getQualityData() {
    this.qualityViewReqObj.current_user_id = this.currentUserId;
    this.qualityViewReqObj.user_head_id = this.currentUser.user_head_id;
    this.qualityViewReqObj.group_user_ids = this.currentUserGroupUserIds;
    this.qualityViewReqObj.view_group = true;
    this.qualityService.getAllQualityData(this.qualityViewReqObj).subscribe(data => {
      if (!data[0].error) {
        this.qualityList = data[0].data;
      }
    })
  }
  getProcessData(value?) {
    this.processReqObj.view_all = false;
    this.processReqObj.view_group = false;
    this.processReqObj.view_own = false;

    if (value)
      this.radioSelected = value;

    //check which radio button is selected
    if (this.radioSelected == 1)
      this.processReqObj.view_own = true;
    else if (this.radioSelected == 2)
      this.processReqObj.view_group = true;
    else if (this.radioSelected == 3)
      this.processReqObj.view_all = true;

    this.processService.getAllProcesss(this.processReqObj).subscribe(data => {
      if (!data[0].error) {
        this.processList = data[0].data;
        // this.processList.forEach(ele => {
        //   const i = this.qualityList.findIndex(v => v.entry_id == ele.quality_id);
        //   if (i > -1) {
        //     ele.quality_name = this.qualityList[i].quality_name;
        //     ele.quality_type = this.qualityList[i].quality_type;
        //   }
        //   const partyIndex = this.partyNameList.findIndex(v => v.entry_id == ele.party_id);
        //   if (partyIndex > -1) {
        //     ele.party_name = this.partyNameList[partyIndex].party_name;
        //   }
        // });
        this.rowData = this.processList;
      } else {
        this.tosterService.error(data[0].message);
      }
    });
  }
  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'entry_id') {
        column.cellRendererFramework = CustomRendererProcessComponent;
        column.cellRendererParams = {
          inRouterLink: '/pages/process/edit-process/',
          inViewLink: '/pages/process/view-process/',
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
  onAddProcess() {
    if (this.addProcessPermission) {
      this.router.navigate(['/pages/process/add-process']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add process. If you want to add process ask admin for permission.');
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
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editProcess()"></i>
  <i class="ft-info font-medium-1 mr-2" style="color:#4ca6ff" (click)="viewProcess()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteProcess()"></i>`,
  styleUrls: ['./view-process.component.scss']
})

export class CustomRendererProcessComponent implements AgRendererComponent, OnDestroy {
  params: any;
  editProcessPermission = 1;
  deleteProcessPermission = 1;
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;

  constructor(private router: Router, private _modalService: NgbModal, private processService: ProcessService,
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
          this.editProcessPermission = ele.can_edit;
          this.deleteProcessPermission = ele.can_delete;
        } else if (this.params.action.radioSelected == 2) {
          this.editProcessPermission = ele.can_edit_group;
          this.deleteProcessPermission = ele.can_delete_group;
        } else if (this.params.action.radioSelected == 3) {
          this.editProcessPermission = ele.can_edit_all;
          this.deleteProcessPermission = ele.can_delete_all;
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

  viewProcess() {
  }

  editProcess() {
    if (this.editProcessPermission) {
      this.router.navigate([this.params.inRouterLink + this.params.value]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit process. If you want to edit process ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onDeleteProcess() {
    if (this.deleteProcessPermission) {
      const modalRef = this._modalService.open(ConfirmDialogComponent);
      modalRef.componentInstance.titleFrom = 'Delete Process ';
      modalRef.componentInstance.message = 'Are you sure you want to delete this process?';
      modalRef.result
        .then((result) => {
          if (result) {
            const id = this.params.value;
            this.processService.deleteProcessById(id).subscribe(data => {
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
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete process. If you want to delete process ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}


