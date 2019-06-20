import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { element } from '@angular/core/src/render3';
import { User, UserPermission } from '../../../@theme/model/user-class';
import { UserService } from '../../../@theme/services/user.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../@theme/services/auth.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit, OnDestroy {

  permissionArray = ['have_quality', 'can_add_quality', 'can_view_quality', 'can_edit_quality', 'can_delete_quality',
    'have_user', 'can_add_user', 'can_view_user', 'can_edit_user', 'can_delete_user', 'have_party', 'can_add_party', 'can_edit_party', 'can_view_party', 'can_delete_party'
    , 'have_stock', 'can_add_stock', 'can_edit_stock', 'can_view_stock', 'can_delete_stock'];

  tableForms = ["Party", "Quality", "User", "Fabric In", "Lot", "Program", "Shade", "Supplier", "Supplier Rate", "Shade", "Program", "Colour Stock"];
  designation = ['Manager', 'Master', 'Accountant', 'Staff', 'Helper']


  // if ((JSON.parse(localStorage.getItem('currentUser')).user_name)) {

  // }
  @ViewChild('vform') validationForm: FormGroup;
  userModal: User;
  currentUser;
  isAdmin: boolean = false;
  companyList = [];
  userRoleList = [];
  tableHeading = ["Forms", "View", "Add", "Edit", "Delete", "View Group", "Edit Group", "Delete Group"];
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
  userHeadId: any;
  currentUser$: Subscription;
  currentUserPermission = [];
  currentUserId: any;
  userPermissionData: UserPermission[] = [];
  showUserNameListFlag = false;
  usersList: User[] = [];
  checkBoxValue = false;
  constructor(private userService: UserService, private toasterService: ToastrService,
    private route: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser.subscribe(ele => {
      if (ele != null) {
        // console.log("in eleeeeeeee",ele)
        this.userHeadId = ele.user.user_head_id;
        this.currentUser = ele.user;
        this.currentUserId = ele.user.user_id;
        this.currentUser;
        this.currentUserPermission = ele.user_permission;
        if (ele.user.user_name === "admin") {
          this.tableHeading = [];
          this.tableHeading = ["Forms", "View", "Add", "Edit", "Delete", "View Group", "View All", "Edit Group", "Edit All", "Delete Group", "Delete All"];
          this.isAdmin = true;
        }
      }
    });
  }
  ngOnInit() {
    this.setUserPermissionForm();
    this.userModal = new User();
    this.getItems();
    this.onPageLoad();
    this.getUsers();
  }
  setUserPermissionForm() {
    this.userPermissionData = [];
    this.tableForms.forEach((ele, index) => {
      let userObj = new UserPermission();
      userObj.form_name = ele;
      this.userPermissionData.push(userObj);
    })
  }
  onPageLoad() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.disbaleFlag = false;
      this.subBtnName = 'Update';
      this.topHeader = 'Edit User';
      this.userService.getUserById(this.id).subscribe(
        data => {
          if (!data[0].error) {
            // console.log("in update user")
            // console.log(data[0].data)
            this.userModal = data[0].data.user[0];

            this.showUserNameListFlag = data[0].data.user[0].group_head_check_box;
            //this.userModal.group_head_check_box = true;
            this.userPermissionData = [];
            this.userPermissionData = data[0].data.user_permission

          } else {
            this.toasterService.error(data.message);
          }
        }, error => {
          this.toasterService.error(error);
        });
    } else {
      this.subBtnName = 'Save';
      this.topHeader = 'Add User';
    }
  }
  onAssign(value) {
    this.showUserNameListFlag = value.returnValue;
  }
  getUsers() {
    this.usersList = [];
    this.userService.getUserNameIdList().subscribe(data => {
      if (!data[0].error) {
        this.usersList = data[0].data;
      }
    });
  }
  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }

  getItems() {
    this.items = this.userService.getUserPermissionJson();
  }


  onCustomFormSubmit(form: NgForm) {

    //if isadmin and goup check box is falsse then users head id should be null 
    // if is admin and under name is selected then selected user name's id should be there
    //if not admin then head id should be current user's user id
    if (this.isAdmin && !this.userModal.group_head_check_box) {
      console.log("in admin plus not thick")
      this.userModal.user_head_id = null
    }
    else if (!this.isAdmin)
      this.userModal.user_head_id = this.currentUserId

    // console.log("before user submit")
    // console.log(this.userHeadId)
    this.userModal.userPermission = this.userPermissionData;
    if (this.id) {
      this.userModal.updated_by = this.currentUserId;
      this.userService.updateUser(this.userModal).subscribe(data => {
        data = data[0]
        if (!data.error) {
          this.toasterService.success(data.message);
          form.resetForm();
          this.router.navigate(['/pages/user/view-user']);
        } else {
          this.toasterService.error('User Not Updated Successfully!');
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    } else {
      //for add
      //console.log('uu', this.userModal)
      this.userModal.created_by = this.currentUserId;
      this.userService.addUser(this.userModal).subscribe(data => {
        if (!data[0].error) {
          this.toasterService.success(data[0].message);
          form.resetForm();
          this.router.navigate(['/pages/user/view-user']);
          // } else {
          //   this.toasterService.error('User Not Added Successfully!');
        }
      }, error => {
        this.toasterService.error('Server Error');
      });
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
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

// setPermissionById() {
//   this.values = [];
//   this.permissionArray.forEach((ele: any) => {
//     if (this.userModal[ele] === '1') {
//       this.values.push(ele);
//     }
//   });
//   this.items.forEach((ele: TreeviewItem) => {
//     if (this.values.indexOf(ele.value) > -1) {
//       ele.checked = true;
//     }
//     ele.children.forEach(subelement => {
//       if (this.values.indexOf(subelement.value) > -1) {
//         subelement.checked = true;
//       }
//     })
//   });
// }
// onPermissionChange(value) {
//   this.values = value;
//   if (this.values.length) {
//     this.permissionArray.forEach((ele: any) => {
//       if (this.values.indexOf(ele) > -1) {
//         this.userModal[ele] = true;
//       } else {
//         this.userModal[ele] = false;
//       }
//     });
//     this.values.forEach(ele => {
//       if (ele === 'can_view_quality' || ele === 'can_add_quality' || ele === 'can_edit_quality' || ele === 'can_delete_quality') {
//         this.userModal['have_quality'] = true;
//       } else if (ele === 'can_view_user' || ele === 'can_add_user' || ele === 'can_edit_user' || ele === 'can_delete_user') {
//         this.userModal['have_user'] = true;
//       } else if (ele === 'can_view_party' || ele === 'can_add_party' || ele === 'can_edit_party' || ele === 'can_delete_party') {
//         this.userModal['have_party'] = true;
//       } else if (ele === 'can_view_stock' || ele === 'can_add_stock' || ele === 'can_edit_stock' || ele === 'can_delete_stock') {
//         this.userModal['have_stock'] = true;
//       }
//     })
//   } else {
//     this.permissionArray.forEach(ele => {
//       this.userModal[ele] = false;
//     })
//   }
// }
