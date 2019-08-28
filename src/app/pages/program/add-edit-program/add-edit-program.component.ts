import { Component, OnInit, ViewChild } from '@angular/core';
import { Program, ProgramRecord } from '../../../@theme/model/program-class';
import { Quality } from '../../../@theme/model/quality-class';
import { Subscription, Subject, Observable, merge } from 'rxjs';
import { Party } from '../../../@theme/model/party-class';
import { ViewReqObj, User } from '../../../@theme/model/user-class';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyService } from '../../../@theme/services/party.service';
import { ProgramService } from '../../../@theme/services/program.service';
import { QualityService } from '../../../@theme/services/quality.service';
import { AuthService } from '../../../@theme/services/auth.service';
import { ColDef } from 'ag-grid-community';
import { NgForm } from '@angular/forms';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { ShadeService } from '../../../@theme/services/shade.service';
import { FabricInService } from '../../../@theme/services/fabric-in.service';
import { BatchService } from '../../../@theme/services/batch.service';

@Component({
  selector: 'ngx-add-edit-program',
  templateUrl: './add-edit-program.component.html',
  styleUrls: ['./add-edit-program.component.scss']
})
export class AddEditProgramComponent implements OnInit {

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  priorityList = ["Very High", "High", "Medium", "Low"];
  programModal: Program;
  flagDivSubForm = false;
  flagDiv = false;
  flagDivBatch = false;
  flagDivLot = false;
  id: any;
  subBtnName = '';
  topHeader = '';
  viewFlag = false;
  rowData: any;
  programRecord: ProgramRecord[] = [];
  record: ProgramRecord;
  qualityList: Quality[] = [];
  currentUserId: any;
  currentUserHeadid: any;
  currentUser$: Subscription;
  currentUser: User;
  partyList: Party[] = [];
  shadeList = [];
  lotList = [];
  batchList = [];
  qualityViewReqObj;
  lotViewReqObj;
  batchViewReqObj;

  columnDefs = [
    { headerName: 'Actions', field: 'index' },
    { headerName: 'Party Shade No.', field: 'party_shade_no' },
    { headerName: 'Shade No.', field: 'shade_no' },
    { headerName: 'Colour Tone', field: 'colour_tone' },
    { headerName: 'Batch', field: 'batch' },
    { headerName: 'Lot No.', field: 'lot_no' },
    { headerName: 'Remark', field: 'remark' },
  ];
  currentUserPermission: any;
  currentUserGroupUserIds: any;
  programGivenByList = [];
  viewProgramGivenByReqOb = new ViewReqObj();
  viewPartyReqOb = new ViewReqObj();
  viewShadeReqOb;


  constructor(private toasterService: ToastrService, private route: ActivatedRoute, private partyService: PartyService,
    private router: Router, private programService: ProgramService, private qualityService: QualityService,
    private authService: AuthService, private shadeService: ShadeService, private fabricService: FabricInService,
    private batchService: BatchService) {
    this.programModal = new Program();
    this.record = new ProgramRecord();
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserHeadid = ele.user.user_head_id;
        this.currentUserPermission = ele.user_permission;
        this.currentUserGroupUserIds = ele.user.group_user_ids;
      }
    });
    this.setColumns();
  }

  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  ngOnInit() {
    this.getPartyList();
    this.onPageLoad();
    this.getProgramGivenByData();
  }

  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'index') {
        column.cellRendererFramework = CustomRendererProgramRecordComponent;
        column.cellRendererParams = {
          // inRouterLink: '/user/edit-user/',
          action: this
        };
      }
    });
  }

  getPartyList() {
    this.viewPartyReqOb.view_group = true;
    this.viewPartyReqOb.current_user_id = this.currentUserId;
    this.viewPartyReqOb.user_head_id = this.currentUser.user_head_id;
    this.viewPartyReqOb.group_user_ids = this.currentUserGroupUserIds;
    this.partyService.getPartyList(this.viewPartyReqOb).subscribe(data => {
      if (!data[0].error) {
        this.partyList = data[0].data;
      }
    })
  }
  getShadeList(qualityId) {
    this.viewShadeReqOb = {
      quality_id: qualityId,
      group_user_ids: this.currentUserGroupUserIds
    };
    this.shadeService.getShadesByQualityId(this.viewShadeReqOb).subscribe(data => {
      if (!data[0].error) {
        this.shadeList = data[0].data;
        if (this.id) {
          this.programModal.program_record.forEach((ele, index) => {
            ele.index = index + 1;
            let shadeIndex = this.shadeList.findIndex(v => v.entry_id == ele.shade_no);
            if (shadeIndex > -1) {
              ele.shade_no = this.shadeList[shadeIndex].entry_id;
              ele.party_shade_no = this.shadeList[shadeIndex].party_shade_no;
              ele.colour_tone = this.shadeList[shadeIndex].colour_tone;
            }
          })
          this.rowData = [...this.programRecord]
          this.programModal.program_record = this.programRecord
        }
      }
    })
  }

  // on select party Shade
  selectShade(item) {
    this.flagDivSubForm = false;
    const i = this.shadeList.findIndex(v => v.entry_id == item.entry_id);
    this.record.shade_no = this.shadeList[i].entry_id;
    this.record.party_shade_no = this.shadeList[i].party_shade_no;
    this.record.colour_tone = this.shadeList[i].colour_tone;

  }
  selectBatch(batch) {
    this.flagDivBatch = false;
    this.record.lot_no = '';
    this.record.quantity = '';
    const i = this.batchList.findIndex(v => v.batch_no == batch.batch_no);
    if (i > -1) {
      this.record.batch = this.batchList[i].batch_no;
      this.record.quantity = this.batchList[i].total_wt;
    }
  }
  selectLot(lot) {
    this.flagDivLot = false;
    this.record.batch = '';
    this.record.quantity = '';
    const i = this.lotList.findIndex(v => v.lot_no == lot.lot_no);
    if (i > -1) {
      this.record.lot_no = this.lotList[i].lot_no;
      this.record.quantity = this.lotList[i].total_wt;
    }
  }

  onPartySelect(value) {
    this.getQualityByPartyId(value);
    this.getLotByParty(value);
  }
  getQualityByPartyId(value) {
    this.qualityViewReqObj = {
      party_id: value,
      group_user_ids: this.currentUserGroupUserIds
    }
    this.qualityService.getAllQualityByPartyId(this.qualityViewReqObj).subscribe(data => {
      if (!data[0].error) {
        this.qualityList = data[0].data;
        if (this.id) {
          let qualityIndex = this.qualityList.findIndex(v => v.entry_id == this.programModal.quality_id);
          if (qualityIndex > -1) {
            this.programModal.quality_entry_id = this.qualityList[qualityIndex].entry_id;
            this.programModal.quality_id = this.qualityList[qualityIndex].quality_id;
            this.programModal.quality_name = this.qualityList[qualityIndex].quality_name;
            this.programModal.quality_type = this.qualityList[qualityIndex].quality_type;
          }
        }
      }
    })
  }

  getLotByParty(value) {
    this.lotViewReqObj = {
      party_id: value,
      group_user_ids: this.currentUserGroupUserIds
    }
    this.fabricService.getAllFabricByParty(this.lotViewReqObj).subscribe(data => {
      if (!data[0].error) {
        this.lotList = data[0].data;
      }
    })
  }
  getBatchByParty(value) {
    this.batchViewReqObj = {
      quality_id: value,
      group_user_ids: this.currentUserGroupUserIds
    }
    this.batchService.getAllBatchByQualityId(this.batchViewReqObj).subscribe(data => {
      if (!data[0].error) {
        this.batchList = data[0].data;
      }
    })
  }
  getProgramGivenByData() {
    this.viewProgramGivenByReqOb.view_group = true;
    this.viewProgramGivenByReqOb.current_user_id = this.currentUserId;
    this.viewProgramGivenByReqOb.user_head_id = this.currentUser.user_head_id;
    this.viewProgramGivenByReqOb.group_user_ids = this.currentUserGroupUserIds;
    this.programService.getProgramGivenByList(this.viewProgramGivenByReqOb).subscribe(data => {
      if (!data[0].error) {
        this.programGivenByList = [];
        data[0].data.forEach(ele => {
          this.programGivenByList.push(ele.program_given_by);
        });
      }
    })
  }
  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.programGivenByList
        : this.programGivenByList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  selectQualityId(value) {
    this.flagDiv = false;
    let i = this.qualityList.findIndex(v => v.entry_id == value.entry_id);
    this.programModal.quality_id = this.qualityList[i].quality_id;
    this.programModal.quality_entry_id = this.qualityList[i].entry_id;
    this.programModal.quality_type = this.qualityList[i].quality_type;
    this.programModal.quality_name = this.qualityList[i].quality_name;
    this.getShadeList(value.entry_id);
    this.getBatchByParty(value.entry_id);
  }
  HideShowSubForm() {
    this.flagDivSubForm = !this.flagDivSubForm;
  }
  HideShow() {
    this.flagDiv = !this.flagDiv;
  }
  HideShowBatch() {
    this.flagDivBatch = !this.flagDivBatch;
  }
  HideShowLot() {
    this.flagDivLot = !this.flagDivLot;
  }

  onPageLoad() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      if (this.id) {
        this.subBtnName = 'Update';
        this.topHeader = 'Edit Program';

      } else {
        this.topHeader = 'Program View';
        this.viewFlag = true;
      }
      this.programService.getProgramById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.programModal = data[0].data.program[0];
            this.programRecord = data[0].data.program_record;
            this.getQualityByPartyId(this.programModal.party_id);
            this.getLotByParty(this.programModal.party_id);
            this.getShadeList(this.programModal.quality_id);
            this.getBatchByParty(this.programModal.quality_id);
            this.rowData = [...this.programRecord]
            this.programModal.program_record = this.programRecord
          } else {
            this.toasterService.error(data.message);
          }
        }, error => {
          this.toasterService.error('Server Error');
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add Program';
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
    if (!this.programRecord.length) {
      this.record.index = j;
    } else if (this.record.index == undefined) {
      this.record.index = this.programRecord.length + 1;
    }
    this.programRecord.forEach(ele => {
      if (ele.index == this.record.index) {
        ele = this.record
        flag = 1;
      }
    });
    if (!flag) {
      this.programRecord.push(this.record);
    }
    this.rowData = [...this.programRecord];
    this.record = new ProgramRecord();
    form.resetForm();
  }

  onEditRecord(data) {
    let i = this.programRecord.findIndex(v => v.index == data);
    this.record = this.programRecord[i];
  }

  deleteRecord(data) {
    let i = this.programRecord.findIndex(v => v.index == data);
    this.programRecord.splice(i, 1);
    this.rowData = [...this.programRecord]
  }

  onCustomFormSubmit(form: NgForm) {
    this.programModal.quality_id = this.programModal.quality_entry_id;
    this.programModal.program_record = this.programRecord;
    console.log('program', this.programModal);
    // for update
    if (this.id) {
      this.programModal.updated_by = this.currentUserId;
      this.programService.updateProgram(this.programModal).subscribe(data => {
        console.log(data)
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/program/view-program-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
      this.programModal.created_by = this.currentUserId;
      this.programModal.user_head_id = this.currentUserHeadid;
      console.log(this.programModal)
      this.programService.addProgram(this.programModal).subscribe(data => {
        data = data[0]
        if (!data.error) {
          this.toasterService.success(data.message);
          form.resetForm();
          this.router.navigate(['/pages/program/view-program-list']);
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
  styleUrls: ['./add-edit-program.component.scss']
})

export class CustomRendererProgramRecordComponent implements AgRendererComponent {
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
