import * as _ from "lodash";
import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


import { ColDef } from "ag-grid-community";
import { AgRendererComponent } from "ag-grid-angular";
import { Papa } from "ngx-papaparse";
import * as XLSX from 'xlsx';
import { User } from "../../@theme/model/user-class";
import { UserService } from "../../@theme/services/user.service";
import { PermissionService } from "../../@theme/services/permission.service";
import { ConfirmDialogComponent } from "../../@theme/components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  userList: User[] = [];
  currentUser;
  addUserPermission = 0;
  rowData;
  gridApi;
  gridColumnApi;
  columnDefs = [
    { headerName: 'User Name', field: 'user_name', sortable: true, filter: 'agTextColumnFilter' },
    { headerName: 'First Name', field: 'first_name', sortable: true, filter: 'agDateColumnFilter' },
    { headerName: 'last Name', field: 'last_name', sortable: true, filter: true },
    { headerName: 'Company', field: 'company_id', sortable: true, filter: true },
    { headerName: 'Designation', field: 'designation', sortable: true, filter: true },
    { headerName: 'Contact', field: 'mobile_no', sortable: true, filter: true },
    { headerName: 'Actions', field: 'user_id', width: 100 },

  ];
  columnExportDefs = [
    'user_name', 'first_name', 'last_name', 'company_id'];
  // filterSource: LocalDataSource;
  //  source: LocalDataSource;
  // settings = {
  //   actions: false,
  //   hideSubHeader: true,
  //   columns: {
  //     user_name: {
  //       title: 'User Name',
  //       filter: false,
  //     },
  //     first_name: {
  //       title: 'First Name',
  //       filter: false,
  //     },
  //     last_name: {
  //       title: 'Last Name',
  //       filter: false,
  //     },
  //     company_id: {
  //       title: 'Company',
  //       filter: false,
  //     },
  //     designation: {
  //       title: 'Designation',
  //       filter: false,
  //     },
  //     mobile_no: {
  //       title: 'Contact',
  //       filter: false
  //     },
  //     user_id: {
  //       title: 'Action',
  //       filter: false,
  //       type: 'custom',
  //       sort: false,
  //       renderComponent: CustomRendererUserComponent,
  //       onComponentInitFunction: (instance) => {
  //         instance.save.subscribe(row => {
  //           if (row) {
  //             var currentUserId = JSON.parse(localStorage.currentUser).user_id
  //             this.getUserList(currentUserId);
  //           }
  //         });
  //       }
  //     }
  //   }
  // };

  filtersettings: any;
  currentUserId: any;

  constructor(private userService: UserService, private router: Router,
    private permissionService: PermissionService, private papa: Papa) {
    this.setColumns();
  }


  ngOnInit() {
    this.addUserPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_add_user);
    this.currentUserId = JSON.parse(localStorage.currentUser).user_id
    this.getUserList(this.currentUserId);
  }

  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'user_id') {
        column.cellRendererFramework = CustomRendererUserComponent;
        column.cellRendererParams = {
          inRouterLink: '/user/edit-user/',
          action: this
        };
      }
    });
  }

  getUserList(currentUserId) {
    this.userList = [];
    this.userService.getUserList(currentUserId).subscribe(data => {
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
      this.router.navigate(['./user/add-user']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add user. If you want to add user ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  // onSearch(query: string = '') {
  //   if (query) {
  //     this.source.setFilter([
  //       {
  //         field: 'user_name',
  //         search: query,
  //       },
  //       {
  //         field: 'first_name',
  //         search: query,
  //       },
  //       {
  //         field: 'last_name',
  //         search: query,
  //       },
  //       {
  //         field: 'designation',
  //         search: query,
  //       },
  //       {
  //         field: 'mobile_no',
  //         search: query,
  //       },
  //     ], false, true);
  //   } else {
  //     this.source = new LocalDataSource(this.userList);
  //   }
  // }

}
@Component({
  template: `
  <i class="ft-edit-2 info font-medium-1 mr-2" (click)="editUser()"></i>
  <i class="ft-x danger font-medium-1 mr-2" (click)="onDeleteUser()"></i>`,
  styleUrls: ['./user.component.scss']
})

export class CustomRendererUserComponent implements AgRendererComponent {
  params: any;
  editUserPermission = 0;
  deleteUserPermission = 0;

  constructor(private router: Router, private _modalService: NgbModal, private userService: UserService,
    private toasterService: ToastrService, private permissionService: PermissionService) {
  }
  agInit(params: any): void {
    this.params = params;
    this.editUserPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_edit_user);
    this.deleteUserPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_delete_user);
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


// export class CustomRendererUserComponent implements ViewCell, OnInit {
//   value: any;
//   rowData: any;
//   title: any;
//   editUserPermission = 0;
//   deleteUserPermission = 0;

//   constructor(private router: Router, private _modalService: NgbModal, private userService: UserService,
//     private toasterService: ToastrService, private permissionService: PermissionService) {
//   }
//   renderValue: string;
//   @Output() save: EventEmitter<any> = new EventEmitter();

//   ngOnInit() {
//     this.editUserPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_edit_user);
//     this.deleteUserPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_delete_user);
//   }

//   editUser() {
//     if (this.editUserPermission) {
//       this.router.navigate(['/user/edit-user/' + this.value]);
//     } else {
//       const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit user. If you want to edit user ask admin for permission.');
//       if (res) {

//       } else {

//       }
//     }
//   }
//   onDeleteUser() {
//     if (this.deleteUserPermission) {
//       const modalRef = this._modalService.open(ConfirmDialogComponent);
//       modalRef.componentInstance.titleFrom = 'Delete User ';
//       modalRef.componentInstance.message = 'Are you sure you want to delete this user?';
//       modalRef.result
//         .then((result) => {
//           if (result) {
//             const id = this.value;
//             this.userService.deleteUser(id).subscribe(data => {
//               if (!data[0].error) {
//                 this.save.emit(true);
//                 this.toasterService.success(data[0].message);
//               } else {
//                 this.toasterService.error(data[0].message);
//               }
//             });
//           }
//         });
//     } else {
//       const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete user. If you want to delete user ask admin for permission.');
//       if (res) {

//       } else {

//       }
//     }
//   }
// }
