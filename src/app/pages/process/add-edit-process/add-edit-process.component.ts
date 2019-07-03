import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import { Subject, Subscription, Observable, merge } from 'rxjs';
import { Process, ProcessRecord, ProcessSubRecord, ProcessReq, ProcessReqRecord } from '../../../@theme/model/process-class';
import { Quality } from '../../../@theme/model/quality-class';
import { Party } from '../../../@theme/model/party-class';
import { ViewReqObj, User } from '../../../@theme/model/user-class';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyService } from '../../../@theme/services/party.service';
import { ProcessService } from '../../../@theme/services/process.service';
import { QualityService } from '../../../@theme/services/quality.service';
import { AuthService } from '../../../@theme/services/auth.service';
import { ShadeService } from '../../../@theme/services/shade.service';
import { FabricInService } from '../../../@theme/services/fabric-in.service';
import { BatchService } from '../../../@theme/services/batch.service';
import { ColDef } from 'ag-grid-community';
import { CustomRendererStockRecordComponent } from '../../fabric-in/add-edit-fabric-in/add-edit-fabric-in.component';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { AgRendererComponent } from 'ag-grid-angular';
import { SupplierItemRecord } from '../../../@theme/model/supplier-class';
import { SupplierService } from '../../../@theme/services/supplier.service';

@Component({
  selector: 'ngx-add-edit-process',
  templateUrl: './add-edit-process.component.html',
  styleUrls: ['./add-edit-process.component.scss']
})
export class AddEditProcessComponent implements OnInit {


  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  processModal: Process;
  flagDivSForm = false;
  flagDivRForm = false;
  flagDivDForm = false;
  flagDivCForm = false;
  id: any;
  subBtnName = '';
  topHeader = '';
  viewFlag = false;
  rowScouringData: any;
  rowRCData: any;
  rowDyingData: any;
  rowColdWashData: any;
  processRecord: ProcessRecord[] = [];
  scouringRecord: ProcessRecord;
  scouringSubRecordArray: ProcessSubRecord[] = [];
  scouringSubRecord: ProcessSubRecord;
  rcRecord: ProcessRecord;
  rcSubRecordArray: ProcessSubRecord[] = [];
  rcSubRecord: ProcessSubRecord;
  dyingRecord: ProcessRecord;
  dyingSubRecordArray: ProcessSubRecord[] = [];
  dyingSubRecord: ProcessSubRecord;
  coldWashRecord: ProcessRecord;
  coldWashSubRecordArray: ProcessSubRecord[] = [];
  coldWashSubRecord: ProcessSubRecord;
  currentUserId: any;
  currentUserHeadid: any;
  currentUser$: Subscription;
  currentUser: User;
  itemList: SupplierItemRecord[] = [];
  processReq: ProcessReq;
  processReqRecord: ProcessReqRecord[] = [];

  scouringcolumnDefs = [
    { headerName: 'Actions', field: 'index', width: 70 },
    { headerName: 'Item Name', field: 'item_name', width: 110 },
    { headerName: 'Concentration', field: 'concentration', width: 110 },
    { headerName: 'By', field: 'item_by', width: 90 },
    { headerName: 'Supplier Name', field: 'supplier_name', width: 110 },
  ];
  dyingcolumnDefs = [
    { headerName: 'Actions', field: 'index', width: 70 },
    { headerName: 'Item Name', field: 'item_name', width: 110 },
    { headerName: 'Concentration', field: 'concentration', width: 110 },
    { headerName: 'By', field: 'item_by', width: 90 },
    { headerName: 'Supplier Name', field: 'supplier_name', width: 110 },
  ];
  rccolumnDefs = [
    { headerName: 'Actions', field: 'index', width: 70 },
    { headerName: 'Item Name', field: 'item_name', width: 110 },
    { headerName: 'Concentration', field: 'concentration', width: 110 },
    { headerName: 'By', field: 'item_by', width: 90 },
    { headerName: 'Supplier Name', field: 'supplier_name', width: 110 },
  ];
  coldwashcolumnDefs = [
    { headerName: 'Actions', field: 'index', width: 70 },
    { headerName: 'Item Name', field: 'item_name', width: 110 },
    { headerName: 'Concentration', field: 'concentration', width: 110 },
    { headerName: 'By', field: 'item_by', width: 90 },
    { headerName: 'Supplier Name', field: 'supplier_name', width: 110 },
  ];
  currentUserPermission: any;
  currentUserGroupUserIds: any;

  constructor(private toasterService: ToastrService, private route: ActivatedRoute,
    private router: Router, private processService: ProcessService,
    private authService: AuthService, private supplierService: SupplierService) {
    this.processModal = new Process();
    this.scouringRecord = new ProcessRecord();
    this.dyingRecord = new ProcessRecord();
    this.rcRecord = new ProcessRecord();
    this.coldWashRecord = new ProcessRecord();
    this.scouringSubRecord = new ProcessSubRecord();
    this.coldWashSubRecord = new ProcessSubRecord();
    this.dyingSubRecord = new ProcessSubRecord();
    this.rcSubRecord = new ProcessSubRecord();
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserHeadid = ele.user.user_head_id;
        this.currentUserPermission = ele.user_permission;
        this.currentUserGroupUserIds = ele.user.group_user_ids;
      }
    });
  }

  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  ngOnInit() {
    this.setScouringColumns();
    this.setRCColumns();
    this.setColdWashColumns();
    this.setDyingColumns();
    this.getItemList();
    this.onPageLoad();
  }
  onPageLoad() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      if (this.id) {
        this.subBtnName = 'Update';
        this.topHeader = 'Edit Process';

      } else {
        this.topHeader = 'Process View';
        this.viewFlag = true;
      }
      this.processService.getProcessById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.processModal = data[0].data.process[0];
            this.processReqRecord = data[0].data.process_record;
            if (this.processReqRecord.length) {
              let scouringIndex = 0;
              let dyingIndex = 0;
              let rcIndex = 0;
              let coldWashIndex = 0;
              this.processReqRecord.forEach((ele, index) => {
                if (ele.type === 'scouring') {
                  if (!scouringIndex) {
                    this.setProcessRecordOnLoad(this.scouringRecord, ele);
                  }
                  scouringIndex += 1;
                  this.setProcessSubRecordOnLoad(this.scouringSubRecordArray, this.scouringSubRecord, ele, scouringIndex);
                } else if (ele.type === 'rc') {
                  if (!rcIndex) {
                    this.setProcessRecordOnLoad(this.rcRecord, ele);
                  }
                  rcIndex += 1;
                  this.setProcessSubRecordOnLoad(this.rcSubRecordArray, this.rcSubRecord, ele, rcIndex);
                } else if (ele.type === 'cold_wash') {
                  if (!coldWashIndex) {
                    this.setProcessRecordOnLoad(this.coldWashRecord, ele);
                  }
                  coldWashIndex += 1;
                  this.setProcessSubRecordOnLoad(this.coldWashSubRecordArray, this.coldWashSubRecord, ele, coldWashIndex);
                } else if (ele.type === 'dying') {
                  if (!dyingIndex) {
                    this.setProcessRecordOnLoad(this.dyingRecord, ele);
                  }
                  dyingIndex += 1;
                  this.setProcessSubRecordOnLoad(this.dyingSubRecordArray, this.dyingSubRecord, ele, dyingIndex);
                }
              })
            }
            console.log('dying', this.dyingSubRecordArray)
            this.rowColdWashData = this.coldWashSubRecordArray;
            this.rowDyingData = this.dyingSubRecordArray;
            this.rowRCData = this.rcSubRecordArray;
            this.rowScouringData = this.scouringSubRecordArray;
            this.processModal.process_record = this.processRecord
          } else {
            this.toasterService.error(data.message);
          }
        }, error => {
          this.toasterService.error('Server Error');
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add Process';
    }
  }
  setProcessRecordOnLoad(processRecord, ele) {
    processRecord.type = ele.index;
    processRecord.control_id = ele.control_id;
    processRecord.temperature = ele.temperature;
    processRecord.plc_program_no = ele.plc_program_no;
    processRecord.hold_time = ele.hold_time;
    processRecord.rate_temperature = ele.rate_temperature;
  }
  setProcessSubRecordOnLoad(prcoessSubRecordArray, processSubRecordObj, ele, index) {
    processSubRecordObj = new ProcessSubRecord();
    processSubRecordObj.entry_id = ele.entry_id;
    processSubRecordObj.index = index;
    processSubRecordObj.item_id = ele.item_id;
    processSubRecordObj.item_name = ele.item_name;
    processSubRecordObj.concentration = ele.concentration;
    processSubRecordObj.item_by = ele.item_by;
    processSubRecordObj.supplier_name = ele.supplier_name;
    prcoessSubRecordArray.push(processSubRecordObj);
  }
  setScouringColumns() {
    this.scouringcolumnDefs.forEach((column: ColDef) => {
      if (column.field === 'index') {
        column.cellRendererFramework = CustomRendererScouringRecordComponent;
        column.cellRendererParams = {
          action: this
        };
      }
    });
  }
  setRCColumns() {
    this.rccolumnDefs.forEach((column: ColDef) => {
      if (column.field === 'index') {
        column.cellRendererFramework = CustomRendererRCRecordComponent;
        column.cellRendererParams = {
          action: this
        };
      }
    });
  }
  setColdWashColumns() {
    this.coldwashcolumnDefs.forEach((column: ColDef) => {
      if (column.field === 'index') {
        column.cellRendererFramework = CustomRendererColdWashRecordComponent;
        column.cellRendererParams = {
          action: this
        };
      }
    });
  }
  setDyingColumns() {
    this.dyingcolumnDefs.forEach((column: ColDef) => {
      if (column.field === 'index') {
        column.cellRendererFramework = CustomRendererDyingRecordComponent;
        column.cellRendererParams = {
          action: this
        };
      }
    });
  }

  getItemList() {
    console.log('dsae');
    this.supplierService.getAllSupplierItemData().subscribe(data => {
      if (!data[0].error) {
        this.itemList = data[0].data;
      }
    })
  }
  selectItem(value, table_name) {
    this.flagDivSForm = false;
    this.flagDivCForm = false;
    this.flagDivDForm = false;
    this.flagDivRForm = false;
    if (table_name === 'scouring') {
      this.scouringSubRecord.item_id = value.entry_id;
      this.scouringSubRecord.item_name = value.item_name;
      this.scouringSubRecord.supplier_name = value.supplier_name;
    } else if (table_name === 'rc') {
      this.rcSubRecord.item_id = value.entry_id;
      this.rcSubRecord.item_name = value.item_name;
      this.rcSubRecord.supplier_name = value.supplier_name;
    } else if (table_name === 'dying') {
      this.dyingSubRecord.item_id = value.entry_id;
      this.dyingSubRecord.item_name = value.item_name;
      this.dyingSubRecord.supplier_name = value.supplier_name;
    } else if (table_name === 'cold_wash') {
      this.coldWashSubRecord.item_id = value.entry_id;
      this.coldWashSubRecord.item_name = value.item_name;
      this.coldWashSubRecord.supplier_name = value.supplier_name;
    }
  }
  HideShowSForm() {
    this.flagDivSForm = !this.flagDivSForm;
  }
  HideShowRForm() {
    this.flagDivRForm = !this.flagDivRForm;
  }
  HideShowDForm() {
    this.flagDivDForm = !this.flagDivDForm;
  }
  HideShowCForm() {
    this.flagDivCForm = !this.flagDivCForm;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
      return false;
    }
    return true;
  }
  onAddScouringRecord(form: NgForm) {
    let flag = 0;
    let j = 1;
    if (!this.scouringSubRecordArray.length) {
      this.scouringSubRecord.index = j;
    } else if (this.scouringSubRecord.index == undefined) {
      this.scouringSubRecord.index = this.scouringSubRecordArray.length + 1;
    }
    this.scouringSubRecordArray.forEach(ele => {
      if (ele.index == this.scouringSubRecord.index) {
        ele = this.scouringSubRecord
        flag = 1;
      }
    });
    if (!flag) {
      this.scouringSubRecordArray.push(this.scouringSubRecord);
    }
    this.rowScouringData = [...this.scouringSubRecordArray];
    this.scouringSubRecord = new ProcessSubRecord();
    form.resetForm();
  }

  onEditScouringRecord(data) {
    console.log('data', data);
    let i = this.scouringSubRecordArray.findIndex(v => v.index == data);
    console.log('index', i);
    console.log('record', this.scouringSubRecordArray)
    this.scouringSubRecord = this.scouringSubRecordArray[i];
  }

  deleteScouringRecord(data) {
    console.log(data);
    let i = this.scouringSubRecordArray.findIndex(v => v.index == data);
    console.log('index', i);
    this.scouringSubRecordArray.splice(i, 1);
    this.rowScouringData = [...this.scouringSubRecordArray]
  }

  onAddRCRecord(form: NgForm) {
    let flag = 0;
    let j = 1;
    if (!this.rcSubRecordArray.length) {
      this.rcSubRecord.index = j;
    } else if (this.rcSubRecord.index == undefined) {
      this.rcSubRecord.index = this.rcSubRecordArray.length + 1;
    }
    this.rcSubRecordArray.forEach(ele => {
      if (ele.index == this.rcSubRecord.index) {
        ele = this.rcSubRecord
        flag = 1;
      }
    });
    if (!flag) {
      this.rcSubRecordArray.push(this.rcSubRecord);
    }
    this.rowRCData = [...this.rcSubRecordArray];
    this.rcSubRecord = new ProcessSubRecord();
    form.resetForm();
  }

  onEditRCRecord(data) {
    let i = this.rcSubRecordArray.findIndex(v => v.index == data);
    this.rcSubRecord = this.rcSubRecordArray[i];
  }

  deleteRCRecord(data) {
    let i = this.rcSubRecordArray.findIndex(v => v.index == data);
    this.rcSubRecordArray.splice(i, 1);
    this.rowRCData = [...this.rcSubRecordArray]
  }
  onAddDyingRecord(form: NgForm) {
    let flag = 0;
    let j = 1;
    if (!this.dyingSubRecordArray.length) {
      this.dyingSubRecord.index = j;
    } else if (this.dyingSubRecord.index == undefined) {
      this.dyingSubRecord.index = this.dyingSubRecordArray.length + 1;
    }
    this.dyingSubRecordArray.forEach(ele => {
      if (ele.index == this.dyingSubRecord.index) {
        ele = this.dyingSubRecord
        flag = 1;
      }
    });
    if (!flag) {
      this.dyingSubRecordArray.push(this.dyingSubRecord);
    }
    this.rowDyingData = [...this.dyingSubRecordArray];
    this.dyingSubRecord = new ProcessSubRecord();
    form.resetForm();
  }

  onEditDyingRecord(data) {
    console.log('data', data);
    let i = this.dyingSubRecordArray.findIndex(v => v.index == data);
    this.dyingSubRecord = this.dyingSubRecordArray[i];
  }

  deleteDyingRecord(data) {
    let i = this.dyingSubRecordArray.findIndex(v => v.index == data);
    this.dyingSubRecordArray.splice(i, 1);
    this.rowDyingData = [...this.dyingSubRecordArray]
  }
  onAddColdWashRecord(form: NgForm) {
    let flag = 0;
    let j = 1;
    if (!this.coldWashSubRecordArray.length) {
      this.coldWashSubRecord.index = j;
    } else if (this.coldWashSubRecord.index == undefined) {
      this.coldWashSubRecord.index = this.coldWashSubRecordArray.length + 1;
    }
    this.coldWashSubRecordArray.forEach(ele => {
      if (ele.index == this.coldWashSubRecord.index) {
        ele = this.coldWashSubRecord
        flag = 1;
      }
    });
    if (!flag) {
      this.coldWashSubRecordArray.push(this.coldWashSubRecord);
    }
    this.rowColdWashData = [...this.coldWashSubRecordArray];
    this.coldWashSubRecord = new ProcessSubRecord();
    form.resetForm();
  }

  onEditColdWashRecord(data) {
    let i = this.coldWashSubRecordArray.findIndex(v => v.index == data);
    this.coldWashSubRecord = this.coldWashSubRecordArray[i];
  }

  deleteColdWashRecord(data) {
    let i = this.coldWashSubRecordArray.findIndex(v => v.index == data);
    this.coldWashSubRecordArray.splice(i, 1);
    this.rowColdWashData = [...this.coldWashSubRecordArray]
  }

  onCustomFormSubmit(form: NgForm) {
    this.processReq = new ProcessReq();
    this.processReqRecord = [];
    this.processReq.entry_id = this.processModal.entry_id;
    this.processReq.process_name = this.processModal.process_name;
    this.processReq.no_dying_bath = this.processModal.no_dying_bath;
    this.processReq.dc_multiplying_fac = this.processModal.dc_multiplying_fac;
    this.processReq.created_by = this.processModal.created_by;
    this.processReq.created_date = this.processModal.created_date;
    this.processReq.updated_by = this.processModal.updated_by;
    this.processReq.updated_date = this.processModal.updated_date;
    if (this.scouringSubRecordArray.length) {
      this.scouringSubRecordArray.forEach(ele => {
        this.getProcessReqRecord(ele, this.scouringRecord, 'scouring');
      })
    }
    if (this.dyingSubRecordArray.length) {
      this.dyingSubRecordArray.forEach(ele => {
        this.getProcessReqRecord(ele, this.dyingRecord, 'dying');
      })
    }
    if (this.rcSubRecordArray.length) {
      this.rcSubRecordArray.forEach(ele => {
        this.getProcessReqRecord(ele, this.rcRecord, 'rc');
      })
    }
    if (this.coldWashSubRecordArray.length) {
      this.coldWashSubRecordArray.forEach(ele => {
        this.getProcessReqRecord(ele, this.coldWashRecord, 'cold_wash');
      })
    }
    if (this.processReqRecord.length) {
      this.processReq.process_req_record = this.processReqRecord;
    }
    console.log('process', this.processReq);

    // for update
    if (this.id) {
      this.processReq.updated_by = this.currentUserId;
      this.processService.updateProcess(this.processReq).subscribe(data => {
        console.log(data)
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/process/view-process-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
      this.processReq.created_by = this.currentUserId;
      this.processReq.user_head_id = this.currentUserHeadid;
      console.log(this.processReq)
      this.processService.addProcess(this.processReq).subscribe(data => {
        data = data[0]
        if (!data.error) {
          this.toasterService.success(data.message);
          form.resetForm();
          this.router.navigate(['/pages/process/view-process-list']);
        } else {
          this.toasterService.error(data.message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    }
  }

  getProcessReqRecord(ele, record, type) {
    let processSingleReqRecord = new ProcessReqRecord();
    processSingleReqRecord.entry_id = ele.entry_id;
    processSingleReqRecord.index = ele.index;
    processSingleReqRecord.item_id = ele.item_id;
    processSingleReqRecord.item_name = ele.item_name;
    processSingleReqRecord.concentration = ele.concentration;
    processSingleReqRecord.supplier_name = ele.supplier_name;
    processSingleReqRecord.item_by = ele.item_by;
    processSingleReqRecord.control_id = record.control_id;
    processSingleReqRecord.type = type;
    processSingleReqRecord.temperature = record.temperature;
    processSingleReqRecord.plc_program_no = record.plc_program_no;
    processSingleReqRecord.hold_time = record.hold_time;
    processSingleReqRecord.rate_temperature = record.rate_temperature;
    this.processReqRecord.push(processSingleReqRecord);
  }
}
@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editRecord()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteRecord()"></i>`,
  styleUrls: ['./add-edit-process.component.scss']
})

export class CustomRendererScouringRecordComponent implements AgRendererComponent {
  params: any;

  constructor(private _modalService: NgbModal, private toasterService: ToastrService) {
  }
  agInit(params: any): void {
    this.params = params;
  }
  refresh(): boolean {
    return false;
  }

  editRecord() {
    console.log('this', this.params.value)
    this.params.action.onEditScouringRecord(this.params.value)
  }
  onDeleteRecord() {
    const modalRef = this._modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.titleFrom = 'Delete record ';
    modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
    modalRef.result
      .then((res) => {
        console.log('rex', res);
        if (res) {
          this.params.action.deleteScouringRecord(this.params.value)
        }
      });
  }
}

@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editRecord()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteRecord()"></i>`,
  styleUrls: ['./add-edit-process.component.scss']
})

export class CustomRendererRCRecordComponent implements AgRendererComponent {
  params: any;

  constructor(private _modalService: NgbModal, private toasterService: ToastrService) {
  }
  agInit(params: any): void {
    this.params = params;
  }
  refresh(): boolean {
    return false;
  }

  editRecord() {
    this.params.action.onEditRCRecord(this.params.value)
  }
  onDeleteRecord() {
    const modalRef = this._modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.titleFrom = 'Delete record ';
    modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
    modalRef.result
      .then((result) => {
        if (result) {
          this.params.action.deleteRCRecord(this.params.value)
        }
      });
  }
}

@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editRecord()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteRecord()"></i>`,
  styleUrls: ['./add-edit-process.component.scss']
})

export class CustomRendererColdWashRecordComponent implements AgRendererComponent {
  params: any;

  constructor(private _modalService: NgbModal, private toasterService: ToastrService) {
  }
  agInit(params: any): void {
    this.params = params;
  }
  refresh(): boolean {
    return false;
  }

  editRecord() {
    this.params.action.onEditColdWashRecord(this.params.value)
  }
  onDeleteRecord() {
    const modalRef = this._modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.titleFrom = 'Delete record ';
    modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
    modalRef.result
      .then((result) => {
        if (result) {
          this.params.action.deleteColdWashRecord(this.params.value)
        }
      });
  }
}

@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editRecord()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteRecord()"></i>`,
  styleUrls: ['./add-edit-process.component.scss']
})

export class CustomRendererDyingRecordComponent implements AgRendererComponent {
  params: any;

  constructor(private _modalService: NgbModal, private toasterService: ToastrService) {
  }
  agInit(params: any): void {
    this.params = params;
  }
  refresh(): boolean {
    return false;
  }

  editRecord() {
    console.log('this.params', this.params.action);
    this.params.action.onEditDyingRecord(this.params.value)
  }
  onDeleteRecord() {
    const modalRef = this._modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.titleFrom = 'Delete record ';
    modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
    modalRef.result
      .then((result) => {
        if (result) {
          this.params.action.deleteDyingRecord(this.params.value)
        }
      });
  }
}
