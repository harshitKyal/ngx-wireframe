(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["supplier-supplier-module"],{

/***/ "./src/app/@theme/model/user-class.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/model/user-class.ts ***!
  \********************************************/
/*! exports provided: User, UserPermission, ViewReqObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPermission", function() { return UserPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewReqObj", function() { return ViewReqObj; });
var User = /** @class */ (function () {
    function User() {
        this.have_quality = false;
        this.can_view_quality = false;
        this.can_add_quality = false;
        this.can_edit_quality = false;
        this.can_delete_quality = false;
        this.have_user = false;
        this.can_view_user = false;
        this.can_add_user = false;
        this.can_edit_user = false;
        this.can_delete_user = false;
        this.have_party = false;
        this.can_view_party = false;
        this.can_add_party = false;
        this.can_edit_party = false;
        this.can_delete_party = false;
        this.have_stock = false;
        this.can_view_stock = false;
        this.can_add_stock = false;
        this.can_edit_stock = false;
        this.can_delete_stock = false;
        this.company_id = '';
        this.designation = '';
        this.user_head_id = '';
    }
    return User;
}());

var UserPermission = /** @class */ (function () {
    function UserPermission() {
        this.can_add = false;
        this.can_delete = false;
        this.can_edit = false;
        this.can_view = false;
        this.can_delete_all = false;
        this.can_delete_group = false;
        this.can_edit_all = false;
        this.can_edit_group = false;
        this.can_view_all = false;
        this.can_view_group = false;
    }
    return UserPermission;
}());

var ViewReqObj = /** @class */ (function () {
    function ViewReqObj() {
        this.created_by = null;
        this.user_head_id = null;
    }
    return ViewReqObj;
}());



/***/ }),

/***/ "./src/app/@theme/services/permission.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/@theme/services/permission.service.ts ***!
  \*******************************************************/
/*! exports provided: PermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionService", function() { return PermissionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/@theme/services/api.service.ts");
/* harmony import */ var _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/permission/permission.component */ "./src/app/@theme/components/permission/permission.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PermissionService = /** @class */ (function () {
    function PermissionService(modalService, apiService) {
        this.modalService = modalService;
        this.apiService = apiService;
    }
    PermissionService.prototype.callPermissionView = function (title, message) {
        var dialogRef = this.modalService.open(_components_permission_permission_component__WEBPACK_IMPORTED_MODULE_3__["PermissionComponent"]);
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.titleFrom = title;
        dialogRef.result.then(function (result) {
            return result;
        });
    };
    PermissionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], PermissionService);
    return PermissionService;
}());



/***/ })

}]);
//# sourceMappingURL=supplier-supplier-module.js.map