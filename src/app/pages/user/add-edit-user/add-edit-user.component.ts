import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { element } from '@angular/core/src/render3';
import { User } from '../../../@theme/model/user-class';
import { UserService } from '../../../@theme/services/user.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  permissionArray = ['have_quality', 'can_add_quality', 'can_view_quality', 'can_edit_quality', 'can_delete_quality',
    'have_user', 'can_add_user', 'can_view_user', 'can_edit_user', 'can_delete_user','have_party','can_add_party','can_edit_party','can_view_party','can_delete_party'
    ,'have_stock','can_add_stock','can_edit_stock','can_view_stock','can_delete_stock'];
  @ViewChild('vform') validationForm: FormGroup;
  userModal: User;
  currentUser;
  companyList = [];
  userRoleList = [];
  subBtnName = 'Save';
  topHeader = '';
  source: LocalDataSource;
  id;
  values: any[];
  items: TreeviewItem[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: false,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });

  disbaleFlag = true;
  constructor(private userService: UserService, private toasterService: ToastrService,
    private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.userModal = new User();
    this.getItems();
    this.onPageLoad();
  }

  onPageLoad() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.disbaleFlag = false;
      this.subBtnName = 'Update';
      this.topHeader = 'Edit User';
      this.userService.getUserById(this.id).subscribe(
        data => {
          if (!data[0].error) {''
            this.userModal = data[0].data[0];
            this.setPermissionById();
            console.log(this.userModal);
            // if (this.currentUser.UserRoleID == this.userModal.UserRoleID || this.currentUser.UserRoleID == 1) {
            //   this.isPasswordDisabled = false;
            // }
          } else {
            this.toasterService.error(data.message);
          }
        }, error => {
          this.toasterService.error(error);
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add User';
      // this._loaderService.hide();
    }
  }

  setPermissionById() {
    this.values = [];
    this.permissionArray.forEach((ele: any) => {
      if (this.userModal[ele] === '1') {
        this.values.push(ele);
      }
    });
    this.items.forEach((ele: TreeviewItem) => {
      if (this.values.indexOf(ele.value) > -1) {
        ele.checked = true;
      }
      ele.children.forEach(subelement => {
        if (this.values.indexOf(subelement.value) > -1) {
          subelement.checked = true;
        }
      })
    });
  }

  getItems() {
    debugger
    this.items = this.userService.getUserPermissionJson();
  }

  onPermissionChange(value) {
    this.values = value;
    if (this.values.length) {
      this.permissionArray.forEach((ele: any) => {
        if (this.values.indexOf(ele) > -1) {
          this.userModal[ele] = true;
        } else {
          this.userModal[ele] = false;
        }
      });
      this.values.forEach(ele => {
        if (ele === 'can_view_quality' || ele === 'can_add_quality' || ele === 'can_edit_quality' || ele === 'can_delete_quality') {
          this.userModal['have_quality'] = true;
        } else if (ele === 'can_view_user' || ele === 'can_add_user' || ele === 'can_edit_user' || ele === 'can_delete_user') {
          this.userModal['have_user'] = true;
        } else if (ele === 'can_view_party' || ele === 'can_add_party' || ele === 'can_edit_party' || ele === 'can_delete_party') {
          this.userModal['have_party'] = true;
        }else if (ele === 'can_view_stock' || ele === 'can_add_stock' || ele === 'can_edit_stock' || ele === 'can_delete_stock') {
          this.userModal['have_stock'] = true;
        }
      })
    } else {
      this.permissionArray.forEach(ele => {
        this.userModal[ele] = false;
      })
    }
  }

  onCustomFormSubmit(form: NgForm) {
    //for update
    if (this.id) {
      this.userService.updateUser(this.userModal).subscribe(data => {
        data = data[0]
        if (!data.error) {
          this.toasterService.success(data.message);
          form.resetForm();
          this.router.navigate(['./user/view-user']);
        } else {
          this.toasterService.error('User Not Updated Successfully!');
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
      //for add
      //console.log('uu', this.userModal)
      this.userService.addUser(this.userModal).subscribe(data => {
        // if (data) {
        data = data[0]
        this.toasterService.success(data.message);
        form.resetForm();
        this.router.navigate(['./user/view-user']);
        // } else {
        //   this.toasterService.error('User Not Added Successfully!');
        // }
      }, error => {
        this.toasterService.error('Server Error');
      });
    }

    // this.validationForm.reset();
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  alphabetsOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)) {
      return true;
    }
    return false;
  }
}