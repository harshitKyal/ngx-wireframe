import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Party } from '../../../@theme/model/party-class';
import { PartyService } from '../../../@theme/services/party.service';

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

  constructor(private toasterService: ToastrService, private route: ActivatedRoute,
    private router: Router, private partyService: PartyService) {
    this.partyModal = new Party();
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
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  
  onCustomFormSubmit(form: NgForm) {
    //for update
    if (this.id) {
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
