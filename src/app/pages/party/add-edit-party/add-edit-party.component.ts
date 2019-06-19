import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Party } from '../../../@theme/model/party-class';
import { PartyService } from '../../../@theme/services/party.service';
import { AuthService } from '../../../@theme/services/auth.service';
import { User, UserPermission } from '../../../@theme/model/user-class';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-edit-party',
  templateUrl: './add-edit-party.component.html',
  styleUrls: ['./add-edit-party.component.scss']
})
export class AddEditPartyComponent implements OnInit {
  id: any;
  subBtnName = '';
  topHeader = '';
  partyModal: Party;

  currentUserId: any;
  currentUserHeadid: any;
  currentUser$: Subscription;
  currentUser: User;
  currentUserPermission: UserPermission[] = [];

  constructor(private toasterService: ToastrService, private route: ActivatedRoute,
    private router: Router, private partyService: PartyService, private authService: AuthService) {
    this.partyModal = new Party();
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUserHeadid = ele.user.user_head_id;
        this.currentUserPermission = ele.user_permission;
      }
    });


  }

  ngOnInit() {
    this.onPageLoad();
  }

  onPageLoad() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.subBtnName = 'Update';
      this.topHeader = 'Edit Party';
      this.partyService.getPartyById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.partyModal = data[0].data[0];
          } else {
            this.toasterService.error(data[0].message);
          }
        }, error => {
          this.toasterService.error(error);
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add Party';
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
      return false;
    }
    return true;
  }

  onCustomFormSubmit(form: NgForm) {
    //for update
    if (this.id) {
      this.partyModal.updated_by = this.currentUserId;
      this.partyService.updateParty(this.partyModal).subscribe(data => {
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/party/view-party']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {

      //for add
      this.partyModal.created_by = this.currentUserId;
      this.partyModal.user_head_id = this.currentUserHeadid;
      console.log("party Modal")
      console.log(this.partyModal)
      this.partyService.addParty(this.partyModal).subscribe(data => {
        // data = data[0]
        if (!data.error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/party/view-party']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    }
  }
}
