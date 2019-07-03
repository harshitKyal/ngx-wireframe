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
  constructor(private toasterService: ToastrService, private route: ActivatedRoute, private partyService: PartyService,
    private router: Router, private fabricService: FabricInService, private qualityService: QualityService,
    private datePipe: DatePipe,
    private authService: AuthService) {
    this.fabricModal = new Fabric();
    this.record = new FabricInRecord();
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
            })
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
