import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../../@theme/model/supplier-class';
import { ToastrService } from 'ngx-toastr';
import { SupplierService } from '../../../@theme/services/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../../../@core/data/users';
import { UserPermission } from '../../../@theme/model/user-class';
import { AuthService } from '../../../@theme/services/auth.service';

@Component({
  selector: 'ngx-add-edit-supplier',
  templateUrl: './add-edit-supplier.component.html',
  styleUrls: ['./add-edit-supplier.component.scss']
})
export class AddEditSupplierComponent implements OnInit {

  supplierModal: Supplier;
  id: any;
  subBtnName = '';
  topHeader = '';
  currentUserId: any;
  currentUserHeadid: any;
  currentUser$: Subscription;
  currentUser: User;
  currentUserPermission: UserPermission[] = [];

  constructor(private toasterService: ToastrService, private route: ActivatedRoute, private authService: AuthService,
    private router: Router, private supplierService: SupplierService) {
    this.supplierModal = new Supplier();
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

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
      return false;
    }
    return true;
  }

  onPageLoad() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.subBtnName = 'Update';
      this.topHeader = 'Edit Supplier';
      this.supplierService.getSupplierById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            this.supplierModal = data[0].data[0];
          } else {
            this.toasterService.error(data[0].message);
          }
        }, error => {
          this.toasterService.error(error);
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add Supplier';
    }
  }


  onCustomFormSubmit(form: NgForm) {
    if (this.id) {
      this.supplierModal.updated_by = this.currentUserId;
      this.supplierService.updateSupplier(this.supplierModal).subscribe(data => {
        if (!data[0].error) {
          this.toasterService.success("Updated Successfully");
          form.resetForm();
          this.router.navigate(['/pages/supplier/view-supplier-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
      this.supplierModal.created_by = this.currentUserId;
      this.supplierModal.user_head_id = this.currentUserHeadid;
      console.log(this.supplierModal)
      this.supplierService.addSupplier(this.supplierModal).subscribe(data => {
        // data = data[0]
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/supplier/view-supplier-list']);
        } else {
          this.toasterService.error(data[0].message);
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    }
  }
}

