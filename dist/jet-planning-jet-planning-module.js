(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jet-planning-jet-planning-module"],{

/***/ "./src/app/pages/jet-planning/jet-planning-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/jet-planning/jet-planning-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: JetPlanningRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JetPlanningRoutingModule", function() { return JetPlanningRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _jet_planning_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jet-planning.component */ "./src/app/pages/jet-planning/jet-planning.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _jet_planning_component__WEBPACK_IMPORTED_MODULE_2__["JetPlanningComponent"]
    }
];
var JetPlanningRoutingModule = /** @class */ (function () {
    function JetPlanningRoutingModule() {
    }
    JetPlanningRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], JetPlanningRoutingModule);
    return JetPlanningRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/jet-planning/jet-planning.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/jet-planning/jet-planning.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Jet Planning\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"row\">\r\n      <nb-card class=\"col-md-3\" *ngFor=\"let process of processPlanningList\">\r\n        <nb-card-body [style.background-color]=\"process.color_tone\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label><b>Shade No :</b> {{process.shade_no}}</label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label><b>Quantity :</b> {{process.quantity}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label><b>Time :</b> {{process.time}}</label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label><b>Priority :</b> {{process.priority}}</label>\r\n            </div>\r\n          </div>\r\n        </nb-card-body>\r\n      </nb-card>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/jet-planning/jet-planning.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/jet-planning/jet-planning.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pldC1wbGFubmluZy9qZXQtcGxhbm5pbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/jet-planning/jet-planning.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/jet-planning/jet-planning.component.ts ***!
  \**************************************************************/
/*! exports provided: JetPlanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JetPlanningComponent", function() { return JetPlanningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_services_process_planning_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@theme/services/process-planning.service */ "./src/app/@theme/services/process-planning.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme/services/permission.service */ "./src/app/@theme/services/permission.service.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var JetPlanningComponent = /** @class */ (function () {
    function JetPlanningComponent(processPlanningService, router, tosterService, permissionService, papa, authService) {
        var _this = this;
        this.processPlanningService = processPlanningService;
        this.router = router;
        this.tosterService = tosterService;
        this.permissionService = permissionService;
        this.papa = papa;
        this.authService = authService;
        this.currentUserPermission = [];
        this.processPlanningList = [];
        this.processPlanningReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_7__["ViewReqObj"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserPermission = ele.user_permission;
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
            }
        });
    }
    JetPlanningComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUserPermission && this.currentUserPermission.length) {
            this.currentUserPermission.forEach(function (ele) {
                if (ele.form_name === 'Process') {
                    _this.processPlanningReqObj.current_user_id = _this.currentUserId;
                    _this.processPlanningReqObj.user_head_id = _this.currentUser.user_head_id;
                    _this.processPlanningReqObj.group_user_ids = _this.currentUserGroupUserIds;
                }
            });
        }
        this.getProcessPlanningData();
    };
    JetPlanningComponent.prototype.getProcessPlanningData = function () {
        var _this = this;
        this.processPlanningReqObj.view_all = true;
        this.processPlanningReqObj.view_group = false;
        this.processPlanningReqObj.view_own = false;
        this.processPlanningService.getAllprocessPlannings(this.processPlanningReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.processPlanningList = data[0].data;
            }
            else {
                _this.tosterService.error(data[0].message);
            }
        });
    };
    JetPlanningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-jet-planning',
            template: __webpack_require__(/*! ./jet-planning.component.html */ "./src/app/pages/jet-planning/jet-planning.component.html"),
            styles: [__webpack_require__(/*! ./jet-planning.component.scss */ "./src/app/pages/jet-planning/jet-planning.component.scss")]
        }),
        __metadata("design:paramtypes", [_theme_services_process_planning_service__WEBPACK_IMPORTED_MODULE_1__["ProcessPlanningService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"], ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__["Papa"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], JetPlanningComponent);
    return JetPlanningComponent;
}());



/***/ }),

/***/ "./src/app/pages/jet-planning/jet-planning.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/jet-planning/jet-planning.module.ts ***!
  \***********************************************************/
/*! exports provided: JetPlanningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JetPlanningModule", function() { return JetPlanningModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _jet_planning_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jet-planning-routing.module */ "./src/app/pages/jet-planning/jet-planning-routing.module.ts");
/* harmony import */ var _jet_planning_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jet-planning.component */ "./src/app/pages/jet-planning/jet-planning.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var JetPlanningModule = /** @class */ (function () {
    function JetPlanningModule() {
    }
    JetPlanningModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_jet_planning_component__WEBPACK_IMPORTED_MODULE_3__["JetPlanningComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
                _jet_planning_routing_module__WEBPACK_IMPORTED_MODULE_2__["JetPlanningRoutingModule"]
            ]
        })
    ], JetPlanningModule);
    return JetPlanningModule;
}());



/***/ })

}]);
//# sourceMappingURL=jet-planning-jet-planning-module.js.map