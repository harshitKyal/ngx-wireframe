import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {

  public permissionMessage: any = '';
  public title: any = '';
  @Input() message;
  @Input() titleFrom;
  constructor(public activeModal: NgbActiveModal, private dashboardService: DashboardService,
    private toasterService: ToastrService) {
  }

  ngOnInit() {
    this.permissionMessage = this.message;
    this.title = this.titleFrom;
  }

  onGetOTP() {
    this.dashboardService.getOTP().subscribe(data => {
      if (!data[0].error) {
        this.activeModal.close(data[0].data);
        this.toasterService.success(data[0].message);
      } else {
        this.activeModal.close(false);
        this.toasterService.error(data[0].message);
      }
    });
  }
}
