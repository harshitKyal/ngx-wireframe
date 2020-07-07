(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["colour-stock-colour-stock-module"],{

/***/ "./src/app/@theme/model/colour-stock-class.ts":
/*!****************************************************!*\
  !*** ./src/app/@theme/model/colour-stock-class.ts ***!
  \****************************************************/
/*! exports provided: ColourStock, ColourStockRecord, ColourStockBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColourStock", function() { return ColourStock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColourStockRecord", function() { return ColourStockRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColourStockBox", function() { return ColourStockBox; });
var ColourStock = /** @class */ (function () {
    function ColourStock() {
        this.supplier_id = '';
    }
    return ColourStock;
}());

var ColourStockRecord = /** @class */ (function () {
    function ColourStockRecord() {
        this.item_id = '';
    }
    return ColourStockRecord;
}());

var ColourStockBox = /** @class */ (function () {
    function ColourStockBox() {
    }
    return ColourStockBox;
}());



/***/ }),

/***/ "./src/app/@theme/services/colour-stock.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/@theme/services/colour-stock.service.ts ***!
  \*********************************************************/
/*! exports provided: ColourStockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColourStockService", function() { return ColourStockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/@theme/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColourStockService = /** @class */ (function () {
    function ColourStockService(apiService) {
        this.apiService = apiService;
    }
    ColourStockService.prototype.getAllColourStock = function (colourStockReqObj) {
        return this.apiService.apiCaller('post', '/colourStockList', colourStockReqObj);
    };
    ColourStockService.prototype.getIssuedNonIssueData = function (isIssued) {
        return this.apiService.apiCaller('get', '/getIssuedNonIssuedList/' + isIssued);
    };
    ColourStockService.prototype.issueBox = function (obj) {
        return this.apiService.apiCaller('get', '/issueColourBox/' + obj);
    };
    ColourStockService.prototype.addColourStock = function (colourStock) {
        return this.apiService.apiCaller('post', '/addColourStock', colourStock);
    };
    ColourStockService.prototype.getColourStockById = function (id) {
        return this.apiService.apiCaller('get', '/getColourStockById/' + id);
    };
    ColourStockService.prototype.updateColourStock = function (colourStock) {
        return this.apiService.apiCaller('post', '/updateColourStock', colourStock);
    };
    ColourStockService.prototype.deleteColourStockById = function (id) {
        return this.apiService.apiCaller('get', '/deleteColourStock/' + id);
    };
    ColourStockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ColourStockService);
    return ColourStockService;
}());



/***/ }),

/***/ "./src/app/@theme/services/supplier.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/@theme/services/supplier.service.ts ***!
  \*****************************************************/
/*! exports provided: SupplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierService", function() { return SupplierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/@theme/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupplierService = /** @class */ (function () {
    function SupplierService(apiService) {
        this.apiService = apiService;
    }
    SupplierService.prototype.getAllSupplierData = function (obj) {
        return this.apiService.apiCaller('post', '/supplierList', obj);
    };
    SupplierService.prototype.getAllSupplierItemData = function () {
        return this.apiService.apiCaller('get', '/supplierItemList');
    };
    SupplierService.prototype.addSupplier = function (supplier) {
        return this.apiService.apiCaller('post', '/addSupplier', supplier);
    };
    SupplierService.prototype.getSupplierById = function (id) {
        return this.apiService.apiCaller('get', '/getSupplier/' + id);
    };
    SupplierService.prototype.updateSupplier = function (supplier) {
        return this.apiService.apiCaller('post', '/updateSupplier', supplier);
    };
    SupplierService.prototype.deleteSupplierById = function (id) {
        return this.apiService.apiCaller('get', '/deleteSupplierList/' + id);
    };
    SupplierService.prototype.getAllSupplierRateData = function () {
        return this.apiService.apiCaller('get', '/supplierList');
    };
    SupplierService.prototype.addSupplierRate = function (supplier) {
        return this.apiService.apiCaller('post', '/updateSupplierRateList', supplier);
    };
    SupplierService.prototype.getSupplierRateById = function (id) {
        return this.apiService.apiCaller('get', '/getSupplierRateList/' + id);
    };
    SupplierService.prototype.updateSupplierRate = function (supplier) {
        return this.apiService.apiCaller('post', '/updateSupplierRateList', supplier);
    };
    SupplierService.prototype.deleteSupplierRateById = function (id) {
        return this.apiService.apiCaller('get', '/deleteSupplierList/' + id);
    };
    SupplierService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], SupplierService);
    return SupplierService;
}());



/***/ }),

/***/ "./src/app/pages/colour-stock/add-edit-colour-stock/add-edit-colour-stock.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/colour-stock/add-edit-colour-stock/add-edit-colour-stock.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>{{topHeader}}\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <form #vform=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Supplier Name</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"colourStockModal.supplier_id\" name=\"supplier_id\"\r\n              #supplier=\"ngModel\" (change)=\"onSupplierSelect($event.target.value)\" required>\r\n              <option disabled value=\"\">Select Supplier\r\n              </option>\r\n              <option *ngFor=\"let supplier of supplierNameList\" [value]=\"supplier.entry_id\">{{supplier.supplier_name}}\r\n              </option>\r\n            </select>\r\n            <div *ngIf=\"supplier.invalid && (supplier.dirty || supplier.touched)\" class=\"errors\">\r\n              <div *ngIf=\"supplier.errors && supplier.errors.required\">\r\n                Supplier Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Remark</label>\r\n            <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"colourStockModal.remark\" name=\"Remark\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>Bill no.</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"colourStockModal.bill_no\" name=\"bill_no\"\r\n              #billNo=\"ngModel\" required />\r\n            <div *ngIf=\"billNo.invalid && (billNo.dirty || billNo.touched)\" class=\"errors\">\r\n              <div *ngIf=\"billNo.errors && billNo.errors.required\">\r\n                Bill no. is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Bill Date</label>\r\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"colourStockModal.bill_date\" name=\"billdate\"\r\n              data-toggle=\"tooltip\" #billDate=\"ngModel\" data-trigger=\"hover\" data-placement=\"top\"\r\n              data-title=\"Date Opened\" required>\r\n            <div *ngIf=\"billDate.invalid && (billDate.dirty || billDate.touched)\" class=\"errors\">\r\n              <div *ngIf=\"billDate.errors && billDate.errors.required\">\r\n                Bill Date is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>Challan no.</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"colourStockModal.chl_no\" name=\"chlno\" #chlNo=\"ngModel\"\r\n              required />\r\n            <div *ngIf=\"chlNo.invalid && (chlNo.dirty || chlNo.touched)\" class=\"errors\">\r\n              <div *ngIf=\"chlNo.errors && chlNo.errors.required\">\r\n                Challan no. is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Challan Date</label>\r\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"colourStockModal.chl_date\" name=\"chldate\"\r\n              data-toggle=\"tooltip\" #chlDate=\"ngModel\" data-trigger=\"hover\" data-placement=\"top\"\r\n              data-title=\"Date Opened\" required>\r\n            <div *ngIf=\"chlDate.invalid && (chlDate.dirty || chlDate.touched)\" class=\"errors\">\r\n              <div *ngIf=\"chlDate.errors && chlDate.errors.required\">\r\n                Challan Date is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>Bill Amount</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"colourStockModal.bill_amount\" name=\"billAmount\"\r\n              #billamount=\"ngModel\" required (keypress)=\"numberOnly($event)\" />\r\n            <div *ngIf=\"billamount.invalid && (billamount.dirty || billamount.touched)\" class=\"errors\">\r\n              <div *ngIf=\"billamount.errors && billamount.errors.required\">\r\n                Bill Amount is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row table table-responsive\" *ngIf=\"colourStockRecord.length\">\r\n        <ag-grid-angular style=\"width: 100%; height:300px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n          [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='10'>\r\n        </ag-grid-angular>\r\n      </div>\r\n      <div class=\"row\">\r\n        <form #sform=\"ngForm\">\r\n          <div class=\"row col-md-12\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Item Name</label>\r\n                <select class=\"form-control\" [(ngModel)]=\"record.item_id\" name=\"itemid\" #item=\"ngModel\"\r\n                  (change)=\"onItemSelect($event.target.value)\" required>\r\n                  <option disabled value=\"\">Select Item\r\n                  </option>\r\n                  <option *ngFor=\"let item of supplierItemList\" [value]=\"item.entry_id\">\r\n                    {{item.item_name}}\r\n                  </option>\r\n                </select>\r\n                <div *ngIf=\"item.invalid && (item.dirty || item.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"item.errors && item.errors.required\">\r\n                    Item Name is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Quantity Per Box</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.quantity_per_box\" name=\"quantityperbox\"\r\n                  (keypress)=\"numberOnly($event)\"\r\n                  (change)=\"onQuantityChange($event.target.value);onRateChange($event.target.value)\" #quantity=\"ngModel\"\r\n                  required />\r\n                <div *ngIf=\"quantity.invalid && (quantity.dirty || quantity.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"quantity.errors && quantity.errors.required\">\r\n                    Quantity Per Box is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>No. of Box</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.no_of_box\" name=\"box\" #Box=\"ngModel\"\r\n                  (keypress)=\"numberOnly($event)\"\r\n                  (change)=\"onQuantityChange($event.target.value);onRateChange($event.target.value)\" required />\r\n                <div *ngIf=\"Box.invalid && (Box.dirty || Box.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"Box.errors && Box.errors.required\">\r\n                    No. of Box is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Total Quantity</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.total_quantity\" name=\"totalQuantity\"\r\n                  (keypress)=\"numberOnly($event)\" disbaled #totalquantity=\"ngModel\" required />\r\n                <div *ngIf=\"totalquantity.invalid && (totalquantity.dirty || totalquantity.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"totalquantity.errors && totalquantity.errors.required\">\r\n                    Total Quantity is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row col-md-12\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Rate</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.rate\" name=\"rt\" #Rate=\"ngModel\"\r\n                  (keypress)=\"numberOnly($event)\" disabled digits required />\r\n                <div *ngIf=\"Rate.invalid && (Rate.dirty || Rate.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"Rate.errors && Rate.errors.required\">\r\n                    Rate is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Amount</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.amount\" name=\"Amnt\" #Amount=\"ngModel\"\r\n                  (keypress)=\"numberOnly($event)\" disabled digits required />\r\n                <div *ngIf=\"Amount.invalid && (Amount.dirty || Amount.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"Amount.errors && Amount.errors.required\">\r\n                    Amount is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <button [disabled]=\"sform.invalid\" style=\"margin-top: 32px;\" nbButton (click)=\"onAddRecord(sform)\">Add\r\n                Record</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"box-footer\">\r\n        <button [disabled]=\"vform.invalid\" nbButton (click)=\"onCustomFormSubmit(vform)\">{{subBtnName}}</button>\r\n        &nbsp;\r\n        <button nbButton type=\"reset\" routerLink='/pages/colour-stock/view-colour-stock-list'\r\n          id=\"Cancel\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/colour-stock/add-edit-colour-stock/add-edit-colour-stock.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/colour-stock/add-edit-colour-stock/add-edit-colour-stock.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbG91ci1zdG9jay9hZGQtZWRpdC1jb2xvdXItc3RvY2svYWRkLWVkaXQtY29sb3VyLXN0b2NrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/colour-stock/add-edit-colour-stock/add-edit-colour-stock.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/colour-stock/add-edit-colour-stock/add-edit-colour-stock.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddEditColourStockComponent, CustomRendererColourRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditColourStockComponent", function() { return AddEditColourStockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererColourRecordComponent", function() { return CustomRendererColourRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/services/supplier.service */ "./src/app/@theme/services/supplier.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _theme_services_colour_stock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/services/colour-stock.service */ "./src/app/@theme/services/colour-stock.service.ts");
/* harmony import */ var _theme_model_colour_stock_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/model/colour-stock-class */ "./src/app/@theme/model/colour-stock-class.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddEditColourStockComponent = /** @class */ (function () {
    function AddEditColourStockComponent(toasterService, route, supplierService, router, colourStockService, authService, datePipe) {
        var _this = this;
        this.toasterService = toasterService;
        this.route = route;
        this.supplierService = supplierService;
        this.router = router;
        this.colourStockService = colourStockService;
        this.authService = authService;
        this.datePipe = datePipe;
        this.subBtnName = '';
        this.topHeader = '';
        this.viewFlag = false;
        this.colourStockRecord = [];
        this.supplierItemList = [];
        this.supplierNameList = [];
        this.supplierReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_1__["ViewReqObj"]();
        this.columnDefs = [
            { headerName: 'Actions', field: 'index' },
            { headerName: 'Item Name', field: 'item_name' },
            { headerName: 'Qunatity Per Box', field: 'quantity_per_box' },
            { headerName: 'No. of Box', field: 'no_of_box' },
            { headerName: 'Total Quantity', field: 'total_quantity' },
            { headerName: 'Rate', field: 'rate' },
            { headerName: 'Amount', field: 'amount' },
        ];
        this.colourStockModal = new _theme_model_colour_stock_class__WEBPACK_IMPORTED_MODULE_8__["ColourStock"]();
        this.record = new _theme_model_colour_stock_class__WEBPACK_IMPORTED_MODULE_8__["ColourStockRecord"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserHeadid = ele.user.user_head_id;
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
            }
        });
        this.setColumns();
    }
    AddEditColourStockComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    AddEditColourStockComponent.prototype.ngOnInit = function () {
        this.getSupplierNameList();
        // this.getSupplierItemList();
        this.onPageLoad();
    };
    AddEditColourStockComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererColourRecordComponent;
                column.cellRendererParams = {
                    // inRouterLink: '/user/edit-user/',
                    action: _this
                };
            }
        });
    };
    AddEditColourStockComponent.prototype.getSupplierNameList = function () {
        var _this = this;
        this.supplierReqObj.current_user_id = this.currentUserId;
        this.supplierReqObj.user_head_id = this.currentUser.user_head_id;
        this.supplierReqObj.group_user_ids = this.currentUserGroupUserIds;
        this.supplierReqObj.view_group = true;
        this.supplierService.getAllSupplierData(this.supplierReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.supplierNameList = data[0].data;
            }
        });
    };
    AddEditColourStockComponent.prototype.getSupplierItemList = function (id) {
        var _this = this;
        this.supplierService.getSupplierRateById(id).subscribe(function (data) {
            if (!data[0].error) {
                _this.supplierItemList = data[0].data.supplier_rate_list;
            }
        });
    };
    AddEditColourStockComponent.prototype.onItemSelect = function (item) {
        var i = this.supplierItemList.findIndex(function (v) { return v.entry_id == item; });
        this.record.item_id = this.supplierItemList[i].entry_id;
        this.record.item_name = this.supplierItemList[i].item_name;
        this.record.rate = this.supplierItemList[i].gst_rate;
    };
    AddEditColourStockComponent.prototype.onSupplierSelect = function (value) {
        this.getSupplierItemList(value);
    };
    AddEditColourStockComponent.prototype.onPageLoad = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            if (this.id) {
                this.subBtnName = 'Update';
                this.topHeader = 'Edit Colour Stock';
            }
            else {
                this.topHeader = 'Colour Stock View';
                this.viewFlag = true;
            }
            this.colourStockService.getColourStockById(this.id).subscribe(function (data) {
                if (!data[0].error) {
                    _this.colourStockModal = data[0].data.colourStock[0];
                    _this.colourStockModal.bill_date = _this.datePipe.transform(_this.colourStockModal.bill_date, "yyyy-MM-dd");
                    _this.colourStockModal.chl_date = _this.datePipe.transform(_this.colourStockModal.chl_date, "yyyy-MM-dd");
                    _this.colourStockRecord = data[0].data.colourStock_record;
                    var i = _this.supplierNameList.findIndex(function (v) { return v.entry_id == _this.colourStockModal.supplier_id; });
                    _this.colourStockModal.supplier_name = _this.supplierNameList[i].supplier_name;
                    _this.getSupplierItemList(_this.colourStockModal.supplier_id);
                    _this.colourStockRecord.forEach(function (ele, index) {
                        ele.index = index + 1;
                        var i = _this.supplierItemList.findIndex(function (v) { return v.entry_id == ele.item_id; });
                        if (i > -1) {
                            ele.rate = _this.supplierItemList[i].gst_rate;
                            ele.item_name = _this.supplierItemList[i].item_name;
                        }
                    });
                    _this.rowData = _this.colourStockRecord.slice();
                    _this.colourStockModal.colour_stock_record = _this.colourStockRecord;
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            this.subBtnName = 'Save';
            this.topHeader = 'Add Colour Stock';
        }
    };
    AddEditColourStockComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
            return false;
        }
        return true;
    };
    AddEditColourStockComponent.prototype.onAddRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (this.colourStockRecord.length) {
            this.record.index = j;
        }
        else if (this.record.index == undefined) {
            this.record.index = this.colourStockRecord.length + 1;
        }
        this.colourStockRecord.forEach(function (ele) {
            if (ele.item_name == _this.record.item_name) {
                ele = _this.record;
                flag = 1;
            }
        });
        if (!flag) {
            this.colourStockRecord.push(this.record);
        }
        this.rowData = this.colourStockRecord.slice();
        this.record = new _theme_model_colour_stock_class__WEBPACK_IMPORTED_MODULE_8__["ColourStockRecord"]();
        form.resetForm();
    };
    AddEditColourStockComponent.prototype.onEditRecord = function (data) {
        var i = this.colourStockRecord.findIndex(function (v) { return v.index == data; });
        this.record = this.colourStockRecord[i];
    };
    AddEditColourStockComponent.prototype.deleteRecord = function (data) {
        var i = this.colourStockRecord.findIndex(function (v) { return v.index == data; });
        this.colourStockRecord.splice(i, 1);
        this.rowData = this.colourStockRecord.slice();
    };
    AddEditColourStockComponent.prototype.onQuantityChange = function (value) {
        if (value && this.record.no_of_box && this.record.quantity_per_box) {
            this.record.total_quantity = this.record.no_of_box * this.record.quantity_per_box;
        }
    };
    AddEditColourStockComponent.prototype.onRateChange = function (value) {
        if (value && this.record.total_quantity) {
            this.record.amount = this.record.rate * this.record.total_quantity;
        }
    };
    AddEditColourStockComponent.prototype.onCustomFormSubmit = function (form) {
        var _this = this;
        var i = this.supplierNameList.findIndex(function (v) { return v.entry_id == _this.colourStockModal.supplier_id; });
        this.colourStockModal.supplier_name = this.supplierNameList[i].supplier_name;
        this.colourStockModal.colour_stock_record = this.colourStockRecord;
        console.log('shade', this.colourStockModal);
        // for update
        if (this.id) {
            this.colourStockModal.updated_by = this.currentUserId;
            this.colourStockService.updateColourStock(this.colourStockModal).subscribe(function (data) {
                console.log(data);
                if (!data[0].error) {
                    _this.toasterService.success(data[0].message);
                    form.resetForm();
                    _this.router.navigate(['/pages/colour-stock/view-colour-stock-list']);
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            this.colourStockModal.created_by = this.currentUserId;
            this.colourStockModal.user_head_id = this.currentUserHeadid;
            console.log(this.colourStockModal);
            this.colourStockService.addColourStock(this.colourStockModal).subscribe(function (data) {
                data = data[0];
                if (!data.error) {
                    _this.toasterService.success(data.message);
                    form.resetForm();
                    _this.router.navigate(['/pages/colour-stock/view-colour-stock-list']);
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
    };
    AddEditColourStockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-add-edit-colour-stock',
            template: __webpack_require__(/*! ./add-edit-colour-stock.component.html */ "./src/app/pages/colour-stock/add-edit-colour-stock/add-edit-colour-stock.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-colour-stock.component.scss */ "./src/app/pages/colour-stock/add-edit-colour-stock/add-edit-colour-stock.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _theme_services_colour_stock_service__WEBPACK_IMPORTED_MODULE_7__["ColourStockService"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]])
    ], AddEditColourStockComponent);
    return AddEditColourStockComponent;
}());

var CustomRendererColourRecordComponent = /** @class */ (function () {
    function CustomRendererColourRecordComponent(_modalService, toasterService) {
        this._modalService = _modalService;
        this.toasterService = toasterService;
    }
    CustomRendererColourRecordComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererColourRecordComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererColourRecordComponent.prototype.editRecord = function () {
        this.params.action.onEditRecord(this.params.value);
    };
    CustomRendererColourRecordComponent.prototype.onDeleteRecord = function () {
        var _this = this;
        var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"]);
        modalRef.componentInstance.titleFrom = 'Delete record ';
        modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
        modalRef.result
            .then(function (result) {
            if (result) {
                _this.params.action.deleteRecord(_this.params.value);
            }
        });
    };
    CustomRendererColourRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-colour-stock.component.scss */ "./src/app/pages/colour-stock/add-edit-colour-stock/add-edit-colour-stock.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CustomRendererColourRecordComponent);
    return CustomRendererColourRecordComponent;
}());



/***/ }),

/***/ "./src/app/pages/colour-stock/colour-stock-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/colour-stock/colour-stock-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ColourStockRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColourStockRoutingModule", function() { return ColourStockRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _colour_stock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colour-stock.component */ "./src/app/pages/colour-stock/colour-stock.component.ts");
/* harmony import */ var _view_colour_stock_view_colour_stock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-colour-stock/view-colour-stock.component */ "./src/app/pages/colour-stock/view-colour-stock/view-colour-stock.component.ts");
/* harmony import */ var _add_edit_colour_stock_add_edit_colour_stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-colour-stock/add-edit-colour-stock.component */ "./src/app/pages/colour-stock/add-edit-colour-stock/add-edit-colour-stock.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _colour_stock_component__WEBPACK_IMPORTED_MODULE_1__["ColourStockComponent"],
        children: [
            {
                path: 'view-colour-stock-list',
                component: _view_colour_stock_view_colour_stock_component__WEBPACK_IMPORTED_MODULE_2__["ViewColourStockComponent"]
            },
            {
                path: 'add-colour-stock',
                component: _add_edit_colour_stock_add_edit_colour_stock_component__WEBPACK_IMPORTED_MODULE_3__["AddEditColourStockComponent"],
            },
            {
                path: 'edit-colour-stock/:id',
                component: _add_edit_colour_stock_add_edit_colour_stock_component__WEBPACK_IMPORTED_MODULE_3__["AddEditColourStockComponent"],
            },
        ]
    }
];
var ColourStockRoutingModule = /** @class */ (function () {
    function ColourStockRoutingModule() {
    }
    ColourStockRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        })
    ], ColourStockRoutingModule);
    return ColourStockRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/colour-stock/colour-stock.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/colour-stock/colour-stock.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/colour-stock/colour-stock.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/colour-stock/colour-stock.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbG91ci1zdG9jay9jb2xvdXItc3RvY2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/colour-stock/colour-stock.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/colour-stock/colour-stock.component.ts ***!
  \**************************************************************/
/*! exports provided: ColourStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColourStockComponent", function() { return ColourStockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColourStockComponent = /** @class */ (function () {
    function ColourStockComponent() {
    }
    ColourStockComponent.prototype.ngOnInit = function () {
    };
    ColourStockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-colour-stock',
            template: __webpack_require__(/*! ./colour-stock.component.html */ "./src/app/pages/colour-stock/colour-stock.component.html"),
            styles: [__webpack_require__(/*! ./colour-stock.component.scss */ "./src/app/pages/colour-stock/colour-stock.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ColourStockComponent);
    return ColourStockComponent;
}());



/***/ }),

/***/ "./src/app/pages/colour-stock/colour-stock.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/colour-stock/colour-stock.module.ts ***!
  \***********************************************************/
/*! exports provided: ColourStockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColourStockModule", function() { return ColourStockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _colour_stock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colour-stock.component */ "./src/app/pages/colour-stock/colour-stock.component.ts");
/* harmony import */ var _view_colour_stock_view_colour_stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-colour-stock/view-colour-stock.component */ "./src/app/pages/colour-stock/view-colour-stock/view-colour-stock.component.ts");
/* harmony import */ var _add_edit_colour_stock_add_edit_colour_stock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-colour-stock/add-edit-colour-stock.component */ "./src/app/pages/colour-stock/add-edit-colour-stock/add-edit-colour-stock.component.ts");
/* harmony import */ var _colour_stock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colour-stock-routing.module */ "./src/app/pages/colour-stock/colour-stock-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ColourStockModule = /** @class */ (function () {
    function ColourStockModule() {
    }
    ColourStockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _colour_stock_component__WEBPACK_IMPORTED_MODULE_2__["ColourStockComponent"],
                _view_colour_stock_view_colour_stock_component__WEBPACK_IMPORTED_MODULE_3__["ViewColourStockComponent"],
                _add_edit_colour_stock_add_edit_colour_stock_component__WEBPACK_IMPORTED_MODULE_4__["AddEditColourStockComponent"],
                _view_colour_stock_view_colour_stock_component__WEBPACK_IMPORTED_MODULE_3__["CustomRendererColourStockComponent"],
                _view_colour_stock_view_colour_stock_component__WEBPACK_IMPORTED_MODULE_3__["CustomRendererIssueNonIssueColourStockComponent"],
                _add_edit_colour_stock_add_edit_colour_stock_component__WEBPACK_IMPORTED_MODULE_4__["CustomRendererColourRecordComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_12__["ThemeModule"],
                _colour_stock_routing_module__WEBPACK_IMPORTED_MODULE_5__["ColourStockRoutingModule"]
            ],
            entryComponents: [
                _view_colour_stock_view_colour_stock_component__WEBPACK_IMPORTED_MODULE_3__["CustomRendererColourStockComponent"],
                _view_colour_stock_view_colour_stock_component__WEBPACK_IMPORTED_MODULE_3__["CustomRendererIssueNonIssueColourStockComponent"],
                _add_edit_colour_stock_add_edit_colour_stock_component__WEBPACK_IMPORTED_MODULE_4__["CustomRendererColourRecordComponent"]
            ]
        })
    ], ColourStockModule);
    return ColourStockModule;
}());



/***/ }),

/***/ "./src/app/pages/colour-stock/view-colour-stock/view-colour-stock.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/colour-stock/view-colour-stock/view-colour-stock.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Colour Stock\r\n    <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onAddColourStock()\">\r\n      Add Colour Stock\r\n    </button>\r\n    <button style=\"float: right;\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onExport()\">Export</button>\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"onradioChange($event)\">\r\n      <nb-radio [value]=\"1\">\r\n        All\r\n      </nb-radio>\r\n      <nb-radio [value]=\"2\">\r\n        Non - Issued\r\n      </nb-radio>\r\n      <nb-radio [value]=\"3\">\r\n        Issued\r\n      </nb-radio>\r\n    </nb-radio-group>\r\n    <div *ngIf=\"radioSelected == 1\">\r\n      <ag-grid-angular style=\"width: 100%; height:500px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n        [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='100' (gridReady)=\"onGridReady($event)\">\r\n      </ag-grid-angular>\r\n    </div>\r\n    <div *ngIf=\"radioSelected == 2 ||radioSelected == 3 \">\r\n      <ag-grid-angular style=\"width: 100%; height:500px\" class=\"ag-theme-balham\" [rowData]=\"rowIssueNonIssueData\"\r\n        [columnDefs]=\"columnDefsForIssuedNonIssued\" [pagination]=\"true\" [paginationPageSize]='100'\r\n        (gridReady)=\"onIssueNonIssueGridReady($event)\">\r\n      </ag-grid-angular>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/colour-stock/view-colour-stock/view-colour-stock.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/colour-stock/view-colour-stock/view-colour-stock.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbG91ci1zdG9jay92aWV3LWNvbG91ci1zdG9jay92aWV3LWNvbG91ci1zdG9jay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/colour-stock/view-colour-stock/view-colour-stock.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/colour-stock/view-colour-stock/view-colour-stock.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ViewColourStockComponent, CustomRendererColourStockComponent, CustomRendererIssueNonIssueColourStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewColourStockComponent", function() { return ViewColourStockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererColourStockComponent", function() { return CustomRendererColourStockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererIssueNonIssueColourStockComponent", function() { return CustomRendererIssueNonIssueColourStockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/services/permission.service */ "./src/app/@theme/services/permission.service.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _theme_services_colour_stock_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@theme/services/colour-stock.service */ "./src/app/@theme/services/colour-stock.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ViewColourStockComponent = /** @class */ (function () {
    function ViewColourStockComponent(colourStockService, router, tosterService, permissionService, papa, authService) {
        var _this = this;
        this.colourStockService = colourStockService;
        this.router = router;
        this.tosterService = tosterService;
        this.permissionService = permissionService;
        this.papa = papa;
        this.authService = authService;
        this.colourStockList = [];
        this.addColourStockPermission = 1;
        this.columnDefs = [
            { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
            { headerName: 'Supplier Name', field: 'supplier_name', sortable: true, filter: true },
            { headerName: 'Bill No.', field: 'bill_no', sortable: true, filter: true },
            { headerName: 'Bill Date', field: 'bill_date', sortable: true, filter: true },
            { headerName: 'Chl No.', field: 'chl_no', sortable: true, filter: true },
            { headerName: 'Chl Date', field: 'chl_date', sortable: true, filter: true },
            { headerName: 'Remark', field: 'remark', sortable: true, filter: true },
            { headerName: 'Bill Amount', field: 'bill_amount', sortable: true, filter: true },
        ];
        this.columnDefsForIssuedNonIssued = [
            { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
            { headerName: 'Box no.', field: 'entry_id', sortable: false, width: 120 },
            { headerName: 'Quantity', field: 'quantity_per_box', sortable: true, filter: true },
            { headerName: 'Rate', field: 'rate', sortable: true, filter: true },
        ];
        this.columnExportDefs = [
            'supplier_name', 'bill_no', 'bill_date', 'chl_no', 'chl_date', 'remark', 'bill_amount'
        ];
        this.columnExportIssueNonIssueDefs = [
            'entry_id', 'quantity_per_box', 'rate'
        ];
        this.currentUserPermission = [];
        this.viewAllDataPermission = false;
        this.viewOwnDataPermission = false;
        this.viewGroupDataPermission = false;
        this.radioSelected = 1;
        this.colourStockReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__["ViewReqObj"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserPermission = ele.user_permission;
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
            }
        });
        this.setColumns();
    }
    ViewColourStockComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUserPermission.length) {
            this.currentUserPermission.forEach(function (ele) {
                if (ele.form_name === 'Colour Stock') {
                    // this.addUserPermission = ele.can_add;
                    _this.addColourStockPermission = 1;
                }
            });
        }
        this.getColourStockData();
    };
    ViewColourStockComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    ViewColourStockComponent.prototype.onradioChange = function (value) {
        this.radioSelected = value;
        if (value == 1) {
            this.getColourStockData();
        }
        else {
            this.getIssuedNonIssuedData();
        }
    };
    ViewColourStockComponent.prototype.getIssuedNonIssuedData = function () {
        var _this = this;
        var isIssued;
        if (this.radioSelected == 3) {
            isIssued = 1;
        }
        else {
            isIssued = 0;
        }
        this.colourStockService.getIssuedNonIssueData(isIssued).subscribe(function (data) {
            if (!data[0].error) {
                _this.rowIssueNonIssueData = data[0].data;
            }
            else {
                _this.tosterService.error(data[0].message);
            }
        });
    };
    ViewColourStockComponent.prototype.getColourStockData = function () {
        var _this = this;
        this.colourStockReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__["ViewReqObj"]();
        this.colourStockService.getAllColourStock(this.colourStockReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.colourStockList = data[0].data;
                _this.rowData = data[0].data;
            }
            else {
                _this.tosterService.error(data[0].message);
            }
        });
    };
    ViewColourStockComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'entry_id') {
                column.cellRendererFramework = CustomRendererColourStockComponent;
                column.cellRendererParams = {
                    inRouterLink: '/pages/colour-stock/edit-colour-stock/',
                    inViewLink: '/pages/colour-stock/view-colour-stock/',
                    action: _this
                };
            }
        });
        this.columnDefsForIssuedNonIssued.forEach(function (column) {
            if (column.headerName === 'Actions') {
                column.cellRendererFramework = CustomRendererIssueNonIssueColourStockComponent;
                column.cellRendererParams = {
                    action: _this
                };
            }
        });
    };
    ViewColourStockComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        // this.getUserList(this.currentUserId);
    };
    ViewColourStockComponent.prototype.onIssueNonIssueGridReady = function (params) {
        this.gridIssueNonIssueApi = params.api;
        this.gridColumnIssueNonIssueApi = params.columnApi;
        // this.getUserList(this.currentUserId);
    };
    ViewColourStockComponent.prototype.onAddColourStock = function () {
        if (this.addColourStockPermission) {
            this.router.navigate(['/pages/colour-stock/add-colour-stock']);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add Colour Stock. If you want to add Colour Stock ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ViewColourStockComponent.prototype.onExport = function () {
        var _this = this;
        var params;
        if (this.radioSelected == 1) {
            params = {
                columnKeys: this.columnExportDefs
            };
        }
        else {
            params = {
                columnKeys: this.columnExportIssueNonIssueDefs
            };
        }
        var data = this.gridApi.getDataAsCsv(params);
        this.papa.parse(data, {
            complete: function (result) {
                _this.exportExcel(result.data);
            }
        });
    };
    ViewColourStockComponent.prototype.exportExcel = function (data) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].json_to_sheet(data);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        xlsx__WEBPACK_IMPORTED_MODULE_7__["writeFile"](workbook, 'my_file.xls', { bookType: 'xls', type: 'buffer' });
    };
    ViewColourStockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-view-colour-stock',
            template: __webpack_require__(/*! ./view-colour-stock.component.html */ "./src/app/pages/colour-stock/view-colour-stock/view-colour-stock.component.html"),
            styles: [__webpack_require__(/*! ./view-colour-stock.component.scss */ "./src/app/pages/colour-stock/view-colour-stock/view-colour-stock.component.scss")]
        }),
        __metadata("design:paramtypes", [_theme_services_colour_stock_service__WEBPACK_IMPORTED_MODULE_10__["ColourStockService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__["PermissionService"], ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__["Papa"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], ViewColourStockComponent);
    return ViewColourStockComponent;
}());

var CustomRendererColourStockComponent = /** @class */ (function () {
    function CustomRendererColourStockComponent(router, _modalService, colourStockService, toasterService, permissionService, authService) {
        var _this = this;
        this.router = router;
        this._modalService = _modalService;
        this.colourStockService = colourStockService;
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.authService = authService;
        this.editColourStockPermission = 1;
        this.deleteColourStockPermission = 1;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserPermission = ele.user_permission;
            }
        });
    }
    CustomRendererColourStockComponent.prototype.agInit = function (params) {
        var _this = this;
        this.params = params;
        this.currentUserPermission.forEach(function (ele) {
            if (ele.form_name === 'ColourStock') {
                if (_this.params.action.radioSelected == 1) {
                    _this.editColourStockPermission = ele.can_edit;
                    _this.deleteColourStockPermission = ele.can_delete;
                }
                else if (_this.params.action.radioSelected == 2) {
                    _this.editColourStockPermission = ele.can_edit_group;
                    _this.deleteColourStockPermission = ele.can_delete_group;
                }
                else if (_this.params.action.radioSelected == 3) {
                    _this.editColourStockPermission = ele.can_edit_all;
                    _this.deleteColourStockPermission = ele.can_delete_all;
                }
            }
        });
    };
    CustomRendererColourStockComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    CustomRendererColourStockComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererColourStockComponent.prototype.viewColourStock = function () {
    };
    CustomRendererColourStockComponent.prototype.editColourStock = function () {
        if (this.editColourStockPermission) {
            this.router.navigate([this.params.inRouterLink + this.params.value]);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit colourStock. If you want to edit colourStock ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererColourStockComponent.prototype.onDeleteColourStock = function () {
        var _this = this;
        if (this.deleteColourStockPermission) {
            var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"]);
            modalRef.componentInstance.titleFrom = 'Delete ColourStock ';
            modalRef.componentInstance.message = 'Are you sure you want to delete this colourStock?';
            modalRef.result
                .then(function (result) {
                if (result) {
                    var id = _this.params.value;
                    _this.colourStockService.deleteColourStockById(id).subscribe(function (data) {
                        if (!data[0].error) {
                            _this.params.action.getColourStockData();
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
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete colourStock. If you want to delete colourStock ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererColourStockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editColourStock()\"></i>\n  <i class=\"ft-info font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"viewColourStock()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteColourStock()\"></i>",
            styles: [__webpack_require__(/*! ./view-colour-stock.component.scss */ "./src/app/pages/colour-stock/view-colour-stock/view-colour-stock.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _theme_services_colour_stock_service__WEBPACK_IMPORTED_MODULE_10__["ColourStockService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__["PermissionService"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], CustomRendererColourStockComponent);
    return CustomRendererColourStockComponent;
}());

var CustomRendererIssueNonIssueColourStockComponent = /** @class */ (function () {
    function CustomRendererIssueNonIssueColourStockComponent(router, _modalService, colourStockService, toasterService, permissionService, authService) {
        this.router = router;
        this._modalService = _modalService;
        this.colourStockService = colourStockService;
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.authService = authService;
    }
    CustomRendererIssueNonIssueColourStockComponent.prototype.agInit = function (params) {
        this.params = params;
        this.radioSelected = this.params.action.radioSelected;
        if (this.radioSelected == 3) {
            this.isIssued = 1;
        }
        else {
            this.isIssued = 0;
        }
    };
    CustomRendererIssueNonIssueColourStockComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererIssueNonIssueColourStockComponent.prototype.issueBox = function () {
        var _this = this;
        var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"]);
        modalRef.componentInstance.titleFrom = 'Issue Colour Box ';
        modalRef.componentInstance.message = 'Are you sure you want to issue this box?';
        modalRef.result
            .then(function (result) {
            if (result) {
                _this.colourStockService.issueBox(_this.params.value).subscribe(function (data) {
                    if (!data[0].error) {
                        _this.params.action.getIssuedNonIssuedData();
                    }
                    else {
                        _this.toasterService.error(data[0].message);
                    }
                });
            }
        });
    };
    CustomRendererIssueNonIssueColourStockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i *ngIf=\"!isIssued\" class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"issueBox()\"></i>",
            styles: [__webpack_require__(/*! ./view-colour-stock.component.scss */ "./src/app/pages/colour-stock/view-colour-stock/view-colour-stock.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _theme_services_colour_stock_service__WEBPACK_IMPORTED_MODULE_10__["ColourStockService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__["PermissionService"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], CustomRendererIssueNonIssueColourStockComponent);
    return CustomRendererIssueNonIssueColourStockComponent;
}());



/***/ })

}]);
//# sourceMappingURL=colour-stock-colour-stock-module.js.map