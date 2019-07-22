import { Component, OnInit, Input } from '@angular/core';
import { FunctionObj, PumpMotorFunctionObj, WaterDrainFunctionObj, TempFunctionObj, DosingFunctionObj } from '../../../@theme/model/process-planning-class';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
  waterList = [{ 'id': 'water1', 'name': 'water1' }, { 'id': 'water2', 'name': 'water2' }];
  drainTypeList = [{ 'id': 'Complete Drain (at 0 bar)', 'name': 'Complete Drain (at 0 bar)' }, { 'id': 'Pressurize Drain (at 1 bar)', 'name': 'Pressurize Drain (at 1 bar)' }];
  fillList = [{ 'id': 'Post Fill Machine Water', 'name': 'Post Fill Machine Water' }, { 'id': 'Pre Fill Machine Water', 'name': 'Pre Fill Machine Water' }]
  functionDropdown = [{ 'id': 'dosing', 'name': 'Dosing' }, { 'id': 'temp', 'name': 'Temperature Control' }, { 'id': 'pump', 'name': 'Pump Control' }, { 'id': 'water', 'name': 'Water In & Drain' }];

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
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
          this.funcObj.func_name = ele.func_name;
          this.funcObj.func_position = ele.func_position;
          this.funcObj.func_value = ele.func_value;
          this.dosingObj = ele.dosingFunction;
          this.waterObj = ele.waterDrainFunction;
          this.tempObj = ele.tempFunction;
          this.pumpObj = ele.pumpMotorFunction;
        }
        for (let i = 1; i <= this.functionList.length; i++) {
          this.positionValues.push(i);
        }
      }
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
    } else if (this.funcObj.func_value === 'pump') {
      this.funcObj.pumpMotorFunction = this.pumpObj;
    }
    this.activeModal.close(this.funcObj);
  }
  numberOnly(event) {

  }
}
