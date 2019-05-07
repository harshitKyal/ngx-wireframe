import { Component, OnInit, ɵConsole, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ColDef } from 'ag-grid-community';

import { ToastrService } from 'ngx-toastr';
import { AgRendererComponent } from 'ag-grid-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ViewCell, LocalDataSource } from 'ng2-smart-table';
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';
import { Quality } from '../../@theme/model/quality-class';
import { QualityService } from '../../@theme/services/quality.service';
import { PrintService } from '../../@theme/services/print.service';
import { PermissionService } from '../../@theme/services/permission.service';
import { QzTrayService } from '../../@theme/services/qz-tray.service';
import { ConfirmDialogComponent } from '../../@theme/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent {

}

// export class MyLinkRendererComponent implements ViewCell, OnInit {
//   value: any;
//   rowData: any;
//   editQualityPermission = 0;
//   deleteQualityPermission = 0;

//   constructor(private router: Router, private modalService: NgbModal, private qualityService: QualityService,
//     private toasterService: ToastrService, private permissionService: PermissionService) {
//   }
//   renderValue: string;
//   @Output() save: EventEmitter<any> = new EventEmitter();

//   ngOnInit() {
//     this.editQualityPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_edit_quality);
//     this.deleteQualityPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_delete_quality);
//   }

//   editQuality() {
//     if (this.editQualityPermission) {
//       this.router.navigate(['/quality/edit-quality/' + this.value]);
//     } else {
//       const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit quality. If you want to edit quality ask admin for permission.');
//       if (res) {

//       } else {

//       }
//     }
//   }
//   onDeleteQuality() {
//     if (this.deleteQualityPermission) {
//       const dialogRef = this.modalService.open(ConfirmDialogComponent);
//       dialogRef.componentInstance.message = 'Are you sure you want to delete quality ?';
//       dialogRef.componentInstance.titleFrom = 'Delete Quality'
//       dialogRef.result.then((result: any) => {
//         if (result) {
//           const id = this.value;
//           this.qualityService.deleteQualityById(id).subscribe(data => {
//             if (!data[0].error) {
//               this.save.emit(true);
//               this.toasterService.success(data[0].message);
//             } else {
//               this.toasterService.error(data[0].message);
//             }
//           });
//         }
//       });
//     } else {
//       const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete quality. If you want to delete quality ask admin for permission.');
//       if (res) {

//       } else {

//       }
//     }
//   }
// }