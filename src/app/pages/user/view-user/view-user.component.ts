import { Component, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { PermissionService } from '../../../@theme/services/permission.service';
import { Papa } from 'ngx-papaparse';
import { ColDef } from 'ag-grid-community';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { User } from "../../../@theme/model/user-class";
import { UserService } from "../../../@theme/services/user.service";
import { Subscription } from 'rxjs';
import { AuthService } from '../../../@theme/services/auth.service';


@Component({
  selector: 'ngx-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

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
        }
      })
    }
    // this.currentUserId = JSON.parse(localStorage.currentUser).user_id
    this.getUserList();
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

  getUserList() {
    this.userList = [];
    this.userService.getUserList(this.currentUserId).subscribe(data => {
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

  constructor(private router: Router, private _modalService: NgbModal, private userService: UserService,
    private toasterService: ToastrService, private permissionService: PermissionService) {
  }
  agInit(params: any): void {
    this.params = params;
    this.userPermission = (JSON.parse(localStorage.getItem('currentUserPermission')));
    this.userPermission.forEach(ele => {
      if (ele.form_name === 'User') {
        // this.editUserPermission = ele.can_edit;
        // this.deleteUserPermission = ele.can_delete;
        this.editUserPermission = 1;
        this.deleteUserPermission = 1;
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
