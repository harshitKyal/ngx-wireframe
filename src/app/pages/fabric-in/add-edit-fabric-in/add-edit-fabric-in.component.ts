import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Fabric, FabricInRecord } from '../../../@theme/model/fabric-in-class';
import { Party } from '../../../@theme/model/party-class';
import { Quality } from '../../../@theme/model/quality-class';
import { FabricInService } from '../../../@theme/services/fabric-in.service';
import { PartyService } from '../../../@theme/services/party.service';
import { QualityService } from '../../../@theme/services/quality.service';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import { ViewReqObj } from '../../../@theme/model/user-class';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../@theme/services/auth.service';
import { DatePipe } from '@angular/common';
import { BatchMast, BatchData } from '../../../@theme/model/batch-class';
import { BatchService } from '../../../@theme/services/batch.service';

@Component({
  selector: 'app-add-edit-fabric-in',
  templateUrl: './add-edit-fabric-in.component.html',
  styleUrls: ['./add-edit-fabric-in.component.scss']
})
export class AddEditFabricInComponent implements OnInit, OnDestroy {

  fabricModal: Fabric;
  id: any;
  subBtnName = '';
  topHeader = '';
  viewFlag = false;
  rowData: any;
  partyList: Party[] = [];
  fabricRecord: FabricInRecord[] = [];
  record: FabricInRecord;
  qualityList: Quality[] = [];
  qualityViewReqObj = new ViewReqObj();
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;
  currentUserGroupUserIds: any;
  currentUserHeadid: any;
  batchModal: BatchMast;
  batchDataObj: BatchData;
  batchDataArray: BatchData[] = [];
  columnDefs = [
    { headerName: 'Actions', field: 'index' },
    { headerName: 'Gr', field: 'gr' },
    { headerName: 'Quality Id', field: 'quality_entry_id' },
    { headerName: 'Quality Name', field: 'quality_name' },
    { headerName: 'Quality Type', field: 'quality_type' },
    { headerName: 'Mtr', field: 'mtr' },
    { headerName: 'Wt', field: 'wt' },
    { headerName: 'No. of Cones/Taka', field: 'no_of_cones' },
    { headerName: 'No. of Boxes', field: 'no_of_boxes' },

  ];
  partyReqObj = new ViewReqObj();
  isBatchInitialFlag = 0;

  constructor(private toasterService: ToastrService, private route: ActivatedRoute, private partyService: PartyService,
    private router: Router, private fabricService: FabricInService, private qualityService: QualityService,
    private datePipe: DatePipe, private _modalService: NgbModal, private batchService: BatchService,
    private authService: AuthService) {
    this.fabricModal = new Fabric();
    this.record = new FabricInRecord();
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserPermission = ele.user_permission;
        this.currentUserGroupUserIds = ele.user.group_user_ids;
        this.currentUserHeadid = ele.user.user_head_id;
      }
    });
    this.setColumns();
  }

  ngOnInit() {
    this.getQuality();
    this.getPartyList();
    this.onPageLoad();
  }

  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'index') {
        column.cellRendererFramework = CustomRendererStockRecordComponent;
        column.cellRendererParams = {
          // inRouterLink: '/user/edit-user/',
          action: this
        };
      }
    });
  }

  getQuality() {
    this.qualityViewReqObj.current_user_id = this.currentUserId;
    this.qualityViewReqObj.user_head_id = this.currentUser.user_head_id;
    this.qualityViewReqObj.group_user_ids = this.currentUserGroupUserIds;
    this.qualityViewReqObj.view_group = true;
    this.qualityService.getAllQualityData(this.qualityViewReqObj).subscribe(data => {
      if (!data[0].error) {
        this.qualityList = data[0].data;
      }
    })
  }

  onQualitySelect(value) {
    let i = this.qualityList.findIndex(v => v.entry_id == value);
    this.record.quality_name = this.qualityList[i].quality_name;
    this.record.quality_type = this.qualityList[i].quality_type;
  }
  getPartyList() {
    this.partyReqObj = new ViewReqObj();
    this.partyReqObj.current_user_id = this.currentUserId;
    this.partyReqObj.user_head_id = this.currentUser.user_head_id;
    this.partyReqObj.group_user_ids = this.currentUserGroupUserIds;
    this.partyReqObj.view_group = true;
    this.partyService.getPartyList(this.partyReqObj).subscribe(
      data => {
        if (!data[0].error) {
          this.partyList = data[0].data;
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
  }

  onPageLoad() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      if (this.id) {
        this.subBtnName = 'Update';
        this.topHeader = 'Edit Fabric In';

      } else {
        this.topHeader = 'Fabric In View';
        this.viewFlag = true;
      }
      this.fabricService.getFabricInById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.fabricModal = data[0].data.stock[0];
            this.fabricRecord = data[0].data.bill_record;
            this.fabricModal.bill_date = this.datePipe.transform(this.fabricModal.bill_date, "yyyy-MM-dd");
            this.fabricModal.chl_date = this.datePipe.transform(this.fabricModal.chl_date, "yyyy-MM-dd");
            this.fabricRecord.forEach((ele, index) => {
              ele.index = index + 1;
              let i = this.qualityList.findIndex(v => v.entry_id == ele.quality_entry_id);
              if (i > -1) {
                ele.quality_name = this.qualityList[i].quality_name;
                ele.quality_type = this.qualityList[i].quality_type;
              }
            });
            this.isBatchInitialFlag = this.fabricModal.batch;
            this.rowData = [...this.fabricRecord]
            this.fabricModal.fabric_record = this.fabricRecord
          } else {
            this.toasterService.error(data.message);
          }
        }, error => {
          this.toasterService.error('Server Error');
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add Bill';
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
      return false;
    }
    return true;
  }
  onAddRecord(form: NgForm) {
    let flag = 0;
    let j = 1;
    if (this.fabricRecord.length) {
      this.record.index = j;
    } else if (this.record.index == undefined) {
      this.record.index = this.fabricRecord.length + 1;
    }
    this.fabricRecord.forEach(ele => {
      if (ele.gr == this.record.gr) {
        ele = this.record
        flag = 1;
      }
    });
    if (!flag) {
      this.fabricRecord.push(this.record);
    }
    this.rowData = [...this.fabricRecord];
    this.record = new FabricInRecord();
    form.resetForm();
  }

  onEditRecord(data) {
    let i = this.fabricRecord.findIndex(v => v.index == data);
    this.record = this.fabricRecord[i];
  }

  deleteRecord(data) {
    let i = this.fabricRecord.findIndex(v => v.index == data);
    this.fabricRecord.splice(i, 1);
    this.rowData = [...this.fabricRecord]
  }

  onCustomFormSubmit(form: NgForm) {
    if (this.fabricModal.batch) {
      let qualityMatchCount = 0;
      if (this.fabricRecord.length) {
        let match = this.fabricRecord[0].quality_entry_id;
        this.fabricRecord.forEach(ele => {
          if (ele.quality_entry_id == match) {
            qualityMatchCount++;
          }
        });
        if (qualityMatchCount == this.fabricRecord.length) {
          this.addUpdateFabricForm(form);
          this.batchModal = new BatchMast();
          this.batchDataArray = [];
          this.batchModal.quality_entry_id = match;
          this.batchModal.remark = this.fabricModal.remark;
          this.fabricRecord.forEach(record => {
            let batchRecord = new BatchData();
            batchRecord.gr = record.gr;
            batchRecord.no_of_cones_taka = record.no_of_cones;
            batchRecord.mtr = record.mtr;
            batchRecord.wt = record.wt;
            batchRecord.batch_quality_detail = [];
            this.batchDataArray.push(batchRecord);
          });
          this.batchModal.batch_data = this.batchDataArray;
          if (this.id && this.isBatchInitialFlag) {
            // this.batchModal.updated_by = this.currentUserId;
            // this.batchService.updateBatch(this.batchModal).subscribe(data => {
            //   console.log(data)
            //   if (!data[0].error) {
            //     this.toasterService.success(data[0].message);
            //     form.resetForm();
            //     this.router.navigate(['/pages/batch/view-batch-list']);
            //   } else {
            //     this.toasterService.error(data[0].message);
            //   }
            // }, error => {
            //   this.toasterService.error('Server Error');
            // });
          } else {
            this.batchModal.user_head_id = this.currentUserHeadid;
            this.batchModal.created_by = this.currentUserId;
            console.log(this.batchModal)
            this.batchService.addBatch(this.batchModal).subscribe(data => {
              data = data[0]
              if (!data.error) {
                this.toasterService.success(data.message);
                form.resetForm();
                this.router.navigate(['/pages/batch/view-batch-list']);
              } else {
                this.toasterService.error(data.message);
              }
            }, error => {
              this.toasterService.error('Server Error');
            });
          }
        } else {
          this.fabricModal.batch = 0;
          const modalRef = this._modalService.open(ConfirmDialogComponent);
          modalRef.componentInstance.titleFrom = 'Cannot Be A Batch ';
          modalRef.componentInstance.message = 'Quality should be of same ID to add this as a Batch. Do you want to still update details without batch?';
          modalRef.result
            .then((result) => {
              if (result) {
                this.addUpdateFabricForm(form);
              } else {
                this.toasterService.info('Quality should be of same ID to add this as a Batch');
              }
            });
        }
      }
    } else {
      this.addUpdateFabricForm(form);
    }
  }

  addUpdateFabricForm(form: NgForm) {
    this.fabricModal.fabric_record = this.fabricRecord;
    console.log('bill', this.fabricModal);
    // for update
    if (this.id) {
      this.fabricService.updateFabricIn(this.fabricModal).subscribe(data => {
        console.log(data)
        // data = data[0].data
        // console.log(data)
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/fabric-in/view-fabric-in-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
      //for add
      this.fabricModal.created_by = this.currentUserId;
      this.fabricModal.user_head_id = this.currentUserHeadid;
      console.log(this.fabricModal)
      this.fabricService.addFabricIn(this.fabricModal).subscribe(data => {
        data = data[0]
        if (!data.error) {
          this.toasterService.success(data.message);
          form.resetForm();
          this.router.navigate(['/pages/fabric-in/view-fabric-in-list']);
        } else {
          this.toasterService.error(data.message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    }
  }
}
@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editRecord()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteRecord()"></i>`,
  styleUrls: ['./add-edit-fabric-in.component.scss']
})

export class CustomRendererStockRecordComponent implements AgRendererComponent {
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
    this.params.action.onEditRecord(this.params.value)
  }
  onDeleteRecord() {
    const modalRef = this._modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.titleFrom = 'Delete record ';
    modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
    modalRef.result
      .then((result) => {
        if (result) {
          this.params.action.deleteRecord(this.params.value)
        }
      });
  }
}
