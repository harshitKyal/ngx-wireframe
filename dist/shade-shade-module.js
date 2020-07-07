(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shade-shade-module"],{

/***/ "./src/app/@theme/model/shade-class.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/model/shade-class.ts ***!
  \*********************************************/
/*! exports provided: Shade, ShadeRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shade", function() { return Shade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeRecord", function() { return ShadeRecord; });
var Shade = /** @class */ (function () {
    function Shade() {
    }
    return Shade;
}());

var ShadeRecord = /** @class */ (function () {
    function ShadeRecord() {
    }
    return ShadeRecord;
}());



/***/ }),

/***/ "./src/app/@theme/services/shade.service.ts":
/*!**************************************************!*\
  !*** ./src/app/@theme/services/shade.service.ts ***!
  \**************************************************/
/*! exports provided: ShadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeService", function() { return ShadeService; });
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


var ShadeService = /** @class */ (function () {
    function ShadeService(apiService) {
        this.apiService = apiService;
    }
    ShadeService.prototype.getAllShades = function (shadeReqObj) {
        return this.apiService.apiCaller('post', '/shadeList', shadeReqObj);
    };
    ShadeService.prototype.getShadesByFilter = function (shadeReqObj) {
        return this.apiService.apiCaller('post', '/shadeFilterList', shadeReqObj);
    };
    ShadeService.prototype.getShadesByQualityId = function (shadeReqObj) {
        return this.apiService.apiCaller('post', '/shadeListByQualityId', shadeReqObj);
    };
    ShadeService.prototype.addShade = function (shade) {
        return this.apiService.apiCaller('post', '/addShade', shade);
    };
    ShadeService.prototype.getShadeById = function (id) {
        return this.apiService.apiCaller('get', '/getShadeById/' + id);
    };
    ShadeService.prototype.checkPartyShadeNo = function (id) {
        return this.apiService.apiCaller('get', '/checkPartyShadeNo/' + id);
    };
    ShadeService.prototype.updateShade = function (shade) {
        return this.apiService.apiCaller('post', '/updateShade', shade);
    };
    ShadeService.prototype.deleteShadeById = function (id) {
        return this.apiService.apiCaller('get', '/deleteShade/' + id);
    };
    ShadeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ShadeService);
    return ShadeService;
}());



/***/ }),

/***/ "./src/app/pages/shade/add-edit-shade/add-edit-shade.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/shade/add-edit-shade/add-edit-shade.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>{{topHeader}}\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <form #vform=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>Party Shade No.</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"shadeModal.party_shade_no\" name=\"partyShadeNo\"\r\n            (change)=\"onPartyShadeChange($event.target.value)\"  #ShadeNo=\"ngModel\" required />\r\n            <div *ngIf=\"ShadeNo.invalid && (ShadeNo.dirty || ShadeNo.touched)\" class=\"errors\">\r\n              <div *ngIf=\"ShadeNo.errors && ShadeNo.errors.required\">\r\n                Party Shade No. is required.\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"(ShadeNo.dirty || ShadeNo.touched)\" class=\"errors\">\r\n              <div *ngIf=\"isSamePartyShadeNo\">\r\n                Party Shade No. already Exists.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>Process Name</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"shadeModal.process_id\" name=\"processId\" #ProcessName=\"ngModel\"\r\n              required>\r\n              <option disabled value=\"\">Select Process\r\n              </option>\r\n              <option *ngFor=\"let process of processNameList\" [value]=\"process.entry_id\">\r\n                {{process.process_name}}\r\n              </option>\r\n            </select>\r\n            <div *ngIf=\"ProcessName.invalid && (ProcessName.dirty || ProcessName.touched)\" class=\"errors\">\r\n              <div *ngIf=\"ProcessName.errors && ProcessName.errors.required\">\r\n                Process Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Quality Id</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Select Quality Id\" name=\"ID\" autocomplete=\"off\"\r\n              [(ngModel)]=\"shadeModal.quality_id\" (click)=\"HideShow()\">\r\n            <div *ngIf=\"flagDiv\" class=\"dropdown\">\r\n              <a href=\"javascript:void(0)\" (click)=\"HideShow()\" class=\"float-right\">[X]</a>\r\n              <table class=\"table table-bordered pointer table-responsive\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Quality Id</th>\r\n                    <th>Quality Name</th>\r\n                    <th>Quality Type</th>\r\n                    <th>Party Name</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let quality of qualityList; let i = index\" (click)=\"selectQualityId(quality)\"\r\n                    class=\"pointer\">\r\n                    <td style=\"display:none;\">{{quality.quality_id}}</td>\r\n                    <td>{{quality.quality_id}}</td>\r\n                    <td>{{quality.quality_name}}</td>\r\n                    <td>{{quality.quality_type}}</td>\r\n                    <td>{{quality.party_name}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Quality Name</label>\r\n            <input type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"shadeModal.quality_name\" name=\"qualityName\"\r\n              #qualityname=\"ngModel\" required />\r\n            <div *ngIf=\"qualityname.invalid && (qualityname.dirty || qualityname.touched)\" class=\"errors\">\r\n              <div *ngIf=\"qualityname.errors && qualityname.errors.required\">\r\n                Quality Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Quality Type</label>\r\n            <input type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"shadeModal.quality_type\" name=\"qualityType\"\r\n              #qualitytype=\"ngModel\" required />\r\n            <div *ngIf=\"qualitytype.invalid && (qualitytype.dirty || qualitytype.touched)\" class=\"errors\">\r\n              <div *ngIf=\"qualitytype.errors && qualitytype.errors.required\">\r\n                Quality Type is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Party Name</label>\r\n            <input type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"shadeModal.party_name\" name=\"partyName\"\r\n              #partyname=\"ngModel\" required />\r\n            <div *ngIf=\"partyname.invalid && (partyname.dirty || partyname.touched)\" class=\"errors\">\r\n              <div *ngIf=\"partyname.errors && partyname.errors.required\">\r\n                Party Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Color Tone</label>\r\n            <!-- pattern -->\r\n            <input [(colorPicker)]=\"shadeModal.colour_tone\" [style.background]=\"shadeModal.colour_tone\" class=\"form-control\"\r\n              [(ngModel)]=\"shadeModal.colour_tone\" name=\"tone\" #colortone=\"ngModel\" required />\r\n            <div *ngIf=\"colortone.invalid && (colortone.dirty || colortone.touched)\" class=\"errors\">\r\n              <div *ngIf=\"colortone.errors && colortone.errors.required\">\r\n                Color Tone is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Lab Colour No.</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"shadeModal.lab_colour_no\" name=\"labColourNo\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Category</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"shadeModal.category\" name=\"Category\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Remark</label>\r\n            <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"shadeModal.remark\" name=\"Remark\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row table table-responsive\" *ngIf=\"shadeRecord.length\">\r\n        <ag-grid-angular style=\"width: 100%; height:300px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n          [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='10'>\r\n        </ag-grid-angular>\r\n      </div>\r\n      <div class=\"row\">\r\n        <form #sform=\"ngForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Item Name</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Select Item Name\" name=\"itemName\"\r\n                  autocomplete=\"off\" [(ngModel)]=\"record.item_name\" (click)=\"HideShowSubForm()\" required\r\n                  #itemname=\"ngModel\">\r\n                <div *ngIf=\"flagDivSubForm\" class=\"dropdown\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"HideShowSubForm()\" class=\"float-right\">[X]</a>\r\n                  <table class=\"table table-bordered pointer table-responsive\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Item Name</th>\r\n                        <th>Supplier Name</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of supplierItemList; let i = index\" (click)=\"selectItem(item)\"\r\n                        class=\"pointer\">\r\n                        <td style=\"display:none;\">{{item.entry_id}}</td>\r\n                        <td>{{item.item_name}}</td>\r\n                        <td>{{item.supplier_name}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <div *ngIf=\"itemname.invalid && (itemname.dirty || itemname.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"itemname.errors && itemname.errors.required\">\r\n                    Item Name is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Concentration</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.concentration\" name=\"conctration\"\r\n                  #Concentration=\"ngModel\" required (change)=\"onConcentrationChange($event.target.value)\" />\r\n                <div *ngIf=\"Concentration.invalid && (Concentration.dirty || Concentration.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"Concentration.errors && Concentration.errors.required\">\r\n                    Concentration is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Supplier Name</label>\r\n                <input type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"record.supplier_name\" name=\"supplerName\"\r\n                  #SupplierName=\"ngModel\" required />\r\n                <div *ngIf=\"SupplierName.invalid && (SupplierName.dirty || SupplierName.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"SupplierName.SupplierName && SupplierName.errors.required\">\r\n                    Supplier Name is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"isAdmin\" class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Rate</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.rate\" name=\"rt\" #Rate=\"ngModel\" disabled\r\n                  (keypress)=\"numberOnly($event)\" digits required />\r\n                <div *ngIf=\"Rate.invalid && (Rate.dirty || Rate.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"Rate.errors && Rate.errors.required\">\r\n                    Rate is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"isAdmin\" class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Amount</label>\r\n                <input disabled type=\"text\" class=\"form-control\" [(ngModel)]=\"record.amount\" name=\"Amnt\"\r\n                  #Amount=\"ngModel\" (keypress)=\"numberOnly($event)\" digits required />\r\n                <div *ngIf=\"Amount.invalid && (Amount.dirty || Amount.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"Amount.errors && Amount.errors.required\">\r\n                    Amount is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <button [disabled]=\"sform.invalid\" style=\"margin-top: 32px;\" nbButton (click)=\"onAddRecord(sform)\">Add\r\n                Record</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"box-footer\">\r\n        <button [disabled]=\"vform.invalid || isSamePartyShadeNo\" nbButton (click)=\"onCustomFormSubmit(vform)\">{{subBtnName}}</button>\r\n        &nbsp;\r\n        <button nbButton type=\"reset\" routerLink='/pages/shade/view-shade-list' id=\"Cancel\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/shade/add-edit-shade/add-edit-shade.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/shade/add-edit-shade/add-edit-shade.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYWRlL2FkZC1lZGl0LXNoYWRlL2FkZC1lZGl0LXNoYWRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/shade/add-edit-shade/add-edit-shade.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/shade/add-edit-shade/add-edit-shade.component.ts ***!
  \************************************************************************/
/*! exports provided: AddEditShadeComponent, CustomRendererShadeRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditShadeComponent", function() { return AddEditShadeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererShadeRecordComponent", function() { return CustomRendererShadeRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _theme_model_shade_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/model/shade-class */ "./src/app/@theme/model/shade-class.ts");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_services_party_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/services/party.service */ "./src/app/@theme/services/party.service.ts");
/* harmony import */ var _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/services/quality.service */ "./src/app/@theme/services/quality.service.ts");
/* harmony import */ var _theme_services_shade_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/services/shade.service */ "./src/app/@theme/services/shade.service.ts");
/* harmony import */ var _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@theme/services/supplier.service */ "./src/app/@theme/services/supplier.service.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _theme_services_process_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@theme/services/process.service */ "./src/app/@theme/services/process.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AddEditShadeComponent = /** @class */ (function () {
    function AddEditShadeComponent(toasterService, route, supplierService, router, shadeService, qualityService, authService, partyService, processService) {
        var _this = this;
        this.toasterService = toasterService;
        this.route = route;
        this.supplierService = supplierService;
        this.router = router;
        this.shadeService = shadeService;
        this.qualityService = qualityService;
        this.authService = authService;
        this.partyService = partyService;
        this.processService = processService;
        this.isAdmin = false;
        this.flagDivSubForm = false;
        this.flagDiv = false;
        this.subBtnName = '';
        this.topHeader = '';
        this.viewFlag = false;
        this.shadeRecord = [];
        this.qualityList = [];
        this.partyNameList = [];
        this.processNameList = [];
        this.supplierItemList = [];
        this.qualityViewReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_5__["ViewReqObj"]();
        this.viewPartyReqOb = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_5__["ViewReqObj"]();
        this.isSamePartyShadeNo = false;
        this.columnDefs = [
            { headerName: 'Actions', field: 'index' },
            { headerName: 'Item Name', field: 'item_name' },
            { headerName: 'Cocentration', field: 'concentration' },
            { headerName: 'Supplier Name', field: 'supplier_name' },
            { headerName: 'Rate', field: 'rate' },
            { headerName: 'Amount', field: 'amount' },
        ];
        this.shadeModal = new _theme_model_shade_class__WEBPACK_IMPORTED_MODULE_4__["Shade"]();
        this.record = new _theme_model_shade_class__WEBPACK_IMPORTED_MODULE_4__["ShadeRecord"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
                if (ele.user.user_name === "admin") {
                    _this.isAdmin = true;
                }
            }
        });
        this.setColumns();
    }
    AddEditShadeComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    AddEditShadeComponent.prototype.ngOnInit = function () {
        this.getPartyList();
        this.getQuality();
        this.getSupplierItemList();
        this.getProcessList();
        this.onPageLoad();
    };
    AddEditShadeComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererShadeRecordComponent;
                column.cellRendererParams = {
                    // inRouterLink: '/user/edit-user/',
                    action: _this
                };
            }
        });
    };
    AddEditShadeComponent.prototype.onPartyShadeChange = function (value) {
        var _this = this;
        this.shadeService.checkPartyShadeNo(value).subscribe(function (data) {
            if (!data[0].error) {
                _this.isSamePartyShadeNo = data[0].data.length ? true : false;
            }
            else {
                _this.toasterService.error(data[0].message);
            }
        }, function (error) {
            _this.toasterService.error(error);
        });
    };
    AddEditShadeComponent.prototype.getPartyList = function () {
        var _this = this;
        this.partyNameList = [];
        this.viewPartyReqOb.view_group = true;
        this.viewPartyReqOb.current_user_id = this.currentUserId;
        this.viewPartyReqOb.user_head_id = this.currentUser.user_head_id;
        this.viewPartyReqOb.group_user_ids = this.currentUserGroupUserIds;
        this.partyService.getPartyList(this.viewPartyReqOb).subscribe(function (data) {
            if (!data[0].error) {
                _this.partyNameList = data[0].data;
            }
            else {
                _this.toasterService.error(data[0].message);
            }
        }, function (error) {
            _this.toasterService.error(error);
        });
    };
    AddEditShadeComponent.prototype.getProcessList = function () {
        var _this = this;
        this.processNameList = [];
        this.viewPartyReqOb.view_group = true;
        this.viewPartyReqOb.current_user_id = this.currentUserId;
        this.viewPartyReqOb.user_head_id = this.currentUser.user_head_id;
        this.viewPartyReqOb.group_user_ids = this.currentUserGroupUserIds;
        this.processService.getAllDynamicProcesss(this.viewPartyReqOb).subscribe(function (data) {
            if (!data[0].error) {
                _this.processNameList = data[0].data;
            }
            else {
                _this.toasterService.error(data[0].message);
            }
        }, function (error) {
            _this.toasterService.error(error);
        });
    };
    AddEditShadeComponent.prototype.getQuality = function () {
        var _this = this;
        this.qualityViewReqObj.current_user_id = this.currentUserId;
        this.qualityViewReqObj.user_head_id = this.currentUser.user_head_id;
        this.qualityViewReqObj.group_user_ids = this.currentUserGroupUserIds;
        this.qualityViewReqObj.view_group = true;
        this.qualityService.getAllQualityData(this.qualityViewReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.qualityList = data[0].data;
                if (_this.qualityList.length) {
                    _this.qualityList.forEach(function (ele) {
                        var partyIndex = _this.partyNameList.findIndex(function (v) { return v.entry_id == ele.party_id; });
                        if (partyIndex > -1) {
                            ele.party_name = _this.partyNameList[partyIndex].party_name;
                        }
                    });
                }
            }
        });
    };
    AddEditShadeComponent.prototype.getSupplierItemList = function () {
        var _this = this;
        this.supplierService.getAllSupplierItemData().subscribe(function (data) {
            if (!data[0].error) {
                _this.supplierItemList = data[0].data;
            }
        });
    };
    AddEditShadeComponent.prototype.selectItem = function (item) {
        this.flagDivSubForm = false;
        var i = this.supplierItemList.findIndex(function (v) { return v.entry_id == item.entry_id; });
        this.record.supplier_item_id = this.supplierItemList[i].entry_id;
        this.record.item_name = this.supplierItemList[i].item_name;
        this.record.supplier_name = this.supplierItemList[i].supplier_name;
    };
    AddEditShadeComponent.prototype.selectQualityId = function (value) {
        var _this = this;
        this.flagDiv = false;
        var i = this.qualityList.findIndex(function (v) { return v.entry_id == value.entry_id; });
        this.shadeModal.quality_id = this.qualityList[i].quality_id;
        this.shadeModal.quality_entry_id = this.qualityList[i].entry_id;
        this.shadeModal.quality_type = this.qualityList[i].quality_type;
        this.shadeModal.quality_name = this.qualityList[i].quality_name;
        var partyIndex = this.partyNameList.findIndex(function (v) { return v.entry_id == _this.qualityList[i].party_id; });
        if (partyIndex > -1) {
            this.shadeModal.party_name = this.partyNameList[partyIndex].party_name;
        }
    };
    AddEditShadeComponent.prototype.HideShowSubForm = function () {
        this.flagDivSubForm = !this.flagDivSubForm;
    };
    AddEditShadeComponent.prototype.HideShow = function () {
        this.flagDiv = !this.flagDiv;
    };
    AddEditShadeComponent.prototype.onPageLoad = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            if (this.id) {
                this.subBtnName = 'Update';
                this.topHeader = 'Edit Shade';
            }
            else {
                this.topHeader = 'Shade View';
                this.viewFlag = true;
            }
            this.shadeService.getShadeById(this.id).subscribe(function (data) {
                if (!data[0].error) {
                    _this.shadeModal = data[0].data.shade[0];
                    _this.shadeRecord = data[0].data.shade_record;
                    var i_1 = _this.qualityList.findIndex(function (v) { return v.entry_id == _this.shadeModal.quality_id; });
                    _this.shadeModal.quality_name = _this.qualityList[i_1].quality_name;
                    _this.shadeModal.quality_id = _this.qualityList[i_1].quality_id;
                    _this.shadeModal.quality_entry_id = _this.qualityList[i_1].entry_id;
                    _this.shadeModal.quality_type = _this.qualityList[i_1].quality_type;
                    var partyIndex = _this.partyNameList.findIndex(function (v) { return v.entry_id == _this.qualityList[i_1].party_id; });
                    if (partyIndex > -1) {
                        _this.shadeModal.party_name = _this.partyNameList[partyIndex].party_name;
                    }
                    _this.shadeRecord.forEach(function (ele, index) {
                        ele.index = index + 1;
                        // let i = this.supplierItemList.findIndex(v => v.item_name == ele.item_name);
                        // ele.supplier_name = this.supplierItemList[i].supplier_name;
                        // ele.item_name = this.supplierItemList[i].item_name;
                    });
                    _this.rowData = _this.shadeRecord.slice();
                    _this.shadeModal.shade_record = _this.shadeRecord;
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
            this.topHeader = 'Add Shade';
        }
    };
    AddEditShadeComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
            return false;
        }
        return true;
    };
    AddEditShadeComponent.prototype.onAddRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (!this.shadeRecord.length) {
            this.record.index = j;
        }
        else if (this.record.index == undefined) {
            this.record.index = this.shadeRecord.length + 1;
        }
        this.shadeRecord.forEach(function (ele) {
            if (ele.index == _this.record.index) {
                ele = _this.record;
                flag = 1;
            }
        });
        if (!flag) {
            this.shadeRecord.push(this.record);
        }
        this.rowData = this.shadeRecord.slice();
        this.record = new _theme_model_shade_class__WEBPACK_IMPORTED_MODULE_4__["ShadeRecord"]();
        form.resetForm();
    };
    AddEditShadeComponent.prototype.onEditRecord = function (data) {
        var i = this.shadeRecord.findIndex(function (v) { return v.index == data; });
        this.record = this.shadeRecord[i];
    };
    AddEditShadeComponent.prototype.deleteRecord = function (data) {
        var i = this.shadeRecord.findIndex(function (v) { return v.index == data; });
        this.shadeRecord.splice(i, 1);
        this.rowData = this.shadeRecord.slice();
    };
    AddEditShadeComponent.prototype.onConcentrationChange = function (value) {
        var _this = this;
        var i = this.supplierItemList.findIndex(function (v) { return v.entry_id == _this.record.supplier_item_id; });
        this.record.rate = this.supplierItemList[i].gst_rate;
        this.record.amount = this.supplierItemList[i].gst_rate * value;
    };
    AddEditShadeComponent.prototype.onCustomFormSubmit = function (form) {
        var _this = this;
        this.shadeModal.quality_id = this.shadeModal.quality_entry_id;
        this.shadeModal.shade_record = this.shadeRecord;
        console.log('shade', this.shadeModal);
        // for update
        if (this.id) {
            this.shadeModal.updated_by = this.currentUserId;
            this.shadeService.updateShade(this.shadeModal).subscribe(function (data) {
                console.log(data);
                if (!data[0].error) {
                    _this.toasterService.success(data[0].message);
                    form.resetForm();
                    _this.router.navigate(['/pages/shade/view-shade-list']);
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            this.shadeModal.created_by = this.currentUserId;
            this.shadeModal.user_head_id = this.currentUserHeadid;
            console.log(this.shadeModal);
            this.shadeService.addShade(this.shadeModal).subscribe(function (data) {
                data = data[0];
                if (!data.error) {
                    _this.toasterService.success(data.message);
                    form.resetForm();
                    _this.router.navigate(['/pages/shade/view-shade-list']);
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
    };
    AddEditShadeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-add-edit-shade',
            template: __webpack_require__(/*! ./add-edit-shade.component.html */ "./src/app/pages/shade/add-edit-shade/add-edit-shade.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-shade.component.scss */ "./src/app/pages/shade/add-edit-shade/add-edit-shade.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_10__["SupplierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _theme_services_shade_service__WEBPACK_IMPORTED_MODULE_9__["ShadeService"], _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_8__["QualityService"],
            _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _theme_services_party_service__WEBPACK_IMPORTED_MODULE_7__["PartyService"], _theme_services_process_service__WEBPACK_IMPORTED_MODULE_12__["ProcessService"]])
    ], AddEditShadeComponent);
    return AddEditShadeComponent;
}());

var CustomRendererShadeRecordComponent = /** @class */ (function () {
    function CustomRendererShadeRecordComponent(_modalService, toasterService) {
        this._modalService = _modalService;
        this.toasterService = toasterService;
    }
    CustomRendererShadeRecordComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererShadeRecordComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererShadeRecordComponent.prototype.editRecord = function () {
        this.params.action.onEditRecord(this.params.value);
    };
    CustomRendererShadeRecordComponent.prototype.onDeleteRecord = function () {
        var _this = this;
        var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"]);
        modalRef.componentInstance.titleFrom = 'Delete record ';
        modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
        modalRef.result
            .then(function (result) {
            if (result) {
                _this.params.action.deleteRecord(_this.params.value);
            }
        });
    };
    CustomRendererShadeRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-shade.component.scss */ "./src/app/pages/shade/add-edit-shade/add-edit-shade.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CustomRendererShadeRecordComponent);
    return CustomRendererShadeRecordComponent;
}());



/***/ }),

/***/ "./src/app/pages/shade/shade-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/shade/shade-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ShadeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeRoutingModule", function() { return ShadeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shade_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shade.component */ "./src/app/pages/shade/shade.component.ts");
/* harmony import */ var _add_edit_shade_add_edit_shade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-shade/add-edit-shade.component */ "./src/app/pages/shade/add-edit-shade/add-edit-shade.component.ts");
/* harmony import */ var _view_shade_list_view_shade_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-shade-list/view-shade-list.component */ "./src/app/pages/shade/view-shade-list/view-shade-list.component.ts");
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
        component: _shade_component__WEBPACK_IMPORTED_MODULE_1__["ShadeComponent"],
        children: [
            {
                path: 'view-shade-list',
                component: _view_shade_list_view_shade_list_component__WEBPACK_IMPORTED_MODULE_3__["ViewShadeListComponent"]
            },
            {
                path: 'add-shade',
                component: _add_edit_shade_add_edit_shade_component__WEBPACK_IMPORTED_MODULE_2__["AddEditShadeComponent"],
            },
            {
                path: 'edit-shade/:id',
                component: _add_edit_shade_add_edit_shade_component__WEBPACK_IMPORTED_MODULE_2__["AddEditShadeComponent"],
            },
        ]
    }
];
var ShadeRoutingModule = /** @class */ (function () {
    function ShadeRoutingModule() {
    }
    ShadeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        })
    ], ShadeRoutingModule);
    return ShadeRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/shade/shade.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/shade/shade.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/shade/shade.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/shade/shade.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYWRlL3NoYWRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/shade/shade.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/shade/shade.component.ts ***!
  \************************************************/
/*! exports provided: ShadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeComponent", function() { return ShadeComponent; });
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

var ShadeComponent = /** @class */ (function () {
    function ShadeComponent() {
    }
    ShadeComponent.prototype.ngOnInit = function () {
    };
    ShadeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-shade',
            template: __webpack_require__(/*! ./shade.component.html */ "./src/app/pages/shade/shade.component.html"),
            styles: [__webpack_require__(/*! ./shade.component.scss */ "./src/app/pages/shade/shade.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShadeComponent);
    return ShadeComponent;
}());



/***/ }),

/***/ "./src/app/pages/shade/shade.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/shade/shade.module.ts ***!
  \*********************************************/
/*! exports provided: ShadeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeModule", function() { return ShadeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shade.component */ "./src/app/pages/shade/shade.component.ts");
/* harmony import */ var _add_edit_shade_add_edit_shade_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-shade/add-edit-shade.component */ "./src/app/pages/shade/add-edit-shade/add-edit-shade.component.ts");
/* harmony import */ var _view_shade_list_view_shade_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-shade-list/view-shade-list.component */ "./src/app/pages/shade/view-shade-list/view-shade-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _shade_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shade-routing.module */ "./src/app/pages/shade/shade-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ShadeModule = /** @class */ (function () {
    function ShadeModule() {
    }
    ShadeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _shade_component__WEBPACK_IMPORTED_MODULE_2__["ShadeComponent"],
                _add_edit_shade_add_edit_shade_component__WEBPACK_IMPORTED_MODULE_3__["AddEditShadeComponent"],
                _view_shade_list_view_shade_list_component__WEBPACK_IMPORTED_MODULE_4__["ViewShadeListComponent"],
                _view_shade_list_view_shade_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomRendererShadeInComponent"],
                _add_edit_shade_add_edit_shade_component__WEBPACK_IMPORTED_MODULE_3__["CustomRendererShadeRecordComponent"]
            ],
            entryComponents: [
                _view_shade_list_view_shade_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomRendererShadeInComponent"],
                _add_edit_shade_add_edit_shade_component__WEBPACK_IMPORTED_MODULE_3__["CustomRendererShadeRecordComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_11__["ThemeModule"],
                _shade_routing_module__WEBPACK_IMPORTED_MODULE_12__["ShadeRoutingModule"]
            ]
        })
    ], ShadeModule);
    return ShadeModule;
}());



/***/ }),

/***/ "./src/app/pages/shade/view-shade-list/view-shade-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/shade/view-shade-list/view-shade-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Shade\r\n    <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onAddShade()\">\r\n      Add Shade\r\n    </button>\r\n    <button style=\"float: right;\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onExport()\">Export</button>\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div *ngIf=\"viewGroupDataPermission && !viewAllDataPermission\">\r\n      <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getShadeData($event)\">\r\n        <nb-radio [value]=\"1\">\r\n          View Own\r\n        </nb-radio>\r\n        <nb-radio [value]=\"2\">\r\n          View Group\r\n        </nb-radio>\r\n      </nb-radio-group>\r\n    </div>\r\n    <div *ngIf=\"viewGroupDataPermission && viewAllDataPermission\">\r\n      <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getShadeData($event)\">\r\n        <nb-radio class=\"radio-inline\" [value]=\"1\">\r\n          View Own\r\n        </nb-radio>\r\n        <nb-radio class=\"radio-inline\" [value]=\"2\">\r\n          View Group\r\n        </nb-radio>\r\n        <nb-radio class=\"radio-inline\" [value]=\"3\">\r\n          View All\r\n        </nb-radio>\r\n      </nb-radio-group>\r\n    </div>\r\n    <ag-grid-angular style=\"width: 100%; height:500px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n      [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='100' (gridReady)=\"onGridReady($event)\">\r\n    </ag-grid-angular>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/shade/view-shade-list/view-shade-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/shade/view-shade-list/view-shade-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYWRlL3ZpZXctc2hhZGUtbGlzdC92aWV3LXNoYWRlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/shade/view-shade-list/view-shade-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/shade/view-shade-list/view-shade-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: ViewShadeListComponent, CustomRendererShadeInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewShadeListComponent", function() { return ViewShadeListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererShadeInComponent", function() { return CustomRendererShadeInComponent; });
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
/* harmony import */ var _theme_services_shade_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@theme/services/shade.service */ "./src/app/@theme/services/shade.service.ts");
/* harmony import */ var _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@theme/services/quality.service */ "./src/app/@theme/services/quality.service.ts");
/* harmony import */ var _theme_services_party_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@theme/services/party.service */ "./src/app/@theme/services/party.service.ts");
/* harmony import */ var _theme_services_process_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@theme/services/process.service */ "./src/app/@theme/services/process.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ViewShadeListComponent = /** @class */ (function () {
    function ViewShadeListComponent(shadeService, router, tosterService, permissionService, papa, authService, qualityService, partyService, processService) {
        var _this = this;
        this.shadeService = shadeService;
        this.router = router;
        this.tosterService = tosterService;
        this.permissionService = permissionService;
        this.papa = papa;
        this.authService = authService;
        this.qualityService = qualityService;
        this.partyService = partyService;
        this.processService = processService;
        this.shadeList = [];
        this.addShadePermission = 1;
        this.columnDefs = [
            { headerName: 'Actions', field: 'entry_id', sortable: false, width: 100 },
            { headerName: 'Party Shade No.', field: 'party_shade_no', sortable: true, filter: true, width: 150 },
            { headerName: 'Process Name', field: 'process_name', sortable: true, filter: true },
            { headerName: 'Quality Id', field: 'quality_id', sortable: true, filter: true, width: 100 },
            { headerName: 'Quality Name', field: 'quality_name', sortable: true, filter: true },
            { headerName: 'Quality Type', field: 'quality_type', sortable: true, filter: true },
            { headerName: 'Party Name', field: 'party_name', sortable: true, filter: true },
            { headerName: 'Colour Tone', field: 'colour_tone', sortable: true, filter: true },
        ];
        this.columnExportDefs = [
            'party_shade_no', 'process_name', 'quality_id', 'quality_name', 'quality_type', 'party_name', 'colour_tone'
        ];
        this.currentUserPermission = [];
        this.viewAllDataPermission = false;
        this.viewOwnDataPermission = false;
        this.viewGroupDataPermission = false;
        this.radioSelected = 1;
        this.shadeReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__["ViewReqObj"]();
        this.qualityViewReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__["ViewReqObj"]();
        this.qualityList = [];
        this.partyNameList = [];
        this.processNameList = [];
        this.viewPartyReqOb = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__["ViewReqObj"]();
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
    ViewShadeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUserPermission.length) {
            this.currentUserPermission.forEach(function (ele) {
                if (ele.form_name === 'Shade') {
                    // this.addUserPermission = ele.can_add;
                    _this.addShadePermission = 1;
                    _this.viewAllDataPermission = ele.can_view_all;
                    _this.viewGroupDataPermission = ele.can_view_group;
                    _this.viewOwnDataPermission = ele.can_view;
                    _this.shadeReqObj.current_user_id = _this.currentUserId;
                    _this.shadeReqObj.user_head_id = _this.currentUser.user_head_id;
                    _this.shadeReqObj.group_user_ids = _this.currentUserGroupUserIds;
                }
            });
        }
        this.getPartyList();
        this.getQualityData();
        this.getProcessList();
    };
    ViewShadeListComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    ViewShadeListComponent.prototype.getPartyList = function () {
        var _this = this;
        this.partyNameList = [];
        this.viewPartyReqOb.view_group = true;
        this.viewPartyReqOb.current_user_id = this.currentUserId;
        this.viewPartyReqOb.user_head_id = this.currentUser.user_head_id;
        this.viewPartyReqOb.group_user_ids = this.currentUserGroupUserIds;
        this.partyService.getPartyList(this.viewPartyReqOb).subscribe(function (data) {
            if (!data[0].error) {
                _this.partyNameList = data[0].data;
            }
            else {
                _this.tosterService.error(data[0].message);
            }
        }, function (error) {
            _this.tosterService.error(error);
        });
    };
    ViewShadeListComponent.prototype.getQualityData = function () {
        var _this = this;
        this.qualityViewReqObj.current_user_id = this.currentUserId;
        this.qualityViewReqObj.user_head_id = this.currentUser.user_head_id;
        this.qualityViewReqObj.group_user_ids = this.currentUserGroupUserIds;
        this.qualityViewReqObj.view_group = true;
        this.qualityService.getAllQualityData(this.qualityViewReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.qualityList = data[0].data;
                if (_this.qualityList.length) {
                    _this.getShadeData();
                }
            }
        });
    };
    ViewShadeListComponent.prototype.getProcessList = function () {
        var _this = this;
        this.processNameList = [];
        this.viewPartyReqOb.view_group = true;
        this.viewPartyReqOb.current_user_id = this.currentUserId;
        this.viewPartyReqOb.user_head_id = this.currentUser.user_head_id;
        this.viewPartyReqOb.group_user_ids = this.currentUserGroupUserIds;
        this.processService.getAllDynamicProcesss(this.viewPartyReqOb).subscribe(function (data) {
            if (!data[0].error) {
                _this.processNameList = data[0].data;
            }
        }, function (error) {
        });
    };
    ViewShadeListComponent.prototype.getShadeData = function (value) {
        var _this = this;
        this.shadeReqObj.view_all = false;
        this.shadeReqObj.view_group = false;
        this.shadeReqObj.view_own = false;
        if (value)
            this.radioSelected = value;
        //check which radio button is selected
        if (this.radioSelected == 1)
            this.shadeReqObj.view_own = true;
        else if (this.radioSelected == 2)
            this.shadeReqObj.view_group = true;
        else if (this.radioSelected == 3)
            this.shadeReqObj.view_all = true;
        this.shadeService.getAllShades(this.shadeReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.shadeList = data[0].data;
                _this.shadeList.forEach(function (ele) {
                    var i = _this.qualityList.findIndex(function (v) { return v.entry_id == ele.quality_id; });
                    if (i > -1) {
                        var partyIndex = _this.partyNameList.findIndex(function (v) { return v.entry_id == _this.qualityList[i].party_id; });
                        if (partyIndex > -1) {
                            ele.party_name = _this.partyNameList[partyIndex].party_name;
                        }
                        // ele.party_name = this.qualityList[i].party_name;
                        ele.quality_name = _this.qualityList[i].quality_name;
                        ele.quality_type = _this.qualityList[i].quality_type;
                    }
                    var j = _this.processNameList.findIndex(function (v) { return v.entry_id == ele.process_id; });
                    if (j > -1) {
                        ele.process_name = _this.processNameList[j].process_name;
                    }
                });
                _this.rowData = _this.shadeList;
            }
            else {
                _this.tosterService.error(data[0].message);
            }
        });
    };
    ViewShadeListComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'entry_id') {
                column.cellRendererFramework = CustomRendererShadeInComponent;
                column.cellRendererParams = {
                    inRouterLink: '/pages/shade/edit-shade/',
                    inViewLink: '/pages/shade/view-shade/',
                    action: _this
                };
            }
        });
    };
    ViewShadeListComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        // this.getUserList(this.currentUserId);
    };
    ViewShadeListComponent.prototype.onAddShade = function () {
        if (this.addShadePermission) {
            this.router.navigate(['/pages/shade/add-shade']);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add shade. If you want to add shade ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ViewShadeListComponent.prototype.onExport = function () {
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
    ViewShadeListComponent.prototype.exportExcel = function (data) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].json_to_sheet(data);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        xlsx__WEBPACK_IMPORTED_MODULE_7__["writeFile"](workbook, 'my_file.xls', { bookType: 'xls', type: 'buffer' });
    };
    ViewShadeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-view-shade-list',
            template: __webpack_require__(/*! ./view-shade-list.component.html */ "./src/app/pages/shade/view-shade-list/view-shade-list.component.html"),
            styles: [__webpack_require__(/*! ./view-shade-list.component.scss */ "./src/app/pages/shade/view-shade-list/view-shade-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_theme_services_shade_service__WEBPACK_IMPORTED_MODULE_10__["ShadeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__["PermissionService"], ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__["Papa"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_11__["QualityService"], _theme_services_party_service__WEBPACK_IMPORTED_MODULE_12__["PartyService"], _theme_services_process_service__WEBPACK_IMPORTED_MODULE_13__["ProcessService"]])
    ], ViewShadeListComponent);
    return ViewShadeListComponent;
}());

var CustomRendererShadeInComponent = /** @class */ (function () {
    function CustomRendererShadeInComponent(router, _modalService, shadeService, toasterService, permissionService, authService) {
        var _this = this;
        this.router = router;
        this._modalService = _modalService;
        this.shadeService = shadeService;
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.authService = authService;
        this.editShadePermission = 1;
        this.deleteShadePermission = 1;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserPermission = ele.user_permission;
            }
        });
    }
    CustomRendererShadeInComponent.prototype.agInit = function (params) {
        var _this = this;
        this.params = params;
        this.currentUserPermission.forEach(function (ele) {
            if (ele.form_name === 'Shade') {
                if (_this.params.action.radioSelected == 1) {
                    _this.editShadePermission = ele.can_edit;
                    _this.deleteShadePermission = ele.can_delete;
                }
                else if (_this.params.action.radioSelected == 2) {
                    _this.editShadePermission = ele.can_edit_group;
                    _this.deleteShadePermission = ele.can_delete_group;
                }
                else if (_this.params.action.radioSelected == 3) {
                    _this.editShadePermission = ele.can_edit_all;
                    _this.deleteShadePermission = ele.can_delete_all;
                }
            }
        });
    };
    CustomRendererShadeInComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    CustomRendererShadeInComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererShadeInComponent.prototype.viewShade = function () {
    };
    CustomRendererShadeInComponent.prototype.editShade = function () {
        if (this.editShadePermission) {
            this.router.navigate([this.params.inRouterLink + this.params.value]);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit shade. If you want to edit shade ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererShadeInComponent.prototype.onDeleteShade = function () {
        var _this = this;
        if (this.deleteShadePermission) {
            var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"]);
            modalRef.componentInstance.titleFrom = 'Delete Shade ';
            modalRef.componentInstance.message = 'Are you sure you want to delete this shade?';
            modalRef.result
                .then(function (result) {
                if (result) {
                    var id = _this.params.value;
                    _this.shadeService.deleteShadeById(id).subscribe(function (data) {
                        if (!data[0].error) {
                            _this.params.action.getShadeData();
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
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete shade. If you want to delete shade ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererShadeInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editShade()\"></i>\n  <i class=\"ft-info font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"viewShade()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteShade()\"></i>",
            styles: [__webpack_require__(/*! ./view-shade-list.component.scss */ "./src/app/pages/shade/view-shade-list/view-shade-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _theme_services_shade_service__WEBPACK_IMPORTED_MODULE_10__["ShadeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__["PermissionService"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], CustomRendererShadeInComponent);
    return CustomRendererShadeInComponent;
}());



/***/ })

}]);
//# sourceMappingURL=shade-shade-module.js.map