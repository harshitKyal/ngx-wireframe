import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColDef } from 'ag-grid-community';
import { AgRendererComponent } from 'ag-grid-angular';
import { Papa } from 'ngx-papaparse';
import * as XLSX from 'xlsx';
import { Party } from '../../../@theme/model/party-class';
import { PartyService } from '../../../@theme/services/party.service';
import { PermissionService } from '../../../@theme/services/permission.service';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'ngx-view-party',
  templateUrl: './view-party.component.html',
  styleUrls: ['./view-party.component.scss']
})

export class ViewPartyComponent implements OnInit {

  partyList: Party[] = [];
  currentUser;
  rowData;
  gridApi;
  gridColumnApi;
  addPartyPermission = 1;
  columnDefs = [
    { headerName: 'Party Name', field: 'party_name', sortable: true, filter: 'agTextColumnFilter' },
    { headerName: 'Party Address1', field: 'party_address1', sortable: true, filter: 'agDateColumnFilter' },
    { headerName: 'Contact', field: 'contact_no', sortable: true, filter: true },
    { headerName: 'City', field: 'city', sortable: true, filter: true },
    { headerName: 'State', field: 'state', sortable: true, filter: true },
    // { headerName: 'GSTIN', field: 'GSTIN', sortable: true, filter: true },
    { headerName: 'Actions', field: 'party_id', width: 100 },

  ];
  columnExportDefs = [
    'party_name', 'party_address1', 'contact_no', 'city'];
  currentUserId: any;

  constructor(private partyService: PartyService, private router: Router, private tosterService: ToastrService
    , private permissionService: PermissionService, private papa: Papa) {
    this.setColumns();
  }


  ngOnInit() {
    // this.currentUserId = JSON.parse(localStorage.currentUser).user_id
    this.getPartyData();
  }

  getPartyData() {

    this.partyService.getPartyList().subscribe(data => {
      if (!data[0].error) {
        this.partyList = data[0].data;
        this.rowData = data[0].data;
      } else {
        this.tosterService.error(data[0].message);
      }
    });
  }
  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'party_id') {
        column.cellRendererFramework = CustomRendererPartyComponent;
        column.cellRendererParams = {
          inRouterLink: '/pages/party/edit-party/',
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
  onAddParty() {
    if (this.addPartyPermission) {
      this.router.navigate(['/pages/party/add-party']);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add party. If you want to add party ask admin for permission.');
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
    // console.log(data);
    this.papa.parse(data, {
      complete: (result) => {
        console.log('Parsed: ', result);
        // this.getObject(result.data);
        this.exportExcel(result.data);
      }
    });
  }
  // getObject(data) {
  //   let obj: Object = {};
  //   this.columnExportDefs.forEach(ele => {
  //     obj[ele] = '';
  //   });
  // }

  exportExcel(data) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    console.log('work', worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, 'my_file.xls', { bookType: 'xls', type: 'buffer' });
  }
}

@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editParty()"></i>
  <i class="ft-x font-medium-1 mr-2"  style="color:red" (click)="onDeleteParty()"></i>`,
  styleUrls: ['./view-party.component.scss']
})

export class CustomRendererPartyComponent implements AgRendererComponent {
  params: any;
  editPartyPermission = 1;
  deletePartyPermission = 0;

  constructor(private router: Router, private _modalService: NgbModal, private partyService: PartyService,
    private toasterService: ToastrService, private permissionService: PermissionService) {
  }
  agInit(params: any): void {
    this.params = params;
    // this.editPartyPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_edit_user);
    // this.deletePartyPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_delete_user);
  }
  refresh(): boolean {
    return false;
  }

  editParty() {
    if (this.editPartyPermission) {
      this.router.navigate([this.params.inRouterLink + this.params.value]);
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit party. If you want to edit party ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
  onDeleteParty() {
    if (this.deletePartyPermission) {
      const modalRef = this._modalService.open(ConfirmDialogComponent);
      modalRef.componentInstance.titleFrom = 'Delete Party ';
      modalRef.componentInstance.message = 'Are you sure you want to delete this party?';
      modalRef.result
        .then((result) => {
          if (result) {
            const id = this.params.value;
            this.partyService.deleteParty(id).subscribe(data => {
              if (!data[0].error) {
                this.params.action.getPartyData();
                this.toasterService.success(data[0].message);
              } else {
                this.toasterService.error(data[0].message);
              }
            });
          }
        });
    } else {
      const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete party. If you want to delete party ask admin for permission.');
      if (res) {

      } else {

      }
    }
  }
}
// export class PartyComponent implements OnInit {
//   rows = [];
//   page = new Page();
//   filterDataObj: FilterData;
//   partyReqObj: PartyReqObj;
//   applyFilterFlag = false;
//   columns = [
//     { 'prop': 'party_name' },
//     { 'prop': 'party_address1' },
//     { 'prop': 'contact_no' },
//     { 'prop': 'city' },
//     { 'prop': 'state' },
//     { 'prop': 'GSTIN' },
//     { 'prop': 'party_id' }
//   ];
//   columnFilter = [
//     { 'prop': 'party_name' },
//     { 'prop': 'party_address1' },
//     { 'prop': 'contact_no' },
//     { 'prop': 'city' },
//     { 'prop': 'state' },
//     { 'prop': 'GSTIN' },
//   ];
//   partyNameList;
//   partyAddressList;
//   partyCityList;
//   partyStateList;
//   cities2 = [
//     { id: 1, name: 'Vilnius' },
//     { id: 2, name: 'Kaunas' },
//     { id: 3, name: 'Pavilnys', disabled: true },
//     { id: 4, name: 'Pabradė' },
//     { id: 5, name: 'Klaipėda' }
//   ];
//   selectedCityIds: string[];
//   selectedNameIds: string[];
//   selectedAddressIds: string[];
//   selectedStateIds: string[];

//   constructor(private partyService: PartyService, private tosterService: ToastrService, private router: Router,
//     private _modalService: NgbModal) {
//     this.partyReqObj = new PartyReqObj();
//     this.partyReqObj.filterBy = [];
//     this.filterDataObj = new FilterData();
//     this.partyAddressList = new SelectBody();
//     this.partyCityList = new SelectBody();
//     this.partyNameList = new SelectBody();
//     this.partyStateList = new SelectBody();
//     this.page.pageNumber = 0;
//     this.page.size = 5;
//   }

//   ngOnInit() {
//     this.getFilterList();
//     this.getPartyData();
//   }

//   getFilterList() {
//     this.partyService.getFilterList().subscribe(data => {
//       if (!data[0].error) {
//         this.partyNameList = [];
//         this.partyAddressList = [];
//         this.partyCityList = [];
//         this.partyStateList = [];
//         data[0].data.forEach((ele, index) => {
//           if (ele.party_name) {
//             this.partyNameList[index] = ele.party_name;
//           }
//           if (ele.party_address1) {
//             this.partyAddressList[index] = ele.party_address1;

//           }
//           if (ele.city) {
//             this.partyCityList[index] = ele.city;

//           }
//           if (ele.state) {
//             this.partyStateList[index] = ele.state;

//           }
//         });
//       } else {
//         this.tosterService.error(data[0].message);
//       }
//     });
//   }
//   onChange(event, field) {
//     if (event.length) {
//       this.filterDataObj = new FilterData();
//       this.filterDataObj.filterBy = field;
//       this.filterDataObj.filterValue = event;
//       let flag = 0;
//       if (this.partyReqObj.filterBy.length) {
//         this.partyReqObj.filterBy.forEach(ele => {
//           if (ele.filterBy === field) {
//             ele.filterValue = event;
//             flag = 1;
//           }
//         });
//         if (!flag) {
//           this.partyReqObj.filterBy.push(this.filterDataObj);
//         }
//       } else {
//         this.partyReqObj.filterBy.push(this.filterDataObj);
//       }
//     } else {
//       let tempObj = [];
//       this.partyReqObj.filterBy.forEach(ele => {
//         if(ele.filterBy !== field) {
//           tempObj.push(ele);
//         }
//       });
//       this.partyReqObj.filterBy = tempObj;
//     }

//     this.getPartyData();
//     console.log('event', event)
//   }
//   setPage(event) {
//     this.page.pageNumber = event.offset;
//     this.partyReqObj.pageNumber = event.offset;
//     this.getPartyData();
//   }
//   setSorting(event) {
//     console.log('sort', event);
//     this.partyReqObj.pageNumber = 0;
//     this.page.pageNumber = 0;
//     this.partyReqObj.sortBy = event.sorts[0].prop;
//     this.partyReqObj.sortType = event.sorts[0].dir;
//     this.getPartyData();
//   }
//   getPartyData() {
//     console.log('partyReqObj', this.partyReqObj);

//     this.partyService.getPartyList(this.partyReqObj).subscribe(data => {
//       if (!data[0].error) {
//         let dataR = [];
//         this.rows = [];
//         dataR = data[0].data.record;
//         dataR.forEach(element => {
//           this.rows.push(element);
//         });
//         this.rows = [...this.rows];
//         this.page.totalElements = data[0].data.totalElements;
//       } else {
//         this.tosterService.error(data[0].message);
//       }
//     });
//   }

//   onApplyFilters() {
//     this.applyFilterFlag = true;
//   }
//   onResetFilters() {

//   }
//   onEditParty(id) {
//     alert(1)
//   }
//   onDeleteParty(id) {
//   }
// }
