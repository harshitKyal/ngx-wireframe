import { Component, OnInit } from '@angular/core';
import { Program, ProgramRecord } from '../../../@theme/model/program-class';
import { Quality } from '../../../@theme/model/quality-class';
import { Subscription } from 'rxjs';
import { User } from '../../../@core/data/users';
import { Party } from '../../../@theme/model/party-class';
import { ViewReqObj } from '../../../@theme/model/user-class';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyService } from '../../../@theme/services/party.service';
import { ProgramService } from '../../../@theme/services/program.service';
import { QualityService } from '../../../@theme/services/quality.service';
import { AuthService } from '../../../@theme/services/auth.service';
import { ColDef } from 'ag-grid-community';
import { CustomRendererStockRecordComponent } from '../../bill-in/add-edit-bill-in/add-edit-bill-in.component';
import { NgForm } from '@angular/forms';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'ngx-add-edit-program',
  templateUrl: './add-edit-program.component.html',
  styleUrls: ['./add-edit-program.component.scss']
})
export class AddEditProgramComponent implements OnInit {


  programModal: Program;
  flagDivSubForm = false;
  flagDiv = false;
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
  qualityViewReqObj = new ViewReqObj();
  columnDefs = [
    { headerName: 'Actions', field: 'index' },
    { headerName: 'Item Name', field: 'item_name' },
    { headerName: 'Cocentration', field: 'concentration' },
    { headerName: 'Supplier Name', field: 'supplier_name' },
    { headerName: 'Rate', field: 'rate' },
    { headerName: 'Amount', field: 'amount' },

  ];
  constructor(private toasterService: ToastrService, private route: ActivatedRoute, private partyService: PartyService,
    private router: Router, private programService: ProgramService, private qualityService: QualityService,
    private authService: AuthService) {
    this.programModal = new Program();
    this.record = new ProgramRecord();
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserHeadid = ele.user.user_head_id;
      }
    });
    this.setColumns();
  }

  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  ngOnInit() {
    this.getQuality();
    this.getPartyList();
    this.onPageLoad();
    this.getShadeList();
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

  getPartyList() {
    this.partyService.getPartyList().subscribe(data => {
      if (!data[0].error) {
        this.partyList = data[0].data;
      }
    })
  }
  getShadeList() {

  }

  // on select party Shade
  selectShade(item) {
    this.flagDivSubForm = false;
    const i = this.partyList.findIndex(v => v.entry_id == item.entry_id);
    this.record.entry_id = this.partyList[i].entry_id;
  }

  onPartySelect(party) {

  }
  selectQualityId(value) {
    this.flagDiv = false;
    let i = this.qualityList.findIndex(v => v.entry_id == value.entry_id);
    this.programModal.quality_id = this.qualityList[i].quality_id;
  }
  HideShowSubForm() {
    this.flagDivSubForm = !this.flagDivSubForm;
  }
  HideShow() {
    this.flagDiv = !this.flagDiv;
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

            this.programRecord = data[0].data.program_record
            let i = this.qualityList.findIndex(v => v.entry_id == this.programModal.quality_id);
            this.programRecord.forEach((ele, index) => {
              ele.index = index + 1;
              // let i = this.partyList.findIndex(v => v.item_name == ele.item_name);
              // ele.supplier_name = this.partyList[i].supplier_name;
              // ele.item_name = this.partyList[i].item_name;
            })
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
    if (this.programRecord.length) {
      this.record.index = j;
    } else {
      this.record.index = this.programRecord.length + 1;
    }
    this.programRecord.forEach(ele => {
      if (ele.shade_no == this.record.shade_no) {
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
