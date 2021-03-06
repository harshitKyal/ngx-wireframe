import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductionPlanningReq } from '../../../@theme/model/process-planning-class';
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
import { NgForm } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { ShadeService } from '../../../@theme/services/shade.service';
import { FabricInService } from '../../../@theme/services/fabric-in.service';
import { BatchService } from '../../../@theme/services/batch.service';
import { ProgramService } from '../../../@theme/services/program.service';
import { Shade } from '../../../@theme/model/shade-class';

@Component({
  selector: 'ngx-add-edit-process-planning',
  templateUrl: './add-edit-process-planning.component.html',
  styleUrls: ['./add-edit-process-planning.component.scss']
})
export class AddEditProcessPlanningComponent implements OnInit {

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  buttonName = "Add Production Planning";

  productionPlanningObj = new ProductionPlanningReq();
  flagDivSubForm = false;
  flagDiv = false;
  flagDivBatch = false;
  flagDivLot = false;
  id: any;
  subBtnName = '';
  topHeader = '';
  viewFlag = false;
  rowData: any;
  rowBatchData: any;
  partyList: Party[] = [];
  qualityList: Quality[] = [];
  shadeList = [];
  allShadeList: Shade[] = [];
  programList = [];
  batchList = [];
  qualityNameList: Quality[] = [];
  currentUserId: any;
  currentUserHeadid: any;
  currentUser$: Subscription;
  currentUser: User;
  gridApi;
  gridColumnApi;
  gridBatchApi;
  gridBatchColumnApi;
  qualityReqObj = { party_id: '', entry_id: '', group_user_ids: '' };
  shadeReqObj = { quality_id: '', party_id: '', group_user_ids: '' };
  programReqObj = { quality_id: '', party_id: '', shade_id: '', group_user_ids: '' };
  selectedPartyId = '';
  selectedShadeId = '';
  selectedQualityId = '';
  columnDefs = [
    { headerName: 'Actions', field: '', sortable: false, width: 120, checkboxSelection: true },
    { headerName: 'Party Name', field: 'party_name', sortable: true, filter: true },
    { headerName: 'Shade No.', field: 'shade_no', sortable: true, filter: true },
    { headerName: 'Color Tone', field: 'color_tone', sortable: true, filter: true },
    { headerName: 'Quality Id', field: 'quality_id', sortable: true, filter: true },
    { headerName: 'Quality Name', field: 'quality_name', sortable: true, filter: true },
    { headerName: 'Quality Type', field: 'quality_type', sortable: true, filter: true },
  ];
  batchColumnDefs = [
    { headerName: 'Actions', field: '', sortable: false, width: 120, checkboxSelection: true },
    { headerName: 'Batch No.', field: 'batch_no', sortable: true, filter: true },
    { headerName: 'Total Weight', field: 'total_wt', sortable: true, filter: true },
    { headerName: 'Total No. of Taka/Cones', field: 'total_taka', sortable: true, filter: true },
    { headerName: 'Total Metre', field: 'total_mtr', sortable: true, filter: true },
  ]
  currentUserPermission: any;
  currentUserGroupUserIds: any;
  viewProcessPlanningGivenByReqOb = new ViewReqObj();
  viewPartyReqOb = new ViewReqObj();
  viewShadeReqOb = new ViewReqObj();
  batchViewReqObj;
  selectedBatchRow: any;
  selectedProgramRow: any;

  constructor(private toasterService: ToastrService, private route: ActivatedRoute, private partyService: PartyService,
    private router: Router, private processPlanningService: ProcessPlanningService, private qualityService: QualityService,
    private authService: AuthService, private shadeService: ShadeService, private fabricService: FabricInService,
    private batchService: BatchService, private programService: ProgramService) {
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
    this.getShadeData();
    this.getQualityNameList(); // to fill name in program table
    this.getProgramList();
    this.onPageLoad();
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.getUserList(this.currentUserId);
  }
  onBatchGridReady(params) {
    this.gridBatchApi = params.api;
    this.gridBatchColumnApi = params.columnApi;
    if (this.id) {
      let j = this.batchList.findIndex(v => v.batch_no == this.productionPlanningObj.batch_control_id);
      if (j > -1) {
        this.selectedBatchRow = [];
        this.selectedBatchRow.push(this.batchList[j]);
        this.gridBatchApi.forEachNode(node => {
          node.data['batch_no'] == this.productionPlanningObj.batch_control_id ? node.setSelected(true) : 0;
        });
      }
    }
  }
  getProgramList() {
    this.clearBatchList();
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
          const j = this.allShadeList.findIndex(v => v.entry_id == ele.shade_no);
          if (j > -1) {
            ele.color_tone = this.allShadeList[i].colour_tone;
          }
        });
        this.rowData = this.programList;
      } else {
        this.toasterService.error(data[0].message);
      }
    });
  }
  onSelectionChanged(event) {
    this.clearBatchList();
    this.selectedProgramRow = this.gridApi.getSelectedRows();
    console.log(this.selectedProgramRow);
    this.getBatchListByProgramSelected(this.selectedProgramRow);
  }
  onBatchSelectionChanged(event) {
    this.selectedBatchRow = this.gridBatchApi.getSelectedRows();
    console.log('batch selection', this.selectedBatchRow);
  }
  onAddPlanning() {
    if (this.selectedBatchRow) {
      this.productionPlanningObj.batch_control_id = this.selectedBatchRow[0].batch_no;
      this.productionPlanningObj.quality_id = this.selectedBatchRow[0].quality_id;
      this.productionPlanningObj.quantity = this.selectedBatchRow[0].total_wt;
      this.productionPlanningObj.time = '';
      this.productionPlanningObj.program_control_id = this.selectedProgramRow[0].entry_id;
      this.productionPlanningObj.priority = this.selectedProgramRow[0].priority;
      this.productionPlanningObj.shade_no = this.selectedProgramRow[0].shade_no;
      this.productionPlanningObj.color_tone = this.selectedProgramRow[0].color_tone;
      this.productionPlanningObj.user_head_id = this.currentUserHeadid;

      if (!this.id) {
        this.productionPlanningObj.created_by = this.currentUserId;
        this.processPlanningService.addProductionPlanning(this.productionPlanningObj).subscribe(data => {
          if (!data[0].error) {
            this.toasterService.success(data[0].message);
            this.router.navigate(['/pages/process-planning']);
          } else {
            this.toasterService.error(data[0].message);
          }
        }, err => {
          this.toasterService.error(err);
        })
      } else {
        this.productionPlanningObj.updated_by = this.currentUserId;
        this.processPlanningService.editProductionPlanning(this.productionPlanningObj).subscribe(data => {
          if (!data[0].error) {
            this.toasterService.success(data[0].message);
            this.router.navigate(['/pages/process-planning']);
          } else {
            this.toasterService.error(data[0].message);
          }
        }, err => {
          this.toasterService.error(err);
        })
      }
    }
  }
  getBatchListByProgramSelected(row) {
    this.batchViewReqObj = {
      quality_id: row[0].quality_id,
      group_user_ids: this.currentUserGroupUserIds
    }
    this.batchService.getAllBatchByQualityId(this.batchViewReqObj).subscribe(data => {
      if (!data[0].error) {
        this.batchList = data[0].data;
        this.rowBatchData = this.batchList;
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
    this.clearBatchList();
    this.getQualityList();
    this.getProgramList();
    this.getShadeList();
  }
  getShadeData() {
    this.viewShadeReqOb.view_all = true;
    this.viewShadeReqOb.current_user_id = this.currentUserId;
    this.viewShadeReqOb.user_head_id = this.currentUser.user_head_id;
    this.viewShadeReqOb.group_user_ids = this.currentUserGroupUserIds;
    this.shadeService.getAllShades(this.viewShadeReqOb).subscribe(data => {
      if (!data[0].error) {
        this.allShadeList = data[0].data;
      }
    });
  }
  onShadeSelect() {
    this.clearBatchList();
    this.getProgramList();
    this.getQualityList();
  }
  onQualitySelect() {
    this.clearBatchList();
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
  clearBatchList() {
    this.batchList = [];
    this.rowBatchData = [];
  }
  onPageLoad() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.subBtnName = 'Update Process Planning';
      this.topHeader = 'Edit Process Planning';
      this.processPlanningService.getprocessPlanningById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.productionPlanningObj = data[0].data[0];
            console.log('this.productionPlanningObj', this.productionPlanningObj.program_control_id);
            if (this.programList.length) {
              let i = this.programList.findIndex(v => v.entry_id == this.productionPlanningObj.program_control_id);
              if (i > -1) {
                this.selectedProgramRow = [];
                this.selectedProgramRow.push(this.programList[i]);
                this.gridApi.forEachNode(node => {
                  console.log('node.data', node.data);
                  node.data['entry_id'] == this.productionPlanningObj.program_control_id ? node.setSelected(true) : 0;
                });
                // this.getBatchListByProgramSelected(this.selectedProgramRow);
              }
            }
          } else {
            this.toasterService.error(data.message);
          }
        }, error => {
          this.toasterService.error('Server Error');
        });
    } else {
      this.subBtnName = 'Add Process Planning';
      this.topHeader = 'Add Process Planning';
    }
  }
  onResetFilter() {
    this.selectedPartyId = '';
    this.selectedQualityId = '';
    this.selectedShadeId = '';
    this.clearBatchList();
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
