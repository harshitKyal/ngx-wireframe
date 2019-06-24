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
import { Shade } from '../../../@theme/model/shade-class';
import { ShadeService } from '../../../@theme/services/shade.service';
import { Quality } from '../../../@theme/model/quality-class';
import { QualityService } from '../../../@theme/services/quality.service';
import { element } from '@angular/core/src/render3';
import { Party } from '../../../@theme/model/party-class';
import { PartyService } from '../../../@theme/services/party.service';

@Component({
  selector: 'ngx-view-shade-list',
  templateUrl: './view-shade-list.component.html',
  styleUrls: ['./view-shade-list.component.scss']
})
export class ViewShadeListComponent implements OnInit {

  shadeList: Shade[] = [];
  rowData;
  gridApi;
  gridColumnApi;
  addShadePermission = 1;
  columnDefs = [
    { headerName: 'Actions', field: 'entry_id', sortable: false, width: 100 },
    { headerName: 'Party Shade No.', field: 'party_shade_no', sortable: true, filter: true, width: 150 },
    { headerName: 'Process Name', field: 'process_name', sortable: true, filter: true },
    { headerName: 'Quality Id', field: 'quality_id', sortable: true, filter: true, width: 100 },
    { headerName: 'Quality Name', field: 'quality_name', sortable: true, filter: true },
    { headerName: 'Quality Type', field: 'quality_type', sortable: true, filter: true },
    { headerName: 'Party Name', field: 'party_name', sortable: true, filter: true },
    { headerName: 'Colour Tone', field: 'colour_tone', sortable: true, filter: true },
  ];
  columnExportDefs = [
    'party_shade_no', 'process_name', 'quality_id', 'quality_name', 'quality_type', 'party_name', 'colour_tone'];
  currentUserId: any;
  currentUserGroupUserIds: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;
  viewAllDataPermission: any = false;
  viewOwnDataPermission: any = false;
  viewGroupDataPermission = false;
  radioSelected: any = 1;
  shadeReqObj = new ViewReqObj();
  qualityViewReqObj = new ViewReqObj();
  qualityList: Quality[] = [];
  partyNameList: Party[] = [];
  viewPartyReqOb = new ViewReqObj();

  constructor(private shadeService: ShadeService, private router: Router, private tosterService: ToastrService
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
        if (ele.form_name === 'Shade') {
          // this.addUserPermission = ele.can_add;
          this.addShadePermission = 1;
          this.viewAllDataPermission = ele.can_view_all;
          this.viewGroupDataPermission = ele.can_view_group;
          this.viewOwnDataPermission = ele.can_view;

          this.shadeReqObj.current_user_id = this.currentUserId;
          this.shadeReqObj.user_head_id = this.currentUser.user_head_id;
          this.shadeReqObj.group_user_ids = this.currentUserGroupUserIds;
        }
      })
    }
    this.getPartyList();
    this.getQualityData();
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
        if (this.qualityList.length) {
          this.getShadeData();
        }
      }
    })
  }
  getShadeData(value?) {

    this.shadeReqObj.view_all = false;
    this.shadeReqObj.view_group = false;
    this.shadeReqObj.view_own = false;

    if (value)
      this.radioSelected = value;

    //check which radio button is selected
    if (this.radioSelected == 1)
      this.shadeReqObj.view_own = true;
    else if (this.radioSelected == 2)
      this.shadeReqObj.view_group = true;
    else if (this.radioSelected == 3)
      this.shadeReqObj.view_all = true;

    this.shadeService.getAllShades(this.shadeReqObj).subscribe(data => {
      if (!data[0].error) {
        this.shadeList = data[0].data;
        this.shadeList.forEach(ele => {
          const i = this.qualityList.findIndex(v => v.entry_id == ele.quality_id);
          if (i > -1) {
            let partyIndex = this.partyNameList.findIndex(v => v.entry_id == this.qualityList[i].party_id);
            if (partyIndex > -1) {
              ele.party_name = this.partyNameList[partyIndex].party_name;
            }
            // ele.party_name = this.qualityList[i].party_name;
            ele.quality_name = this.qualityList[i].quality_name;
            ele.quality_type = this.qualityList[i].quality_type;
          }
        });
        this.rowData = this.shadeList;
      } else {
        this.tosterService.error(data[0].message);
      }
    });
  }
  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'entry_id') {
        column.cellRendererFramework = CustomRendererShadeInComponent;
        column.cellRendererParams = {
          inRouterLink: '/pages/shade/edit-shade/',
          inViewLink: '/pages/shade/view-shade/',
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
  onAddShade() {
    if (this.addShadePermission) {
      this.router.navigate(['/pages/shade/add-shade']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add shade. If you want to add shade ask admin for permission.');
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
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editShade()"></i>
  <i class="ft-info font-medium-1 mr-2" style="color:#4ca6ff" (click)="viewShade()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteShade()"></i>`,
  styleUrls: ['./view-shade-list.component.scss']
})

export class CustomRendererShadeInComponent implements AgRendererComponent, OnDestroy {
  params: any;
  editShadePermission = 1;
  deleteShadePermission = 1;
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;

  constructor(private router: Router, private _modalService: NgbModal, private shadeService: ShadeService,
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
      if (ele.form_name === 'Shade') {
        if (this.params.action.radioSelected == 1) {
          this.editShadePermission = ele.can_edit;
          this.deleteShadePermission = ele.can_delete;
        } else if (this.params.action.radioSelected == 2) {
          this.editShadePermission = ele.can_edit_group;
          this.deleteShadePermission = ele.can_delete_group;
        } else if (this.params.action.radioSelected == 3) {
          this.editShadePermission = ele.can_edit_all;
          this.deleteShadePermission = ele.can_delete_all;
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

  viewShade() {
  }

  editShade() {
    if (this.editShadePermission) {
      this.router.navigate([this.params.inRouterLink + this.params.value]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit shade. If you want to edit shade ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onDeleteShade() {
    if (this.deleteShadePermission) {
      const modalRef = this._modalService.open(ConfirmDialogComponent);
      modalRef.componentInstance.titleFrom = 'Delete Shade ';
      modalRef.componentInstance.message = 'Are you sure you want to delete this shade?';
      modalRef.result
        .then((result) => {
          if (result) {
            const id = this.params.value;
            this.shadeService.deleteShadeById(id).subscribe(data => {
              if (!data[0].error) {
                this.params.action.getShadeData();
                this.toasterService.success(data[0].message);
              } else {
                this.toasterService.error(data[0].message);
              }
            });
          }
        });
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete shade. If you want to delete shade ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}


