import { Component, OnInit, OnDestroy } from '@angular/core';
import { Fabric } from '../../../@theme/model/fabric-in-class';
import { FabricInService } from '../../../@theme/services/fabric-in.service';
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
import { PartyService } from '../../../@theme/services/party.service';
import { Party } from '../../../@theme/model/party-class';

@Component({
  selector: 'ngx-view-fabric-in',
  templateUrl: './view-fabric-in.component.html',
  styleUrls: ['./view-fabric-in.component.scss']
})
export class ViewFabricInComponent implements OnInit, OnDestroy {


  fabricList: Fabric[] = [];
  rowData;
  gridApi;
  gridColumnApi;
  addFabricPermission = 1;
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
  viewAllDataPermission: any = false;
  viewOwnDataPermission: any = false;
  viewGroupDataPermission = false;
  currentUserGroupUserIds;
  radioSelected: any = 1;
  fabricInReqObj = new ViewReqObj();
  partyNameList: Party[] = [];
  viewPartyReqOb = new ViewReqObj();

  constructor(private fabricService: FabricInService, private router: Router, private tosterService: ToastrService
    , private permissionService: PermissionService, private papa: Papa, private authService: AuthService,
    private partyService: PartyService) {
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
        if (ele.form_name === 'Fabric In') {
          // this.addUserPermission = ele.can_add;
          this.addFabricPermission = 1;
          this.viewAllDataPermission = ele.can_view_all;
          this.viewGroupDataPermission = ele.can_view_group;
          this.viewOwnDataPermission = ele.can_view;
          this.fabricInReqObj.current_user_id = this.currentUserId;
          this.fabricInReqObj.user_head_id = this.currentUser.user_head_id;
          this.fabricInReqObj.group_user_ids = this.currentUserGroupUserIds;
        }
      })
    }
    this.getPartyList();
    this.getFabricInData();
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

  getFabricInData(value?) {

    this.fabricInReqObj.view_all = false;
    this.fabricInReqObj.view_group = false;
    this.fabricInReqObj.view_own = false;

    if (value)
      this.radioSelected = value;

    //check which radio button is selected
    if (this.radioSelected == 1)
      this.fabricInReqObj.view_own = true;
    else if (this.radioSelected == 2)
      this.fabricInReqObj.view_group = true;
    else if (this.radioSelected == 3)
      this.fabricInReqObj.view_all = true;

    this.fabricService.getAllFabricIns(this.fabricInReqObj).subscribe(data => {
      if (!data[0].error) {
        this.fabricList = data[0].data;
        this.fabricList.forEach(ele => {
          let i = this.partyNameList.findIndex(v => v.entry_id == ele.party_id);
          if (i > -1) {
            ele.party_name = this.partyNameList[i].party_name;
          }
        })
        this.rowData = this.fabricList;
      } else {
        this.tosterService.error(data[0].message);
      }
    });
  }
  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'entry_id') {
        column.cellRendererFramework = CustomRendererFabricInComponent;
        column.cellRendererParams = {
          inRouterLink: '/pages/fabric-in/edit-fabric-in/',
          inViewLink: '/pages/fabric-in/view-fabric-in/',
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
  onAddFabricIn() {
    if (this.addFabricPermission) {
      this.router.navigate(['/pages/fabric-in/add-fabric-in']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add Fabric In. If you want to add Fabric In detail ask admin for permission.');
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
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editFabric()"></i>
  <i class="ft-info font-medium-1 mr-2" style="color:#4ca6ff" (click)="viewFabric()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteFabric()"></i>`,
  styleUrls: ['./view-fabric-in.component.scss']
})

export class CustomRendererFabricInComponent implements AgRendererComponent, OnDestroy {
  params: any;
  editFabricPermission = 1;
  deleteFabricPermission = 1;
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;

  constructor(private router: Router, private _modalService: NgbModal, private fabricService: FabricInService,
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
      if (ele.form_name === 'Fabric In') {
        if (this.params.action.radioSelected == 1) {
          this.editFabricPermission = ele.can_edit;
          this.deleteFabricPermission = ele.can_delete;
        } else if (this.params.action.radioSelected == 2) {
          this.editFabricPermission = ele.can_edit_group;
          this.deleteFabricPermission = ele.can_delete_group;
        } else if (this.params.action.radioSelected == 3) {
          this.editFabricPermission = ele.can_edit_all;
          this.deleteFabricPermission = ele.can_delete_all;
        }
      }
    })
    // this.editPartyPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_edit_user);
    // this.deletePartyPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_delete_user);
  }
  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  refresh(): boolean {
    return false;
  }

  viewFabric() {
    //  this.router.navigate([this.params.inViewLink + 0]);
  }

  editFabric() {
    if (this.editFabricPermission) {
      this.router.navigate([this.params.inRouterLink + this.params.value]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit Fabric In detail. If you want to edit Fabric In detail ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onDeleteFabric() {
    if (this.deleteFabricPermission) {
      const modalRef = this._modalService.open(ConfirmDialogComponent);
      modalRef.componentInstance.titleFrom = 'Delete Fabric In detail ';
      modalRef.componentInstance.message = 'Are you sure you want to delete this detail?';
      modalRef.result
        .then((result) => {
          if (result) {
            const id = this.params.value;
            this.fabricService.deleteFabricInById(id).subscribe(data => {
              if (!data[0].error) {
                this.params.action.getFabricInData();
                this.toasterService.success(data[0].message);
              } else {
                this.toasterService.error(data[0].message);
              }
            });
          }
        });
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete Fabric In detail. If you want to delete Fabric In detail ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}


