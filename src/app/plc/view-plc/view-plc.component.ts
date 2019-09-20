import { Component, OnInit } from '@angular/core';
interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}
@Component({
  selector: 'ngx-view-plc',
  templateUrl: './view-plc.component.html',
  styleUrls: ['./view-plc.component.scss']
})
export class ViewPlcComponent implements OnInit {

  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  constructor() { }

  ngOnInit() {
  }
  onClick() {

  }
}
