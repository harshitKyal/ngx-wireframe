import { Component, OnInit } from '@angular/core';
import { Process, ProcessRecord } from '../../../@theme/model/process-class';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddStepComponent } from '../add-step/add-step.component';

@Component({
  selector: 'ngx-dynamic-process',
  templateUrl: './dynamic-process.component.html',
  styleUrls: ['./dynamic-process.component.scss']
})
export class DynamicProcessComponent implements OnInit {

  processModal = new Process();
  scouringRecord = new ProcessRecord();
  stepList = [];
  addFunctionFlag = false;
  currentSelectedFunction = '';
  selectedStep: any;
  functionDropdown = [{ 'id': 'chemical', 'name': 'Add Chemical' }, { 'id': 'temp', 'name': 'Add Temperature' }, { 'id': 'pressure', 'name': 'Add Pressure' }];
  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }
  onFunctionSelect(value) {
    this.currentSelectedFunction = value;
    this.addFunctionFlag = false;
  }
  onAddFunction() {
    this.addFunctionFlag = true;
  }
  onAddStep() {
    const modalRef = this._modalService.open(AddStepComponent);
    modalRef.componentInstance.position = this.stepList.length + 1;
    modalRef.componentInstance.stepList = this.stepList;
    modalRef.result
      .then((result) => {
        if (result) {
          if (!this.stepList.length || result.position == this.stepList.length + 1) {
            this.stepList.push({ 'name': result.name, 'position': result.position, 'functionList': [] });
          } else {
            this.stepList.splice(result.position - 1, 0, { 'name': result.name, 'position': result.position, 'functionList': [] });
          }
        }
      });
  }
  onStepClick(step) {
    this.selectedStep = step.position;
  }
  onCustomFormSubmit(form: NgForm) {
  }
  onAddFormData(form: NgForm) {
    let funcName = '';
    let func;
    let i = this.functionDropdown.findIndex(v => v.id == this.currentSelectedFunction);
    if (i > -1) {
      funcName = this.functionDropdown[i].name;
    }
    if (this.currentSelectedFunction === 'temp') {
      func = { 'name': funcName, 'value': this.currentSelectedFunction, 'temperature': this.scouringRecord.temperature, 'rate_temperature': this.scouringRecord.rate_temperature };
    } else if (this.currentSelectedFunction === 'chemical') {
      func = { 'name': funcName, 'value': this.currentSelectedFunction, 'temperature': this.scouringRecord.temperature, 'rate_temperature': this.scouringRecord.rate_temperature };
    } else if (this.currentSelectedFunction === 'pressure') {
      func = { 'name': funcName, 'value': this.currentSelectedFunction, 'temperature': this.scouringRecord.temperature, 'rate_temperature': this.scouringRecord.rate_temperature };
    }
    this.scouringRecord = new ProcessRecord();
    this.stepList[this.selectedStep - 1].functionList.push(func);
    this.currentSelectedFunction = '';
  }
}
