import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../@theme/services/user.service';
import { Subscription, Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  onOffButton: boolean;
}
@Component({
  selector: 'ngx-view-plc',
  templateUrl: './view-plc.component.html',
  styleUrls: ['./view-plc.component.scss'],
  providers: [DatePipe]
})
export class ViewPlcComponent implements OnInit, OnDestroy {

  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
    onOffButton: true
  };
  time: any;
  ftime: any = 10;
  stime: any = 10;
  ttime: any = 10;
  prodStatusChange = true;
  reportList = [];
  copyReportList = [];
  currentStatus = '';
  initialFlag = true;
  rawMaterialList = [{ name: "Raw1", quantity: 2000, usedQ: 0 }, { name: "Raw2", quantity: 2000, usedQ: 0 }, { name: "Raw3", quantity: 2000, usedQ: 0 }]
  private unsubscribe = new Subject<void>();
  rawUsed = [];
  rawUnused = [];
  radioGroupValue = '';
  constructor(public userService: UserService, private datePipe: DatePipe) {
    Observable.interval(1000).subscribe(x => {
      this.getModbusStatus();
      this.getRawMaterialStatus();
    });
  }

  ngOnInit() {
    this.rawUnused = [...this.rawMaterialList];
    this.getReport();
  }
  ngOnDestroy() {
    this.unsubscribe.next();
  }
  onClick(event) {
    let button = 1;
    if (!event) {
      button = 2;
      this.time = '';
    }
    let obj = { 'output': [button, this.time] }
    this.userService.updateLocalModbus(obj).subscribe(res => {
      if (res) {

      }
    })
  }
  getModbusStatus() {
    this.userService.getLocalModbus()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        console.log('res', res);
        if (res[0] == 0) {
          // this.time = '';
          this.lightCard.onOffButton = true;
        } else {
          // if (res[1] != this.time) {
          //   this.time = res[1]
          // }
          this.lightCard.onOffButton = false;
        }
        console.log(this.lightCard.onOffButton)
      });
  }
  onChangeButton() {
    this.addRawMaterial();
  }
  addRawMaterial() {
    let obj = { 'data': [1, this.ftime, this.stime, this.ttime] };
    this.userService.addRawMaterial(obj).subscribe(res => {
      if (res) {

      }
    })
  }
  getRawMaterialStatus() {
    this.userService.getRawMaterialStatus()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        res = res[0];
        if (res !== undefined) {
          console.log('res', res);
          this.prodStatusChange = false;
          if (res.status == 1) {
            this.currentStatus = 'Production Paused';
          } else if (res.status == 2) {
            this.currentStatus = 'Production Started by Operator ' + res.operatorId;
          } else if (res.status == 3) {
            this.currentStatus = 'Production stopped due to some emergency';
            this.prodStatusChange = true;
            this.copyReportList = [...this.reportList];
            this.getReport();
          } else if (res.status == 4) {
            this.currentStatus = 'Production Completed';
            this.prodStatusChange = true;
            this.copyReportList = [...this.reportList];
            this.getReport();
          } else if (res.status == 0) {
            this.currentStatus = 'Production not started yet.';
            this.prodStatusChange = true;
          }
        }

      });
  }
  getReport() {
    this.userService.getReport()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {

        this.reportList = res;
        if (this.reportList.length) {
          this.reportList = this.reportList.filter(v => v.startTime != undefined);
        }
        if (this.reportList.length) {
          if (this.initialFlag) {
            this.copyReportList = [...this.reportList];
            this.reportList.forEach(report => {
              if (report.status == 1) {
                report['statusName'] = 'Paused'
              } else if (report.status == 2) {
                report['statusName'] = 'Start'
              } else if (report.status == 3) {
                report['statusName'] = 'Emergency Stop'
              } else if (report.status == 4) {
                report['statusName'] = 'Complete';
              }
              report.startTime = this.datePipe.transform(report.startTime, 'hh:MM:ss')
              report.stopTime = this.datePipe.transform(report.stopTime, 'hh:MM:ss');

              this.rawMaterialList[0].usedQ = this.rawMaterialList[0].usedQ + report.rawMaterialA;
              this.rawMaterialList[1].usedQ = this.rawMaterialList[1].usedQ + report.rawMaterialB;
              this.rawMaterialList[2].usedQ = this.rawMaterialList[2].usedQ + report.rawMaterialC;
            })
            this.initialFlag = false;
          } else {
            this.reportList.forEach(report => {
              if (report.status == 1) {
                report['statusName'] = 'Paused'
              } else if (report.status == 2) {
                report['statusName'] = 'Start'
              } else if (report.status == 3) {
                report['statusName'] = 'Emergency Stopped'
              } else if (report.status == 4) {
                report['statusName'] = 'Complete';
              }
              report.startTime = this.datePipe.transform(report.startTime, 'hh:MM:ss')
              report.stopTime = this.datePipe.transform(report.stopTime, 'hh:MM:ss');
              if (this.copyReportList.length !== this.reportList.length) {
                this.rawMaterialList[0].usedQ = this.rawMaterialList[0].usedQ + report.rawMaterialA;
                this.rawMaterialList[1].usedQ = this.rawMaterialList[1].usedQ + report.rawMaterialB;
                this.rawMaterialList[2].usedQ = this.rawMaterialList[2].usedQ + report.rawMaterialC;
              }
            })
          }

        }
      });
  }
}

// 1-pause
// 2-start
// 3-emergency stop
// 4-complete