import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './api.service';
import { PermissionComponent } from '../components/permission/permission.component';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private modalService: NgbModal, private apiService: ApiService) { }

  callPermissionView(title, message): any {
    const dialogRef = this.modalService.open(PermissionComponent);
    dialogRef.componentInstance.message = message;
    dialogRef.componentInstance.titleFrom = title;
    dialogRef.result.then((result: any) => {
      return result;
    });
  }

}
