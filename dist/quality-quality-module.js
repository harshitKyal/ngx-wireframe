(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quality-quality-module"],{

/***/ "./src/app/@theme/model/quality-class.ts":
/*!***********************************************!*\
  !*** ./src/app/@theme/model/quality-class.ts ***!
  \***********************************************/
/*! exports provided: Quality */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quality", function() { return Quality; });
var Quality = /** @class */ (function () {
    function Quality() {
        this.quality_name = '';
        this.quality_type = '';
        this.quality_sub_type = '';
        this.party_id = '';
    }
    return Quality;
}());



/***/ }),

/***/ "./src/app/@theme/services/party.service.ts":
/*!**************************************************!*\
  !*** ./src/app/@theme/services/party.service.ts ***!
  \**************************************************/
/*! exports provided: PartyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyService", function() { return PartyService; });
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


var PartyService = /** @class */ (function () {
    function PartyService(apiService) {
        this.apiService = apiService;
    }
    PartyService.prototype.getPartyList = function (obj) {
        return this.apiService.apiCaller('post', '/partyData', obj);
    };
    PartyService.prototype.updateParty = function (party) {
        return this.apiService.apiCaller('post', '/updateParty', party);
    };
    PartyService.prototype.addParty = function (party) {
        return this.apiService.apiCaller('post', '/addParty', party);
    };
    PartyService.prototype.deleteParty = function (id) {
        return this.apiService.apiCaller('get', '/deleteParty/' + id);
    };
    PartyService.prototype.getPartyById = function (id) {
        return this.apiService.apiCaller('get', '/getPartyById/' + id);
    };
    PartyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], PartyService);
    return PartyService;
}());



/***/ }),

/***/ "./src/app/@theme/services/quality.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@theme/services/quality.service.ts ***!
  \****************************************************/
/*! exports provided: QualityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityService", function() { return QualityService; });
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


var QualityService = /** @class */ (function () {
    function QualityService(apiService) {
        this.apiService = apiService;
    }
    QualityService.prototype.getAllQualityData = function (data) {
        return this.apiService.apiCaller('post', '/qualityData', data);
    };
    QualityService.prototype.getAllQualityFilterData = function (data) {
        return this.apiService.apiCaller('post', '/qualityFilterData', data);
    };
    QualityService.prototype.getAllQualityByPartyId = function (data) {
        return this.apiService.apiCaller('post', '/getQualityByPartyId', data);
    };
    QualityService.prototype.addQuality = function (quality) {
        return this.apiService.apiCaller('post', '/addQuality', quality);
    };
    QualityService.prototype.getQualityById = function (id) {
        return this.apiService.apiCaller('get', '/getQualityDataById/' + id);
    };
    QualityService.prototype.checkQualityId = function (id) {
        return this.apiService.apiCaller('get', '/checkQualityId/' + id);
    };
    QualityService.prototype.getTypeList = function () {
        return this.apiService.apiCaller('get', '/qualityTypeList');
    };
    QualityService.prototype.getSubTypeListByType = function (type) {
        return this.apiService.apiCaller('get', '/qualitySubTypeList/' + type);
    };
    QualityService.prototype.updateQuality = function (quality) {
        return this.apiService.apiCaller('post', '/updateQuality', quality);
    };
    QualityService.prototype.deleteQualityById = function (id) {
        return this.apiService.apiCaller('get', '/qualityData/' + id);
    };
    QualityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], QualityService);
    return QualityService;
}());



/***/ }),

/***/ "./src/app/@theme/services/qz-tray.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@theme/services/qz-tray.service.ts ***!
  \****************************************************/
/*! exports provided: QzTrayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QzTrayService", function() { return QzTrayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_fromPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/fromPromise */ "./node_modules/rxjs-compat/_esm5/add/observable/fromPromise.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QzTrayService = /** @class */ (function () {
    function QzTrayService() {
    }
    QzTrayService.prototype.errorHandler = function (error) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error);
    };
    QzTrayService.prototype.getPrinters = function () {
        debugger;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]
            .fromPromise(qz.websocket.connect().then(function () { return qz.printers.find(); }))
            .map(function (printers) { return printers; })
            .catch(this.errorHandler);
    };
    QzTrayService.prototype.getPrinter = function (printerName) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]
            .fromPromise(qz.websocket.connect().then(function () { return qz.printers.find(printerName); }))
            .map(function (printer) { return printer; })
            .catch(this.errorHandler);
    };
    QzTrayService.prototype.printData = function (printer, data) {
        // Create a default config for the found printer
        var config = qz.configs.create(printer);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromPromise(qz.print(config, data))
            .map(function (anything) { return anything; })
            .catch(this.errorHandler);
    };
    QzTrayService.prototype.removePrinter = function () {
        qz.websocket.disconnect();
    };
    QzTrayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], QzTrayService);
    return QzTrayService;
}());



/***/ }),

/***/ "./src/app/pages/quality/add-edit-quality/add-edit-quality.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/quality/add-edit-quality/add-edit-quality.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>{{topHeader}}\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <form (ngSubmit)=\"onCustomFormSubmit(vform)\" #vform=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Quality Id</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"qualityModal.quality_id\"\r\n              (change)=\"onQualityIdChange($event.target.value)\" name=\"qualityId\" #QualityId=\"ngModel\" required />\r\n            <div *ngIf=\"QualityId.invalid && (QualityId.dirty || QualityId.touched)\" class=\"errors\">\r\n              <div *ngIf=\"QualityId.errors && QualityId.errors.required\">\r\n                Quality Id is required.\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"(QualityId.dirty || QualityId.touched)\" class=\"errors\">\r\n              <div *ngIf=\"isSameQualityId\">\r\n                Quality Id already Exists.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Quality Name</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"qualityModal.quality_name\" name=\"qualityname\"\r\n              #qualityName=\"ngModel\" required />\r\n            <div *ngIf=\"qualityName.invalid && (qualityName.dirty || qualityName.touched)\" class=\"errors\">\r\n              <div *ngIf=\"qualityName.errors && qualityName.errors.required\">\r\n                Quality Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Quality Type</label>\r\n            <!-- pattern -->\r\n            <select class=\"form-control\" [(ngModel)]=\"qualityModal.quality_type\" name=\"qualitytype\"\r\n              #qualityType=\"ngModel\" required (change)=\"onTypeChange($event.target.value)\">\r\n              <option disabled value=\"\">Select Qulaity Type\r\n              </option>\r\n              <option *ngFor=\"let quality of qualityTypeList\" [value]=\"quality.quality_type_name\">\r\n                {{quality.quality_type_name}}</option>\r\n            </select>\r\n            <div *ngIf=\"qualityType.invalid && (qualityType.dirty || qualityType.touched)\" class=\"errors\">\r\n              <div *ngIf=\"qualityType.errors && qualityType.errors.required\">\r\n                Quality Type is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Quality Sub-Type</label>\r\n            <!-- pattern -->\r\n            <select class=\"form-control\" [(ngModel)]=\"qualityModal.quality_sub_type\" name=\"qualitysubtype\"\r\n              #qualitySubType=\"ngModel\">\r\n              <option disabled value=\"\">Select Quality Sub Type\r\n              </option>\r\n              <option *ngFor=\"let quality of qualitySubTypeList\" [value]=\"quality.quality_sub_type\">\r\n                {{quality.quality_sub_type}}</option>\r\n            </select>\r\n            <div *ngIf=\"qualitySubType.invalid && (qualitySubType.dirty || qualitySubType.touched)\" class=\"errors\">\r\n              <div *ngIf=\"qualitySubType.errors && qualitySubType.errors.required\">\r\n                Quality Sub Type is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Party Name</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"qualityModal.party_id\" name=\"partyname\" #partyName=\"ngModel\"\r\n              required>\r\n              <option disabled value=\"\">Select Party Name</option>\r\n              <option *ngFor=\"let p of partyNameList\" [value]=\"p.entry_id\">{{p.party_name}}</option>\r\n            </select>\r\n            <div *ngIf=\"partyName.invalid && (partyName.dirty || partyName.touched)\" class=\"errors\">\r\n              <div *ngIf=\"partyName.errors && partyName.errors.required\">\r\n                Party Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Wt / 100 mtrs</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"qualityModal.wt_per100m\" name=\"weight\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Remark</label>\r\n            <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"qualityModal.remark\" name=\"remark\"> </textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"box-footer\">\r\n        <button nbButton translate [disabled]=\"vform.invalid || isSameQualityId\">{{subBtnName}}</button> &nbsp;\r\n        <button nbButton type=\"reset\" routerLink='/pages/quality/view-quality' class=\"btn btn-default\"\r\n          id=\"Cancel\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n<!-- \r\n<div class=\"row text-left\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header\" translate>{{topHeader}}</div>\r\n  </div>\r\n</div> -->\r\n\r\n<!-- Custom Form Validaton Starts -->\r\n<!-- <div class=\"row text-left\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"card-block\">\r\n          <form (ngSubmit)=\"onCustomFormSubmit(vform)\" #vform=\"ngForm\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Quality Id</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"qualityModal.quality_id\" name=\"qualityId\"\r\n                    #QualityId=\"ngModel\" required />\r\n                  <div *ngIf=\"QualityId.invalid && (QualityId.dirty || QualityId.touched)\" class=\"errors\">\r\n                    <div *ngIf=\"QualityId.errors && QualityId.errors.required\">\r\n                      Quality Id is required.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Quality Name</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"qualityModal.quality_name\" name=\"qualityname\"\r\n                    #qualityName=\"ngModel\" required />\r\n                  <div *ngIf=\"qualityName.invalid && (qualityName.dirty || qualityName.touched)\" class=\"errors\">\r\n                    <div *ngIf=\"qualityName.errors && qualityName.errors.required\">\r\n                      Quality Name is required.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Quality Type</label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"qualityModal.quality_type\" name=\"qualitytype\"\r\n                    #qualityType=\"ngModel\" required (change)=\"onTypeChange($event.target.value)\">\r\n                    <option disabled value=\"\">Select Qulaity Type\r\n                    </option>\r\n                    <option *ngFor=\"let quality of qualityTypeList\" [value]=\"quality.quality_type_name\">\r\n                      {{quality.quality_type_name}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"qualityType.invalid && (qualityType.dirty || qualityType.touched)\" class=\"errors\">\r\n                    <div *ngIf=\"qualityType.errors && qualityType.errors.required\">\r\n                      Quality Type is required.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Quality Sub-Type</label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"qualityModal.quality_sub_type\" name=\"qualitysubtype\"\r\n                    #qualitySubType=\"ngModel\">\r\n                    <option disabled value=\"\">Select Quality Sub Type\r\n                    </option>\r\n                    <option *ngFor=\"let quality of qualitySubTypeList\" [value]=\"quality.quality_sub_type\">\r\n                      {{quality.quality_sub_type}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"qualitySubType.invalid && (qualitySubType.dirty || qualitySubType.touched)\"\r\n                    class=\"errors\">\r\n                    <div *ngIf=\"qualitySubType.errors && qualitySubType.errors.required\">\r\n                      Quality Sub Type is required.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Party Name</label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"qualityModal.party_name\" name=\"partyname\"\r\n                    #partyName=\"ngModel\" required>\r\n                    <option disabled value=\"\">Select Party Name</option>\r\n                    <option *ngFor=\"let p of partyNameList\" [value]=\"p.ID\">{{p.Name}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"partyName.invalid && (partyName.dirty || partyName.touched)\" class=\"errors\">\r\n                    <div *ngIf=\"partyName.errors && partyName.errors.required\">\r\n                      Party Name is required.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Wt / 100 mtrs</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"qualityModal.wt_per100m\" name=\"weight\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label>Remark</label>\r\n                  <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"qualityModal.remark\"\r\n                    name=\"remark\"> </textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"box-footer\">\r\n              <button class=\"btn btn-raised btn-primary\" translate>{{subBtnName}}</button> &nbsp;\r\n              <button type=\"reset\" routerLink='/quality/view-quality' class=\"btn btn-default\"\r\n                id=\"Cancel\">Cancel</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<!-- Custom Form Validaton Ends -->"

/***/ }),

/***/ "./src/app/pages/quality/add-edit-quality/add-edit-quality.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/quality/add-edit-quality/add-edit-quality.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errors {\n  color: red;\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVhbGl0eS9hZGQtZWRpdC1xdWFsaXR5L0M6XFxVc2Vyc1xcUENcXERlc2t0b3BcXGdmbFxcZ2ZsLWZyb250LWVuZFxcbmd4LXdpcmVmcmFtZS9zcmNcXGFwcFxccGFnZXNcXHF1YWxpdHlcXGFkZC1lZGl0LXF1YWxpdHlcXGFkZC1lZGl0LXF1YWxpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdWFsaXR5L2FkZC1lZGl0LXF1YWxpdHkvYWRkLWVkaXQtcXVhbGl0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcnMge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/quality/add-edit-quality/add-edit-quality.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/quality/add-edit-quality/add-edit-quality.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddEditQualityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditQualityComponent", function() { return AddEditQualityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_model_quality_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/model/quality-class */ "./src/app/@theme/model/quality-class.ts");
/* harmony import */ var _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/services/quality.service */ "./src/app/@theme/services/quality.service.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _theme_services_party_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/services/party.service */ "./src/app/@theme/services/party.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddEditQualityComponent = /** @class */ (function () {
    function AddEditQualityComponent(toasterService, route, partyService, router, qualityService, authService) {
        var _this = this;
        this.toasterService = toasterService;
        this.route = route;
        this.partyService = partyService;
        this.router = router;
        this.qualityService = qualityService;
        this.authService = authService;
        this.qualityTypeList = [];
        // qualityTypeList = [{ 'ID': '1', 'Name': 'Type1' }, { 'ID': '2', 'Name': 'Type2' }];
        this.partyNameList = [];
        this.qualitySubTypeList = [];
        this.subBtnName = '';
        this.topHeader = '';
        this.currentUserPermission = [];
        this.viewPartyReqOb = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_6__["ViewReqObj"]();
        this.isSameQualityId = false;
        this.qualityModal = new _theme_model_quality_class__WEBPACK_IMPORTED_MODULE_3__["Quality"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserHeadid = ele.user.user_head_id;
                _this.currentUserPermission = ele.user_permission;
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
            }
        });
    }
    AddEditQualityComponent.prototype.ngOnInit = function () {
        this.getTypeList();
        this.getPartyList();
        this.onPageLoad();
    };
    AddEditQualityComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    AddEditQualityComponent.prototype.onPageLoad = function () {
        var _this = this;
        this.isSameQualityId = false;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            this.subBtnName = 'Update';
            this.topHeader = 'Edit Quality';
            this.qualityService.getQualityById(this.id).subscribe(function (data) {
                if (!data[0].error) {
                    _this.qualityModal = data[0].data[0];
                    _this.getSubTypeList(_this.qualityModal.quality_type);
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
            this.topHeader = 'Add Quality';
        }
    };
    AddEditQualityComponent.prototype.getTypeList = function () {
        var _this = this;
        this.qualityTypeList = [];
        this.qualityService.getTypeList().subscribe(function (data) {
            console.log("fdsfds", data);
            if (!data[0].error) {
                _this.qualityTypeList = data[0].data;
            }
            else {
                _this.toasterService.error(data[0].message);
            }
        }, function (error) {
            _this.toasterService.error(error);
        });
    };
    AddEditQualityComponent.prototype.getPartyList = function () {
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
    AddEditQualityComponent.prototype.onQualityIdChange = function (value) {
        var _this = this;
        this.qualityService.checkQualityId(value).subscribe(function (data) {
            if (!data[0].error) {
                _this.isSameQualityId = data[0].data.length ? true : false;
            }
            else {
                _this.toasterService.error(data[0].message);
            }
        }, function (error) {
            _this.toasterService.error(error);
        });
    };
    AddEditQualityComponent.prototype.onTypeChange = function (event) {
        this.getSubTypeList(event);
    };
    AddEditQualityComponent.prototype.getSubTypeList = function (type) {
        var _this = this;
        // console.log(type)
        this.qualitySubTypeList = [];
        this.qualityService.getSubTypeListByType(type).subscribe(function (data) {
            // data = data[0]
            console.log("in get sub list");
            console.log(data);
            if (!data[0].error) {
                _this.qualitySubTypeList = data[0].data;
                console.log("sub", _this.qualitySubTypeList);
            }
            else {
                _this.toasterService.error(data[0].message);
            }
        }, function (error) {
            _this.toasterService.error(error);
        });
    };
    AddEditQualityComponent.prototype.onCustomFormSubmit = function (form) {
        var _this = this;
        //for update
        if (this.id) {
            this.qualityModal.updated_by = this.currentUserId;
            this.qualityService.updateQuality(this.qualityModal).subscribe(function (data) {
                // console.log(data)
                // data= data[0].data
                // console.log("in edit quality")
                // console.log(data)
                if (!data[0].error) {
                    _this.toasterService.success("Updated Successfully");
                    form.resetForm();
                    _this.router.navigate(['/pages/quality/view-quality']);
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            //for add
            this.qualityModal.created_by = this.currentUserId;
            this.qualityModal.user_head_id = this.currentUserHeadid;
            // console.log(this.qualityModal)
            this.qualityService.addQuality(this.qualityModal).subscribe(function (data) {
                // data = data[0]
                if (!data[0].error) {
                    _this.toasterService.success(data[0].message);
                    form.resetForm();
                    _this.router.navigate(['/pages/quality/view-quality']);
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
    };
    AddEditQualityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-quality',
            template: __webpack_require__(/*! ./add-edit-quality.component.html */ "./src/app/pages/quality/add-edit-quality/add-edit-quality.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-quality.component.scss */ "./src/app/pages/quality/add-edit-quality/add-edit-quality.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _theme_services_party_service__WEBPACK_IMPORTED_MODULE_7__["PartyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_4__["QualityService"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], AddEditQualityComponent);
    return AddEditQualityComponent;
}());



/***/ }),

/***/ "./src/app/pages/quality/quality-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/quality/quality-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: QualityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityRoutingModule", function() { return QualityRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_edit_quality_add_edit_quality_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-quality/add-edit-quality.component */ "./src/app/pages/quality/add-edit-quality/add-edit-quality.component.ts");
/* harmony import */ var _view_quality_view_quality_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-quality/view-quality.component */ "./src/app/pages/quality/view-quality/view-quality.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        children: [
            {
                path: 'view-quality',
                component: _view_quality_view_quality_component__WEBPACK_IMPORTED_MODULE_3__["ViewQualityComponent"],
            },
            {
                path: 'add-quality',
                component: _add_edit_quality_add_edit_quality_component__WEBPACK_IMPORTED_MODULE_2__["AddEditQualityComponent"],
            },
            {
                path: 'edit-quality/:id',
                component: _add_edit_quality_add_edit_quality_component__WEBPACK_IMPORTED_MODULE_2__["AddEditQualityComponent"],
            },
            {
                path: '',
                redirectTo: 'view-quality',
                pathMatch: 'full',
            },
        ]
    }
];
var QualityRoutingModule = /** @class */ (function () {
    function QualityRoutingModule() {
    }
    QualityRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], QualityRoutingModule);
    return QualityRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/quality/quality.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/quality/quality.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/quality/quality.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/quality/quality.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1YWxpdHkvcXVhbGl0eS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/quality/quality.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/quality/quality.component.ts ***!
  \****************************************************/
/*! exports provided: QualityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityComponent", function() { return QualityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var QualityComponent = /** @class */ (function () {
    function QualityComponent() {
    }
    QualityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quality',
            template: __webpack_require__(/*! ./quality.component.html */ "./src/app/pages/quality/quality.component.html"),
            styles: [__webpack_require__(/*! ./quality.component.scss */ "./src/app/pages/quality/quality.component.scss")]
        })
    ], QualityComponent);
    return QualityComponent;
}());

// export class MyLinkRendererComponent implements ViewCell, OnInit {
//   value: any;
//   rowData: any;
//   editQualityPermission = 0;
//   deleteQualityPermission = 0;
//   constructor(private router: Router, private modalService: NgbModal, private qualityService: QualityService,
//     private toasterService: ToastrService, private permissionService: PermissionService) {
//   }
//   renderValue: string;
//   @Output() save: EventEmitter<any> = new EventEmitter();
//   ngOnInit() {
//     this.editQualityPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_edit_quality);
//     this.deleteQualityPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_delete_quality);
//   }
//   editQuality() {
//     if (this.editQualityPermission) {
//       this.router.navigate(['/quality/edit-quality/' + this.value]);
//     } else {
//       const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit quality. If you want to edit quality ask admin for permission.');
//       if (res) {
//       } else {
//       }
//     }
//   }
//   onDeleteQuality() {
//     if (this.deleteQualityPermission) {
//       const dialogRef = this.modalService.open(ConfirmDialogComponent);
//       dialogRef.componentInstance.message = 'Are you sure you want to delete quality ?';
//       dialogRef.componentInstance.titleFrom = 'Delete Quality'
//       dialogRef.result.then((result: any) => {
//         if (result) {
//           const id = this.value;
//           this.qualityService.deleteQualityById(id).subscribe(data => {
//             if (!data[0].error) {
//               this.save.emit(true);
//               this.toasterService.success(data[0].message);
//             } else {
//               this.toasterService.error(data[0].message);
//             }
//           });
//         }
//       });
//     } else {
//       const res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete quality. If you want to delete quality ask admin for permission.');
//       if (res) {
//       } else {
//       }
//     }
//   }
// }


/***/ }),

/***/ "./src/app/pages/quality/quality.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/quality/quality.module.ts ***!
  \*************************************************/
/*! exports provided: QualityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityModule", function() { return QualityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _quality_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quality-routing.module */ "./src/app/pages/quality/quality-routing.module.ts");
/* harmony import */ var _add_edit_quality_add_edit_quality_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-quality/add-edit-quality.component */ "./src/app/pages/quality/add-edit-quality/add-edit-quality.component.ts");
/* harmony import */ var _quality_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quality.component */ "./src/app/pages/quality/quality.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _view_quality_view_quality_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-quality/view-quality.component */ "./src/app/pages/quality/view-quality/view-quality.component.ts");
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













var QualityModule = /** @class */ (function () {
    function QualityModule() {
    }
    QualityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_12__["ThemeModule"],
                _quality_routing_module__WEBPACK_IMPORTED_MODULE_2__["QualityRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"]
            ],
            declarations: [_add_edit_quality_add_edit_quality_component__WEBPACK_IMPORTED_MODULE_3__["AddEditQualityComponent"], _quality_component__WEBPACK_IMPORTED_MODULE_4__["QualityComponent"], _view_quality_view_quality_component__WEBPACK_IMPORTED_MODULE_9__["MyLinkRendererComponent"], _view_quality_view_quality_component__WEBPACK_IMPORTED_MODULE_9__["ViewQualityComponent"]],
            entryComponents: [_view_quality_view_quality_component__WEBPACK_IMPORTED_MODULE_9__["MyLinkRendererComponent"]]
        })
    ], QualityModule);
    return QualityModule;
}());



/***/ }),

/***/ "./src/app/pages/quality/view-quality/view-quality.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/quality/view-quality/view-quality.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n    <nb-card-header>Quality\r\n        <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onAddQuality()\">\r\n            Add Quality\r\n        </button>\r\n        <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\"\r\n            (click)=\"onPrintInvoice(true)\">Export Invoice</button>\r\n        <button style=\"float: right;\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onPrintInvoice(false)\">Print\r\n            Invoice</button>\r\n    </nb-card-header>\r\n    <nb-card-body>\r\n        <div *ngIf=\"viewGroupDataPermission && !viewAllDataPermission\">\r\n            <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getQualityData($event)\">\r\n                <nb-radio [value]=\"1\">\r\n                    View Own\r\n                </nb-radio>\r\n                <nb-radio [value]=\"2\">\r\n                    View Group\r\n                </nb-radio>\r\n            </nb-radio-group>\r\n        </div>\r\n        <div *ngIf=\"viewGroupDataPermission && viewAllDataPermission\">\r\n            <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getQualityData($event)\">\r\n                <nb-radio class=\"radio-inline\" [value]=\"1\">\r\n                    View Own\r\n                </nb-radio>\r\n                <nb-radio class=\"radio-inline\" [value]=\"2\">\r\n                    View Group\r\n                </nb-radio>\r\n                <nb-radio class=\"radio-inline\" [value]=\"3\">\r\n                    View All\r\n                </nb-radio>\r\n            </nb-radio-group>\r\n        </div>\r\n        <ag-grid-angular style=\"width: 100%; height:500px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n            [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='100'>\r\n        </ag-grid-angular>\r\n    </nb-card-body>\r\n</nb-card>\r\n<!-- <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"content-header text-left\">Quality</div>\r\n        <p class=\"content-sub-header\"></p>\r\n    </div>\r\n</div>\r\n<section id=\"advanced\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">\r\n                                <button class=\"btn btn-raised btn-primary\" (click)=\"onAddQuality()\">\r\n                                    Add Quality\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"col-md-5\"></div>\r\n                            <div class=\"col-md-2\">\r\n                                <button class=\"btn btn-raised btn-primary\" (click)=\"onPrintInvoice(true)\">Export\r\n                                    Invoice</button>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                <button class=\"btn btn-raised btn-primary\" (click)=\"onPrintInvoice(false)\">Print\r\n                                    Invoice</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row table table-responsive\">\r\n\r\n                            <ag-grid-angular style=\"width: 100%; height:500px\" class=\"ag-theme-balham\"\r\n                                [rowData]=\"rowData\" [columnDefs]=\"columnDefs\" [pagination]=\"true\"\r\n                                [paginationPageSize]='100'>\r\n                            </ag-grid-angular>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section> -->"

/***/ }),

/***/ "./src/app/pages/quality/view-quality/view-quality.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/quality/view-quality/view-quality.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1YWxpdHkvdmlldy1xdWFsaXR5L3ZpZXctcXVhbGl0eS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/quality/view-quality/view-quality.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/quality/view-quality/view-quality.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewQualityComponent, MyLinkRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQualityComponent", function() { return ViewQualityComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyLinkRendererComponent", function() { return MyLinkRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/services/permission.service */ "./src/app/@theme/services/permission.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@theme/services/quality.service */ "./src/app/@theme/services/quality.service.ts");
/* harmony import */ var _theme_services_print_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/services/print.service */ "./src/app/@theme/services/print.service.ts");
/* harmony import */ var _theme_services_qz_tray_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/services/qz-tray.service */ "./src/app/@theme/services/qz-tray.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _theme_services_party_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@theme/services/party.service */ "./src/app/@theme/services/party.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ViewQualityComponent = /** @class */ (function () {
    function ViewQualityComponent(toasterService, _http, permissionService, router, qualityService, printService, qzService, authService, partyService) {
        var _this = this;
        this.toasterService = toasterService;
        this._http = _http;
        this.permissionService = permissionService;
        this.router = router;
        this.qualityService = qualityService;
        this.printService = printService;
        this.qzService = qzService;
        this.authService = authService;
        this.partyService = partyService;
        this.columnDefs = [
            { headerName: 'Actions', field: 'entry_id', width: 100 },
            { headerName: 'Quality Id', field: 'quality_id', sortable: true, filter: 'agNumberColumnFilter' },
            { headerName: 'Quality Name', field: 'quality_name', sortable: true, filter: 'agDateColumnFilter' },
            { headerName: 'Quality Type', field: 'quality_type', sortable: true, filter: true },
            { headerName: 'Quality Sub Type', field: 'quality_sub_type', sortable: true, filter: true },
            { headerName: 'Party Name', field: 'party_id', sortable: true, filter: true },
        ];
        this.addQualityPermission = 0;
        this.settings = {
            actions: false,
            hideSubHeader: true,
            pagination: true,
            columns: {
                quality_id: {
                    title: 'Quality Id',
                    filter: false,
                },
                quality_name: {
                    title: 'Quality Name',
                    filter: false,
                },
                quality_type: {
                    title: 'Quality Type',
                    filter: false,
                },
                quality_sub_type: {
                    title: 'Quality Sub Type',
                    filter: false,
                },
                party_id: {
                    title: 'Party Name',
                    filter: false,
                },
                entry_id: {
                    title: 'Action',
                    filter: false,
                    type: 'custom',
                    sort: false,
                    renderComponent: MyLinkRendererComponent,
                    onComponentInitFunction: function (instance) {
                        instance.save.subscribe(function (row) {
                            if (row) {
                                _this.getQualityData();
                            }
                        });
                    }
                }
            },
            pager: {
                perPage: 2
            }
        };
        this.qualityList = [];
        this.currentUserPermission = [];
        this.viewAllDataPermission = false;
        this.viewOwnDataPermission = false;
        this.viewGroupDataPermission = false;
        this.radioSelected = 1;
        this.viewGroup = false;
        this.viewOwn = false;
        this.viewAll = false;
        this.partyNameList = [];
        this.qualityReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_12__["ViewReqObj"]();
        this.viewPartyReqOb = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_12__["ViewReqObj"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserPermission = ele.user_permission;
                // console.log("ele",ele)
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
                // this.currentUserGroupUserIds = ele.group_user_ids;
            }
        });
        this.setColumns();
    }
    ViewQualityComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUserPermission.length) {
            this.currentUserPermission.forEach(function (ele) {
                if (ele.form_name === 'Quality') {
                    // this.addUserPermission = ele.can_add;
                    _this.viewAllDataPermission = ele.can_view_all;
                    _this.viewGroupDataPermission = ele.can_view_group;
                    _this.viewOwnDataPermission = ele.can_view;
                    _this.addQualityPermission = 1;
                    _this.qualityReqObj.current_user_id = _this.currentUserId;
                    _this.qualityReqObj.user_head_id = _this.currentUser.user_head_id;
                    _this.qualityReqObj.group_user_ids = _this.currentUserGroupUserIds;
                }
            });
            this.getPartyList();
        }
        this.getQualityData();
    };
    ViewQualityComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    ViewQualityComponent.prototype.getPartyList = function () {
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
    ViewQualityComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'entry_id') {
                column.cellRendererFramework = MyLinkRendererComponent;
                column.cellRendererParams = {
                    inRouterLink: '/pages/quality/edit-quality/',
                    action: _this
                };
            }
        });
    };
    ViewQualityComponent.prototype.onAddQuality = function () {
        if (this.addQualityPermission) {
            this.router.navigate(['/pages/quality/add-quality']);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add quality. If you want to add quality ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ViewQualityComponent.prototype.onPrintInvoice = function (data) {
        var invoiceIds = ['101', '102'];
        this.printService
            .printDocument('invoice', invoiceIds, data);
    };
    ViewQualityComponent.prototype.getQualityData = function (value) {
        var _this = this;
        this.qualityReqObj.view_all = false;
        this.qualityReqObj.view_group = false;
        this.qualityReqObj.view_own = false;
        if (value)
            this.radioSelected = value;
        //check which radio button is selected
        if (this.radioSelected == 1)
            this.qualityReqObj.view_own = true;
        else if (this.radioSelected == 2)
            this.qualityReqObj.view_group = true;
        else if (this.radioSelected == 3)
            this.qualityReqObj.view_all = true;
        this.qualityService.getAllQualityData(this.qualityReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.qualityList = data[0].data;
                _this.qualityList.forEach(function (ele) {
                    var i = _this.partyNameList.findIndex(function (v) { return v.entry_id == ele.party_id; });
                    if (i > -1) {
                        ele.party_id = _this.partyNameList[i].party_name;
                    }
                });
                _this.rowData = _this.qualityList;
                _this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"](_this.qualityList);
            }
            else
                _this.toasterService.error(data[0].message);
        });
    };
    ViewQualityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-view-quality',
            template: __webpack_require__(/*! ./view-quality.component.html */ "./src/app/pages/quality/view-quality/view-quality.component.html"),
            styles: [__webpack_require__(/*! ./view-quality.component.scss */ "./src/app/pages/quality/view-quality/view-quality.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_6__["QualityService"], _theme_services_print_service__WEBPACK_IMPORTED_MODULE_7__["PrintService"], _theme_services_qz_tray_service__WEBPACK_IMPORTED_MODULE_8__["QzTrayService"],
            _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _theme_services_party_service__WEBPACK_IMPORTED_MODULE_13__["PartyService"]])
    ], ViewQualityComponent);
    return ViewQualityComponent;
}());

var MyLinkRendererComponent = /** @class */ (function () {
    function MyLinkRendererComponent(router, modalService, qualityService, toasterService, permissionService, authService) {
        var _this = this;
        this.router = router;
        this.modalService = modalService;
        this.qualityService = qualityService;
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.authService = authService;
        this.editQualityPermission = 0;
        this.deleteQualityPermission = 0;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserPermission = ele.user_permission;
            }
        });
    }
    MyLinkRendererComponent.prototype.agInit = function (params) {
        var _this = this;
        this.params = params;
        this.currentUserPermission.forEach(function (ele) {
            if (ele.form_name === 'Quality') {
                if (_this.params.action.radioSelected == 1) {
                    _this.editQualityPermission = ele.can_edit;
                    _this.deleteQualityPermission = ele.can_delete;
                }
                else if (_this.params.action.radioSelected == 2) {
                    _this.editQualityPermission = ele.can_edit_group;
                    _this.deleteQualityPermission = ele.can_delete_group;
                }
                else if (_this.params.action.radioSelected == 3) {
                    _this.editQualityPermission = ele.can_edit_all;
                    _this.deleteQualityPermission = ele.can_delete_all;
                }
            }
        });
    };
    MyLinkRendererComponent.prototype.refresh = function () {
        return false;
    };
    MyLinkRendererComponent.prototype.editQuality = function () {
        if (this.editQualityPermission) {
            this.router.navigate([this.params.inRouterLink + this.params.value]);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit quality. If you want to edit quality ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    MyLinkRendererComponent.prototype.onDeleteQuality = function () {
        var _this = this;
        if (this.deleteQualityPermission) {
            var dialogRef = this.modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"]);
            dialogRef.componentInstance.message = 'Are you sure you want to delete quality ?';
            dialogRef.componentInstance.titleFrom = 'Delete Quality';
            dialogRef.result.then(function (result) {
                if (result) {
                    var id = _this.params.value;
                    _this.qualityService.deleteQualityById(id).subscribe(function (data) {
                        if (!data[0].error) {
                            _this.params.action.getQualityData();
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
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete quality. If you want to delete quality ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    MyLinkRendererComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\"  style=\"color:#4ca6ff\" (click)=\"editQuality()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteQuality()\"></i>",
            styles: [__webpack_require__(/*! ./view-quality.component.scss */ "./src/app/pages/quality/view-quality/view-quality.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"], _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_6__["QualityService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]])
    ], MyLinkRendererComponent);
    return MyLinkRendererComponent;
}());



/***/ })

}]);
//# sourceMappingURL=quality-quality-module.js.map