import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
  <nb-card status="success">
      <nb-card-header class="text-white">
      {{title}}
      </nb-card-header>
      <nb-card-body>
        <div class="info">
          <div class="value">{{count}}</div>
          <div class="details">{{percentage}} %</div>
        </div>
      </nb-card-body>
    </nb-card>
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() count: string;
  @Input() percentage;
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