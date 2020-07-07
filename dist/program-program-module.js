(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-program-module"],{

/***/ "./src/app/@theme/model/program-class.ts":
/*!***********************************************!*\
  !*** ./src/app/@theme/model/program-class.ts ***!
  \***********************************************/
/*! exports provided: Program, ProgramRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return Program; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramRecord", function() { return ProgramRecord; });
var Program = /** @class */ (function () {
    function Program() {
        this.program_record = [];
    }
    return Program;
}());

var ProgramRecord = /** @class */ (function () {
    function ProgramRecord() {
    }
    return ProgramRecord;
}());



/***/ }),

/***/ "./src/app/pages/program/add-edit-program/add-edit-program.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/program/add-edit-program/add-edit-program.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>{{topHeader}}\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <form #vform=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Party Name</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"programModal.party_id\" name=\"partyid\" #partyId=\"ngModel\"\r\n              (change)=\"onPartySelect($event.target.value)\" required>\r\n              <option disabled value=\"\">Select Party\r\n              </option>\r\n              <option *ngFor=\"let party of partyList\" [value]=\"party.entry_id\">\r\n                {{party.party_name}}\r\n              </option>\r\n            </select>\r\n            <div *ngIf=\"partyId.invalid && (partyId.dirty || partyId.touched)\" class=\"errors\">\r\n              <div *ngIf=\"partyId.errors && partyId.errors.required\">\r\n                Party Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Quality Id</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Select Quality Id\" name=\"ID\" autocomplete=\"off\"\r\n              [(ngModel)]=\"programModal.quality_id\" (click)=\"HideShow()\">\r\n            <div *ngIf=\"flagDiv\" class=\"dropdown\">\r\n              <a href=\"javascript:void(0)\" (click)=\"HideShow()\" class=\"float-right\">[X]</a>\r\n              <table class=\"table table-bordered pointer table-responsive\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Quality Id</th>\r\n                    <th>Quality Name</th>\r\n                    <th>Quality Type</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let quality of qualityList; let i = index\" (click)=\"selectQualityId(quality)\"\r\n                    class=\"pointer\">\r\n                    <td style=\"display:none;\">{{quality.quality_id}}</td>\r\n                    <td>{{quality.quality_id}}</td>\r\n                    <td>{{quality.quality_name}}</td>\r\n                    <td>{{quality.quality_type}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Quality Name</label>\r\n            <input type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"programModal.quality_name\" name=\"qualityName\"\r\n              #qualityname=\"ngModel\" required />\r\n            <div *ngIf=\"qualityname.invalid && (qualityname.dirty || qualityname.touched)\" class=\"errors\">\r\n              <div *ngIf=\"qualityname.errors && qualityname.errors.required\">\r\n                Quality Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Quality Type</label>\r\n            <input type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"programModal.quality_type\" name=\"qualityType\"\r\n              #qualitytype=\"ngModel\" required />\r\n            <div *ngIf=\"qualitytype.invalid && (qualitytype.dirty || qualitytype.touched)\" class=\"errors\">\r\n              <div *ngIf=\"qualitytype.errors && qualitytype.errors.required\">\r\n                Quality Type is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Program Given By</label>\r\n            <input id=\"typeahead-focus\" type=\"text\" class=\"form-control\" [(ngModel)]=\"programModal.program_given_by\"\r\n              [ngbTypeahead]=\"search\" (focus)=\"focus$.next($event.target.value)\"\r\n              (click)=\"click$.next($event.target.value)\" #instance=\"ngbTypeahead\" #programBy=\"ngModel\" required\r\n              name=\"program_by\" />\r\n            <div *ngIf=\"programBy.invalid && (programBy.dirty || programBy.touched)\" class=\"errors\">\r\n              <div *ngIf=\"programBy.errors && programBy.errors.required\">\r\n                Program Given By is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Priority</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"programModal.priority\" name=\"Priority\" #priorityId=\"ngModel\"\r\n              required>\r\n              <option disabled value=\"\">Select Priority</option>\r\n              <option *ngFor=\"let priority of priorityList\" [value]=\"priority\">\r\n                {{priority}}\r\n              </option>\r\n            </select>\r\n            <div *ngIf=\"priorityId.invalid && (priorityId.dirty || priorityId.touched)\" class=\"errors\">\r\n              <div *ngIf=\"priorityId.errors && priorityId.errors.required\">\r\n                Priority is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Remark</label>\r\n            <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"programModal.remark\" name=\"Remark\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row table table-responsive\" *ngIf=\"programRecord.length\">\r\n        <ag-grid-angular style=\"width: 100%; height:300px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n          [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='10'>\r\n        </ag-grid-angular>\r\n      </div>\r\n      <div>\r\n        <form #sform=\"ngForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Party Shade No</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Select Party Shade No\" name=\"partyshade_no\"\r\n                  autocomplete=\"off\" [(ngModel)]=\"record.party_shade_no\" (click)=\"HideShowSubForm()\" required\r\n                  #partyShadeNo=\"ngModel\">\r\n                <div *ngIf=\"flagDivSubForm\" class=\"dropdown\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"HideShowSubForm()\" class=\"float-right\">[X]</a>\r\n                  <table class=\"table table-bordered pointer table-responsive\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Party Shade No</th>\r\n                        <th>Shade No</th>\r\n                        <th>Colour Tone</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let shade of shadeList; let i = index\" (click)=\"selectShade(shade)\" class=\"pointer\">\r\n                        <td style=\"display:none;\">{{shade.entry_id}}</td>\r\n                        <td>{{shade.party_shade_no}}</td>\r\n                        <td>{{shade.entry_id}}</td>\r\n                        <td>{{shade.colour_tone}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <div *ngIf=\"partyShadeNo.invalid && (partyShadeNo.dirty || partyShadeNo.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"partyShadeNo.errors && partyShadeNo.errors.required\">\r\n                    Party Shade No. is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Shade No.</label>\r\n                <input type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"record.shade_no\" name=\"shadeNo\"\r\n                  #shadeno=\"ngModel\" required />\r\n                <div *ngIf=\"shadeno.invalid && (shadeno.dirty || shadeno.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"shadeno.errors && shadeno.errors.required\">\r\n                    Shade No. is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Colour Tone</label>\r\n                <input type=\"text\" disabled class=\"form-control\" [(ngModel)]=\"record.colour_tone\" name=\"colourTone\"\r\n                  #tone=\"ngModel\" required />\r\n                <div *ngIf=\"tone.invalid && (tone.dirty || tone.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"tone.errors && tone.errors.required\">\r\n                    Colour Tone is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Quantity</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.quantity\" name=\"qty\" #Quantity=\"ngModel\"\r\n                  (keypress)=\"numberOnly($event)\" digits required />\r\n                <div *ngIf=\"Quantity.invalid && (Quantity.dirty || Quantity.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"Quantity.errors && Quantity.errors.required\">\r\n                    Quantity is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Batch</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.batch\" name=\"Batch\" #btch=\"ngModel\"\r\n                  placeholder=\"Select Batch\" autocomplete=\"off\" (keypress)=\"numberOnly($event)\" digits\r\n                  (click)=\"HideShowBatch()\">\r\n                <div *ngIf=\"flagDivBatch\" class=\"dropdown\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"HideShowBatch()\" class=\"float-right\">[X]</a>\r\n                  <table class=\"table table-bordered pointer table-responsive\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Batch No.</th>\r\n                        <th>Total Weight</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let batch of batchList; let i = index\" (click)=\"selectBatch(batch)\" class=\"pointer\">\r\n                        <td style=\"display:none;\">{{batch.batch_no}}</td>\r\n                        <td>{{batch.batch_no}}</td>\r\n                        <td>{{batch.total_wt}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Lot no.</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.lot_no\" name=\"lotNo\" #lotno=\"ngModel\"\r\n                  placeholder=\"Select Lot\" autocomplete=\"off\" (keypress)=\"numberOnly($event)\" digits\r\n                  (click)=\"HideShowLot()\">\r\n                <div *ngIf=\"flagDivLot\" class=\"dropdown\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"HideShowLot()\" class=\"float-right\">[X]</a>\r\n                  <table class=\"table table-bordered pointer table-responsive\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Lot No.</th>\r\n                        <th>Total Weight</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let lot of lotList; let i = index\" (click)=\"selectLot(lot)\" class=\"pointer\">\r\n                        <td style=\"display:none;\">{{lot.lot_no}}</td>\r\n                        <td>{{lot.lot_no}}</td>\r\n                        <td>{{lot.total_wt}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Remark</label>\r\n                <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"record.remark\" name=\"Remark\"></textarea>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <button [disabled]=\"sform.invalid\" style=\"margin-top: 32px;\" nbButton (click)=\"onAddRecord(sform)\">Add\r\n                Record</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"box-footer\">\r\n        <button [disabled]=\"vform.invalid\" nbButton (click)=\"onCustomFormSubmit(vform)\">{{subBtnName}}</button>\r\n        &nbsp;\r\n        <button nbButton type=\"reset\" routerLink='/pages/program/view-program-list' id=\"Cancel\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/program/add-edit-program/add-edit-program.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/program/add-edit-program/add-edit-program.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW0vYWRkLWVkaXQtcHJvZ3JhbS9hZGQtZWRpdC1wcm9ncmFtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/program/add-edit-program/add-edit-program.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/program/add-edit-program/add-edit-program.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddEditProgramComponent, CustomRendererProgramRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditProgramComponent", function() { return AddEditProgramComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererProgramRecordComponent", function() { return CustomRendererProgramRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_model_program_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/model/program-class */ "./src/app/@theme/model/program-class.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_services_party_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@theme/services/party.service */ "./src/app/@theme/services/party.service.ts");
/* harmony import */ var _theme_services_program_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/services/program.service */ "./src/app/@theme/services/program.service.ts");
/* harmony import */ var _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/services/quality.service */ "./src/app/@theme/services/quality.service.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _theme_services_shade_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@theme/services/shade.service */ "./src/app/@theme/services/shade.service.ts");
/* harmony import */ var _theme_services_fabric_in_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../@theme/services/fabric-in.service */ "./src/app/@theme/services/fabric-in.service.ts");
/* harmony import */ var _theme_services_batch_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../@theme/services/batch.service */ "./src/app/@theme/services/batch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AddEditProgramComponent = /** @class */ (function () {
    function AddEditProgramComponent(toasterService, route, partyService, router, programService, qualityService, authService, shadeService, fabricService, batchService) {
        var _this = this;
        this.toasterService = toasterService;
        this.route = route;
        this.partyService = partyService;
        this.router = router;
        this.programService = programService;
        this.qualityService = qualityService;
        this.authService = authService;
        this.shadeService = shadeService;
        this.fabricService = fabricService;
        this.batchService = batchService;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.priorityList = ["Very High", "High", "Medium", "Low"];
        this.flagDivSubForm = false;
        this.flagDiv = false;
        this.flagDivBatch = false;
        this.flagDivLot = false;
        this.subBtnName = '';
        this.topHeader = '';
        this.viewFlag = false;
        this.programRecord = [];
        this.qualityList = [];
        this.partyList = [];
        this.shadeList = [];
        this.lotList = [];
        this.batchList = [];
        this.columnDefs = [
            { headerName: 'Actions', field: 'index' },
            { headerName: 'Party Shade No.', field: 'party_shade_no' },
            { headerName: 'Shade No.', field: 'shade_no' },
            { headerName: 'Colour Tone', field: 'colour_tone' },
            { headerName: 'Batch', field: 'batch' },
            { headerName: 'Lot No.', field: 'lot_no' },
            { headerName: 'Remark', field: 'remark' },
        ];
        this.programGivenByList = [];
        this.viewProgramGivenByReqOb = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_3__["ViewReqObj"]();
        this.viewPartyReqOb = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_3__["ViewReqObj"]();
        this.search = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var clicksWithClosedPopup$ = _this.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(function () { return !_this.instance.isPopupOpen(); }));
            var inputFocus$ = _this.focus$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (term) { return (term === '' ? _this.programGivenByList
                : _this.programGivenByList.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10); }));
        };
        this.programModal = new _theme_model_program_class__WEBPACK_IMPORTED_MODULE_1__["Program"]();
        this.record = new _theme_model_program_class__WEBPACK_IMPORTED_MODULE_1__["ProgramRecord"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserHeadid = ele.user.user_head_id;
                _this.currentUserPermission = ele.user_permission;
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
            }
        });
        this.setColumns();
    }
    AddEditProgramComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    AddEditProgramComponent.prototype.ngOnInit = function () {
        this.getPartyList();
        this.onPageLoad();
        this.getProgramGivenByData();
    };
    AddEditProgramComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererProgramRecordComponent;
                column.cellRendererParams = {
                    // inRouterLink: '/user/edit-user/',
                    action: _this
                };
            }
        });
    };
    AddEditProgramComponent.prototype.getPartyList = function () {
        var _this = this;
        this.viewPartyReqOb.view_group = true;
        this.viewPartyReqOb.current_user_id = this.currentUserId;
        this.viewPartyReqOb.user_head_id = this.currentUser.user_head_id;
        this.viewPartyReqOb.group_user_ids = this.currentUserGroupUserIds;
        this.partyService.getPartyList(this.viewPartyReqOb).subscribe(function (data) {
            if (!data[0].error) {
                _this.partyList = data[0].data;
            }
        });
    };
    AddEditProgramComponent.prototype.getShadeList = function (qualityId) {
        var _this = this;
        this.viewShadeReqOb = {
            quality_id: qualityId,
            group_user_ids: this.currentUserGroupUserIds
        };
        this.shadeService.getShadesByQualityId(this.viewShadeReqOb).subscribe(function (data) {
            if (!data[0].error) {
                _this.shadeList = data[0].data;
                if (_this.id) {
                    _this.programModal.program_record.forEach(function (ele, index) {
                        ele.index = index + 1;
                        var shadeIndex = _this.shadeList.findIndex(function (v) { return v.entry_id == ele.shade_no; });
                        if (shadeIndex > -1) {
                            ele.shade_no = _this.shadeList[shadeIndex].entry_id;
                            ele.party_shade_no = _this.shadeList[shadeIndex].party_shade_no;
                            ele.colour_tone = _this.shadeList[shadeIndex].colour_tone;
                        }
                    });
                    _this.rowData = _this.programRecord.slice();
                    _this.programModal.program_record = _this.programRecord;
                }
            }
        });
    };
    // on select party Shade
    AddEditProgramComponent.prototype.selectShade = function (item) {
        this.flagDivSubForm = false;
        var i = this.shadeList.findIndex(function (v) { return v.entry_id == item.entry_id; });
        this.record.shade_no = this.shadeList[i].entry_id;
        this.record.party_shade_no = this.shadeList[i].party_shade_no;
        this.record.colour_tone = this.shadeList[i].colour_tone;
    };
    AddEditProgramComponent.prototype.selectBatch = function (batch) {
        this.flagDivBatch = false;
        this.record.lot_no = '';
        this.record.quantity = '';
        var i = this.batchList.findIndex(function (v) { return v.batch_no == batch.batch_no; });
        if (i > -1) {
            this.record.batch = this.batchList[i].batch_no;
            this.record.quantity = this.batchList[i].total_wt;
        }
    };
    AddEditProgramComponent.prototype.selectLot = function (lot) {
        this.flagDivLot = false;
        this.record.batch = '';
        this.record.quantity = '';
        var i = this.lotList.findIndex(function (v) { return v.lot_no == lot.lot_no; });
        if (i > -1) {
            this.record.lot_no = this.lotList[i].lot_no;
            this.record.quantity = this.lotList[i].total_wt;
        }
    };
    AddEditProgramComponent.prototype.onPartySelect = function (value) {
        this.getQualityByPartyId(value);
        this.getLotByParty(value);
    };
    AddEditProgramComponent.prototype.getQualityByPartyId = function (value) {
        var _this = this;
        this.qualityViewReqObj = {
            party_id: value,
            group_user_ids: this.currentUserGroupUserIds
        };
        this.qualityService.getAllQualityByPartyId(this.qualityViewReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.qualityList = data[0].data;
                if (_this.id) {
                    var qualityIndex = _this.qualityList.findIndex(function (v) { return v.entry_id == _this.programModal.quality_id; });
                    if (qualityIndex > -1) {
                        _this.programModal.quality_entry_id = _this.qualityList[qualityIndex].entry_id;
                        _this.programModal.quality_id = _this.qualityList[qualityIndex].quality_id;
                        _this.programModal.quality_name = _this.qualityList[qualityIndex].quality_name;
                        _this.programModal.quality_type = _this.qualityList[qualityIndex].quality_type;
                    }
                }
            }
        });
    };
    AddEditProgramComponent.prototype.getLotByParty = function (value) {
        var _this = this;
        this.lotViewReqObj = {
            party_id: value,
            group_user_ids: this.currentUserGroupUserIds
        };
        this.fabricService.getAllFabricByParty(this.lotViewReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.lotList = data[0].data;
            }
        });
    };
    AddEditProgramComponent.prototype.getBatchByParty = function (value) {
        var _this = this;
        this.batchViewReqObj = {
            quality_id: value,
            group_user_ids: this.currentUserGroupUserIds
        };
        this.batchService.getAllBatchByQualityId(this.batchViewReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.batchList = data[0].data;
            }
        });
    };
    AddEditProgramComponent.prototype.getProgramGivenByData = function () {
        var _this = this;
        this.viewProgramGivenByReqOb.view_group = true;
        this.viewProgramGivenByReqOb.current_user_id = this.currentUserId;
        this.viewProgramGivenByReqOb.user_head_id = this.currentUser.user_head_id;
        this.viewProgramGivenByReqOb.group_user_ids = this.currentUserGroupUserIds;
        this.programService.getProgramGivenByList(this.viewProgramGivenByReqOb).subscribe(function (data) {
            if (!data[0].error) {
                _this.programGivenByList = [];
                data[0].data.forEach(function (ele) {
                    _this.programGivenByList.push(ele.program_given_by);
                });
            }
        });
    };
    AddEditProgramComponent.prototype.selectQualityId = function (value) {
        this.flagDiv = false;
        var i = this.qualityList.findIndex(function (v) { return v.entry_id == value.entry_id; });
        this.programModal.quality_id = this.qualityList[i].quality_id;
        this.programModal.quality_entry_id = this.qualityList[i].entry_id;
        this.programModal.quality_type = this.qualityList[i].quality_type;
        this.programModal.quality_name = this.qualityList[i].quality_name;
        this.getShadeList(value.entry_id);
        this.getBatchByParty(value.entry_id);
    };
    AddEditProgramComponent.prototype.HideShowSubForm = function () {
        this.flagDivSubForm = !this.flagDivSubForm;
    };
    AddEditProgramComponent.prototype.HideShow = function () {
        this.flagDiv = !this.flagDiv;
    };
    AddEditProgramComponent.prototype.HideShowBatch = function () {
        this.flagDivBatch = !this.flagDivBatch;
    };
    AddEditProgramComponent.prototype.HideShowLot = function () {
        this.flagDivLot = !this.flagDivLot;
    };
    AddEditProgramComponent.prototype.onPageLoad = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            if (this.id) {
                this.subBtnName = 'Update';
                this.topHeader = 'Edit Program';
            }
            else {
                this.topHeader = 'Program View';
                this.viewFlag = true;
            }
            this.programService.getProgramById(this.id).subscribe(function (data) {
                if (!data[0].error) {
                    _this.programModal = data[0].data.program[0];
                    _this.programRecord = data[0].data.program_record;
                    _this.getQualityByPartyId(_this.programModal.party_id);
                    _this.getLotByParty(_this.programModal.party_id);
                    _this.getShadeList(_this.programModal.quality_id);
                    _this.getBatchByParty(_this.programModal.quality_id);
                    _this.rowData = _this.programRecord.slice();
                    _this.programModal.program_record = _this.programRecord;
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
            this.topHeader = 'Add Program';
        }
    };
    AddEditProgramComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
            return false;
        }
        return true;
    };
    AddEditProgramComponent.prototype.onAddRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (!this.programRecord.length) {
            this.record.index = j;
        }
        else if (this.record.index == undefined) {
            this.record.index = this.programRecord.length + 1;
        }
        this.programRecord.forEach(function (ele) {
            if (ele.index == _this.record.index) {
                ele = _this.record;
                flag = 1;
            }
        });
        if (!flag) {
            this.programRecord.push(this.record);
        }
        this.rowData = this.programRecord.slice();
        this.record = new _theme_model_program_class__WEBPACK_IMPORTED_MODULE_1__["ProgramRecord"]();
        form.resetForm();
    };
    AddEditProgramComponent.prototype.onEditRecord = function (data) {
        var i = this.programRecord.findIndex(function (v) { return v.index == data; });
        this.record = this.programRecord[i];
    };
    AddEditProgramComponent.prototype.deleteRecord = function (data) {
        var i = this.programRecord.findIndex(function (v) { return v.index == data; });
        this.programRecord.splice(i, 1);
        this.rowData = this.programRecord.slice();
    };
    AddEditProgramComponent.prototype.onCustomFormSubmit = function (form) {
        var _this = this;
        this.programModal.quality_id = this.programModal.quality_entry_id;
        this.programModal.program_record = this.programRecord;
        console.log('program', this.programModal);
        // for update
        if (this.id) {
            this.programModal.updated_by = this.currentUserId;
            this.programService.updateProgram(this.programModal).subscribe(function (data) {
                console.log(data);
                if (!data[0].error) {
                    _this.toasterService.success(data[0].message);
                    form.resetForm();
                    _this.router.navigate(['/pages/program/view-program-list']);
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            this.programModal.created_by = this.currentUserId;
            this.programModal.user_head_id = this.currentUserHeadid;
            console.log(this.programModal);
            this.programService.addProgram(this.programModal).subscribe(function (data) {
                data = data[0];
                if (!data.error) {
                    _this.toasterService.success(data.message);
                    form.resetForm();
                    _this.router.navigate(['/pages/program/view-program-list']);
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instance'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTypeahead"])
    ], AddEditProgramComponent.prototype, "instance", void 0);
    AddEditProgramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-add-edit-program',
            template: __webpack_require__(/*! ./add-edit-program.component.html */ "./src/app/pages/program/add-edit-program/add-edit-program.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-program.component.scss */ "./src/app/pages/program/add-edit-program/add-edit-program.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _theme_services_party_service__WEBPACK_IMPORTED_MODULE_6__["PartyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _theme_services_program_service__WEBPACK_IMPORTED_MODULE_7__["ProgramService"], _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_8__["QualityService"],
            _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _theme_services_shade_service__WEBPACK_IMPORTED_MODULE_13__["ShadeService"], _theme_services_fabric_in_service__WEBPACK_IMPORTED_MODULE_14__["FabricInService"],
            _theme_services_batch_service__WEBPACK_IMPORTED_MODULE_15__["BatchService"]])
    ], AddEditProgramComponent);
    return AddEditProgramComponent;
}());

var CustomRendererProgramRecordComponent = /** @class */ (function () {
    function CustomRendererProgramRecordComponent(_modalService, toasterService) {
        this._modalService = _modalService;
        this.toasterService = toasterService;
    }
    CustomRendererProgramRecordComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererProgramRecordComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererProgramRecordComponent.prototype.editRecord = function () {
        this.params.action.onEditRecord(this.params.value);
    };
    CustomRendererProgramRecordComponent.prototype.onDeleteRecord = function () {
        var _this = this;
        var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"]);
        modalRef.componentInstance.titleFrom = 'Delete record ';
        modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
        modalRef.result
            .then(function (result) {
            if (result) {
                _this.params.action.deleteRecord(_this.params.value);
            }
        });
    };
    CustomRendererProgramRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-program.component.scss */ "./src/app/pages/program/add-edit-program/add-edit-program.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], CustomRendererProgramRecordComponent);
    return CustomRendererProgramRecordComponent;
}());



/***/ }),

/***/ "./src/app/pages/program/program-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/program/program-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProgramRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramRoutingModule", function() { return ProgramRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _program_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./program.component */ "./src/app/pages/program/program.component.ts");
/* harmony import */ var _view_program_list_view_program_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-program-list/view-program-list.component */ "./src/app/pages/program/view-program-list/view-program-list.component.ts");
/* harmony import */ var _add_edit_program_add_edit_program_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-program/add-edit-program.component */ "./src/app/pages/program/add-edit-program/add-edit-program.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _program_component__WEBPACK_IMPORTED_MODULE_2__["ProgramComponent"],
        children: [
            {
                path: 'view-program-list',
                component: _view_program_list_view_program_list_component__WEBPACK_IMPORTED_MODULE_3__["ViewProgramListComponent"]
            },
            {
                path: 'add-program',
                component: _add_edit_program_add_edit_program_component__WEBPACK_IMPORTED_MODULE_4__["AddEditProgramComponent"],
            },
            {
                path: 'edit-program/:id',
                component: _add_edit_program_add_edit_program_component__WEBPACK_IMPORTED_MODULE_4__["AddEditProgramComponent"],
            },
            {
                path: '',
                redirectTo: 'view-program-list',
                pathMatch: 'full',
            },
        ]
    }
];
var ProgramRoutingModule = /** @class */ (function () {
    function ProgramRoutingModule() {
    }
    ProgramRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ProgramRoutingModule);
    return ProgramRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/program/program.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/program/program.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/program/program.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/program/program.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW0vcHJvZ3JhbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/program/program.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/program/program.component.ts ***!
  \****************************************************/
/*! exports provided: ProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramComponent", function() { return ProgramComponent; });
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

var ProgramComponent = /** @class */ (function () {
    function ProgramComponent() {
    }
    ProgramComponent.prototype.ngOnInit = function () {
    };
    ProgramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-program',
            template: __webpack_require__(/*! ./program.component.html */ "./src/app/pages/program/program.component.html"),
            styles: [__webpack_require__(/*! ./program.component.scss */ "./src/app/pages/program/program.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgramComponent);
    return ProgramComponent;
}());



/***/ }),

/***/ "./src/app/pages/program/program.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/program/program.module.ts ***!
  \*************************************************/
/*! exports provided: ProgramModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramModule", function() { return ProgramModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _program_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./program.component */ "./src/app/pages/program/program.component.ts");
/* harmony import */ var _add_edit_program_add_edit_program_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-program/add-edit-program.component */ "./src/app/pages/program/add-edit-program/add-edit-program.component.ts");
/* harmony import */ var _view_program_list_view_program_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-program-list/view-program-list.component */ "./src/app/pages/program/view-program-list/view-program-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _program_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./program-routing.module */ "./src/app/pages/program/program-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ProgramModule = /** @class */ (function () {
    function ProgramModule() {
    }
    ProgramModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _program_component__WEBPACK_IMPORTED_MODULE_2__["ProgramComponent"],
                _add_edit_program_add_edit_program_component__WEBPACK_IMPORTED_MODULE_3__["AddEditProgramComponent"],
                _view_program_list_view_program_list_component__WEBPACK_IMPORTED_MODULE_4__["ViewProgramListComponent"],
                _add_edit_program_add_edit_program_component__WEBPACK_IMPORTED_MODULE_3__["CustomRendererProgramRecordComponent"],
                _view_program_list_view_program_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomRendererProgramComponent"]
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
                _program_routing_module__WEBPACK_IMPORTED_MODULE_12__["ProgramRoutingModule"]
            ],
            entryComponents: [
                _add_edit_program_add_edit_program_component__WEBPACK_IMPORTED_MODULE_3__["CustomRendererProgramRecordComponent"],
                _view_program_list_view_program_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomRendererProgramComponent"]
            ]
        })
    ], ProgramModule);
    return ProgramModule;
}());



/***/ }),

/***/ "./src/app/pages/program/view-program-list/view-program-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/program/view-program-list/view-program-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Program\r\n    <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onAddProgram()\">\r\n      Add Program\r\n    </button>\r\n    <button style=\"float: right;\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onExport()\">Export</button>\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div *ngIf=\"viewGroupDataPermission && !viewAllDataPermission\">\r\n      <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getProgramData($event)\">\r\n        <nb-radio [value]=\"1\">\r\n          View Own\r\n        </nb-radio>\r\n        <nb-radio [value]=\"2\">\r\n          View Group\r\n        </nb-radio>\r\n      </nb-radio-group>\r\n    </div>\r\n    <div *ngIf=\"viewGroupDataPermission && viewAllDataPermission\">\r\n      <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getProgramData($event)\">\r\n        <nb-radio class=\"radio-inline\" [value]=\"1\">\r\n          View Own\r\n        </nb-radio>\r\n        <nb-radio class=\"radio-inline\" [value]=\"2\">\r\n          View Group\r\n        </nb-radio>\r\n        <nb-radio class=\"radio-inline\" [value]=\"3\">\r\n          View All\r\n        </nb-radio>\r\n      </nb-radio-group>\r\n    </div>\r\n    <ag-grid-angular style=\"width: 100%; height:500px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n      [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='100' (gridReady)=\"onGridReady($event)\">\r\n    </ag-grid-angular>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/program/view-program-list/view-program-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/program/view-program-list/view-program-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW0vdmlldy1wcm9ncmFtLWxpc3Qvdmlldy1wcm9ncmFtLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/program/view-program-list/view-program-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/program/view-program-list/view-program-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: ViewProgramListComponent, CustomRendererProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProgramListComponent", function() { return ViewProgramListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererProgramComponent", function() { return CustomRendererProgramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _theme_services_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@theme/services/program.service */ "./src/app/@theme/services/program.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@theme/services/permission.service */ "./src/app/@theme/services/permission.service.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@theme/services/quality.service */ "./src/app/@theme/services/quality.service.ts");
/* harmony import */ var _theme_services_party_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@theme/services/party.service */ "./src/app/@theme/services/party.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ViewProgramListComponent = /** @class */ (function () {
    function ViewProgramListComponent(programService, router, tosterService, permissionService, papa, authService, qualityService, partyService) {
        var _this = this;
        this.programService = programService;
        this.router = router;
        this.tosterService = tosterService;
        this.permissionService = permissionService;
        this.papa = papa;
        this.authService = authService;
        this.qualityService = qualityService;
        this.partyService = partyService;
        this.programList = [];
        this.addProgramPermission = 1;
        this.columnDefs = [
            { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
            { headerName: 'Party Name', field: 'party_name', sortable: true, filter: true, width: 160 },
            { headerName: 'Program By', field: 'program_given_by', sortable: true, filter: true, width: 160 },
            { headerName: 'Quality Id', field: 'quality_id', sortable: true, filter: true, width: 160 },
            { headerName: 'Quality Name', field: 'quality_name', sortable: true, filter: true, width: 160 },
            { headerName: 'Quality Type', field: 'quality_type', sortable: true, filter: true, width: 160 },
            { headerName: 'Priority', field: 'priority', sortable: true, filter: true, width: 120 },
            { headerName: 'remark', field: 'remark', sortable: true, filter: true, width: 120 },
        ];
        this.columnExportDefs = [
            'party_name', 'program_given_by', 'quality_id', 'quality_name', 'quality_type', 'remark', 'priority'
        ];
        this.currentUserPermission = [];
        this.viewAllDataPermission = false;
        this.viewOwnDataPermission = false;
        this.viewGroupDataPermission = false;
        this.radioSelected = 1;
        this.programReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_1__["ViewReqObj"]();
        this.qualityViewReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_1__["ViewReqObj"]();
        this.qualityList = [];
        this.partyNameList = [];
        this.viewPartyReqOb = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_1__["ViewReqObj"]();
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
    ViewProgramListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUserPermission.length) {
            this.currentUserPermission.forEach(function (ele) {
                if (ele.form_name === 'Program') {
                    // this.addUserPermission = ele.can_add;
                    _this.addProgramPermission = 1;
                    _this.viewAllDataPermission = ele.can_view_all;
                    _this.viewGroupDataPermission = ele.can_view_group;
                    _this.viewOwnDataPermission = ele.can_view;
                    _this.programReqObj.current_user_id = _this.currentUserId;
                    _this.programReqObj.user_head_id = _this.currentUser.user_head_id;
                    _this.programReqObj.group_user_ids = _this.currentUserGroupUserIds;
                }
            });
        }
        this.getQualityData();
        this.getPartyList();
        this.getProgramData();
    };
    ViewProgramListComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    ViewProgramListComponent.prototype.getPartyList = function () {
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
    ViewProgramListComponent.prototype.getQualityData = function () {
        var _this = this;
        this.qualityViewReqObj.current_user_id = this.currentUserId;
        this.qualityViewReqObj.user_head_id = this.currentUser.user_head_id;
        this.qualityViewReqObj.group_user_ids = this.currentUserGroupUserIds;
        this.qualityViewReqObj.view_group = true;
        this.qualityService.getAllQualityData(this.qualityViewReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.qualityList = data[0].data;
            }
        });
    };
    ViewProgramListComponent.prototype.getProgramData = function (value) {
        var _this = this;
        this.programReqObj.view_all = false;
        this.programReqObj.view_group = false;
        this.programReqObj.view_own = false;
        if (value)
            this.radioSelected = value;
        //check which radio button is selected
        if (this.radioSelected == 1)
            this.programReqObj.view_own = true;
        else if (this.radioSelected == 2)
            this.programReqObj.view_group = true;
        else if (this.radioSelected == 3)
            this.programReqObj.view_all = true;
        this.programService.getAllPrograms(this.programReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.programList = data[0].data;
                _this.programList.forEach(function (ele) {
                    var i = _this.qualityList.findIndex(function (v) { return v.entry_id == ele.quality_id; });
                    if (i > -1) {
                        ele.quality_name = _this.qualityList[i].quality_name;
                        ele.quality_type = _this.qualityList[i].quality_type;
                    }
                    var partyIndex = _this.partyNameList.findIndex(function (v) { return v.entry_id == ele.party_id; });
                    if (partyIndex > -1) {
                        ele.party_name = _this.partyNameList[partyIndex].party_name;
                    }
                });
                _this.rowData = _this.programList;
            }
            else {
                _this.tosterService.error(data[0].message);
            }
        });
    };
    ViewProgramListComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'entry_id') {
                column.cellRendererFramework = CustomRendererProgramComponent;
                column.cellRendererParams = {
                    inRouterLink: '/pages/program/edit-program/',
                    inViewLink: '/pages/program/view-program/',
                    action: _this
                };
            }
        });
    };
    ViewProgramListComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        // this.getUserList(this.currentUserId);
    };
    ViewProgramListComponent.prototype.onAddProgram = function () {
        if (this.addProgramPermission) {
            this.router.navigate(['/pages/program/add-program']);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add program. If you want to add program ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ViewProgramListComponent.prototype.onExport = function () {
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
    ViewProgramListComponent.prototype.exportExcel = function (data) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].json_to_sheet(data);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        xlsx__WEBPACK_IMPORTED_MODULE_10__["writeFile"](workbook, 'my_file.xls', { bookType: 'xls', type: 'buffer' });
    };
    ViewProgramListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-view-program-list',
            template: __webpack_require__(/*! ./view-program-list.component.html */ "./src/app/pages/program/view-program-list/view-program-list.component.html"),
            styles: [__webpack_require__(/*! ./view-program-list.component.scss */ "./src/app/pages/program/view-program-list/view-program-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_theme_services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_5__["PermissionService"], ngx_papaparse__WEBPACK_IMPORTED_MODULE_6__["Papa"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_11__["QualityService"], _theme_services_party_service__WEBPACK_IMPORTED_MODULE_12__["PartyService"]])
    ], ViewProgramListComponent);
    return ViewProgramListComponent;
}());

var CustomRendererProgramComponent = /** @class */ (function () {
    function CustomRendererProgramComponent(router, _modalService, programService, toasterService, permissionService, authService) {
        var _this = this;
        this.router = router;
        this._modalService = _modalService;
        this.programService = programService;
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.authService = authService;
        this.editProgramPermission = 1;
        this.deleteProgramPermission = 1;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserPermission = ele.user_permission;
            }
        });
    }
    CustomRendererProgramComponent.prototype.agInit = function (params) {
        var _this = this;
        this.params = params;
        this.currentUserPermission.forEach(function (ele) {
            if (ele.form_name === 'Program') {
                if (_this.params.action.radioSelected == 1) {
                    _this.editProgramPermission = ele.can_edit;
                    _this.deleteProgramPermission = ele.can_delete;
                }
                else if (_this.params.action.radioSelected == 2) {
                    _this.editProgramPermission = ele.can_edit_group;
                    _this.deleteProgramPermission = ele.can_delete_group;
                }
                else if (_this.params.action.radioSelected == 3) {
                    _this.editProgramPermission = ele.can_edit_all;
                    _this.deleteProgramPermission = ele.can_delete_all;
                }
            }
        });
    };
    CustomRendererProgramComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    CustomRendererProgramComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererProgramComponent.prototype.viewProgram = function () {
    };
    CustomRendererProgramComponent.prototype.editProgram = function () {
        if (this.editProgramPermission) {
            this.router.navigate([this.params.inRouterLink + this.params.value]);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit program. If you want to edit program ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererProgramComponent.prototype.onDeleteProgram = function () {
        var _this = this;
        if (this.deleteProgramPermission) {
            var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"]);
            modalRef.componentInstance.titleFrom = 'Delete Program ';
            modalRef.componentInstance.message = 'Are you sure you want to delete this program?';
            modalRef.result
                .then(function (result) {
                if (result) {
                    var id = _this.params.value;
                    _this.programService.deleteProgramById(id).subscribe(function (data) {
                        if (!data[0].error) {
                            _this.params.action.getProgramData();
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
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete program. If you want to delete program ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererProgramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editProgram()\"></i>\n  <i class=\"ft-info font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"viewProgram()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteProgram()\"></i>",
            styles: [__webpack_require__(/*! ./view-program-list.component.scss */ "./src/app/pages/program/view-program-list/view-program-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"], _theme_services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_5__["PermissionService"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], CustomRendererProgramComponent);
    return CustomRendererProgramComponent;
}());



/***/ })

}]);
//# sourceMappingURL=program-program-module.js.map