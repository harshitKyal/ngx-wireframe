import { Component, OnInit, ViewChild } from '@angular/core';
import { ProcessPlanning } from '../../../@theme/model/process-planning-class';
import { Quality } from '../../../@theme/model/quality-class';
import { Subscription, Subject, Observable, merge } from 'rxjs';
import { Party } from '../../../@theme/model/party-class';
import { ViewReqObj, User } from '../../../@theme/model/user-class';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyService } from '../../../@theme/services/party.service';
import { ProcessPlanningService } from '../../../@theme/services/process-planning.service';
import { QualityService } from '../../../@theme/services/quality.service';
import { AuthService } from '../../../@theme/services/auth.service';
import { ColDef } from 'ag-grid-community';
import { NgForm } from '@angular/forms';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import { CustomRendererStockRecordComponent } from '../../fabric-in/add-edit-fabric-in/add-edit-fabric-in.component';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { ShadeService } from '../../../@theme/services/shade.service';
import { FabricInService } from '../../../@theme/services/fabric-in.service';
import { BatchService } from '../../../@theme/services/batch.service';
import { ProgramService } from '../../../@theme/services/program.service';

@Component({
  selector: 'ngx-add-edit-process-planning',
  templateUrl: './add-edit-process-planning.component.html',
  styleUrls: ['./add-edit-process-planning.component.scss']
})
export class AddEditProcessPlanningComponent implements OnInit {

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();


  processPlanningModal: ProcessPlanning;
  flagDivSubForm = false;
  flagDiv = false;
  flagDivBatch = false;
  flagDivLot = false;
  id: any;
  subBtnName = '';
  topHeader = '';
  viewFlag = false;
  rowData: any;
  partyList: Party[] = [];
  qualityList: Quality[] = [];
  shadeList = [];
  programList = [];
  batchList = [];
  qualityNameList: Quality[] = [];
  currentUserId: any;
  currentUserHeadid: any;
  currentUser$: Subscription;
  currentUser: User;
  gridApi;
  gridColumnApi;
  qualityReqObj = { party_id: '', entry_id: '', group_user_ids: '' };
  shadeReqObj = { quality_id: '', party_id: '', group_user_ids: '' };
  programReqObj = { quality_id: '', party_id: '', shade_id: '', group_user_ids: '' };
  selectedPartyId = '';
  selectedShadeId = '';
  selectedQualityId = '';
  columnDefs = [
    { headerName: 'Actions', field: '', sortable: false, width: 120, checkboxSelection: true },
    { headerName: 'Party Name', field: 'party_name', sortable: true, filter: true },
    { headerName: 'Program By', field: 'program_given_by', sortable: true, filter: true },
    { headerName: 'Quality Id', field: 'quality_id', sortable: true, filter: true },
    { headerName: 'Quality Name', field: 'quality_name', sortable: true, filter: true },
    { headerName: 'Quality Type', field: 'quality_type', sortable: true, filter: true },
    { headerName: 'remark', field: 'remark', sortable: true, filter: true },
  ];
  currentUserPermission: any;
  currentUserGroupUserIds: any;
  viewProcessPlanningGivenByReqOb = new ViewReqObj();
  viewPartyReqOb = new ViewReqObj();
  batchViewReqObj;


  constructor(private toasterService: ToastrService, private route: ActivatedRoute, private partyService: PartyService,
    private router: Router, private processPlanningService: ProcessPlanningService, private qualityService: QualityService,
    private authService: AuthService, private shadeService: ShadeService, private fabricService: FabricInService,
    private batchService: BatchService, private programService: ProgramService) {
    this.processPlanningModal = new ProcessPlanning();
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserHeadid = ele.user.user_head_id;
        this.currentUserPermission = ele.user_permission;
        this.currentUserGroupUserIds = ele.user.group_user_ids;
      }
    });
    // this.setColumns();
  }

  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  ngOnInit() {
    this.getPartyList();
    this.getQualityList();
    this.getShadeList();
    this.getQualityNameList(); // to fill name in program table
    this.getProgramList();
    this.onPageLoad();
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.getUserList(this.currentUserId);
  }
  getProgramList() {
    this.programReqObj.quality_id = this.selectedQualityId;
    this.programReqObj.shade_id = this.selectedShadeId;
    this.programReqObj.party_id = this.selectedPartyId;
    this.programReqObj.group_user_ids = this.currentUserGroupUserIds;
    this.programService.getProgramsByFilter(this.programReqObj).subscribe(data => {
      if (!data[0].error) {
        this.programList = data[0].data;
        this.programList.forEach(ele => {
          const i = this.qualityNameList.findIndex(v => v.entry_id == ele.quality_id);
          if (i > -1) {
            ele.quality_name = this.qualityNameList[i].quality_name;
            ele.quality_type = this.qualityNameList[i].quality_type;
          }
          const partyIndex = this.partyList.findIndex(v => v.entry_id == ele.party_id);
          if (partyIndex > -1) {
            ele.party_name = this.partyList[partyIndex].party_name;
          }
        });
        this.rowData = this.programList;
      } else {
        this.toasterService.error(data[0].message);
      }
    });
  }
  onSelectionChanged(event) {
    const row = this.gridApi.getSelectedRows();
    console.log(row);
    this.getBatchListByProgramSelected(row);
  }
  getBatchListByProgramSelected(row) {
    this.batchViewReqObj = {
      quality_id: row[0].quality_id,
      group_user_ids: this.currentUserGroupUserIds
    }
    this.batchService.getAllBatchByQualityId(this.batchViewReqObj).subscribe(data => {
      if (!data[0].error) {
        this.batchList = data[0].data;
      }
    })
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
  getShadeList() {
    let qualityId = [];
    if (this.selectedPartyId != '') {
      const obj = {
        party_id: this.selectedPartyId,
        group_user_ids: this.currentUserGroupUserIds
      }
      this.qualityService.getAllQualityByPartyId(obj).subscribe(data => {
        if (!data[0].error) {
          qualityId = data[0].data;
          let str = '';
          if (qualityId.length) {
            str = '(';
            let i;
            for (i = 0; i < qualityId.length - 1; i++) {
              str = qualityId[i].entry_id + ',';
            }
            if (i == qualityId.length - 1) {
              str = qualityId[i].entry_id + ')';
            }
          }
          this.shadeReqObj.quality_id = str;
          this.getShadeFinalList();
        }
      });
    } else {
      this.getShadeFinalList();
    }

  }
  getShadeFinalList() {
    this.shadeReqObj.quality_id = this.selectedQualityId;
    if (this.shadeReqObj.quality_id == '') {
      this.shadeReqObj.quality_id = "('')";
    }
    this.shadeReqObj.group_user_ids = this.currentUserGroupUserIds;
    this.shadeService.getShadesByFilter(this.shadeReqObj).subscribe(data => {
      if (!data[0].error) {
        this.shadeList = data[0].data;
        if (this.id) {

        }
      }
    })
  }
  onPartySelect() {
    this.selectedQualityId = '';
    this.selectedShadeId = '';
    this.getQualityList();
    this.getProgramList();
    this.getShadeList();
  }
  onShadeSelect() {
    this.getProgramList();
    this.getQualityList();
  }
  onQualitySelect() {
    this.getProgramList();
  }
  getQualityList() {
    let entry_id = '';
    if (this.selectedShadeId != '') {
      let i = this.shadeList.findIndex(v => v.entry_id == this.selectedShadeId);
      if (i > -1) {
        entry_id = this.shadeList[i].quality_id;
      }
    }
    this.qualityReqObj.party_id = this.selectedPartyId;
    this.qualityReqObj.entry_id = entry_id;
    this.qualityReqObj.group_user_ids = this.currentUserGroupUserIds;
    this.qualityService.getAllQualityFilterData(this.qualityReqObj).subscribe(data => {
      if (!data[0].error) {
        this.qualityList = data[0].data;
        if (this.id) {
        }
      }
    })
  }
  getQualityNameList() {
    this.viewPartyReqOb.view_group = true;
    this.viewPartyReqOb.current_user_id = this.currentUserId;
    this.viewPartyReqOb.user_head_id = this.currentUser.user_head_id;
    this.viewPartyReqOb.group_user_ids = this.currentUserGroupUserIds;
    this.qualityService.getAllQualityData(this.viewPartyReqOb).subscribe(data => {
      if (!data[0].error) {
        this.qualityNameList = data[0].data;
      }
    })
  }
  getBatchListByProgram() {

  }
  onPageLoad() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      if (this.id) {
        this.subBtnName = 'Update';
        this.topHeader = 'Edit Process Planning';

      } else {
        this.topHeader = 'Process Planning View';
        this.viewFlag = true;
      }
      this.processPlanningService.getprocessPlanningById(this.id).subscribe(
        data => {
          if (!data[0].error) {
          } else {
            this.toasterService.error(data.message);
          }
        }, error => {
          this.toasterService.error('Server Error');
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add Process Planning';
    }
  }
  onResetFilter() {
    this.selectedPartyId = '';
    this.selectedQualityId = '';
    this.selectedShadeId = '';
    this.getProgramList();
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
      return false;
    }
    return true;
  }
  onCustomFormSubmit(form: NgForm) {
  }
}
