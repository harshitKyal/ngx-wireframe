(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-pages-module~bill-in-bill-in-module"],{

/***/ "./src/app/pages/bill-in/bill-in-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/bill-in/bill-in-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BillInRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillInRoutingModule", function() { return BillInRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_edit_bill_in_add_edit_bill_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-bill-in/add-edit-bill-in.component */ "./src/app/pages/bill-in/add-edit-bill-in/add-edit-bill-in.component.ts");
/* harmony import */ var _bill_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill-in.component */ "./src/app/pages/bill-in/bill-in.component.ts");
/* harmony import */ var _view_bill_in_view_bill_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-bill-in/view-bill-in.component */ "./src/app/pages/bill-in/view-bill-in/view-bill-in.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _bill_in_component__WEBPACK_IMPORTED_MODULE_3__["BillInComponent"],
        children: [
            {
                path: 'view-bill-list',
                component: _view_bill_in_view_bill_in_component__WEBPACK_IMPORTED_MODULE_4__["ViewBillInComponent"]
            },
            {
                path: 'view-bill/:id',
                component: _add_edit_bill_in_add_edit_bill_in_component__WEBPACK_IMPORTED_MODULE_2__["AddEditBillInComponent"]
            },
            {
                path: 'add-bill',
                component: _add_edit_bill_in_add_edit_bill_in_component__WEBPACK_IMPORTED_MODULE_2__["AddEditBillInComponent"],
            },
            {
                path: 'edit-bill/:id',
                component: _add_edit_bill_in_add_edit_bill_in_component__WEBPACK_IMPORTED_MODULE_2__["AddEditBillInComponent"],
            },
        ]
    }
];
var BillInRoutingModule = /** @class */ (function () {
    function BillInRoutingModule() {
    }
    BillInRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], BillInRoutingModule);
    return BillInRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/bill-in/bill-in.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/bill-in/bill-in.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/bill-in/bill-in.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/bill-in/bill-in.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JpbGwtaW4vYmlsbC1pbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/bill-in/bill-in.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/bill-in/bill-in.component.ts ***!
  \****************************************************/
/*! exports provided: BillInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillInComponent", function() { return BillInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BillInComponent = /** @class */ (function () {
    function BillInComponent() {
    }
    BillInComponent.prototype.ngOnInit = function () {
    };
    BillInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill-in',
            template: __webpack_require__(/*! ./bill-in.component.html */ "./src/app/pages/bill-in/bill-in.component.html"),
            styles: [__webpack_require__(/*! ./bill-in.component.scss */ "./src/app/pages/bill-in/bill-in.component.scss")]
        })
    ], BillInComponent);
    return BillInComponent;
}());



/***/ }),

/***/ "./src/app/pages/bill-in/bill-in.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/bill-in/bill-in.module.ts ***!
  \*************************************************/
/*! exports provided: BillInModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillInModule", function() { return BillInModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_bill_in_add_edit_bill_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-bill-in/add-edit-bill-in.component */ "./src/app/pages/bill-in/add-edit-bill-in/add-edit-bill-in.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _bill_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bill-in.component */ "./src/app/pages/bill-in/bill-in.component.ts");
/* harmony import */ var _bill_in_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bill-in-routing.module */ "./src/app/pages/bill-in/bill-in-routing.module.ts");
/* harmony import */ var _view_bill_in_view_bill_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-bill-in/view-bill-in.component */ "./src/app/pages/bill-in/view-bill-in/view-bill-in.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var BillInModule = /** @class */ (function () {
    function BillInModule() {
    }
    BillInModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _bill_in_routing_module__WEBPACK_IMPORTED_MODULE_10__["BillInRoutingModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_12__["ThemeModule"]
            ],
            declarations: [_add_edit_bill_in_add_edit_bill_in_component__WEBPACK_IMPORTED_MODULE_2__["AddEditBillInComponent"], _bill_in_component__WEBPACK_IMPORTED_MODULE_9__["BillInComponent"], _view_bill_in_view_bill_in_component__WEBPACK_IMPORTED_MODULE_11__["CustomRendererBillInComponent"], _add_edit_bill_in_add_edit_bill_in_component__WEBPACK_IMPORTED_MODULE_2__["CustomRendererStockRecordComponent"], _view_bill_in_view_bill_in_component__WEBPACK_IMPORTED_MODULE_11__["ViewBillInComponent"]],
            entryComponents: [_view_bill_in_view_bill_in_component__WEBPACK_IMPORTED_MODULE_11__["CustomRendererBillInComponent"], _add_edit_bill_in_add_edit_bill_in_component__WEBPACK_IMPORTED_MODULE_2__["CustomRendererStockRecordComponent"]]
        })
    ], BillInModule);
    return BillInModule;
}());



/***/ }),

/***/ "./src/app/pages/bill-in/view-bill-in/view-bill-in.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/bill-in/view-bill-in/view-bill-in.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Bill\r\n    <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onAddBill()\">\r\n      Add Bill\r\n    </button>\r\n    <button style=\"float: right;\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onExport()\">Export</button>\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div  *ngIf=\"viewGroupDataPermission && !viewAllDataPermission\">\r\n      <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getBillData($event)\">\r\n        <nb-radio [value]=\"1\">\r\n          View Own\r\n        </nb-radio>\r\n        <nb-radio [value]=\"2\">\r\n          View Group\r\n        </nb-radio>\r\n      </nb-radio-group>\r\n    </div>\r\n    <div *ngIf=\"viewGroupDataPermission && viewAllDataPermission\">\r\n      <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getBillData($event)\">\r\n        <nb-radio class=\"radio-inline\" [value]=\"1\">\r\n          View Own\r\n        </nb-radio>\r\n        <nb-radio class=\"radio-inline\" [value]=\"2\">\r\n          View Group\r\n        </nb-radio>\r\n        <nb-radio class=\"radio-inline\" [value]=\"3\">\r\n          View All\r\n        </nb-radio>\r\n      </nb-radio-group>\r\n    </div>\r\n    <ag-grid-angular style=\"width: 100%; height:500px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n      [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='100' (gridReady)=\"onGridReady($event)\">\r\n    </ag-grid-angular>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/bill-in/view-bill-in/view-bill-in.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/bill-in/view-bill-in/view-bill-in.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JpbGwtaW4vdmlldy1iaWxsLWluL3ZpZXctYmlsbC1pbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/bill-in/view-bill-in/view-bill-in.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/bill-in/view-bill-in/view-bill-in.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewBillInComponent, CustomRendererBillInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBillInComponent", function() { return ViewBillInComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererBillInComponent", function() { return CustomRendererBillInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_services_bill_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/services/bill-in.service */ "./src/app/@theme/services/bill-in.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/services/permission.service */ "./src/app/@theme/services/permission.service.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ViewBillInComponent = /** @class */ (function () {
    function ViewBillInComponent(billService, router, tosterService, permissionService, papa, authService) {
        var _this = this;
        this.billService = billService;
        this.router = router;
        this.tosterService = tosterService;
        this.permissionService = permissionService;
        this.papa = papa;
        this.authService = authService;
        this.billList = [];
        this.addBillPermission = 1;
        this.columnDefs = [
            { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
            { headerName: 'Stock Id', field: 'stock_id', sortable: true, filter: true, width: 100 },
            { headerName: 'Stock In Type', field: 'stock_in_type', sortable: true, filter: true, width: 100 },
            { headerName: 'Party Name', field: 'party_name', sortable: true, filter: true },
            { headerName: 'Bill No.', field: 'bill_no', sortable: true, filter: true, width: 100 },
            { headerName: 'Bill Date', field: 'bill_date', sortable: true, filter: true },
            { headerName: 'Chl No.', field: 'chl_no', sortable: true, filter: true, width: 100 },
            { headerName: 'Chl Date', field: 'chl_date', sortable: true, filter: true },
            { headerName: 'Batch', field: 'batch_no', sortable: true, filter: true, width: 90 },
            { headerName: 'Record Count', field: 'record_count', sortable: true, filter: true, width: 90 },
        ];
        this.columnExportDefs = [
            'stock_id', 'stock_in_type', 'party_name', 'bill_no', 'bill_date', 'chl_no', 'chl_date', 'batch',
        ];
        this.currentUserPermission = [];
        this.viewAllDataPermission = false;
        this.viewOwnDataPermission = false;
        this.viewGroupDataPermission = false;
        this.radioSelected = 1;
        this.billReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_10__["ViewReqObj"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserPermission = ele.user_permission;
            }
        });
        this.setColumns();
    }
    ViewBillInComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUserPermission.length) {
            this.currentUserPermission.forEach(function (ele) {
                if (ele.form_name === 'Bill') {
                    // this.addUserPermission = ele.can_add;
                    _this.addBillPermission = 1;
                    _this.viewAllDataPermission = ele.can_view_all;
                    _this.viewGroupDataPermission = ele.can_view_group;
                    _this.viewOwnDataPermission = ele.can_view;
                }
            });
        }
        this.getBillData();
    };
    ViewBillInComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    ViewBillInComponent.prototype.getBillData = function (value) {
        var _this = this;
        this.billReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_10__["ViewReqObj"]();
        if (value) {
            this.radioSelected = value;
        }
        if (this.viewOwnDataPermission && this.radioSelected == 1) {
            this.billReqObj.created_by = this.currentUserId;
        }
        if (this.viewGroupDataPermission && this.radioSelected == 2) {
            this.billReqObj.created_by = this.currentUserId;
            this.billReqObj.user_head_id = this.currentUser.user_head_id;
        }
        if (this.viewAllDataPermission && this.radioSelected == 3) {
            this.billReqObj.created_by = null;
            this.billReqObj.user_head_id = null;
        }
        this.billService.getAllBills(this.billReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.billList = data[0].data;
                _this.rowData = data[0].data;
            }
            else {
                _this.tosterService.error(data[0].message);
            }
        });
    };
    ViewBillInComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'entry_id') {
                column.cellRendererFramework = CustomRendererBillInComponent;
                column.cellRendererParams = {
                    inRouterLink: '/pages/bill/edit-bill/',
                    inViewLink: '/pages/bill/view-bill/',
                    action: _this
                };
            }
        });
    };
    ViewBillInComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        // this.getUserList(this.currentUserId);
    };
    ViewBillInComponent.prototype.onAddBill = function () {
        if (this.addBillPermission) {
            this.router.navigate(['/pages/bill/add-bill']);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add bill. If you want to add bill ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ViewBillInComponent.prototype.onExport = function () {
        var _this = this;
        var params = {
            columnKeys: this.columnExportDefs
        };
        var data = this.gridApi.getDataAsCsv(params);
        this.papa.parse(data, {
            complete: function (result) {
                _this.exportExcel(result.data);
            }
        });
    };
    ViewBillInComponent.prototype.exportExcel = function (data) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].json_to_sheet(data);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        xlsx__WEBPACK_IMPORTED_MODULE_8__["writeFile"](workbook, 'my_file.xls', { bookType: 'xls', type: 'buffer' });
    };
    ViewBillInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-view-bill-in',
            template: __webpack_require__(/*! ./view-bill-in.component.html */ "./src/app/pages/bill-in/view-bill-in/view-bill-in.component.html"),
            styles: [__webpack_require__(/*! ./view-bill-in.component.scss */ "./src/app/pages/bill-in/view-bill-in/view-bill-in.component.scss")]
        }),
        __metadata("design:paramtypes", [_theme_services_bill_in_service__WEBPACK_IMPORTED_MODULE_1__["BillInService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"], ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__["Papa"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], ViewBillInComponent);
    return ViewBillInComponent;
}());

var CustomRendererBillInComponent = /** @class */ (function () {
    function CustomRendererBillInComponent(router, _modalService, billService, toasterService, permissionService, authService) {
        var _this = this;
        this.router = router;
        this._modalService = _modalService;
        this.billService = billService;
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.authService = authService;
        this.editBillPermission = 1;
        this.deleteBillPermission = 1;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserPermission = ele.user_permission;
            }
        });
    }
    CustomRendererBillInComponent.prototype.agInit = function (params) {
        var _this = this;
        this.params = params;
        this.currentUserPermission.forEach(function (ele) {
            if (ele.form_name === 'Bill') {
                if (_this.params.action.radioSelected == 1) {
                    _this.editBillPermission = ele.can_edit;
                    _this.deleteBillPermission = ele.can_delete;
                }
                else if (_this.params.action.radioSelected == 2) {
                    _this.editBillPermission = ele.can_edit_group;
                    _this.deleteBillPermission = ele.can_delete_group;
                }
                else if (_this.params.action.radioSelected == 3) {
                    _this.editBillPermission = ele.can_edit_all;
                    _this.deleteBillPermission = ele.can_delete_all;
                }
            }
        });
        // this.editPartyPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_edit_user);
        // this.deletePartyPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_delete_user);
    };
    CustomRendererBillInComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    CustomRendererBillInComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererBillInComponent.prototype.viewBill = function () {
        //  this.router.navigate([this.params.inViewLink + 0]);
    };
    CustomRendererBillInComponent.prototype.editBill = function () {
        if (this.editBillPermission) {
            this.router.navigate([this.params.inRouterLink + this.params.value]);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit bill. If you want to edit bill ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererBillInComponent.prototype.onDeleteBill = function () {
        var _this = this;
        if (this.deleteBillPermission) {
            var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"]);
            modalRef.componentInstance.titleFrom = 'Delete Bill ';
            modalRef.componentInstance.message = 'Are you sure you want to delete this bill?';
            modalRef.result
                .then(function (result) {
                if (result) {
                    var id = _this.params.value;
                    _this.billService.deleteBillById(id).subscribe(function (data) {
                        if (!data[0].error) {
                            _this.params.action.getBillData();
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
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete bill. If you want to delete bill ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererBillInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editBill()\"></i>\n  <i class=\"ft-info font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"viewBill()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteBill()\"></i>",
            styles: [__webpack_require__(/*! ./view-bill-in.component.scss */ "./src/app/pages/bill-in/view-bill-in/view-bill-in.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _theme_services_bill_in_service__WEBPACK_IMPORTED_MODULE_1__["BillInService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], CustomRendererBillInComponent);
    return CustomRendererBillInComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-pages-pages-module~bill-in-bill-in-module.js.map