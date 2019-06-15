import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AgRendererComponent } from 'ag-grid-angular';
import { Shade, ShadeRecord } from '../../../@theme/model/shade-class';
import { Party } from '../../../@theme/model/party-class';
import { Quality } from '../../../@theme/model/quality-class';
import { ViewReqObj, User } from '../../../@theme/model/user-class';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyService } from '../../../@theme/services/party.service';
import { QualityService } from '../../../@theme/services/quality.service';
import { ColDef } from 'ag-grid-community';
import { CustomRendererStockRecordComponent } from '../../bill-in/add-edit-bill-in/add-edit-bill-in.component';
import { NgForm } from '@angular/forms';
import { ShadeService } from '../../../@theme/services/shade.service';
import { Supplier, SupplierItemRecord } from '../../../@theme/model/supplier-class';
import { SupplierService } from '../../../@theme/services/supplier.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../@theme/services/auth.service';

@Component({
  selector: 'ngx-add-edit-shade',
  templateUrl: './add-edit-shade.component.html',
  styleUrls: ['./add-edit-shade.component.scss']
})
export class AddEditShadeComponent implements OnInit, OnDestroy {

  shadeModal: Shade;
  flagDivSubForm = false;
  flagDiv = false;
  id: any;
  subBtnName = '';
  topHeader = '';
  viewFlag = false;
  rowData: any;
  shadeRecord: ShadeRecord[] = [];
  record: ShadeRecord;
  qualityList: Quality[] = [];
  currentUserId: any;
  currentUserHeadid: any;
  currentUser$: Subscription;
  currentUser: User;
  currentUserGroupUserIds: any;
  supplierItemList: SupplierItemRecord[] = [];
  qualityViewReqObj = new ViewReqObj();
  columnDefs = [
    { headerName: 'Actions', field: 'index' },
    { headerName: 'Item Name', field: 'item_name' },
    { headerName: 'Cocentration', field: 'concentration' },
    { headerName: 'Supplier Name', field: 'supplier_name' },
    { headerName: 'Rate', field: 'rate' },
    { headerName: 'Amount', field: 'amount' },

  ];
  constructor(private toasterService: ToastrService, private route: ActivatedRoute, private supplierService: SupplierService,
    private router: Router, private shadeService: ShadeService, private qualityService: QualityService,
    private authService: AuthService) {
    this.shadeModal = new Shade();
    this.record = new ShadeRecord();
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserGroupUserIds = ele.user.group_user_ids;

      }
    });
    this.setColumns();
  }

  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  ngOnInit() {
    this.getQuality();
    this.getSupplierItemList();
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

  getSupplierItemList() {
    this.supplierService.getAllSupplierItemData().subscribe(data => {
      if (!data[0].error) {
        this.supplierItemList = data[0].data;
      }
    })
  }
  selectItem(item) {
    this.flagDivSubForm = false;
    const i = this.supplierItemList.findIndex(v => v.entry_id == item.entry_id);
    this.record.supplier_item_id = this.supplierItemList[i].entry_id;
    this.record.item_name = this.supplierItemList[i].item_name;
    this.record.supplier_name = this.supplierItemList[i].supplier_name;
  }

  selectQualityId(value) {
    this.flagDiv = false;
    let i = this.qualityList.findIndex(v => v.entry_id == value.entry_id);
    this.shadeModal.quality_id = this.qualityList[i].quality_id;
    this.shadeModal.quality_entry_id = this.qualityList[i].entry_id;
    this.shadeModal.quality_type = this.qualityList[i].quality_type;
    this.shadeModal.quality_name = this.qualityList[i].quality_name;
    this.shadeModal.party_name = this.qualityList[i].party_name;
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
        this.topHeader = 'Edit Shade';

      } else {
        this.topHeader = 'Shade View';
        this.viewFlag = true;
      }
      this.shadeService.getShadeById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.shadeModal = data[0].data.shade[0];

            this.shadeRecord = data[0].data.shade_record
            let i = this.qualityList.findIndex(v => v.entry_id == this.shadeModal.quality_id);
            this.shadeModal.quality_name = this.qualityList[i].quality_name;
            this.shadeModal.quality_id = this.qualityList[i].quality_id;
            this.shadeModal.quality_entry_id = this.qualityList[i].entry_id;
            this.shadeModal.quality_type = this.qualityList[i].quality_type;
            this.shadeModal.party_name = this.qualityList[i].party_name;
            this.shadeRecord.forEach((ele, index) => {
              ele.index = index + 1;
              // let i = this.supplierItemList.findIndex(v => v.item_name == ele.item_name);
              // ele.supplier_name = this.supplierItemList[i].supplier_name;
              // ele.item_name = this.supplierItemList[i].item_name;
            })
            this.rowData = [...this.shadeRecord]
            this.shadeModal.shade_record = this.shadeRecord
          } else {
            this.toasterService.error(data.message);
          }
        }, error => {
          this.toasterService.error('Server Error');
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add Shade';
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
    if (this.shadeRecord.length) {
      this.record.index = j;
    } else {
      this.record.index = this.shadeRecord.length + 1;
    }
    this.shadeRecord.forEach(ele => {
      if (ele.item_name == this.record.item_name) {
        ele = this.record
        flag = 1;
      }
    });
    if (!flag) {
      this.shadeRecord.push(this.record);
    }
    this.rowData = [...this.shadeRecord];
    this.record = new ShadeRecord();
    form.resetForm();
  }

  onEditRecord(data) {
    let i = this.shadeRecord.findIndex(v => v.index == data);
    this.record = this.shadeRecord[i];
  }

  deleteRecord(data) {
    let i = this.shadeRecord.findIndex(v => v.index == data);
    this.shadeRecord.splice(i, 1);
    this.rowData = [...this.shadeRecord]
  }

  onConcentrationChange(value) {
    let i = this.supplierItemList.findIndex(v => v.entry_id == this.record.supplier_item_id);
    this.record.rate = this.supplierItemList[i].gst_rate;
    this.record.amount = this.supplierItemList[i].gst_rate * value;
  }

  onCustomFormSubmit(form: NgForm) {
    this.shadeModal.quality_id = this.shadeModal.quality_entry_id;
    this.shadeModal.shade_record = this.shadeRecord;
    console.log('shade', this.shadeModal);
    // for update
    if (this.id) {
      this.shadeModal.updated_by = this.currentUserId;
      this.shadeService.updateShade(this.shadeModal).subscribe(data => {
        console.log(data)
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/shade/view-shade-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
      this.shadeModal.created_by = this.currentUserId;
      this.shadeModal.user_head_id = this.currentUserHeadid;
      console.log(this.shadeModal)
      this.shadeService.addShade(this.shadeModal).subscribe(data => {
        data = data[0]
        if (!data.error) {
          this.toasterService.success(data.message);
          form.resetForm();
          this.router.navigate(['/pages/shade/view-shade-list']);
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
  styleUrls: ['./add-edit-shade.component.scss']
})

export class CustomRendererShadeRecordComponent implements AgRendererComponent {
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
