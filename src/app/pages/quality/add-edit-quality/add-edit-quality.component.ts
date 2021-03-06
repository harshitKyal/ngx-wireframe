import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Quality } from '../../../@theme/model/quality-class';
import { QualityService } from '../../../@theme/services/quality.service';
import { AuthService } from '../../../@theme/services/auth.service';
import { Subscription } from 'rxjs';
import { User, UserPermission, ViewReqObj } from '../../../@theme/model/user-class';
import { PartyService } from '../../../@theme/services/party.service';

@Component({
  selector: 'app-add-edit-quality',
  templateUrl: './add-edit-quality.component.html',
  styleUrls: ['./add-edit-quality.component.scss']
})
export class AddEditQualityComponent implements OnInit, OnDestroy {

  qualityModal: Quality;
  id: any;
  qualityTypeList = [];
  // qualityTypeList = [{ 'ID': '1', 'Name': 'Type1' }, { 'ID': '2', 'Name': 'Type2' }];
  partyNameList = [];
  qualitySubTypeList = [];
  subBtnName = '';
  topHeader = '';
  currentUserId: any;
  currentUserHeadid: any;
  currentUser$: Subscription;
  currentUser: User;
  currentUserPermission: UserPermission[] = [];
  viewPartyReqOb = new ViewReqObj();
  currentUserGroupUserIds: any;
  isSameQualityId = false;

  constructor(private toasterService: ToastrService, private route: ActivatedRoute, private partyService: PartyService,
    private router: Router, private qualityService: QualityService, private authService: AuthService) {
    this.qualityModal = new Quality();
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserHeadid = ele.user.user_head_id;
        this.currentUserPermission = ele.user_permission;
        this.currentUserGroupUserIds = ele.user.group_user_ids;
      }
    });
  }

  ngOnInit() {
    this.getTypeList();
    this.getPartyList();
    this.onPageLoad();
  }
  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }

  onPageLoad() {
    this.isSameQualityId = false;
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.subBtnName = 'Update';
      this.topHeader = 'Edit Quality';
      this.qualityService.getQualityById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.qualityModal = data[0].data[0];
            this.getSubTypeList(this.qualityModal.quality_type);
          } else {
            this.toasterService.error(data[0].message);
          }
        }, error => {
          this.toasterService.error(error);
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add Quality';
    }
  }

  getTypeList() {
    this.qualityTypeList = [];
    this.qualityService.getTypeList().subscribe(
      data => {
        console.log("fdsfds", data)
        if (!data[0].error) {
          this.qualityTypeList = data[0].data;
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error(error);
      });
  }
  getPartyList() {
    this.partyNameList = [];
    this.viewPartyReqOb.view_group = true;
    this.viewPartyReqOb.current_user_id = this.currentUserId;
    this.viewPartyReqOb.user_head_id = this.currentUser.user_head_id;
    this.viewPartyReqOb.group_user_ids = this.currentUserGroupUserIds;
    this.partyService.getPartyList(this.viewPartyReqOb).subscribe(
      data => {
        if (!data[0].error) {
          this.partyNameList = data[0].data;
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error(error);
      });
  }
  onQualityIdChange(value) {
    this.qualityService.checkQualityId(value).subscribe(
      data => {
        if (!data[0].error) {
          this.isSameQualityId = data[0].data.length ? true : false;
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error(error);
      });
  }
  onTypeChange(event) {
    this.getSubTypeList(event);
  }

  getSubTypeList(type) {
    // console.log(type)
    this.qualitySubTypeList = [];
    this.qualityService.getSubTypeListByType(type).subscribe(
      data => {
        // data = data[0]
        console.log("in get sub list")
        console.log(data)
        if (!data[0].error) {
          this.qualitySubTypeList = data[0].data;
          console.log("sub", this.qualitySubTypeList)
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error(error);
      });
  }

  onCustomFormSubmit(form: NgForm) {
    //for update
    if (this.id) {
      this.qualityModal.updated_by = this.currentUserId;
      this.qualityService.updateQuality(this.qualityModal).subscribe(data => {
        // console.log(data)
        // data= data[0].data
        // console.log("in edit quality")
        // console.log(data)
        if (!data[0].error) {
          this.toasterService.success("Updated Successfully");
          form.resetForm();
          this.router.navigate(['/pages/quality/view-quality']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
      //for add
      this.qualityModal.created_by = this.currentUserId;
      this.qualityModal.user_head_id = this.currentUserHeadid;
      // console.log(this.qualityModal)
      this.qualityService.addQuality(this.qualityModal).subscribe(data => {
        // data = data[0]
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/quality/view-quality']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    }
  }
}
