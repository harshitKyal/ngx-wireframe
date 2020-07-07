(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/pages/user/add-edit-user/add-edit-user.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/user/add-edit-user/add-edit-user.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>{{topHeader}}\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <form (ngSubmit)=\"onCustomFormSubmit(vform)\" #vform=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>First Name</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userModal.first_name\" name=\"firstName\"\r\n              #firstName=\"ngModel\" (keypress)=\"alphabetsOnly($event)\"  />\r\n            <div *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\" class=\"errors\">\r\n              <div *ngIf=\"firstName.errors && firstName.errors.required\">\r\n                First Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Last Name</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userModal.last_name\" name=\"lastName\"\r\n              #lastName=\"ngModel\" (keypress)=\"alphabetsOnly($event)\"  />\r\n            <div *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\" class=\"errors\">\r\n              <div *ngIf=\"lastName.errors && lastName.errors.required\">\r\n                Last Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>User Name</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userModal.user_name\" name=\"userName\"\r\n              #userName=\"ngModel\" required />\r\n            <div *ngIf=\"userName.invalid  && (userName.dirty || userName.touched)\" class=\"errors\">\r\n              <div *ngIf=\"userName.errors && userName.errors.required\">\r\n                User Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"userModal.email_id\" name=\"email\" #email=\"ngModel\"\r\n               email />\r\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"errors\">\r\n              <div *ngIf=\"email.errors && email.errors.required\">\r\n                Email is required.\r\n              </div>\r\n              <div *ngIf=\"email.errors && !email.errors.required\">\r\n                Valid Email is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Mobile No.</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userModal.mobile_no\" name=\"Telephoneno\"\r\n              #telephoneNo=\"ngModel\" (keypress)=\"numberOnly($event)\"  digits />\r\n            <div *ngIf=\"telephoneNo.invalid && (telephoneNo.dirty || telephoneNo.touched)\" class=\"errors\">\r\n              <div *ngIf=\"telephoneNo.errors && telephoneNo.errors.required\">\r\n                Mobile No. is required.\r\n              </div>\r\n              <div *ngIf=\"telephoneNo.errors && !telephoneNo.errors.required\">\r\n                Valid Mobile No. is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <!-- pattern -->\r\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"userModal.password\" name=\"password\"\r\n              #password=\"ngModel\" required />\r\n            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"errors\">\r\n              <div *ngIf=\"password.errors && password.errors.required\">\r\n                Password is required.\r\n              </div>\r\n              <div *ngIf=\"password.errors && !password.errors.required\">\r\n                Valid Password is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Company</label>\r\n            <!-- pattern -->\r\n            <select class=\"form-control\" [(ngModel)]=\"userModal.company_id\" name=\"company\" #company=\"ngModel\">\r\n              <!-- required -->\r\n              <option disabled value=\"\">Select Company\r\n              </option>\r\n              <option *ngFor=\"let c of companyList\" [value]=\"c.CompanyId\">{{c.CompanyName}}</option>\r\n            </select>\r\n            <!-- <div *ngIf=\"company.invalid && (company.dirty || company.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"company.errors && company.errors.required\">\r\n                    Company is required.\r\n                  </div>\r\n                </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Department</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userModal.department\" name=\"department\" #dept=\"ngModel\"\r\n               />\r\n            <div *ngIf=\"dept.invalid  && (dept.dirty || dept.touched)\" class=\"errors\">\r\n              <div *ngIf=\"dept.errors && dept.errors.required\">\r\n                Department is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Designation</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"userModal.designation\" name=\"designation\" #desigNation=\"ngModel\">\r\n              <!-- required -->\r\n              <option disabled value=\"\">Select Designation\r\n              </option>\r\n              <option *ngFor=\"let d of designation\" [value]=\"d\">{{d}}</option>\r\n            </select>\r\n            <div *ngIf=\"desigNation.invalid  && (desigNation.dirty || desigNation.touched)\" class=\"errors\">\r\n              <div *ngIf=\"desigNation.errors && desigNation.errors.required\">\r\n                Designation is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"isAdmin\" class=\"col-md-4 mt-4\">\r\n          <nb-checkbox name=\"group_head_check_box\" [(ngModel)]=\"userModal.group_head_check_box\" (change)=\"onAssign($event)\">Assign Under group Head\r\n          </nb-checkbox>\r\n        </div>\r\n        <div class=\"col-md-4\" *ngIf=\"showUserNameListFlag\">\r\n          <div class=\"form-group\">\r\n            <label>User Head List</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"userModal.user_head_id\" name=\"username\" #user_head=\"ngModel\"\r\n              required>\r\n              <!-- required -->\r\n              <option disabled value=\"\">Select User Head\r\n              </option>\r\n              <option *ngFor=\"let user of usersList\" [value]=\"user.user_id\">{{user.user_name}}</option>\r\n            </select>\r\n            <div *ngIf=\"user_head.invalid  && (user_head.dirty || user_head.touched)\" class=\"errors\">\r\n              <div *ngIf=\"user_head.errors && user_head.errors.required\">\r\n                User Head is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"row\"> -->\r\n      <nb-card>\r\n        <nb-card-header>\r\n          User Permissions\r\n        </nb-card-header>\r\n        <nb-card-body>\r\n          <table class=\"table responsive\">\r\n            <tr>\r\n              <th *ngFor=\"let data of tableHeading\">{{data}}</th>\r\n            </tr>\r\n            <tr *ngFor=\"let row of userPermissionData;let i = index\">\r\n              <th>{{row.form_name}}</th>\r\n              <th>\r\n                <nb-checkbox name=\"view{{i}}\" [(ngModel)]=\"row.can_view\">\r\n                </nb-checkbox>\r\n              </th>\r\n              <th>\r\n                <nb-checkbox name=\"add{{i}}\" [(ngModel)]=\"row.can_add\"></nb-checkbox>\r\n              </th>\r\n              <th>\r\n                <nb-checkbox name=\"edit{{i}}\" [(ngModel)]=\"row.can_edit\"></nb-checkbox>\r\n              </th>\r\n              <th>\r\n                <nb-checkbox name=\"delete{{i}}\" [(ngModel)]=\"row.can_delete\"></nb-checkbox>\r\n              </th>\r\n              <th>\r\n                <nb-checkbox name=\"view_group{{i}}\" [(ngModel)]=\"row.can_view_group\"></nb-checkbox>\r\n              </th>\r\n              <th *ngIf=\"isAdmin\">\r\n                <nb-checkbox name=\"view_all{{i}}\" [(ngModel)]=\"row.can_view_all\"></nb-checkbox>\r\n              </th>\r\n              <th>\r\n                <nb-checkbox name=\"edit_group{{i}}\" [(ngModel)]=\"row.can_edit_group\"></nb-checkbox>\r\n              </th>\r\n              <th *ngIf=\"isAdmin\">\r\n                <nb-checkbox name=\"edit_all{{i}}\" [(ngModel)]=\"row.can_edit_all\"></nb-checkbox>\r\n              </th>\r\n              <th>\r\n                <nb-checkbox name=\"delete_group{{i}}\" [(ngModel)]=\"row.can_delete_group\"></nb-checkbox>\r\n              </th>\r\n              <th *ngIf=\"isAdmin\">\r\n                <nb-checkbox name=\"delete_all{{i}}\" [(ngModel)]=\"row.can_delete_all\"></nb-checkbox>\r\n              </th>\r\n            </tr>\r\n          </table>\r\n          <!-- <ngx-treeview class=\"col-md-12\" [config]=\"config\" [items]=\"items\" (filterChange)=\"onFilterChange($event)\"\r\n            (selectedChange)=\"onPermissionChange($event)\">\r\n          </ngx-treeview> -->\r\n        </nb-card-body>\r\n      </nb-card>\r\n      <br>\r\n      <div class=\"box-footer\">\r\n        <button nbButton [disabled]=\"vform.invalid\" translate>{{subBtnName}}</button>\r\n        &nbsp;\r\n        <button nbButton type=\"reset\" routerLink='/pages/user/view-user' id=\"Cancel\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/user/add-edit-user/add-edit-user.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/user/add-edit-user/add-edit-user.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errors {\n  color: red;\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9hZGQtZWRpdC11c2VyL0M6XFxVc2Vyc1xcUENcXERlc2t0b3BcXGdmbFxcZ2ZsLWZyb250LWVuZFxcbmd4LXdpcmVmcmFtZS9zcmNcXGFwcFxccGFnZXNcXHVzZXJcXGFkZC1lZGl0LXVzZXJcXGFkZC1lZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyL2FkZC1lZGl0LXVzZXIvYWRkLWVkaXQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcnMge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/user/add-edit-user/add-edit-user.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/user/add-edit-user/add-edit-user.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddEditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditUserComponent", function() { return AddEditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_treeview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/src/index.js");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _theme_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@theme/services/user.service */ "./src/app/@theme/services/user.service.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddEditUserComponent = /** @class */ (function () {
    function AddEditUserComponent(userService, toasterService, route, router, authService) {
        var _this = this;
        this.userService = userService;
        this.toasterService = toasterService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.tableForms = ["Party", "Quality", "User", "Fabric In", "Batch", "Program", "Shade", "Supplier", "Supplier Rate", "Shade", "Colour Stock", "Process", "Process Planning", "Jet Planning"];
        this.designation = ['Manager', 'Master', 'Accountant', 'Staff', 'Helper'];
        this.isAdmin = false;
        this.companyList = [];
        this.userRoleList = [];
        this.tableHeading = ["Forms", "View", "Add", "Edit", "Delete", "View Group", "Edit Group", "Delete Group"];
        this.subBtnName = 'Save';
        this.topHeader = '';
        this.config = ngx_treeview__WEBPACK_IMPORTED_MODULE_4__["TreeviewConfig"].create({
            hasAllCheckBox: true,
            hasFilter: false,
            hasCollapseExpand: true,
            decoupleChildFromParent: false,
            maxHeight: 400
        });
        this.disbaleFlag = true;
        this.currentUserPermission = [];
        this.userPermissionData = [];
        this.showUserNameListFlag = false;
        this.usersList = [];
        this.checkBoxValue = false;
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                // console.log("in eleeeeeeee",ele)
                _this.userHeadId = ele.user.user_head_id;
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUser;
                _this.currentUserPermission = ele.user_permission;
                if (ele.user.user_name === "admin") {
                    _this.tableHeading = [];
                    _this.tableHeading = ["Forms", "View", "Add", "Edit", "Delete", "View Group", "View All", "Edit Group", "Edit All", "Delete Group", "Delete All"];
                    _this.isAdmin = true;
                }
            }
        });
    }
    AddEditUserComponent.prototype.ngOnInit = function () {
        this.setUserPermissionForm();
        this.userModal = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.getItems();
        this.onPageLoad();
        this.getUsers();
    };
    AddEditUserComponent.prototype.setUserPermissionForm = function () {
        var _this = this;
        this.userPermissionData = [];
        this.tableForms.forEach(function (ele, index) {
            var userObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_5__["UserPermission"]();
            userObj.form_name = ele;
            _this.userPermissionData.push(userObj);
        });
    };
    AddEditUserComponent.prototype.onPageLoad = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            this.disbaleFlag = false;
            this.subBtnName = 'Update';
            this.topHeader = 'Edit User';
            this.userService.getUserById(this.id).subscribe(function (data) {
                if (!data[0].error) {
                    // console.log("in update user")
                    // console.log(data[0].data)
                    _this.userModal = data[0].data.user[0];
                    _this.showUserNameListFlag = data[0].data.user[0].group_head_check_box;
                    //this.userModal.group_head_check_box = true;
                    _this.userPermissionData = [];
                    _this.userPermissionData = data[0].data.user_permission;
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error(error);
            });
        }
        else {
            this.subBtnName = 'Save';
            this.topHeader = 'Add User';
        }
    };
    AddEditUserComponent.prototype.onAssign = function (value) {
        this.showUserNameListFlag = value.returnValue;
    };
    AddEditUserComponent.prototype.getUsers = function () {
        var _this = this;
        this.usersList = [];
        this.userService.getUserNameIdList().subscribe(function (data) {
            if (!data[0].error) {
                _this.usersList = data[0].data;
            }
        });
    };
    AddEditUserComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    AddEditUserComponent.prototype.getItems = function () {
        this.items = this.userService.getUserPermissionJson();
    };
    AddEditUserComponent.prototype.onCustomFormSubmit = function (form) {
        var _this = this;
        //if isadmin and goup check box is falsse then users head id should be null 
        // if is admin and under name is selected then selected user name's id should be there
        //if not admin then head id should be current user's user id
        if (this.isAdmin && !this.userModal.group_head_check_box) {
            console.log("in admin plus not thick");
            this.userModal.user_head_id = null;
        }
        else if (!this.isAdmin)
            this.userModal.user_head_id = this.currentUserId;
        // console.log("before user submit")
        // console.log(this.userHeadId)
        this.userModal.userPermission = this.userPermissionData;
        if (this.id) {
            this.userModal.updated_by = this.currentUserId;
            this.userService.updateUser(this.userModal).subscribe(function (data) {
                data = data[0];
                if (!data.error) {
                    _this.toasterService.success(data.message);
                    form.resetForm();
                    _this.router.navigate(['/pages/user/view-user']);
                }
                else {
                    _this.toasterService.error('User Not Updated Successfully!');
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            //for add
            //console.log('uu', this.userModal)
            this.userModal.created_by = this.currentUserId;
            this.userService.addUser(this.userModal).subscribe(function (data) {
                if (!data[0].error) {
                    _this.toasterService.success(data[0].message);
                    form.resetForm();
                    _this.router.navigate(['/pages/user/view-user']);
                    // } else {
                    //   this.toasterService.error('User Not Added Successfully!');
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
    };
    AddEditUserComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
            return false;
        }
        return true;
    };
    AddEditUserComponent.prototype.alphabetsOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if ((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vform'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], AddEditUserComponent.prototype, "validationForm", void 0);
    AddEditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-user',
            template: __webpack_require__(/*! ./add-edit-user.component.html */ "./src/app/pages/user/add-edit-user/add-edit-user.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-user.component.scss */ "./src/app/pages/user/add-edit-user/add-edit-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_theme_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], AddEditUserComponent);
    return AddEditUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/user/user-routing.module.ts ***!
  \***************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-user/add-edit-user.component */ "./src/app/pages/user/add-edit-user/add-edit-user.component.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-user/view-user.component */ "./src/app/pages/user/view-user/view-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        children: [
            {
                path: 'view-user',
                component: _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_4__["ViewUserComponent"],
            },
            {
                path: 'add-user',
                component: _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_2__["AddEditUserComponent"],
            },
            {
                path: 'edit-user/:id',
                component: _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_2__["AddEditUserComponent"],
            },
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/user/user.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/user/user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/user/user.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/user/user.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/pages/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/pages/user/user.component.scss")],
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/pages/user/user-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-edit-user/add-edit-user.component */ "./src/app/pages/user/add-edit-user/add-edit-user.component.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var ngx_treeview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/src/index.js");
/* harmony import */ var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-user/view-user.component */ "./src/app/pages/user/view-user/view-user.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_12__["ThemeModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"],
                ngx_treeview__WEBPACK_IMPORTED_MODULE_9__["TreeviewModule"].forRoot(),
            ],
            declarations: [_add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_7__["AddEditUserComponent"], _user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"], _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_10__["CustomRendererUserComponent"], _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_10__["ViewUserComponent"]],
            entryComponents: [_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_10__["CustomRendererUserComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/pages/user/view-user/view-user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/user/view-user/view-user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Users\r\n    <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onAddUser()\">\r\n      Add User\r\n    </button>\r\n    <button style=\"float: right;\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onExport()\">Export</button>\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div *ngIf=\"viewGroupDataPermission && !viewAllDataPermission\">\r\n      <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getUserList($event)\">\r\n        <nb-radio [value]=\"1\">\r\n          View Own\r\n        </nb-radio>\r\n        <nb-radio [value]=\"2\">\r\n          View Group\r\n        </nb-radio>\r\n      </nb-radio-group>\r\n    </div>\r\n    <div *ngIf=\"viewGroupDataPermission && viewAllDataPermission\">\r\n      <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getUserList($event)\">\r\n        <nb-radio class=\"radio-inline\" [value]=\"1\">\r\n          View Own\r\n        </nb-radio>\r\n        <nb-radio class=\"radio-inline\" [value]=\"2\">\r\n          View Group\r\n        </nb-radio>\r\n        <nb-radio class=\"radio-inline\" [value]=\"3\">\r\n          View All\r\n        </nb-radio>\r\n      </nb-radio-group>\r\n    </div>\r\n    <ag-grid-angular style=\"width: 100%; height:500px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n      [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='100' (gridReady)=\"onGridReady($event)\">\r\n    </ag-grid-angular>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/user/view-user/view-user.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/user/view-user/view-user.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdmlldy11c2VyL3ZpZXctdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/user/view-user/view-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/view-user/view-user.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewUserComponent, CustomRendererUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function() { return ViewUserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererUserComponent", function() { return CustomRendererUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/services/permission.service */ "./src/app/@theme/services/permission.service.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _theme_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/services/user.service */ "./src/app/@theme/services/user.service.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ViewUserComponent = /** @class */ (function () {
    function ViewUserComponent(userService, router, authService, permissionService, papa) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.permissionService = permissionService;
        this.papa = papa;
        this.userList = [];
        this.addUserPermission = 0;
        this.columnDefs = [
            { headerName: 'Actions', field: 'user_id', width: 100 },
            { headerName: 'User Name', field: 'user_name', sortable: true, filter: 'agTextColumnFilter' },
            { headerName: 'First Name', field: 'first_name', sortable: true, filter: 'agDateColumnFilter' },
            { headerName: 'last Name', field: 'last_name', sortable: true, filter: true },
            { headerName: 'Company', field: 'company_id', sortable: true, filter: true },
            { headerName: 'Designation', field: 'designation', sortable: true, filter: true },
            { headerName: 'Contact', field: 'mobile_no', sortable: true, filter: true },
        ];
        this.columnExportDefs = [
            'user_name', 'first_name', 'last_name', 'company_id'
        ];
        this.userPermission = [];
        this.viewAllDataPermission = false;
        this.viewOwnDataPermission = false;
        this.viewGroupDataPermission = false;
        this.radioSelected = 1;
        this.userReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_8__["ViewReqObj"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.userPermission = ele.user_permission;
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
            }
        });
        this.setColumns();
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.userPermission = (JSON.parse(localStorage.getItem('currentUserPermission')));
        if (this.userPermission.length) {
            this.userPermission.forEach(function (ele) {
                if (ele.form_name === 'User') {
                    // this.addUserPermission = ele.can_add;
                    _this.addUserPermission = 1;
                    _this.viewAllDataPermission = ele.can_view_all;
                    _this.viewGroupDataPermission = ele.can_view_group;
                    _this.viewOwnDataPermission = ele.can_view;
                    _this.userReqObj.current_user_id = _this.currentUserId;
                    _this.userReqObj.user_head_id = _this.currentUser.user_head_id;
                    _this.userReqObj.group_user_ids = _this.currentUserGroupUserIds;
                }
            });
        }
        // this.currentUserId = JSON.parse(localStorage.currentUser).user_id
        this.getUserList();
    };
    ViewUserComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    ViewUserComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'user_id') {
                column.cellRendererFramework = CustomRendererUserComponent;
                column.cellRendererParams = {
                    inRouterLink: '/pages/user/edit-user/',
                    action: _this
                };
            }
        });
    };
    ViewUserComponent.prototype.getUserList = function (value) {
        var _this = this;
        this.userList = [];
        this.rowData = [];
        this.userReqObj.view_all = false;
        this.userReqObj.view_group = false;
        this.userReqObj.view_own = false;
        if (value)
            this.radioSelected = value;
        //check which radio button is selected
        if (this.radioSelected == 1)
            this.userReqObj.view_own = true;
        else if (this.radioSelected == 2)
            this.userReqObj.view_group = true;
        else if (this.radioSelected == 3)
            this.userReqObj.view_all = true;
        this.userService.getUserList(this.userReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.userList = data[0].data;
                _this.rowData = data[0].data;
                // this.source = new LocalDataSource(this.userList);
            }
        });
    };
    ViewUserComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        // this.getUserList(this.currentUserId);
    };
    ViewUserComponent.prototype.onExport = function () {
        var _this = this;
        var params = {
            columnKeys: this.columnExportDefs
        };
        var data = this.gridApi.getDataAsCsv(params);
        // console.log(data);
        this.papa.parse(data, {
            complete: function (result) {
                // console.log('Parsed: ', result);
                _this.getObject(result.data);
                _this.exportExcel(result.data);
            }
        });
    };
    ViewUserComponent.prototype.getObject = function (data) {
        var obj = {};
        this.columnExportDefs.forEach(function (ele) {
            obj[ele] = '';
        });
    };
    ViewUserComponent.prototype.exportExcel = function (data) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].json_to_sheet(data);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        xlsx__WEBPACK_IMPORTED_MODULE_7__["writeFile"](workbook, 'my_file.xls', { bookType: 'xls', type: 'buffer' });
    };
    ViewUserComponent.prototype.onAddUser = function () {
        if (this.addUserPermission) {
            this.router.navigate(['/pages/user/add-user']);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add user. If you want to add user ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ViewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-view-user',
            template: __webpack_require__(/*! ./view-user.component.html */ "./src/app/pages/user/view-user/view-user.component.html"),
            styles: [__webpack_require__(/*! ./view-user.component.scss */ "./src/app/pages/user/view-user/view-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_theme_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__["PermissionService"], ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__["Papa"]])
    ], ViewUserComponent);
    return ViewUserComponent;
}());

var CustomRendererUserComponent = /** @class */ (function () {
    function CustomRendererUserComponent(router, _modalService, userService, toasterService, permissionService, authService) {
        var _this = this;
        this.router = router;
        this._modalService = _modalService;
        this.userService = userService;
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.authService = authService;
        this.userPermission = [];
        this.editUserPermission = 0;
        this.deleteUserPermission = 0;
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.userPermission = ele.user_permission;
            }
        });
    }
    CustomRendererUserComponent.prototype.agInit = function (params) {
        var _this = this;
        this.params = params;
        this.userPermission.forEach(function (ele) {
            if (ele.form_name === 'User') {
                if (_this.params.action.radioSelected == 1) {
                    _this.editUserPermission = ele.can_edit;
                    _this.deleteUserPermission = ele.can_delete;
                }
                else if (_this.params.action.radioSelected == 2) {
                    _this.editUserPermission = ele.can_edit_group;
                    _this.deleteUserPermission = ele.can_delete_group;
                }
                else if (_this.params.action.radioSelected == 3) {
                    _this.editUserPermission = ele.can_edit_all;
                    _this.deleteUserPermission = ele.can_delete_all;
                }
            }
        });
    };
    CustomRendererUserComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererUserComponent.prototype.editUser = function () {
        if (this.editUserPermission) {
            this.router.navigate([this.params.inRouterLink + this.params.value]);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit user. If you want to edit user ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererUserComponent.prototype.onDeleteUser = function () {
        var _this = this;
        if (this.deleteUserPermission) {
            var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"]);
            modalRef.componentInstance.titleFrom = 'Delete User ';
            modalRef.componentInstance.message = 'Are you sure you want to delete this user?';
            modalRef.result
                .then(function (result) {
                if (result) {
                    var id = _this.params.value;
                    _this.userService.deleteUser(id).subscribe(function (data) {
                        if (!data[0].error) {
                            _this.params.action.getUserList();
                            _this.toasterService.success(data[0].message);
                        }
                        else {
                            _this.toasterService.error(data[0].message);
                        }
                    });
                }
            });
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete user. If you want to delete user ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editUser()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red;\" (click)=\"onDeleteUser()\"></i>",
            styles: [__webpack_require__(/*! ./view-user.component.scss */ "./src/app/pages/user/view-user/view-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _theme_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__["PermissionService"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]])
    ], CustomRendererUserComponent);
    return CustomRendererUserComponent;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map