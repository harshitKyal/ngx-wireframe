import { Component, OnInit, OnDestroy } from '@angular/core';
import { Program } from '../../../@theme/model/program-class';
import { Subscription } from 'rxjs';
import { ViewReqObj } from '../../../@theme/model/user-class';
import { ProgramService } from '../../../@theme/services/program.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from '../../../@theme/services/permission.service';
import { Papa } from 'ngx-papaparse';
import { AuthService } from '../../../@theme/services/auth.service';
import { ColDef } from 'ag-grid-community';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-view-program-list',
  templateUrl: './view-program-list.component.html',
  styleUrls: ['./view-program-list.component.scss']
})
export class ViewProgramListComponent implements OnInit {


  programList: Program[] = [];
  rowData;
  gridApi;
  gridColumnApi;
  addProgramPermission = 1;
  columnDefs = [
    { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
    { headerName: 'Party Name', field: 'party_name', sortable: true, filter: true },
    { headerName: 'Program By', field: 'program_given_by', sortable: true, filter: true },
    { headerName: 'Quality Id', field: 'quality_id', sortable: true, filter: true },
    { headerName: 'Quality Name', field: 'quality_name', sortable: true, filter: true },
    { headerName: 'Quality Type', field: 'quality_type', sortable: true, filter: true },
    { headerName: 'remark', field: 'remark', sortable: true, filter: true },
  ];
  columnExportDefs = [
    'party_name', 'program_given_by', 'quality_id', 'quality_name', 'quality_type', 'remark'];
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;
  viewAllDataPermission: any = false;
  viewOwnDataPermission: any = false;
  viewGroupDataPermission = false;
  radioSelected: any = 1;
  currentUserGroupUserIds : any;
  programReqObj = new ViewReqObj();
  constructor(private programService: ProgramService, private router: Router, private tosterService: ToastrService
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
        if (ele.form_name === 'Program') {
          // this.addUserPermission = ele.can_add;
          this.addProgramPermission = 1;
          this.viewAllDataPermission = ele.can_view_all;
          this.viewGroupDataPermission = ele.can_view_group;
          this.viewOwnDataPermission = ele.can_view;

          this.programReqObj.current_user_id = this.currentUserId;
          this.programReqObj.user_head_id = this.currentUser.user_head_id;
          this.programReqObj.group_user_ids = this.currentUserGroupUserIds;
        }
      })
    }
    this.getProgramData();
  }
  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  getProgramData(value?) {

    this.programReqObj.view_all = false ;
    this.programReqObj.view_group= false ;
    this.programReqObj.view_own = false ;
    
    if (value)
      this.radioSelected = value;

    //check which radio button is selected
    if (this.radioSelected == 1)
      this.programReqObj.view_own = true ;
    else if (this.radioSelected == 2)
      this.programReqObj.view_group = true ;
    else if (this.radioSelected == 3)
      this.programReqObj.view_all = true ;
  
    this.programService.getAllPrograms(this.programReqObj).subscribe(data => {
      if (!data[0].error) {
        this.programList = data[0].data;
        this.rowData = data[0].data;
      } else {
        this.tosterService.error(data[0].message);
      }
    });
  }
  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'entry_id') {
        column.cellRendererFramework = CustomRendererProgramComponent;
        column.cellRendererParams = {
          inRouterLink: '/pages/program/edit-program/',
          inViewLink: '/pages/program/view-program/',
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
  onAddProgram() {
    if (this.addProgramPermission) {
      this.router.navigate(['/pages/program/add-program']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add program. If you want to add program ask admin for permission.');
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
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editProgram()"></i>
  <i class="ft-info font-medium-1 mr-2" style="color:#4ca6ff" (click)="viewProgram()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteProgram()"></i>`,
  styleUrls: ['./view-program-list.component.scss']
})

export class CustomRendererProgramComponent implements AgRendererComponent, OnDestroy {
  params: any;
  editProgramPermission = 1;
  deleteProgramPermission = 1;
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;

  constructor(private router: Router, private _modalService: NgbModal, private programService: ProgramService,
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
      if (ele.form_name === 'Program') {
        if (this.params.action.radioSelected == 1) {
          this.editProgramPermission = ele.can_edit;
          this.deleteProgramPermission = ele.can_delete;
        } else if (this.params.action.radioSelected == 2) {
          this.editProgramPermission = ele.can_edit_group;
          this.deleteProgramPermission = ele.can_delete_group;
        } else if (this.params.action.radioSelected == 3) {
          this.editProgramPermission = ele.can_edit_all;
          this.deleteProgramPermission = ele.can_delete_all;
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

  viewProgram() {
  }

  editProgram() {
    if (this.editProgramPermission) {
      this.router.navigate([this.params.inRouterLink + this.params.value]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit program. If you want to edit program ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onDeleteProgram() {
    if (this.deleteProgramPermission) {
      const modalRef = this._modalService.open(ConfirmDialogComponent);
      modalRef.componentInstance.titleFrom = 'Delete Program ';
      modalRef.componentInstance.message = 'Are you sure you want to delete this program?';
      modalRef.result
        .then((result) => {
          if (result) {
            const id = this.params.value;
            this.programService.deleteProgramById(id).subscribe(data => {
              if (!data[0].error) {
                this.params.action.getProgramData();
                this.toasterService.success(data[0].message);
              } else {
                this.toasterService.error(data[0].message);
              }
            });
          }
        });
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete program. If you want to delete program ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}


