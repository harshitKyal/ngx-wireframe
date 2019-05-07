import { Component, OnInit } from '@angular/core';
import { LotMast } from '../../../@theme/model/lot-class';
import { LotService } from '../../../@theme/services/lot.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from '../../../@theme/services/permission.service';
import { Papa } from 'ngx-papaparse';
import { ColDef } from 'ag-grid-community';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-view-lot',
  templateUrl: './view-lot.component.html',
  styleUrls: ['./view-lot.component.scss']
})
export class ViewLotComponent implements OnInit {

  lotList: LotMast[] = [];
  currentUser;
  rowData;
  gridApi;
  gridColumnApi;
  addLotPermission = 1;
  columnDefs = [
    { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
    { headerName: 'Lot No.', field: 'lot_id', sortable: true, filter: true },
    { headerName: 'Quality Id', field: 'quality_id', sortable: true, filter: true },
    { headerName: 'Quality Name', field: 'quality_name', sortable: true, filter: true },
    { headerName: 'Quality Type', field: 'quality_type', sortable: true, filter: true },
  ];
  columnExportDefs = [
    'lot_id', 'quality_id', 'quality_name', 'quality_type'];
  currentUserId: any;

  constructor(private lotService: LotService, private router: Router, private tosterService: ToastrService
    , private permissionService: PermissionService, private papa: Papa) {
    this.setColumns();
  }


  ngOnInit() {
    this.currentUserId = JSON.parse(localStorage.currentUser).user_id
    this.getLotData();
  }

  getLotData() {
    this.lotService.getAllLots().subscribe(data => {
      if (!data[0].error) {
        this.lotList = data[0].data;
        this.rowData = data[0].data;
      } else {
        this.tosterService.error(data[0].message);
      }
    });
  }
  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'entry_id') {
        column.cellRendererFramework = CustomRendererLotComponent;
        column.cellRendererParams = {
          inRouterLink: '/pages/lot/edit-lot/',
          inViewLink: '/pages/lot/view-lot/',
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
  onAddLot() {
    if (this.addLotPermission) {
      this.router.navigate(['/pages/lot/add-lot']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add lot. If you want to add lot ask admin for permission.');
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
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editLot()"></i>
  <i class="ft-info font-medium-1 mr-2" style="color:#4ca6ff" (click)="viewLot()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteLot()"></i>`,
  styleUrls: ['./view-lot.component.scss']
})

export class CustomRendererLotComponent implements AgRendererComponent {
  params: any;
  editLotPermission = 1;
  deleteLotPermission = 1;

  constructor(private router: Router, private _modalService: NgbModal, private lotService: LotService,
    private toasterService: ToastrService, private permissionService: PermissionService) {
  }
  agInit(params: any): void {
    this.params = params;
    // this.editLotPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_edit_lot);
    // this.deleteLotPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_delete_lot);
  }
  refresh(): boolean {
    return false;
  }

  viewBill() {
    //  this.router.navigate([this.params.inViewLink + 0]);
  }

  editLot() {
    if (this.editLotPermission) {
      this.router.navigate([this.params.inRouterLink + this.params.value]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit lot. If you want to edit lot ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onDeleteLot() {
    if (this.deleteLotPermission) {
      const modalRef = this._modalService.open(ConfirmDialogComponent);
      modalRef.componentInstance.titleFrom = 'Delete Lot ';
      modalRef.componentInstance.message = 'Are you sure you want to delete this lot?';
      modalRef.result
        .then((result) => {
          if (result) {
            const id = this.params.value;
            this.lotService.deleteLotById(id).subscribe(data => {
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
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete lot. If you want to delete lot ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}
