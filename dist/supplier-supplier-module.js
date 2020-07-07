(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["supplier-supplier-module"],{

/***/ "./src/app/@theme/model/supplier-class.ts":
/*!************************************************!*\
  !*** ./src/app/@theme/model/supplier-class.ts ***!
  \************************************************/
/*! exports provided: Supplier, SupplierRate, SupplierRateRecord, SupplierItemRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supplier", function() { return Supplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierRate", function() { return SupplierRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierRateRecord", function() { return SupplierRateRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierItemRecord", function() { return SupplierItemRecord; });
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    return Supplier;
}());

var SupplierRate = /** @class */ (function () {
    function SupplierRate() {
    }
    return SupplierRate;
}());

var SupplierRateRecord = /** @class */ (function () {
    function SupplierRateRecord() {
    }
    return SupplierRateRecord;
}());

var SupplierItemRecord = /** @class */ (function () {
    function SupplierItemRecord() {
    }
    return SupplierItemRecord;
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

/***/ "./src/app/pages/supplier/add-edit-supplier-rate/add-edit-supplier-rate.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/supplier/add-edit-supplier-rate/add-edit-supplier-rate.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>{{topHeader}}\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <form (ngSubmit)=\"onCustomFormSubmit(vform)\" #vform=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Supplier Name</label>\r\n            <select type=\"text\" class=\"form-control\" [(ngModel)]=\"supplierModal.supplier_control_id\" name=\"supplierName\"\r\n              #SupplierName=\"ngModel\" required (change)=\"onSupplierSelect($event.target.value)\">\r\n              <option *ngFor=\"let supplier of supplierList\" [value]=\"supplier.entry_id\">{{supplier.supplier_name}}\r\n              </option>\r\n            </select>\r\n            <div *ngIf=\"SupplierName.invalid && (SupplierName.dirty || SupplierName.touched)\" class=\"errors\">\r\n              <div *ngIf=\"SupplierName.errors && SupplierName.errors.required\">\r\n                Supplier Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row table table-responsive\" *ngIf=\"supplierRateList.length\">\r\n        <ag-grid-angular style=\"width: 100%; height:300px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n          [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='5'>\r\n        </ag-grid-angular>\r\n      </div>\r\n      <div class=\"row\">\r\n        <form #sform=\"ngForm\">\r\n          <div class=\"row col-md-12\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Item Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplierRateRecord.item_name\" name=\"itemName\"\r\n                  #ItemName=\"ngModel\" required />\r\n                <div *ngIf=\"ItemName.invalid && (ItemName.dirty || ItemName.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"ItemName.errors && ItemName.errors.required\">\r\n                    Item Name is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Item Rate</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplierRateRecord.rate\" name=\"itemRate\"\r\n                  (keypress)=\"numberOnly($event)\" #ItemRate=\"ngModel\" required\r\n                  (change)=\"getRateCalculation($event.target.value)\" />\r\n                <div *ngIf=\"ItemRate.invalid && (ItemRate.dirty || ItemRate.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"ItemRate.errors && ItemRate.errors.required\">\r\n                    Item Rate is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Discount Rate</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplierRateRecord.discount_rate\"\r\n                  name=\"discountRate\" #discount=\"ngModel\" (keypress)=\"numberOnly($event)\" required />\r\n                <div *ngIf=\"discount.invalid && (discount.dirty || discount.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"discount.errors && discount.errors.required\">\r\n                    Discount Rate is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>GST Rate</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplierRateRecord.gst_rate\" name=\"gst\"\r\n                  #GST=\"ngModel\" (keypress)=\"numberOnly($event)\" required />\r\n                <div *ngIf=\"GST.invalid && (GST.dirty || GST.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"GST.errors && GST.errors.required\">\r\n                    GST Rate is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <button [disabled]=\"sform.invalid\" style=\"margin-top: 32px;\" nbButton (click)=\"onAddItem(sform)\">Add\r\n                Item</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"box-footer\">\r\n        <button nbButton translate>{{subBtnName}}</button> &nbsp;\r\n        <button nbButton type=\"reset\" routerLink='/pages/supplier/view-supplier-list' id=\"Cancel\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/supplier/add-edit-supplier-rate/add-edit-supplier-rate.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/supplier/add-edit-supplier-rate/add-edit-supplier-rate.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1cHBsaWVyL2FkZC1lZGl0LXN1cHBsaWVyLXJhdGUvYWRkLWVkaXQtc3VwcGxpZXItcmF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/supplier/add-edit-supplier-rate/add-edit-supplier-rate.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/supplier/add-edit-supplier-rate/add-edit-supplier-rate.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddEditSupplierRateComponent, CustomRendererSupplierRateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditSupplierRateComponent", function() { return AddEditSupplierRateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererSupplierRateComponent", function() { return CustomRendererSupplierRateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_model_supplier_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/model/supplier-class */ "./src/app/@theme/model/supplier-class.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/services/supplier.service */ "./src/app/@theme/services/supplier.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddEditSupplierRateComponent = /** @class */ (function () {
    function AddEditSupplierRateComponent(toasterService, route, authService, router, supplierService) {
        var _this = this;
        this.toasterService = toasterService;
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.supplierService = supplierService;
        this.supplierRateList = [];
        this.supplierList = [];
        this.subBtnName = '';
        this.topHeader = '';
        this.columnDefs = [
            { headerName: 'Actions', field: 'index' },
            { headerName: 'Item Name', field: 'item_name' },
            { headerName: 'Rate', field: 'rate' },
            { headerName: 'Discount Rate', field: 'discount_rate' },
            { headerName: 'GST Rate', field: 'gst_rate' },
        ];
        this.supplierReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_7__["ViewReqObj"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
            }
        });
        this.supplierRateRecord = new _theme_model_supplier_class__WEBPACK_IMPORTED_MODULE_1__["SupplierRateRecord"]();
        this.supplierModal = new _theme_model_supplier_class__WEBPACK_IMPORTED_MODULE_1__["SupplierRate"]();
        this.selectedSupplier = new _theme_model_supplier_class__WEBPACK_IMPORTED_MODULE_1__["Supplier"]();
    }
    AddEditSupplierRateComponent.prototype.ngOnInit = function () {
        this.getSupplierList();
        this.onPageLoad();
        this.setColumns();
    };
    AddEditSupplierRateComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererSupplierRateComponent;
                column.cellRendererParams = {
                    action: _this
                };
            }
        });
    };
    AddEditSupplierRateComponent.prototype.onSupplierSelect = function (value) {
        this.selectedSupplier = this.supplierList[this.supplierList.findIndex(function (v) { return v.entry_id == value; })];
    };
    AddEditSupplierRateComponent.prototype.getSupplierList = function () {
        var _this = this;
        this.supplierReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_7__["ViewReqObj"]();
        this.supplierReqObj.current_user_id = this.currentUserId;
        this.supplierReqObj.user_head_id = this.currentUser.user_head_id;
        this.supplierReqObj.group_user_ids = this.currentUserGroupUserIds;
        this.supplierReqObj.view_group = true;
        this.supplierService.getAllSupplierData(this.supplierReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.supplierList = data[0].data;
            }
            else {
                _this.toasterService.error(data[0].message);
            }
        }, function (error) {
            _this.toasterService.error('Server Error');
        });
    };
    AddEditSupplierRateComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
            return false;
        }
        return true;
    };
    AddEditSupplierRateComponent.prototype.onPageLoad = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            this.subBtnName = 'Update';
            this.topHeader = 'Add/Edit Supplier Rate';
            this.supplierService.getSupplierRateById(this.id).subscribe(function (data) {
                if (!data[0].error) {
                    _this.supplierModal.supplier_control_id = data[0].data.supplier_control_id;
                    _this.onSupplierSelect(_this.supplierModal.supplier_control_id);
                    _this.supplierRateList = data[0].data.supplier_rate_list;
                    _this.supplierRateList.forEach(function (ele, index) {
                        ele.index = index + 1;
                        ele.discount_rate = Math.floor(Number(ele.rate) - Math.floor((_this.selectedSupplier.discount_percentage * ele.rate) / 100));
                        ele.gst_rate = Math.floor(Number(ele.discount_rate) + Math.floor((_this.selectedSupplier.gst_percentage * ele.discount_rate) / 100));
                    });
                    _this.rowData = _this.supplierRateList.slice();
                    _this.supplierModal.supplier_rate_list = _this.supplierRateList;
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error(error);
            });
        }
        else {
            this.subBtnName = 'Save';
            this.topHeader = 'Add Supplier Rate';
        }
    };
    AddEditSupplierRateComponent.prototype.getRateCalculation = function (value) {
        if (this.selectedSupplier.entry_id != null || this.selectedSupplier.entry_id != undefined) {
            this.supplierRateRecord.discount_rate = Math.floor(Number(value) - Math.floor((this.selectedSupplier.discount_percentage * value) / 100));
            this.supplierRateRecord.gst_rate = Math.floor(Number(this.supplierRateRecord.discount_rate) + Math.floor((this.selectedSupplier.gst_percentage * this.supplierRateRecord.discount_rate) / 100));
        }
    };
    AddEditSupplierRateComponent.prototype.onAddItem = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (this.supplierRateList.length) {
            this.supplierRateRecord.index = j;
        }
        else if (this.supplierRateRecord.index == undefined) {
            this.supplierRateRecord.index = this.supplierRateList.length + 1;
        }
        this.supplierRateList.forEach(function (ele) {
            if (ele.item_name == _this.supplierRateRecord.item_name) {
                ele = _this.supplierRateRecord;
                flag = 1;
            }
        });
        if (!flag) {
            this.supplierRateList.push(this.supplierRateRecord);
        }
        this.rowData = this.supplierRateList.slice();
        this.supplierRateRecord = new _theme_model_supplier_class__WEBPACK_IMPORTED_MODULE_1__["SupplierRateRecord"]();
        form.resetForm();
    };
    AddEditSupplierRateComponent.prototype.onEditRecord = function (data) {
        var i = this.supplierRateList.findIndex(function (v) { return v.index == data; });
        this.supplierRateRecord = this.supplierRateList[i];
    };
    AddEditSupplierRateComponent.prototype.deleteRecord = function (data) {
        var i = this.supplierRateList.findIndex(function (v) { return v.index == data; });
        this.supplierRateList.splice(i, 1);
        this.rowData = this.supplierRateList.slice();
    };
    AddEditSupplierRateComponent.prototype.onCustomFormSubmit = function (form) {
        var _this = this;
        this.supplierModal.supplier_rate_list = this.supplierRateList;
        if (this.id) {
            this.supplierModal.supplier_rate_list.forEach(function (ele) {
                if (ele.entry_id) {
                    ele.updated_by = _this.currentUserId;
                }
                else {
                    ele.created_by = _this.currentUserId;
                }
            });
            this.supplierService.updateSupplierRate(this.supplierModal).subscribe(function (data) {
                if (!data[0].error) {
                    _this.toasterService.success("Updated Successfully");
                    form.resetForm();
                    _this.router.navigate(['/pages/supplier/view-supplier-list']);
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            this.supplierModal.supplier_rate_list.forEach(function (ele) {
                ele.created_by = _this.currentUserId;
            });
            this.supplierService.addSupplierRate(this.supplierModal).subscribe(function (data) {
                // data = data[0]
                if (!data[0].error) {
                    _this.toasterService.success(data[0].message);
                    form.resetForm();
                    _this.router.navigate(['/pages/supplier/view-supplier-list']);
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
    };
    AddEditSupplierRateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-add-edit-supplier-rate',
            template: __webpack_require__(/*! ./add-edit-supplier-rate.component.html */ "./src/app/pages/supplier/add-edit-supplier-rate/add-edit-supplier-rate.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-supplier-rate.component.scss */ "./src/app/pages/supplier/add-edit-supplier-rate/add-edit-supplier-rate.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"]])
    ], AddEditSupplierRateComponent);
    return AddEditSupplierRateComponent;
}());

var CustomRendererSupplierRateComponent = /** @class */ (function () {
    function CustomRendererSupplierRateComponent(_modalService, toasterService) {
        this._modalService = _modalService;
        this.toasterService = toasterService;
    }
    CustomRendererSupplierRateComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererSupplierRateComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererSupplierRateComponent.prototype.editRecord = function () {
        this.params.action.onEditRecord(this.params.value);
    };
    CustomRendererSupplierRateComponent.prototype.onDeleteRecord = function () {
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
    CustomRendererSupplierRateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-supplier-rate.component.scss */ "./src/app/pages/supplier/add-edit-supplier-rate/add-edit-supplier-rate.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CustomRendererSupplierRateComponent);
    return CustomRendererSupplierRateComponent;
}());



/***/ }),

/***/ "./src/app/pages/supplier/add-edit-supplier/add-edit-supplier.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/supplier/add-edit-supplier/add-edit-supplier.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>{{topHeader}}\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <form (ngSubmit)=\"onCustomFormSubmit(vform)\" #vform=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Supplier Name</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplierModal.supplier_name\" name=\"supplierName\"\r\n              #SupplierName=\"ngModel\" required />\r\n            <div *ngIf=\"SupplierName.invalid && (SupplierName.dirty || SupplierName.touched)\" class=\"errors\">\r\n              <div *ngIf=\"SupplierName.errors && SupplierName.errors.required\">\r\n                Supplier Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Discount %</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplierModal.discount_percentage\"\r\n              name=\"discountPercentage\" (keypress)=\"numberOnly($event)\" #discount=\"ngModel\" required />\r\n            <div *ngIf=\"discount.invalid && (discount.dirty || discount.touched)\" class=\"errors\">\r\n              <div *ngIf=\"discount.errors && discount.errors.required\">\r\n                Discount % is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>GST %</label>\r\n            <!-- pattern -->\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplierModal.gst_percentage\" name=\"gstPercentage\"\r\n              #gst=\"ngModel\" required (keypress)=\"numberOnly($event)\" />\r\n            <div *ngIf=\"gst.invalid && (gst.dirty || gst.touched)\" class=\"errors\">\r\n              <div *ngIf=\"gst.errors && gst.errors.required\">\r\n                GST % is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Payment Terms</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplierModal.payment_terms\" name=\"paymentTerms\"\r\n              #payment=\"ngModel\" required />\r\n            <div *ngIf=\"payment.invalid && (payment.dirty || payment.touched)\" class=\"errors\">\r\n              <div *ngIf=\"payment.errors && payment.errors.required\">\r\n                Payment Terms is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Remark</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplierModal.remark\" name=\"remarks\"\r\n              #Remark=\"ngModel\" />\r\n            <!-- <div *ngIf=\"Remark.invalid && (Remark.dirty || Remark.touched)\" class=\"errors\">\r\n              <div *ngIf=\"Remark.errors && Remark.errors.required\">\r\n                Remark is required.\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"box-footer\">\r\n        <button nbButton translate>{{subBtnName}}</button> &nbsp;\r\n        <button nbButton type=\"reset\" routerLink='/pages/supplier/view-supplier-list' id=\"Cancel\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/supplier/add-edit-supplier/add-edit-supplier.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/supplier/add-edit-supplier/add-edit-supplier.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1cHBsaWVyL2FkZC1lZGl0LXN1cHBsaWVyL2FkZC1lZGl0LXN1cHBsaWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/supplier/add-edit-supplier/add-edit-supplier.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/supplier/add-edit-supplier/add-edit-supplier.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddEditSupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditSupplierComponent", function() { return AddEditSupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_model_supplier_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/model/supplier-class */ "./src/app/@theme/model/supplier-class.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/services/supplier.service */ "./src/app/@theme/services/supplier.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddEditSupplierComponent = /** @class */ (function () {
    function AddEditSupplierComponent(toasterService, route, authService, router, supplierService) {
        var _this = this;
        this.toasterService = toasterService;
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.supplierService = supplierService;
        this.subBtnName = '';
        this.topHeader = '';
        this.currentUserPermission = [];
        this.supplierModal = new _theme_model_supplier_class__WEBPACK_IMPORTED_MODULE_1__["Supplier"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserHeadid = ele.user.user_head_id;
                _this.currentUserPermission = ele.user_permission;
            }
        });
    }
    AddEditSupplierComponent.prototype.ngOnInit = function () {
        this.onPageLoad();
    };
    AddEditSupplierComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
            return false;
        }
        return true;
    };
    AddEditSupplierComponent.prototype.onPageLoad = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            this.subBtnName = 'Update';
            this.topHeader = 'Edit Supplier';
            this.supplierService.getSupplierById(this.id).subscribe(function (data) {
                if (!data[0].error) {
                    _this.supplierModal = data[0].data[0];
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error(error);
            });
        }
        else {
            this.subBtnName = 'Save';
            this.topHeader = 'Add Supplier';
        }
    };
    AddEditSupplierComponent.prototype.onCustomFormSubmit = function (form) {
        var _this = this;
        if (this.id) {
            this.supplierModal.updated_by = this.currentUserId;
            this.supplierService.updateSupplier(this.supplierModal).subscribe(function (data) {
                if (!data[0].error) {
                    _this.toasterService.success("Updated Successfully");
                    form.resetForm();
                    _this.router.navigate(['/pages/supplier/view-supplier-list']);
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            this.supplierModal.created_by = this.currentUserId;
            this.supplierModal.user_head_id = this.currentUserHeadid;
            console.log(this.supplierModal);
            this.supplierService.addSupplier(this.supplierModal).subscribe(function (data) {
                // data = data[0]
                if (!data[0].error) {
                    _this.toasterService.success(data[0].message);
                    form.resetForm();
                    _this.router.navigate(['/pages/supplier/view-supplier-list']);
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
    };
    AddEditSupplierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-add-edit-supplier',
            template: __webpack_require__(/*! ./add-edit-supplier.component.html */ "./src/app/pages/supplier/add-edit-supplier/add-edit-supplier.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-supplier.component.scss */ "./src/app/pages/supplier/add-edit-supplier/add-edit-supplier.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"]])
    ], AddEditSupplierComponent);
    return AddEditSupplierComponent;
}());



/***/ }),

/***/ "./src/app/pages/supplier/supplier-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/supplier/supplier-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SupplierRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierRoutingModule", function() { return SupplierRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _supplier_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier.component */ "./src/app/pages/supplier/supplier.component.ts");
/* harmony import */ var _view_supplier_rate_view_supplier_rate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-supplier-rate/view-supplier-rate.component */ "./src/app/pages/supplier/view-supplier-rate/view-supplier-rate.component.ts");
/* harmony import */ var _view_suppliers_view_suppliers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-suppliers/view-suppliers.component */ "./src/app/pages/supplier/view-suppliers/view-suppliers.component.ts");
/* harmony import */ var _add_edit_supplier_add_edit_supplier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-supplier/add-edit-supplier.component */ "./src/app/pages/supplier/add-edit-supplier/add-edit-supplier.component.ts");
/* harmony import */ var _add_edit_supplier_rate_add_edit_supplier_rate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit-supplier-rate/add-edit-supplier-rate.component */ "./src/app/pages/supplier/add-edit-supplier-rate/add-edit-supplier-rate.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _supplier_component__WEBPACK_IMPORTED_MODULE_1__["SupplierComponent"],
        children: [
            {
                path: 'view-supplier-list',
                component: _view_suppliers_view_suppliers_component__WEBPACK_IMPORTED_MODULE_3__["ViewSuppliersComponent"]
            },
            {
                path: 'add-supplier',
                component: _add_edit_supplier_add_edit_supplier_component__WEBPACK_IMPORTED_MODULE_4__["AddEditSupplierComponent"],
            },
            {
                path: 'edit-supplier/:id',
                component: _add_edit_supplier_add_edit_supplier_component__WEBPACK_IMPORTED_MODULE_4__["AddEditSupplierComponent"],
            },
            {
                path: 'view-supplier-rate-list',
                component: _view_supplier_rate_view_supplier_rate_component__WEBPACK_IMPORTED_MODULE_2__["ViewSupplierRateComponent"]
            },
            {
                path: 'add-supplier-rate',
                component: _add_edit_supplier_rate_add_edit_supplier_rate_component__WEBPACK_IMPORTED_MODULE_5__["AddEditSupplierRateComponent"],
            },
            {
                path: 'edit-supplier-rate/:id',
                component: _add_edit_supplier_rate_add_edit_supplier_rate_component__WEBPACK_IMPORTED_MODULE_5__["AddEditSupplierRateComponent"],
            },
        ]
    }
];
var SupplierRoutingModule = /** @class */ (function () {
    function SupplierRoutingModule() {
    }
    SupplierRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
        })
    ], SupplierRoutingModule);
    return SupplierRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/supplier/supplier.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/supplier/supplier.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/supplier/supplier.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/supplier/supplier.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1cHBsaWVyL3N1cHBsaWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/supplier/supplier.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/supplier/supplier.component.ts ***!
  \******************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
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

var SupplierComponent = /** @class */ (function () {
    function SupplierComponent() {
    }
    SupplierComponent.prototype.ngOnInit = function () {
    };
    SupplierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-supplier',
            template: __webpack_require__(/*! ./supplier.component.html */ "./src/app/pages/supplier/supplier.component.html"),
            styles: [__webpack_require__(/*! ./supplier.component.scss */ "./src/app/pages/supplier/supplier.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SupplierComponent);
    return SupplierComponent;
}());



/***/ }),

/***/ "./src/app/pages/supplier/supplier.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/supplier/supplier.module.ts ***!
  \***************************************************/
/*! exports provided: SupplierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierModule", function() { return SupplierModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _supplier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplier.component */ "./src/app/pages/supplier/supplier.component.ts");
/* harmony import */ var _view_supplier_rate_view_supplier_rate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-supplier-rate/view-supplier-rate.component */ "./src/app/pages/supplier/view-supplier-rate/view-supplier-rate.component.ts");
/* harmony import */ var _view_suppliers_view_suppliers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-suppliers/view-suppliers.component */ "./src/app/pages/supplier/view-suppliers/view-suppliers.component.ts");
/* harmony import */ var _add_edit_supplier_add_edit_supplier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit-supplier/add-edit-supplier.component */ "./src/app/pages/supplier/add-edit-supplier/add-edit-supplier.component.ts");
/* harmony import */ var _add_edit_supplier_rate_add_edit_supplier_rate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit-supplier-rate/add-edit-supplier-rate.component */ "./src/app/pages/supplier/add-edit-supplier-rate/add-edit-supplier-rate.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _supplier_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./supplier-routing.module */ "./src/app/pages/supplier/supplier-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var SupplierModule = /** @class */ (function () {
    function SupplierModule() {
    }
    SupplierModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _supplier_component__WEBPACK_IMPORTED_MODULE_2__["SupplierComponent"],
                _view_supplier_rate_view_supplier_rate_component__WEBPACK_IMPORTED_MODULE_3__["ViewSupplierRateComponent"],
                _view_suppliers_view_suppliers_component__WEBPACK_IMPORTED_MODULE_4__["ViewSuppliersComponent"],
                _add_edit_supplier_add_edit_supplier_component__WEBPACK_IMPORTED_MODULE_5__["AddEditSupplierComponent"],
                _add_edit_supplier_rate_add_edit_supplier_rate_component__WEBPACK_IMPORTED_MODULE_6__["AddEditSupplierRateComponent"],
                _view_supplier_rate_view_supplier_rate_component__WEBPACK_IMPORTED_MODULE_3__["SupplierRateRendererComponent"],
                _view_suppliers_view_suppliers_component__WEBPACK_IMPORTED_MODULE_4__["SupplierRendererComponent"],
                _add_edit_supplier_rate_add_edit_supplier_rate_component__WEBPACK_IMPORTED_MODULE_6__["CustomRendererSupplierRateComponent"]
            ],
            entryComponents: [
                _view_supplier_rate_view_supplier_rate_component__WEBPACK_IMPORTED_MODULE_3__["SupplierRateRendererComponent"],
                _view_suppliers_view_suppliers_component__WEBPACK_IMPORTED_MODULE_4__["SupplierRendererComponent"],
                _add_edit_supplier_rate_add_edit_supplier_rate_component__WEBPACK_IMPORTED_MODULE_6__["CustomRendererSupplierRateComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__["Ng2SmartTableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_13__["ThemeModule"],
                _supplier_routing_module__WEBPACK_IMPORTED_MODULE_14__["SupplierRoutingModule"]
            ]
        })
    ], SupplierModule);
    return SupplierModule;
}());



/***/ }),

/***/ "./src/app/pages/supplier/view-supplier-rate/view-supplier-rate.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/supplier/view-supplier-rate/view-supplier-rate.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n    <nb-card-header>Supplier Rates\r\n        <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\"\r\n            (click)=\"onAddSupplierRate()\">\r\n            Add Supplier Rate\r\n        </button>\r\n        <!-- <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\"\r\n          (click)=\"onPrintInvoice(true)\">Export List</button>\r\n      <button style=\"float: right;\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onPrintInvoice(false)\">Print\r\n          Supplier List</button> -->\r\n\r\n    </nb-card-header>\r\n    <nb-card-body>\r\n        <ag-grid-angular style=\"width: 100%; height:500px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n            [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='100'>\r\n        </ag-grid-angular>\r\n    </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/supplier/view-supplier-rate/view-supplier-rate.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/supplier/view-supplier-rate/view-supplier-rate.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1cHBsaWVyL3ZpZXctc3VwcGxpZXItcmF0ZS92aWV3LXN1cHBsaWVyLXJhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/supplier/view-supplier-rate/view-supplier-rate.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/supplier/view-supplier-rate/view-supplier-rate.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ViewSupplierRateComponent, SupplierRateRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSupplierRateComponent", function() { return ViewSupplierRateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierRateRendererComponent", function() { return SupplierRateRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@theme/services/permission.service */ "./src/app/@theme/services/permission.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/services/supplier.service */ "./src/app/@theme/services/supplier.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewSupplierRateComponent = /** @class */ (function () {
    function ViewSupplierRateComponent(toasterService, permissionService, router, supplierService) {
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.router = router;
        this.supplierService = supplierService;
        this.columnDefs = [
            { headerName: 'Actions', field: 'entry_id', width: 100 },
            { headerName: 'Supplier Name', field: 'supplier_name', sortable: true, filter: true },
            { headerName: 'Discount %', field: 'discount_percentage', sortable: true, filter: true },
            { headerName: 'GST %', field: 'gst_percentage', sortable: true, filter: true },
            { headerName: 'Payment Terms', field: 'payment_terms', sortable: true, filter: true },
            { headerName: 'Remark', field: 'remark', sortable: true, filter: true },
        ];
        this.addSupplierRatePermission = 0;
        this.supplierRateList = [];
        this.setColumns();
    }
    ViewSupplierRateComponent.prototype.ngOnInit = function () {
        this.addSupplierRatePermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_add_quality);
        this.getSupplierRateData();
    };
    ViewSupplierRateComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'entry_id') {
                column.cellRendererFramework = SupplierRateRendererComponent;
                column.cellRendererParams = {
                    inRouterLink: '/pages/supplier/edit-supplier-rate/',
                    action: _this
                };
            }
        });
    };
    ViewSupplierRateComponent.prototype.onAddSupplierRate = function () {
        if (this.addSupplierRatePermission) {
            this.router.navigate(['/pages/supplier/add-supplier-rate']);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add supplier rate. If you want to add supplier rate ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ViewSupplierRateComponent.prototype.getSupplierRateData = function () {
        var _this = this;
        this.supplierService.getAllSupplierRateData().subscribe(function (data) {
            if (!data[0].error) {
                _this.rowData = data[0].data;
                _this.supplierRateList = data[0].data;
            }
            else
                _this.toasterService.error(data[0].message);
        });
    };
    ViewSupplierRateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-view-supplier-rate',
            template: __webpack_require__(/*! ./view-supplier-rate.component.html */ "./src/app/pages/supplier/view-supplier-rate/view-supplier-rate.component.html"),
            styles: [__webpack_require__(/*! ./view-supplier-rate.component.scss */ "./src/app/pages/supplier/view-supplier-rate/view-supplier-rate.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_2__["PermissionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"]])
    ], ViewSupplierRateComponent);
    return ViewSupplierRateComponent;
}());

var SupplierRateRendererComponent = /** @class */ (function () {
    function SupplierRateRendererComponent(router, modalService, supplierService, toasterService, permissionService) {
        this.router = router;
        this.modalService = modalService;
        this.supplierService = supplierService;
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.editSupplierRatePermission = 0;
        this.deleteSupplierRatePermission = 0;
    }
    SupplierRateRendererComponent.prototype.agInit = function (params) {
        this.params = params;
        this.editSupplierRatePermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_edit_quality);
        this.deleteSupplierRatePermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_delete_quality);
    };
    SupplierRateRendererComponent.prototype.refresh = function () {
        return false;
    };
    SupplierRateRendererComponent.prototype.editSupplierRate = function () {
        if (this.editSupplierRatePermission) {
            this.router.navigate([this.params.inRouterLink + this.params.value]);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit supplier. If you want to edit supplier rate ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    SupplierRateRendererComponent.prototype.onDeleteSupplierRate = function () {
        var _this = this;
        if (this.deleteSupplierRatePermission) {
            var dialogRef = this.modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"]);
            dialogRef.componentInstance.message = 'Are you sure you want to delete supplier rate ?';
            dialogRef.componentInstance.titleFrom = 'Delete Supplier Rate';
            dialogRef.result.then(function (result) {
                if (result) {
                    var id = _this.params.value;
                    _this.supplierService.deleteSupplierRateById(id).subscribe(function (data) {
                        if (!data[0].error) {
                            _this.params.action.getSupplierRateData();
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
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete supplier rate. If you want to delete supplier rate ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    SupplierRateRendererComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\"  style=\"color:#4ca6ff\" (click)=\"editSupplierRate()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteSupplierRate()\"></i>",
            styles: [__webpack_require__(/*! ./view-supplier-rate.component.scss */ "./src/app/pages/supplier/view-supplier-rate/view-supplier-rate.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_2__["PermissionService"]])
    ], SupplierRateRendererComponent);
    return SupplierRateRendererComponent;
}());



/***/ }),

/***/ "./src/app/pages/supplier/view-suppliers/view-suppliers.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/supplier/view-suppliers/view-suppliers.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n    <nb-card-header>Suppliers\r\n        <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onAddSupplier()\">\r\n            Add Supplier\r\n        </button>\r\n        <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onAddRate()\">Add\r\n            Supplier Rate</button>\r\n        <!-- <button style=\"float: right;\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onPrintInvoice(false)\">Print\r\n          Supplier List</button> -->\r\n\r\n    </nb-card-header>\r\n    <nb-card-body>\r\n        <div *ngIf=\"viewGroupDataPermission && !viewAllDataPermission\">\r\n            <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getSupplierData($event)\">\r\n                <nb-radio [value]=\"1\">\r\n                    View Own\r\n                </nb-radio>\r\n                <nb-radio [value]=\"2\">\r\n                    View Group\r\n                </nb-radio>\r\n            </nb-radio-group>\r\n        </div>\r\n        <div *ngIf=\"viewGroupDataPermission && viewAllDataPermission\">\r\n            <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getSupplierData($event)\">\r\n                <nb-radio class=\"radio-inline\" [value]=\"1\">\r\n                    View Own\r\n                </nb-radio>\r\n                <nb-radio class=\"radio-inline\" [value]=\"2\">\r\n                    View Group\r\n                </nb-radio>\r\n                <nb-radio class=\"radio-inline\" [value]=\"3\">\r\n                    View All\r\n                </nb-radio>\r\n            </nb-radio-group>\r\n        </div>\r\n        <ag-grid-angular style=\"width: 100%; height:500px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n            [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='100'>\r\n        </ag-grid-angular>\r\n    </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/supplier/view-suppliers/view-suppliers.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/supplier/view-suppliers/view-suppliers.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1cHBsaWVyL3ZpZXctc3VwcGxpZXJzL3ZpZXctc3VwcGxpZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/supplier/view-suppliers/view-suppliers.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/supplier/view-suppliers/view-suppliers.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewSuppliersComponent, SupplierRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSuppliersComponent", function() { return ViewSuppliersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierRendererComponent", function() { return SupplierRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@theme/services/permission.service */ "./src/app/@theme/services/permission.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/services/supplier.service */ "./src/app/@theme/services/supplier.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ViewSuppliersComponent = /** @class */ (function () {
    function ViewSuppliersComponent(toasterService, permissionService, router, supplierService, authService) {
        var _this = this;
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.router = router;
        this.supplierService = supplierService;
        this.authService = authService;
        this.columnDefs = [
            { headerName: 'Actions', field: 'entry_id', width: 100 },
            { headerName: 'Supplier Name', field: 'supplier_name', sortable: true, filter: true },
            { headerName: 'Discount %', field: 'discount_percentage', sortable: true, filter: true },
            { headerName: 'GST %', field: 'gst_percentage', sortable: true, filter: true },
            { headerName: 'Payment Terms', field: 'payment_terms', sortable: true, filter: true },
            { headerName: 'Remark', field: 'remark', sortable: true, filter: true },
        ];
        this.addSupplierPermission = 0;
        this.addSupplierRatePermission = 0;
        this.supplierList = [];
        this.currentUserPermission = [];
        this.viewAllDataPermission = false;
        this.viewOwnDataPermission = false;
        this.viewGroupDataPermission = false;
        this.radioSelected = 1;
        this.supplierReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__["ViewReqObj"]();
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
    ViewSuppliersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUserPermission.length) {
            this.currentUserPermission.forEach(function (ele) {
                if (ele.form_name === 'Supplier') {
                    // this.addUserPermission = ele.can_add;
                    _this.addSupplierPermission = 1;
                    _this.viewAllDataPermission = ele.can_view_all;
                    _this.viewGroupDataPermission = ele.can_view_group;
                    _this.viewOwnDataPermission = ele.can_view;
                    _this.supplierReqObj.current_user_id = _this.currentUserId;
                    _this.supplierReqObj.user_head_id = _this.currentUser.user_head_id;
                    _this.supplierReqObj.group_user_ids = _this.currentUserGroupUserIds;
                }
                if (ele.form_name === 'Supplier Rate') {
                    _this.addSupplierRatePermission = 1;
                }
            });
        }
        this.getSupplierData();
    };
    ViewSuppliersComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    ViewSuppliersComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'entry_id') {
                column.cellRendererFramework = SupplierRendererComponent;
                column.cellRendererParams = {
                    inRouterLink: '/pages/supplier/edit-supplier/',
                    action: _this
                };
            }
        });
    };
    ViewSuppliersComponent.prototype.onAddSupplier = function () {
        if (this.addSupplierPermission) {
            this.router.navigate(['/pages/supplier/add-supplier']);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add supplier. If you want to add supplier ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ViewSuppliersComponent.prototype.getSupplierData = function (value) {
        var _this = this;
        this.supplierReqObj.view_all = false;
        this.supplierReqObj.view_group = false;
        this.supplierReqObj.view_own = false;
        if (value)
            this.radioSelected = value;
        //check which radio button is selected
        if (this.radioSelected == 1)
            this.supplierReqObj.view_own = true;
        else if (this.radioSelected == 2)
            this.supplierReqObj.view_group = true;
        else if (this.radioSelected == 3)
            this.supplierReqObj.view_all = true;
        this.supplierService.getAllSupplierData(this.supplierReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.rowData = data[0].data;
                _this.supplierList = data[0].data;
            }
            else
                _this.toasterService.error(data[0].message);
        });
    };
    ViewSuppliersComponent.prototype.onAddRate = function () {
        if (this.addSupplierRatePermission) {
            this.router.navigate(['/pages/supplier/add-supplier-rate']);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add supplier rate. If you want to add supplier rate ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ViewSuppliersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-view-suppliers',
            template: __webpack_require__(/*! ./view-suppliers.component.html */ "./src/app/pages/supplier/view-suppliers/view-suppliers.component.html"),
            styles: [__webpack_require__(/*! ./view-suppliers.component.scss */ "./src/app/pages/supplier/view-suppliers/view-suppliers.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_2__["PermissionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], ViewSuppliersComponent);
    return ViewSuppliersComponent;
}());

var SupplierRendererComponent = /** @class */ (function () {
    function SupplierRendererComponent(router, modalService, supplierService, toasterService, permissionService, menuService, authService) {
        var _this = this;
        this.router = router;
        this.modalService = modalService;
        this.supplierService = supplierService;
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.menuService = menuService;
        this.authService = authService;
        this.currentUserPermission = [];
        this.editSupplierPermission = 0;
        this.deleteSupplierPermission = 0;
        this.editSupplierRatePermission = 0;
        this.addSupplierRatePermission = 0;
        this.items = [
            { title: 'Add/Edit Supplier Rate', value: '' },
        ];
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserPermission = ele.user_permission;
            }
        });
        this.menuService.onItemClick()
            .subscribe(function (event) {
            _this.onContecxtItemSelection(event.item);
        });
    }
    SupplierRendererComponent.prototype.agInit = function (params) {
        var _this = this;
        this.params = params;
        this.items[0].value = this.params.value;
        this.currentUserPermission.forEach(function (ele) {
            if (ele.form_name === 'Supplier') {
                if (_this.params.action.radioSelected == 1) {
                    _this.editSupplierPermission = ele.can_edit;
                    _this.deleteSupplierPermission = ele.can_delete;
                }
                else if (_this.params.action.radioSelected == 2) {
                    _this.editSupplierPermission = ele.can_edit_group;
                    _this.deleteSupplierPermission = ele.can_delete_group;
                }
                else if (_this.params.action.radioSelected == 3) {
                    _this.editSupplierPermission = ele.can_edit_all;
                    _this.deleteSupplierPermission = ele.can_delete_all;
                }
            }
            if (ele.form_name === 'Supplier Rate') {
                _this.editSupplierRatePermission = 1;
                _this.addSupplierRatePermission = 1;
            }
        });
    };
    SupplierRendererComponent.prototype.onContecxtItemSelection = function (item) {
        if (item.title === 'Add/Edit Supplier Rate') {
            this.onEditRate(item.value);
        }
    };
    SupplierRendererComponent.prototype.onEditRate = function (id) {
        if (this.editSupplierRatePermission || this.addSupplierRatePermission) {
            this.router.navigate(['/pages/supplier/edit-supplier-rate/' + id]);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit supplier rate. If you want to edit supplier rate ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    SupplierRendererComponent.prototype.refresh = function () {
        return false;
    };
    SupplierRendererComponent.prototype.editSupplier = function () {
        if (this.editSupplierPermission) {
            this.router.navigate([this.params.inRouterLink + this.params.value]);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit supplier. If you want to edit supplier ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    SupplierRendererComponent.prototype.onDeleteSupplier = function () {
        var _this = this;
        if (this.deleteSupplierPermission) {
            var dialogRef = this.modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"]);
            dialogRef.componentInstance.message = 'Are you sure you want to delete supplier ?';
            dialogRef.componentInstance.titleFrom = 'Delete Supplier';
            dialogRef.result.then(function (result) {
                if (result) {
                    var id = _this.params.value;
                    _this.supplierService.deleteSupplierById(id).subscribe(function (data) {
                        if (!data[0].error) {
                            _this.params.action.getSupplierData();
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
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete supplier. If you want to delete supplier ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    SupplierRendererComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\"  style=\"color:#4ca6ff\" (click)=\"editSupplier()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteSupplier()\"></i>\n  <i class=\"ft-menu font-medium-1 mr-2\" style=\"color:#4ca6ff\" [nbContextMenu]=\"items\" nbContextMenuTrigger=\"click\"></i>",
            styles: [__webpack_require__(/*! ./view-suppliers.component.scss */ "./src/app/pages/supplier/view-suppliers/view-suppliers.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_2__["PermissionService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbMenuService"],
            _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], SupplierRendererComponent);
    return SupplierRendererComponent;
}());



/***/ })

}]);
//# sourceMappingURL=supplier-supplier-module.js.map