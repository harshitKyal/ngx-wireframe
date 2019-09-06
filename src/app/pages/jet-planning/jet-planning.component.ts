import { Component, OnInit } from '@angular/core';
import { ProcessPlanningService } from '../../@theme/services/process-planning.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from '../../@theme/services/permission.service';
import { Papa } from 'ngx-papaparse';
import { AuthService } from '../../@theme/services/auth.service';
import { Subscription } from 'rxjs';
import { ViewReqObj } from '../../@theme/model/user-class';

@Component({
  selector: 'ngx-jet-planning',
  templateUrl: './jet-planning.component.html',
  styleUrls: ['./jet-planning.component.scss']
})
export class JetPlanningComponent implements OnInit {

  currentUserId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUser;
  processPlanningList: any = [];
  processPlanningReqObj = new ViewReqObj();
  currentUserGroupUserIds: any;

  constructor(private processPlanningService: ProcessPlanningService, private router: Router, private tosterService: ToastrService
    , private permissionService: PermissionService, private papa: Papa, private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserPermission = ele.user_permission;
        this.currentUserGroupUserIds = ele.user.group_user_ids;
      }
    });
  }

  ngOnInit() {
    if (this.currentUserPermission && this.currentUserPermission.length) {
      this.currentUserPermission.forEach(ele => {
        if (ele.form_name === 'Process') {
          this.processPlanningReqObj.current_user_id = this.currentUserId;
          this.processPlanningReqObj.user_head_id = this.currentUser.user_head_id;
          this.processPlanningReqObj.group_user_ids = this.currentUserGroupUserIds;
        }
      })
    }
    this.getProcessPlanningData();
  }

  getProcessPlanningData() {
    this.processPlanningReqObj.view_all = true;
    this.processPlanningReqObj.view_group = false;
    this.processPlanningReqObj.view_own = false;
    this.processPlanningService.getAllprocessPlannings(this.processPlanningReqObj).subscribe(data => {
      if (!data[0].error) {
        this.processPlanningList = data[0].data;
      } else {
        this.tosterService.error(data[0].message);
      }
    });
  }
}
