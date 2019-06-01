import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { PermissionService } from '../../../@theme/services/permission.service';
import { Papa } from 'ngx-papaparse';
import { ColDef } from 'ag-grid-community';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { User, ViewReqObj } from "../../../@theme/model/user-class";
import { UserService } from "../../../@theme/services/user.service";
import { Subscription } from 'rxjs';
import { AuthService } from '../../../@theme/services/auth.service';


@Component({
  selector: 'ngx-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit, OnDestroy {

  userList: User[] = [];
  currentUser$: Subscription;
  currentUser: User;
  addUserPermission = 0;
  rowData;
  gridApi;
  gridColumnApi;
  columnDefs = [
    { headerName: 'Actions', field: 'user_id', width: 100 },
    { headerName: 'User Name', field: 'user_name', sortable: true, filter: 'agTextColumnFilter' },
    { headerName: 'First Name', field: 'first_name', sortable: true, filter: 'agDateColumnFilter' },
    { headerName: 'last Name', field: 'last_name', sortable: true, filter: true },
    { headerName: 'Company', field: 'company_id', sortable: true, filter: true },
    { headerName: 'Designation', field: 'designation', sortable: true, filter: true },
    { headerName: 'Contact', field: 'mobile_no', sortable: true, filter: true },
  ];
  columnExportDefs = [
    'user_name', 'first_name', 'last_name', 'company_id'];
  filtersettings: any;
  currentUserId: any;
  userPermission = [];
  viewAllDataPermission: any = false;
  viewOwnDataPermission: any = false;
  viewGroupDataPermission = false;
  radioSelected: any = 1;
  userReqObj = new ViewReqObj();
  constructor(private userService: UserService, private router: Router, private authService: AuthService,
    private permissionService: PermissionService, private papa: Papa) {
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.userPermission = ele.user_permission;

      }
    });
    this.setColumns();
  }


  ngOnInit() {
    // this.userPermission = (JSON.parse(localStorage.getItem('currentUserPermission')));
    if (this.userPermission.length) {
      this.userPermission.forEach(ele => {
        if (ele.form_name === 'User') {
          // this.addUserPermission = ele.can_add;
          this.addUserPermission = 1;
          this.viewAllDataPermission = ele.can_view_all;
          this.viewGroupDataPermission = ele.can_view_group;
          this.viewOwnDataPermission = ele.can_view;
        }
      })
    }
    // this.currentUserId = JSON.parse(localStorage.currentUser).user_id
    this.getUserList();
  }

  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'user_id') {
        column.cellRendererFramework = CustomRendererUserComponent;
        column.cellRendererParams = {
          inRouterLink: '/pages/user/edit-user/',
          action: this
        };
      }
    });
  }

  getUserList(value?) {
    this.userList = [];
    this.rowData = [];
    this.userReqObj = new ViewReqObj();
    if (value) {
      this.radioSelected = value;
    }
    if (this.viewOwnDataPermission && this.radioSelected == 1) {
      this.userReqObj.created_by = this.currentUserId;
    }
    if (this.viewGroupDataPermission && this.radioSelected == 2) {
      this.userReqObj.created_by = this.currentUserId;
      this.userReqObj.user_head_id = this.currentUser.user_head_id;
    }
    if (this.viewAllDataPermission && this.radioSelected == 3) {
      this.userReqObj.created_by = null;
      this.userReqObj.user_head_id = null;
    }
    const body = {
      created_by: this.userReqObj.created_by,
      user_head_id: this.userReqObj.user_head_id,
      currentUserId: this.currentUserId
    }
    this.userService.getUserList(body).subscribe(data => {
      if (!data[0].error) {
        this.userList = data[0].data;
        this.rowData = data[0].data;
        // this.source = new LocalDataSource(this.userList);
      }
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.getUserList(this.currentUserId);
  }

  onExport() {
    var params = {
      columnKeys: this.columnExportDefs
    };
    var data = this.gridApi.getDataAsCsv(params);
    console.log(data);
    this.papa.parse(data, {
      complete: (result) => {
        console.log('Parsed: ', result);
        this.getObject(result.data);
        this.exportExcel(result.data);
      }
    });
  }
  getObject(data) {
    let obj: Object = {};
    this.columnExportDefs.forEach(ele => {
      obj[ele] = '';
    });
  }

  exportExcel(data) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, 'my_file.xls', { bookType: 'xls', type: 'buffer' });
  }
  onAddUser() {
    if (this.addUserPermission) {
      this.router.navigate(['/pages/user/add-user']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add user. If you want to add user ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}
@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editUser()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red;" (click)="onDeleteUser()"></i>`,
  styleUrls: ['./view-user.component.scss']
})

export class CustomRendererUserComponent implements AgRendererComponent {
  params: any;
  userPermission = [];
  editUserPermission = 0;
  deleteUserPermission = 0;
  currentUser$: Subscription;
  currentUser: User;

  constructor(private router: Router, private _modalService: NgbModal, private userService: UserService,
    private toasterService: ToastrService, private permissionService: PermissionService, private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.userPermission = ele.user_permission;
      }
    });
  }
  agInit(params: any): void {
    this.params = params;
    this.userPermission.forEach(ele => {
      if (ele.form_name === 'User') {
        if (this.params.action.radioSelected == 1) {
          this.editUserPermission = ele.can_edit;
          this.deleteUserPermission = ele.can_delete;
        } else if (this.params.action.radioSelected == 2) {
          this.editUserPermission = ele.can_edit_group;
          this.deleteUserPermission = ele.can_delete_group;
        } else if (this.params.action.radioSelected == 3) {
          this.editUserPermission = ele.can_edit_all;
          this.deleteUserPermission = ele.can_delete_all;
        }
      }
    })
  }
  refresh(): boolean {
    return false;
  }

  editUser() {
    if (this.editUserPermission) {
      this.router.navigate([this.params.inRouterLink + this.params.value]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit user. If you want to edit user ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onDeleteUser() {
    if (this.deleteUserPermission) {
      const modalRef = this._modalService.open(ConfirmDialogComponent);
      modalRef.componentInstance.titleFrom = 'Delete User ';
      modalRef.componentInstance.message = 'Are you sure you want to delete this user?';
      modalRef.result
        .then((result) => {
          if (result) {
            const id = this.params.value;
            this.userService.deleteUser(id).subscribe(data => {
              if (!data[0].error) {
                this.params.action.getUserList();
                this.toasterService.success(data[0].message);
              } else {
                this.toasterService.error(data[0].message);
              }
            });
          }
        });
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete user. If you want to delete user ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}
