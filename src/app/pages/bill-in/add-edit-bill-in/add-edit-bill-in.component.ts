import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Bill, BillRecord } from '../../../@theme/model/bill-class';
import { Party } from '../../../@theme/model/party-class';
import { Quality } from '../../../@theme/model/quality-class';
import { BillInService } from '../../../@theme/services/bill-in.service';
import { PartyService } from '../../../@theme/services/party.service';
import { QualityService } from '../../../@theme/services/quality.service';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import { ViewReqObj } from '../../../@theme/model/user-class';

@Component({
  selector: 'app-add-edit-bill-in',
  templateUrl: './add-edit-bill-in.component.html',
  styleUrls: ['./add-edit-bill-in.component.scss']
})
export class AddEditBillInComponent implements OnInit {

  billModal: Bill;
  id: any;
  subBtnName = '';
  topHeader = '';
  viewFlag = false;
  rowData: any;
  partyList: Party[] = [];
  billRecord: BillRecord[] = [];
  record: BillRecord;
  qualityList: Quality[] = [];
  qualityViewReqObj = new ViewReqObj();
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
    private router: Router, private billService: BillInService, private qualityService: QualityService) {
    this.billModal = new Bill();
    this.record = new BillRecord();
    this.setColumns();
  }

  ngOnInit() {
    this.getQuality();
    // this.getPartyList();
    this.onPageLoad();
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
        this.topHeader = 'Edit Bill';

      } else {
        this.topHeader = 'Bill View';
        this.viewFlag = true;
      }
      this.billService.getBillById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.billModal = data[0].data.stock[0];
            this.billRecord = data[0].data.bill_record
            this.billRecord.forEach((ele, index) => {
              ele.index = index + 1;
              let i = this.qualityList.findIndex(v => v.entry_id == ele.quality_entry_id);
              ele.quality_name = this.qualityList[i].quality_name;
              ele.quality_type = this.qualityList[i].quality_type;
            })
            this.rowData = [...this.billRecord]
            this.billModal.bill_record = this.billRecord
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
    if (this.billRecord.length) {
      this.record.index = j;
    } else {
      this.record.index = this.billRecord.length + 1;
    }
    this.billRecord.forEach(ele => {
      if (ele.gr == this.record.gr) {
        ele = this.record
        flag = 1;
      }
    });
    if (!flag) {
      this.billRecord.push(this.record);
    }
    this.rowData = [...this.billRecord];
    this.record = new BillRecord();
    form.resetForm();
  }

  onEditRecord(data) {
    let i = this.billRecord.findIndex(v => v.index == data);
    this.record = this.billRecord[i];
  }

  deleteRecord(data) {
    let i = this.billRecord.findIndex(v => v.index == data);
    this.billRecord.splice(i, 1);
    this.rowData = [...this.billRecord]
  }

  onCustomFormSubmit(form: NgForm) {
    this.billModal.bill_record = this.billRecord;
    console.log('bill', this.billModal);
    // for update
    if (this.id) {
      this.billService.updateBill(this.billModal).subscribe(data => {
        console.log(data)
        // data = data[0].data
        // console.log(data)
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/bill/view-bill-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
      //for add
      console.log(this.billModal)
      this.billService.addBill(this.billModal).subscribe(data => {
        data = data[0]
        if (!data.error) {
          this.toasterService.success(data.message);
          form.resetForm();
          this.router.navigate(['/pages/bill/view-bill-list']);
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
  styleUrls: ['./add-edit-bill-in.component.scss']
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
