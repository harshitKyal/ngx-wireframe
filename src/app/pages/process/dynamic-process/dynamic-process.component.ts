import { Component, OnInit, OnDestroy } from '@angular/core';
import { Process, ProcessRecord } from '../../../@theme/model/process-class';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddStepComponent } from '../add-step/add-step.component';
import { Step, FunctionObj, DynamicProcessReq, DynamicProcessRecordReq, TempFunctionObj, DosingFunctionObj, PumpMotorFunctionObj, WaterDrainFunctionObj, OperatorMessageObj } from '../../../@theme/model/process-planning-class';
import { AddEditFunctionComponent } from '../add-edit-function/add-edit-function.component';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../../@theme/model/user-class';
import { AuthService } from '../../../@theme/services/auth.service';
import { ProcessService } from '../../../@theme/services/process.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ngx-dynamic-process',
  templateUrl: './dynamic-process.component.html',
  styleUrls: ['./dynamic-process.component.scss']
})
export class DynamicProcessComponent implements OnInit, OnDestroy {

  processModal = new DynamicProcessReq();
  stepList: Step[] = [];
  addFunctionFlag = false;
  currentSelectedFunction = '';
  selectedStep: any;
  id: any;
  currentUserId: any;
  currentUserHeadid: any;
  currentUser$: Subscription;
  currentUser: User;
  currentUserGroupUserIds: any;
  dynamicProcessRecordReq: DynamicProcessRecordReq[] = [];
  subBtnName = '';
  topHeader = '';

  constructor(private _modalService: NgbModal, private toasterService: ToastrService, private router: Router,
    private authService: AuthService, private processService: ProcessService, private route: ActivatedRoute) {
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserHeadid = ele.user.user_head_id;
        this.currentUserGroupUserIds = ele.user.group_user_ids;
      }
    });
  }
  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }
  ngOnInit() {
    this.onPageLoad();
  }
  onPageLoad() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      if (this.id) {
        this.subBtnName = 'Update';
        this.topHeader = 'Edit Process';

      }
      this.processService.getDynamicProcessById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.processModal = data[0].data.process[0];
            this.dynamicProcessRecordReq = data[0].data.process_record;
            if (this.dynamicProcessRecordReq.length) {
              let stepArray = [];
              this.stepList = [];
              this.dynamicProcessRecordReq.forEach((ele, index) => {
                if (stepArray.findIndex(v => v == ele.step_name) == -1) {
                  stepArray.push(ele.step_name);
                  let obj = new Step();
                  obj.step_name = ele.step_name;
                  obj.step_position = ele.step_position;
                  obj.control_id = ele.control_id;
                  obj.functionList = [];
                  this.stepList.push(obj)
                }
              })
              this.dynamicProcessRecordReq.forEach((ele, index) => {
                let stepIndex = this.stepList.findIndex(v => v.step_name == ele.step_name);
                if (stepIndex > -1) {
                  let wfuncObj = new WaterDrainFunctionObj();
                  let tfuncObj = new TempFunctionObj();
                  let dfuncObj = new DosingFunctionObj();
                  let pfuncObj = new PumpMotorFunctionObj();
                  let ofuncObj = new OperatorMessageObj();
                  if (ele.func_value === 'temp') {
                    tfuncObj.pressure = ele.pressure;
                    tfuncObj.set_value = ele.set_value;
                    tfuncObj.hold_time = ele.hold_time;
                    tfuncObj.rate_of_rise = ele.rate_of_rise;
                  } else if (ele.func_value === 'dosing') {
                    dfuncObj.have_dose = ele.have_dose;
                    dfuncObj.dose_at_temp = ele.dose_at_temp;
                    dfuncObj.dosing_percentage = ele.dosing_percentage;
                    dfuncObj.fill_type = ele.fill_type;
                    dfuncObj.dose_type = ele.dose_type;
                    dfuncObj.dose_while_heating = ele.dose_while_heating;
                  } else if (ele.func_value === 'pump') {
                    pfuncObj.pump_speed = ele.pump_speed;
                  } else if (ele.func_value === 'water') {
                    wfuncObj.water_type = ele.water_type;
                    wfuncObj.drain_type = ele.drain_type;
                    wfuncObj.fabric_ratio = ele.fabric_ratio;
                    wfuncObj.jet_level = ele.jet_level;
                  } else if (ele.func_value === 'operator') {
                    ofuncObj.operator_message = ele.operator_message;
                    ofuncObj.operator_code = ele.operator_code;
                    ofuncObj.start_at_temp = ele.start_at_temp;
                  }
                  let funcObj = new FunctionObj();
                  funcObj.func_value = ele.func_value;
                  funcObj.func_position = ele.func_position;
                  funcObj.func_name = ele.func_name;
                  funcObj.dosingFunction = dfuncObj;
                  funcObj.waterDrainFunction = wfuncObj;
                  funcObj.tempFunction = tfuncObj;
                  funcObj.pumpMotorFunction = pfuncObj;
                  this.stepList[stepIndex].functionList.push(funcObj);
                }
              })
            }
          } else {
            this.toasterService.error(data.message);
          }
        }, error => {
          this.toasterService.error('Server Error');
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add Process';
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.stepList, event.previousIndex, event.currentIndex);
    this.stepList.forEach((ele, index) => {
      ele.step_position = index + 1;
    })
  }
  dropFunction(event: CdkDragDrop<string[]>, step_position) {
    moveItemInArray(this.stepList[step_position - 1].functionList, event.previousIndex, event.currentIndex);
    this.stepList[step_position - 1].functionList.forEach((ele, index) => {
      ele.func_position = index + 1;
    })
  }
  onEditStep(step) {
    const modalRef = this._modalService.open(AddStepComponent);
    modalRef.componentInstance.position = step.step_position;
    modalRef.componentInstance.stepList = this.stepList;
    modalRef.componentInstance.editStep = true;
    modalRef.result
      .then((result) => {
        if (result) {
          this.stepList[step.step_position - 1].step_name = result.name;
        }
      });
  }
  onEditFunction(func) {
    const modalRef = this._modalService.open(AddEditFunctionComponent);
    let functionList = this.stepList[this.selectedStep - 1].functionList;
    modalRef.componentInstance.position = func.func_position;
    modalRef.componentInstance.functionList = functionList;
    modalRef.componentInstance.editFunction = true;
    modalRef.result
      .then((result) => {
        if (result) {
          functionList[func.func_position - 1] = result;
        }
      });
  }
  onDeleteStep(step) {
    let i = this.stepList.findIndex(v => v.step_position == step.step_position);
    this.stepList.splice(i, 1);
    // this.rowData = [...this.colourStockRecord]
  }
  onDeleteFunction(func) {
    let functionList = this.stepList[this.selectedStep - 1].functionList;
    let i = functionList.findIndex(v => v.func_position == func.func_position);
    functionList.splice(i, 1);
  }
  onFunctionSelect(value) {
    this.currentSelectedFunction = value;
    this.addFunctionFlag = false;
  }
  onAddFunction(step?) {
    if (step) {
      this.selectedStep = step.step_position;
    }
    const modalRef = this._modalService.open(AddEditFunctionComponent);
    let functionList = this.stepList[this.selectedStep - 1].functionList;
    modalRef.componentInstance.position = functionList.length + 1;
    modalRef.componentInstance.functionList = functionList;
    modalRef.componentInstance.editFunction = false;
    modalRef.result
      .then((result) => {
        if (result) {
          let func = new FunctionObj();
          func = result;
          if (!functionList.length || result.func_position == functionList.length + 1) {
            functionList.push(func);
          } else {
            functionList.splice(result.func_position - 1, 0, func);
          }
        }
      });
  }
  onAddStep() {
    const modalRef = this._modalService.open(AddStepComponent);
    modalRef.componentInstance.position = this.stepList.length + 1;
    modalRef.componentInstance.stepList = this.stepList;
    modalRef.componentInstance.editStep = false;
    modalRef.result
      .then((result) => {
        if (result) {
          let step = new Step();
          step.step_name = result.name;
          step.step_position = result.position;
          step.functionList = [];
          if (!this.stepList.length || result.position == this.stepList.length + 1) {
            this.stepList.push(step);
          } else {
            this.stepList.splice(result.position - 1, 0, step);
          }
        }
      });
  }
  onStepClick(step) {
    this.selectedStep = step.step_position;
  }
  onCustomFormSubmit(form: NgForm) {
    this.dynamicProcessRecordReq = [];
    if (this.stepList.length) {
      this.stepList.forEach(step => {
        if (step.functionList.length) {
          step.functionList.forEach(func => {
            let record = new DynamicProcessRecordReq();
            record.control_id = step.control_id;
            record.step_name = step.step_name;
            record.step_position = step.step_position;
            record.func_name = func.func_name;
            record.func_value = func.func_value;
            record.func_position = func.func_position;
            record.water_type = func.waterDrainFunction ? func.waterDrainFunction.water_type : '';
            record.fabric_ratio = func.waterDrainFunction ? func.waterDrainFunction.fabric_ratio : '';
            record.jet_level = func.waterDrainFunction ? func.waterDrainFunction.jet_level : '';
            record.drain_type = func.waterDrainFunction ? func.waterDrainFunction.drain_type : '';
            record.set_value = func.tempFunction ? func.tempFunction.set_value : '';
            record.rate_of_rise = func.tempFunction ? func.tempFunction.rate_of_rise : '';
            record.hold_time = func.tempFunction ? func.tempFunction.hold_time : '';
            record.pressure = func.tempFunction ? func.tempFunction.pressure : '';
            record.pump_speed = func.pumpMotorFunction ? func.pumpMotorFunction.pump_speed : "";
            record.fill_type = func.dosingFunction ? func.dosingFunction.fill_type : '';
            record.dosing_percentage = func.dosingFunction ? func.dosingFunction.dosing_percentage : '';
            record.have_dose = func.dosingFunction ? func.dosingFunction.have_dose : '';
            record.dose_at_temp = func.dosingFunction ? func.dosingFunction.dose_at_temp : '';
            record.dose_type = func.dosingFunction ? func.dosingFunction.dose_type : '';
            record.dose_while_heating = func.dosingFunction ? func.dosingFunction.dose_while_heating : false;
            record.operator_code = func.operatorFunction ? func.operatorFunction.operator_code : '';
            record.operator_message = func.operatorFunction ? func.operatorFunction.operator_message : '';
            record.start_at_temp = func.operatorFunction ? func.operatorFunction.start_at_temp : '';
            this.dynamicProcessRecordReq.push(record)
          })
        }
      });
    }
    this.processModal.process_req_record = [];
    this.processModal.process_req_record = this.dynamicProcessRecordReq;
    // for update
    if (this.id) {
      this.processModal.updated_by = this.currentUserId;
      this.processService.updateDynamicProcess(this.processModal).subscribe(data => {
        console.log(data)
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/process/view-process-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
      this.processModal.created_by = this.currentUserId;
      this.processModal.user_head_id = this.currentUserHeadid;
      console.log(this.processModal)
      this.processService.addDynamicProcess(this.processModal).subscribe(data => {
        data = data[0]
        if (!data.error) {
          this.toasterService.success(data.message);
          form.resetForm();
          this.router.navigate(['/pages/process/view-process-list']);
        } else {
          this.toasterService.error(data.message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    }
  }

  numberOnly(event) {

  }
}
