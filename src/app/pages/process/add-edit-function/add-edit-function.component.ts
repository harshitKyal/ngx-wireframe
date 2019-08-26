import { Component, OnInit, Input } from '@angular/core';
import { FunctionObj, PumpMotorFunctionObj, WaterDrainFunctionObj, TempFunctionObj, DosingFunctionObj, OperatorMessageObj, ChemicalReq } from '../../../@theme/model/process-planning-class';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgRendererComponent } from 'ag-grid-angular';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from '../../../@theme/components/confirm-dialog/confirm-dialog.component';
import { ProcessSubRecord } from '../../../@theme/model/process-class';
import { NgForm } from '@angular/forms';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'ngx-add-edit-function',
  templateUrl: './add-edit-function.component.html',
  styleUrls: ['./add-edit-function.component.scss']
})
export class AddEditFunctionComponent implements OnInit {
  @Input() position;
  @Input() functionList = [];
  @Input() editFunction: any;
  submitButton = 'Add';
  positionValues = [];
  funcObj = new FunctionObj();
  pumpObj = new PumpMotorFunctionObj();
  waterObj = new WaterDrainFunctionObj();
  tempObj = new TempFunctionObj();
  dosingObj = new DosingFunctionObj();
  operatorObj = new OperatorMessageObj();
  waterList = [{ 'id': 'water1', 'name': 'water1' }, { 'id': 'water2', 'name': 'water2' }];
  drainTypeList = [{ 'id': 'Complete Drain (at 0 bar)', 'name': 'Complete Drain (at 0 bar)' }, { 'id': 'Pressurize Drain (at 1 bar)', 'name': 'Pressurize Drain (at 1 bar)' }];
  fillList = [{ 'id': 'Post Fill Fresh Water', 'name': 'Post Fill Fresh Water' }, { 'id': 'Pre Fill Fresh Water', 'name': 'Pre Fill Fresh Water' }, { 'id': 'Post Fill Machine Water', 'name': 'Post Fill Machine Water' }, { 'id': 'Pre Fill Machine Water', 'name': 'Pre Fill Machine Water' }]
  functionDropdown = [{ 'id': 'dosing', 'name': 'Dosing' }, { 'id': 'temp', 'name': 'Temperature Control' }, { 'id': 'pump', 'name': 'Pump Control' }, { 'id': 'water', 'name': 'Water Control' }, { 'id': 'operator', 'name': 'Operator Message' }];
  fillLevelList = [{ 'id': 'Level 1', 'name': 'Level 1' }, { 'id': 'Level 2', 'name': 'Level 2' }];
  operatorMessageList = [{ 'id': '1', 'name': 'Load Fabric' }, { 'id': '2', 'name': 'UnLoad Fabric' }, { 'id': '3', 'name': 'Close the Door' }, { 'id': '4', 'name': 'Custom Message' }]
  chemicalSubRecordArray: ChemicalReq[] = [];
  chemicalSubRecord: ChemicalReq;
  rowChemicalData: any;
  chemicalcolumnDefs = [
    { headerName: 'Actions', field: 'index', width: 70 },
    { headerName: 'Item Name', field: 'item_name', width: 90 },
    { headerName: 'Concentration', field: 'concentration', width: 90 },
    { headerName: 'LR/F_WT', field: 'lr_or_fabric_wt', width: 90 },
    { headerName: 'Supplier Name', field: 'supplier_name', width: 90 },
  ];
  flagDivSForm = false;

  constructor(public activeModal: NgbActiveModal) {
    this.chemicalSubRecord = new ChemicalReq();
  }

  ngOnInit() {
    this.chemicalcolumnDefs.forEach((column: ColDef) => {
      if (column.field === 'index') {
        column.cellRendererFramework = CustomRendererChemicalRecordComponent;
        column.cellRendererParams = {
          action: this
        };
      }
    });
    if (!this.editFunction) {
      if (this.position > 0) {
        this.funcObj.func_position = this.position;
        for (let i = 1; i <= this.position; i++) {
          this.positionValues.push(i);
        }
      }
    } else {
      this.submitButton = "Update";
      if (this.position > 0) {
        this.funcObj.func_position = this.position;
        let index = this.functionList.findIndex(v => v.func_position == this.position);
        if (index > -1) {
          let ele = this.functionList[index];
          console.log('ele.dos', ele.dosingFunction)
          this.funcObj.func_name = ele.func_name;
          this.funcObj.func_position = ele.func_position;
          this.funcObj.func_value = ele.func_value;
          this.dosingObj = ele.dosingFunction;
          if (this.dosingObj.dosing_chemical.length) {
            this.dosingObj.dosing_chemical.forEach((ele, index) => {
              ele.index = index + 1;
            });
            this.chemicalSubRecordArray = this.dosingObj.dosing_chemical;
            this.rowChemicalData = [...this.chemicalSubRecordArray];

          }
          this.waterObj = ele.waterDrainFunction;
          this.tempObj = ele.tempFunction;
          this.pumpObj = ele.pumpMotorFunction;
          this.operatorObj = ele.operatorFunction;
        }
        for (let i = 1; i <= this.functionList.length; i++) {
          this.positionValues.push(i);
        }
      }
    }

  }
  onDoseTypeChange() {
    if (this.dosingObj.dose_type == 'color') {
      this.dosingObj.dose_while_heating = false;
    }
  }
  onWaterTypeChange() {
    if (this.waterObj.type == 'water') {
      this.waterObj.drain_type = null;
    } else {
      this.waterObj.jet_level = 0;
      this.waterObj.fabric_ratio = null;
      this.waterObj.water_type = null;
    }
  }

  onSubmit() {
    let i = this.functionDropdown.findIndex(v => v.id === this.funcObj.func_value);
    if (i > -1) {
      this.funcObj.func_name = this.functionDropdown[i].name;
    } else {
      this.funcObj.func_name = '';
    }
    if (this.funcObj.func_value === 'temp') {
      this.funcObj.tempFunction = this.tempObj;
    } else if (this.funcObj.func_value === 'water') {
      this.funcObj.waterDrainFunction = this.waterObj;
    } else if (this.funcObj.func_value === 'dosing') {
      this.funcObj.dosingFunction = this.dosingObj;
      console.log('chemical', this.chemicalSubRecordArray);
      this.funcObj.dosingFunction.dosing_chemical = this.chemicalSubRecordArray;
    } else if (this.funcObj.func_value === 'pump') {
      this.funcObj.pumpMotorFunction = this.pumpObj;
    } else if (this.funcObj.func_value === 'operator') {
      let i = this.operatorMessageList.findIndex(v => v.id === this.operatorObj.operator_code);
      if (i > -1 && i != 3) {
        this.operatorObj.operator_message = this.operatorMessageList[i].name;
      }
      this.funcObj.operatorFunction = this.operatorObj;
    }
    this.activeModal.close(this.funcObj);
  }
  onSetValueChange() {
    if (this.tempObj.set_value > 100) {
      this.tempObj.pressure = true;
    } else {
      this.tempObj.pressure = false;
    }
  }
  HideShowSForm() {
    this.flagDivSForm = !this.flagDivSForm;
  }
  onAddChemicalRecord(form: NgForm) {
    let flag = 0;
    let j = 1;
    if (!this.chemicalSubRecordArray.length) {
      this.chemicalSubRecord.index = j;
    } else if (this.chemicalSubRecord.index == undefined) {
      this.chemicalSubRecord.index = this.chemicalSubRecordArray.length + 1;
    }
    this.chemicalSubRecordArray.forEach(ele => {
      if (ele.index == this.chemicalSubRecord.index) {
        ele = this.chemicalSubRecord
        flag = 1;
      }
    });
    if (!flag) {
      this.chemicalSubRecordArray.push(this.chemicalSubRecord);
    }
    this.rowChemicalData = [...this.chemicalSubRecordArray];
    this.chemicalSubRecord = new ChemicalReq();
    form.resetForm();
  }
  onEditChemicalRecord(data) {
    let i = this.chemicalSubRecordArray.findIndex(v => v.index == data);
    this.chemicalSubRecord = this.chemicalSubRecordArray[i];
  }

  deleteChemicalRecord(data) {
    let i = this.chemicalSubRecordArray.findIndex(v => v.index == data);
    this.chemicalSubRecordArray.splice(i, 1);
    this.rowChemicalData = [...this.chemicalSubRecordArray]
  }
  numberOnly(event) {

  }
}
@Component({
  template: `
  <i class="ft-edit-2 font-medium-1 mr-2" style="color:#4ca6ff" (click)="editRecord()"></i>
  <i class="ft-x font-medium-1 mr-2" style="color:red" (click)="onDeleteRecord()"></i>`,
  styleUrls: ['./add-edit-function.component.scss']
})

export class CustomRendererChemicalRecordComponent implements AgRendererComponent {
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
    this.params.action.onEditChemicalRecord(this.params.value)
  }
  onDeleteRecord() {
    this.params.action.deleteChemicalRecord(this.params.value)
  }
}