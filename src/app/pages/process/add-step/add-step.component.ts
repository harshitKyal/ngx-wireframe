import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { position } from 'html2canvas/dist/types/css/property-descriptors/position';

@Component({
  selector: 'ngx-add-step',
  templateUrl: './add-step.component.html',
  styleUrls: ['./add-step.component.scss']
})
export class AddStepComponent implements OnInit {

  step_name = '';
  @Input() position;
  step_position = 1;
  positionValues = [];
  @Input() stepList = [];
  @Input() editStep: any;
  submitButton = "Add";

  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit() {
    if (!this.editStep) {
      if (this.position > 0) {
        this.step_position = this.position;
        for (let i = 1; i <= this.position; i++) {
          this.positionValues.push(i);
        }
      }
    } else {
      this.submitButton = "Update";
      if (this.position > 0) {
        this.step_position = this.position;
        this.step_name = this.stepList[this.position - 1].step_name;
        for (let i = 1; i <= this.stepList.length; i++) {
          this.positionValues.push(i);
        }
      }
    }

  }
  onCreate() {
    let obj = { 'name': this.step_name, 'position': this.step_position };
    this.activeModal.close(obj);
  }
}
