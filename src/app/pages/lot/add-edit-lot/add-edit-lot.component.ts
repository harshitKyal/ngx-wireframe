import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { NgForm } from '@angular/forms';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LotData, LotMast, LotWeightMtrDetail } from '../../../@theme/model/lot-class';
import { Quality } from '../../../@theme/model/quality-class';
import { LotService } from '../../../@theme/services/lot.service';
import { QualityService } from '../../../@theme/services/quality.service';
declare var $;
@Component({
  selector: 'app-add-edit-lot',
  templateUrl: './add-edit-lot.component.html',
  styleUrls: ['./add-edit-lot.component.scss']
})
export class AddEditLotComponent implements OnInit {


  flagDiv = false;
  lotDataObj: LotData;

  // grSelection: string;
  // customerID: number;




  lotModal: LotMast;
  id: any;
  subBtnName = '';
  topHeader = '';
  viewFlag = false;
  rowData: any;
  grList = [];
  lotDataArray: LotData[] = [];

  qualityList: Quality[] = [];
  lotDetailObj: LotWeightMtrDetail[] = [];
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
  items = [];
  constructor(private toasterService: ToastrService, private route: ActivatedRoute, private qualityService: QualityService,
    private router: Router, private lotService: LotService) {
    this.lotModal = new LotMast();
    this.lotDataObj = new LotData();
    this.setColumns();
  }

  ngOnInit() {
    this.getQuality();
    this.onPageLoad();
  }

  HideShow() {
    this.flagDiv = !this.flagDiv;
  }


  selectGr(gr) {
    this.flagDiv = false;
    const i = this.grList.findIndex(v => v.gr == gr.gr);
    this.lotDataObj.gr = this.grList[i].gr;
    this.lotDataObj.wt = this.grList[i].wt;
    this.lotDataObj.mtr = this.grList[i].mtr;
    this.lotDataObj.no_of_cones_taka = this.grList[i].no_of_cones;
    this.lotDataObj.batch_no = this.grList[i].batch_no;
  }

  onQualitySelect(value) {
    const i = this.qualityList.findIndex(v => v.entry_id == value);
    this.lotModal.quality_name = this.qualityList[i].quality_name;
    this.lotModal.quality_type = this.qualityList[i].quality_type;
    // console.log('in on quality select ' , value)
    this.getGrListByQualityId(value);
  }

  getGrListByQualityId(qualityid) {
    this.lotService.getGrListByQualityId(qualityid).subscribe(data => {
      if (!data[0].error) {
        this.grList = data[0].data;
        // console.log("in qq")
        // console.log(this.grList)
      }
    })
  }

  onUnitSelect(value) {
    this.showDetailFlag = true;
    this.lotDataObj.unit = value;
  }

  setColumns() {
    this.columnDefs.forEach((column: ColDef) => {
      if (column.field === 'index') {
        column.cellRendererFramework = CustomRendererLotDataComponent;
        column.cellRendererParams = {
          // inRouterLink: '/user/edit-user/',
          action: this
        };
      }
    });
  }

  getQuality() {
    this.qualityService.getAllQualityData().subscribe(data => {
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
        this.topHeader = 'Edit Lot';

      } else {
        this.topHeader = 'Lot View';
        this.viewFlag = true;
      }
      this.lotService.getLotById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.lotModal = data[0].data.lot[0];
            this.lotDataArray = data[0].data.lot_data
            this.lotDataArray.forEach((ele, index) => {
              ele.index = index + 1;
            });
            this.getGrListByQualityId(this.lotModal.quality_entry_id);
            this.rowData = [...this.lotDataArray]
            this.lotModal.lot_data = this.lotDataArray
          } else {
            this.toasterService.error(data.message);
          }
        }, error => {
          this.toasterService.error('Server Error');
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add Lot';
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  onAddRecord(form: NgForm) {
    let flag = 0;
    let j = 1;
    if (this.lotDataArray.length) {
      this.lotDataObj.index = j;
    } else {
      this.lotDataObj.index = this.lotDataArray.length + 1;
    }
    if (this.items.length) {
      this.lotDataObj.lot_quality_detail = [];
      this.items.forEach((ele, index) => {
        let obj = new LotWeightMtrDetail();
        obj.quantity = ele.value;
        this.lotDataObj.lot_quality_detail.push(obj);
      });
    }
    // this.lotDataObj.lot_quality_detail = this.lotDetailObj;
    this.lotDataArray.forEach(ele => {
      if (ele.gr == this.lotDataObj.gr) {
        ele = this.lotDataObj
        flag = 1;
      }
    });
    if (!flag) {
      this.lotDataArray.push(this.lotDataObj);
    }
    this.lotDetailObj = [];
    this.rowData = [...this.lotDataArray];
    this.lotDataObj = new LotData();
    form.resetForm();
  }

  onEditRecord(data) {
    let i = this.lotDataArray.findIndex(v => v.index == data);
    this.items = [];
    // this.lotDataArray[i].lot_quality_detail.forEach(ele => {
    //   this.items.push(ele.quality);
    // })
    // this.lotDetailObj = this.lotDataArray[i].lot_quality_detail;
    this.lotDataObj = this.lotDataArray[i];
  }

  deleteRecord(data) {
    let i = this.lotDataArray.findIndex(v => v.index == data);
    this.lotDataArray.splice(i, 1);
    this.rowData = [...this.lotDataArray]
  }

  onCustomFormSubmit(form: NgForm) {
    this.lotModal.lot_data = this.lotDataArray;
    console.log('lot', this.lotModal);
    // for update
    if (this.id) {
      this.lotService.updateLot(this.lotModal).subscribe(data => {
        console.log(data)
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/lot/view-lot-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
      console.log(this.lotModal)
      this.lotService.addLot(this.lotModal).subscribe(data => {
        data = data[0]
        if (!data.error) {
          this.toasterService.success(data.message);
          form.resetForm();
          this.router.navigate(['/pages/lot/view-lot-list']);
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
  styleUrls: ['./add-edit-lot.component.scss']
})

export class CustomRendererLotDataComponent implements AgRendererComponent {
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