import { Component, OnInit, OnDestroy } from '@angular/core';
import { Quality } from '../../../@theme/model/quality-class';
import { LocalDataSource } from 'ng2-smart-table';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { PermissionService } from '../../../@theme/services/permission.service';
import { Router } from '@angular/router';
import { QualityService } from '../../../@theme/services/quality.service';
import { PrintService } from '../../../@theme/services/print.service';
import { QzTrayService } from '../../../@theme/services/qz-tray.service';
import { ColDef } from 'ag-grid-community';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import { AuthService } from '../../../@theme/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-view-quality',
  templateUrl: './view-quality.component.html',
  styleUrls: ['./view-quality.component.scss']
})
export class ViewQualityComponent implements OnInit, OnDestroy {

  columnDefs = [
    { headerName: 'Actions', field: 'entry_id', width: 100 },
    { headerName: 'Quality Id', field: 'quality_id', sortable: true, filter: 'agNumberColumnFilter' },
    { headerName: 'Quality Name', field: 'quality_name', sortable: true, filter: 'agDateColumnFilter' },
    { headerName: 'Quality Type', field: 'quality_type', sortable: true, filter: true },
    { headerName: 'Quality Sub Type', field: 'quality_sub_type', sortable: true, filter: true },
    { headerName: 'Party Name', field: 'party_name', sortable: true, filter: true },
  ];
  addQualityPermission = 0;
  rowData: any;
  settings = {
    actions: false,
    hideSubHeader: true,
    pagination: true,
    columns: {
      quality_id: {
        title: 'Quality Id',
        filter: false,
      },
      quality_name: {
        title: 'Quality Name',
        filter: false,
      },
      quality_type: {
        title: 'Quality Type',
        filter: false,
      },
      quality_sub_type: {
        title: 'Quality Sub Type',
        filter: false,
      },
      party_name: {
        title: 'Party Name',
        filter: false,
      },
      entry_id: {
        title: 'Action',
        filter: false,
        type: 'custom',
        sort: false,
        renderComponent: MyLinkRendererComponent,
        onComponentInitFunction: (instance) => {
          instance.save.subscribe(row => {
            if (row) {
              this.getQualityData();
            }
          });
        }
      }
    },
    pager: {
      perPage: 2
    }
  };

  qualityList: Quality[] = [];
  source: LocalDataSource;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;
  currentUserId: any;

  constructor(private toasterService: ToastrService, private _http: HttpClient, private permissionService: PermissionService,
    private router: Router, private qualityService: QualityService, public printService: PrintService, private qzService: QzTrayService,
    private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserPermission = ele.user_permission;
      }
    });
    this.setColumns();

  }
  ngOnInit() {
    if (this.currentUserPermission.length) {
      this.currentUserPermission.forEach(ele => {
        if (ele.form_name === 'Quality') {
          // this.addUserPermission = ele.can_add;
          this.addQualityPermission = 1;
        }
      })
    } this.getQualityData();
  }
  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'entry_id') {
        column.cellRendererFramework = MyLinkRendererComponent;
        column.cellRendererParams = {
          inRouterLink: '/pages/quality/edit-quality/',
          action: this
        };
      }
    });
  }

  onAddQuality() {
    if (this.addQualityPermission) {
      this.router.navigate(['/pages/quality/add-quality']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add quality. If you want to add quality ask admin for permission.');

      if (res) {

      } else {

      }
    }
  }
  onPrintInvoice(data) {
    const invoiceIds = ['101', '102'];
    this.printService
      .printDocument('invoice', invoiceIds, data);
  }
  getQualityData(): any {
    this.qualityService.getAllQualityData().subscribe(data => {
      if (!data[0].error) {
        this.rowData = data[0].data;
        this.qualityList = data[0].data;
        this.source = new LocalDataSource(this.qualityList);
      } else
        this.toasterService.error(data[0].message)
    });
  }
}

@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2"  style="color:#4ca6ff" (click)="editQuality()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteQuality()"></i>`,
  styleUrls: ['./view-quality.component.scss']
})

export class MyLinkRendererComponent implements AgRendererComponent {
  params: any;
  editQualityPermission = 0;
  deleteQualityPermission = 0;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;

  constructor(private router: Router, private modalService: NgbModal, private qualityService: QualityService,
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
      if (ele.form_name === 'Quality') {
        // this.editBillPermission = ele.can_edit;
        // this.deleteBillPermission = ele.can_delete;
        this.editQualityPermission = 1;
        this.deleteQualityPermission = 1;
      }
    })
  }
  refresh(): boolean {
    return false;
  }
  editQuality() {
    if (this.editQualityPermission) {
      this.router.navigate([this.params.inRouterLink + this.params.value]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit quality. If you want to edit quality ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onDeleteQuality() {
    if (this.deleteQualityPermission) {
      const dialogRef = this.modalService.open(ConfirmDialogComponent);
      dialogRef.componentInstance.message = 'Are you sure you want to delete quality ?';
      dialogRef.componentInstance.titleFrom = 'Delete Quality'
      dialogRef.result.then((result: any) => {
        if (result) {
          const id = this.params.value;
          this.qualityService.deleteQualityById(id).subscribe(data => {
            if (!data[0].error) {
              this.params.action.getQualityData();
              this.toasterService.success(data[0].message);
            } else {
              this.toasterService.error(data[0].message);
            }
          });
        }
      });
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete quality. If you want to delete quality ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}