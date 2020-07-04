import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card style="height:451px;" (click)="onClick()" [ngClass]="{'off': !on}">
      <div class="icon-container" style="height:451px;">
        <div class="icon {{ type }}" style="height:433px;width:422px">
          <ng-content></ng-content>
          <div class="details">
          <div class="title">{{ title }}</div>
          <div class="status">{{ on ? 'ON' : 'OFF' }}</div>
        </div>
        </div>
      </div>

     
    </nb-card>
  `,
})
export class StatusCardComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  @Input() on;
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter()
  onClick() {
    this.onClickEvent.emit(this.on);
    this.on = !this.on;
  }
  constructor() {
  }
  ngOnInit() {
    console.log('on', this.on);

  }
}
