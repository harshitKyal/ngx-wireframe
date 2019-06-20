import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { NgForm } from '@angular/forms';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BatchMast, BatchData, BatchWeightMtrDetail } from '../../../@theme/model/batch-class';
import { Quality } from '../../../@theme/model/quality-class';
import { QualityService } from '../../../@theme/services/quality.service';
import { ViewReqObj } from '../../../@theme/model/user-class';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../@theme/services/auth.service';
import { BatchService } from '../../../@theme/services/batch.service';
declare var $;
@Component({
  selector: 'app-add-edit-batch',
  templateUrl: './add-edit-batch.component.html',
  styleUrls: ['./add-edit-batch.component.scss']
})
export class AddEditBatchComponent implements OnInit, OnDestroy {


  flagDiv = false;
  batchDataObj: BatchData;
  batchModal: BatchMast;
  id: any;
  subBtnName = '';
  topHeader = '';
  viewFlag = false;
  rowData: any;
  grList = [];
  batchDataArray: BatchData[] = [];
  qualityViewReqObj = new ViewReqObj();
  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;
  currentUserGroupUserIds: any;

  qualityList: Quality[] = [];
  batchDetailObj: BatchWeightMtrDetail[] = [];
  showDetailFlag = false;
  selectLabel = 'GR' + '    ' + 'BATCH NO' + '      ' + 'WEIGHT' + '      ' + 'METRE' + '      ' + 'NO OF CONES/TAKA';
  columnDefs = [
    { headerName: 'Gr', field: 'gr', width: 100 },
    { headerName: 'Batch No', field: 'batch_no', width: 100 },
    { headerName: 'No of Cones/Taka', field: 'no_of_cones_taka', width: 100 },
    { headerName: 'Mtr', field: 'mtr', width: 100 },
    { headerName: 'Wt', field: 'wt', width: 100 },
    { headerName: 'Actions', field: 'index', width: 100 },

  ];
  unit = [{ 'id': 'wt', 'value': 'Weight' }, { 'id': 'mtr', 'value': 'Metre' }];
  items: BatchWeightMtrDetail[] = [];
  constructor(private toasterService: ToastrService, private route: ActivatedRoute, private qualityService: QualityService,
    private router: Router, private batchService: BatchService, private authService: AuthService) {
    this.batchModal = new BatchMast();
    this.batchDataObj = new BatchData();
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
    this.onPageLoad();
  }

  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }

  HideShow() {
    this.flagDiv = !this.flagDiv;
  }


  selectGr(gr) {
    this.flagDiv = false;
    const i = this.grList.findIndex(v => v.gr == gr.gr);
    this.batchDataObj.gr = this.grList[i].gr;
    this.batchDataObj.wt = this.grList[i].wt;
    this.batchDataObj.mtr = this.grList[i].mtr;
    this.batchDataObj.no_of_cones_taka = this.grList[i].no_of_cones;
    this.batchDataObj.batch_no = this.grList[i].batch_no;
  }

  onQualitySelect(value) {
    const i = this.qualityList.findIndex(v => v.entry_id == value);
    this.batchModal.quality_name = this.qualityList[i].quality_name;
    this.batchModal.quality_type = this.qualityList[i].quality_type;
    // console.log('in on quality select ' , value)
    this.getGrListByQualityId(value);
  }

  getGrListByQualityId(qualityid) {
    this.batchService.getGrListByQualityId(qualityid).subscribe(data => {
      if (!data[0].error) {
        this.grList = data[0].data;
        // console.log("in qq")
        // console.log(this.grList)
      }
    })
  }

  onUnitSelect(value) {
    this.showDetailFlag = true;
    this.batchDataObj.unit = value;
  }

  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'index') {
        column.cellRendererFramework = CustomRendererBatchDataComponent;
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

  onPageLoad() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      if (this.id) {
        this.subBtnName = 'Update';
        this.topHeader = 'Edit Batch';

      } else {
        this.topHeader = 'Batch View';
        this.viewFlag = true;
      }
      this.batchService.getBatchById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.batchModal = data[0].data.batch[0];
            this.batchDataArray = data[0].data.batch_data
            this.batchDataArray.forEach((ele, index) => {
              ele.index = index + 1;
            });
            this.getGrListByQualityId(this.batchModal.quality_entry_id);
            this.rowData = [...this.batchDataArray]
            this.batchModal.batch_data = this.batchDataArray
          } else {
            this.toasterService.error(data.message);
          }
        }, error => {
          this.toasterService.error('Server Error');
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add Batch';
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
    if (!this.batchDataArray.length) {
      this.batchDataObj.index = j;
    } else {
      this.batchDataArray.forEach(ele => {
        if (ele.gr == this.batchDataObj.gr) {
          if (this.items.length) {
            this.items.forEach((ele, index) => {
              if (ele.entry_id === undefined) {
                let obj = new BatchWeightMtrDetail();
                obj = ele;
                obj.quantity = ele.value;
                this.batchDataObj.batch_quality_detail.push(obj);
              }
            });
          } else {
            this.batchDataObj.batch_quality_detail = [];
          }
          ele = this.batchDataObj
          flag = 1;
        }
      });
      if (!flag) {
        this.batchDataObj.index = this.batchDataArray.length + 1;
        if (this.items.length) {
          this.batchDataObj.batch_quality_detail = [];
          this.items.forEach((ele, index) => {
            let obj = new BatchWeightMtrDetail();
            obj.quantity = ele.value;
            this.batchDataObj.batch_quality_detail.push(obj);
          });
          this.batchDataArray.push(this.batchDataObj);
        } else {
          this.batchDataObj.batch_quality_detail = [];
        }
      }
    }
    // if (this.items.length) {
    //   this.batchDataObj.batch_quality_detail = [];
    //   this.items.forEach((ele, index) => {
    //     let obj = new BatchWeightMtrDetail();
    //     obj.quantity = ele.value;
    //     this.batchDataObj.batch_quality_detail.push(obj);
    //   });
    // }
    // this.batchDataObj.batch_quality_detail = this.batchDetailObj;
    // this.batchDataArray.forEach(ele => {
    //   if (ele.gr == this.batchDataObj.gr) {
    //     ele = this.batchDataObj
    //     flag = 1;
    //   }
    // });
    // if (!flag) {
    //   this.batchDataArray.push(this.batchDataObj);
    // }
    this.batchDetailObj = [];
    this.rowData = [...this.batchDataArray];
    this.batchDataObj = new BatchData();
    form.resetForm();
  }

  onEditRecord(data) {
    let i = this.batchDataArray.findIndex(v => v.index == data);
    this.items = [];
    this.batchDataArray[i].batch_quality_detail.forEach(ele => {
      this.showDetailFlag = true;
      ele.value = ele.quantity !== undefined ? ele.quantity : ele.value;
      ele.display = ele.quantity !== undefined ? ele.quantity : ele.value;
      this.items.push(ele);
    })
    this.batchDetailObj = this.batchDataArray[i].batch_quality_detail;
    this.batchDataObj = this.batchDataArray[i];
  }

  deleteRecord(data) {
    let i = this.batchDataArray.findIndex(v => v.index == data);
    this.batchDataArray.splice(i, 1);
    this.rowData = [...this.batchDataArray]
  }

  onCustomFormSubmit(form: NgForm) {
    this.batchModal.batch_data = this.batchDataArray;
    console.log('batch', this.batchModal);
    // for update
    if (this.id) {
      this.batchService.updateBatch(this.batchModal).subscribe(data => {
        console.log(data)
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/batch/view-batch-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
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
  }
}
@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editRecord()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteRecord()"></i>`,
  styleUrls: ['./add-edit-batch.component.scss']
})

export class CustomRendererBatchDataComponent implements AgRendererComponent {
  params: any;

  constructor() {
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
    this.params.action.deleteRecord(this.params.value)
  }
}