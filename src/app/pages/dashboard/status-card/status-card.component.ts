import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
  <nb-card size="xsmall" class="solar-card">
      <nb-card-header>{{title}}</nb-card-header>
      <nb-card-body>
        <div class="info">
          <div class="value">{{type}}</div>
          <div class="details">{{on}}</div>
        </div>
      </nb-card-body>
    </nb-card>    
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on = true;
}
// <div echarts [options]="option" class="echart"></div>

// <nb-card (click)="on = !on" [ngClass]="{'off': !on}">
//       <div class="icon-container">
//         <div class="icon {{ type }}">
//           <ng-content></ng-content>
//         </div>
//       </div>

//       <div class="details">
//         <div class="title">{{ title }}</div>
//         <div class="status">{{ on ? 'ON' : 'OFF' }}</div>
//       </div>
//     </nb-card>