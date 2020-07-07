(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["process-planning-process-planning-module"],{

/***/ "./src/app/pages/process-planning/add-edit-process-planning/add-edit-process-planning.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/process-planning/add-edit-process-planning/add-edit-process-planning.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>{{topHeader}}\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <label>Party Name</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"selectedPartyId\" name=\"partyid\" (change)=\"onPartySelect()\">\r\n            <option disabled value=\"\">Select Party\r\n            </option>\r\n            <option *ngFor=\"let party of partyList\" [value]=\"party.entry_id\">\r\n              {{party.party_name}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <label>Shade</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"selectedShadeId\" name=\"shadeid\" (change)=\"onShadeSelect()\">\r\n            <option disabled value=\"\">Select Shade\r\n            </option>\r\n            <option *ngFor=\"let shade of shadeList\" [value]=\"shade.entry_id\">\r\n              {{shade.party_shade_no}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <label>Quality Name</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"selectedQualityId\" name=\"qualityid\" (change)=\"onQualitySelect()\">\r\n            <option disabled value=\"\">Select Quality\r\n            </option>\r\n            <option *ngFor=\"let quality of qualityList\" [value]=\"quality.entry_id\">\r\n              {{quality.quality_name}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <button style=\"margin:23px;\" nbButton type=\"button\" (click)=\"onResetFilter()\">Reset Filter</button>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <h3>\r\n      Program List\r\n    </h3>\r\n    <div class=\"row table table-responsive\">\r\n      <ag-grid-angular style=\"width: 100%; height:300px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n        [columnDefs]=\"columnDefs\" (gridReady)=\"onGridReady($event)\" (selectionChanged)=\"onSelectionChanged($event)\"\r\n        [pagination]=\"true\" [paginationPageSize]='10'>\r\n      </ag-grid-angular>\r\n    </div>\r\n    <hr *ngIf=\"batchList.length\">\r\n    <h3 *ngIf=\"batchList.length\">\r\n      Batch List\r\n    </h3>\r\n    <div *ngIf=\"batchList.length\" class=\"row table table-responsive\">\r\n      <ag-grid-angular style=\"width: 100%; height:300px\" class=\"ag-theme-balham\" [rowData]=\"rowBatchData\"\r\n        [columnDefs]=\"batchColumnDefs\" (gridReady)=\"onBatchGridReady($event)\"\r\n        (selectionChanged)=\"onBatchSelectionChanged($event)\" [pagination]=\"true\" [paginationPageSize]='10'>\r\n      </ag-grid-angular>\r\n    </div>\r\n    <div *ngIf=\"batchList.length\" class=\"col-md-2\">\r\n      <button style=\"margin:23px;\" nbButton type=\"button\" (click)=\"onAddPlanning()\">{{subBtnName}}</button>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/process-planning/add-edit-process-planning/add-edit-process-planning.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/process-planning/add-edit-process-planning/add-edit-process-planning.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Nlc3MtcGxhbm5pbmcvYWRkLWVkaXQtcHJvY2Vzcy1wbGFubmluZy9hZGQtZWRpdC1wcm9jZXNzLXBsYW5uaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/process-planning/add-edit-process-planning/add-edit-process-planning.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/process-planning/add-edit-process-planning/add-edit-process-planning.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AddEditProcessPlanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditProcessPlanningComponent", function() { return AddEditProcessPlanningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/model/process-planning-class */ "./src/app/@theme/model/process-planning-class.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_services_party_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@theme/services/party.service */ "./src/app/@theme/services/party.service.ts");
/* harmony import */ var _theme_services_process_planning_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/services/process-planning.service */ "./src/app/@theme/services/process-planning.service.ts");
/* harmony import */ var _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/services/quality.service */ "./src/app/@theme/services/quality.service.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_services_shade_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@theme/services/shade.service */ "./src/app/@theme/services/shade.service.ts");
/* harmony import */ var _theme_services_fabric_in_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@theme/services/fabric-in.service */ "./src/app/@theme/services/fabric-in.service.ts");
/* harmony import */ var _theme_services_batch_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@theme/services/batch.service */ "./src/app/@theme/services/batch.service.ts");
/* harmony import */ var _theme_services_program_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../@theme/services/program.service */ "./src/app/@theme/services/program.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AddEditProcessPlanningComponent = /** @class */ (function () {
    function AddEditProcessPlanningComponent(toasterService, route, partyService, router, processPlanningService, qualityService, authService, shadeService, fabricService, batchService, programService) {
        var _this = this;
        this.toasterService = toasterService;
        this.route = route;
        this.partyService = partyService;
        this.router = router;
        this.processPlanningService = processPlanningService;
        this.qualityService = qualityService;
        this.authService = authService;
        this.shadeService = shadeService;
        this.fabricService = fabricService;
        this.batchService = batchService;
        this.programService = programService;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.buttonName = "Add Production Planning";
        this.productionPlanningObj = new _theme_model_process_planning_class__WEBPACK_IMPORTED_MODULE_1__["ProductionPlanningReq"]();
        this.flagDivSubForm = false;
        this.flagDiv = false;
        this.flagDivBatch = false;
        this.flagDivLot = false;
        this.subBtnName = '';
        this.topHeader = '';
        this.viewFlag = false;
        this.partyList = [];
        this.qualityList = [];
        this.shadeList = [];
        this.allShadeList = [];
        this.programList = [];
        this.batchList = [];
        this.qualityNameList = [];
        this.qualityReqObj = { party_id: '', entry_id: '', group_user_ids: '' };
        this.shadeReqObj = { quality_id: '', party_id: '', group_user_ids: '' };
        this.programReqObj = { quality_id: '', party_id: '', shade_id: '', group_user_ids: '' };
        this.selectedPartyId = '';
        this.selectedShadeId = '';
        this.selectedQualityId = '';
        this.columnDefs = [
            { headerName: 'Actions', field: '', sortable: false, width: 120, checkboxSelection: true },
            { headerName: 'Party Name', field: 'party_name', sortable: true, filter: true },
            { headerName: 'Shade No.', field: 'shade_no', sortable: true, filter: true },
            { headerName: 'Color Tone', field: 'color_tone', sortable: true, filter: true },
            { headerName: 'Quality Id', field: 'quality_id', sortable: true, filter: true },
            { headerName: 'Quality Name', field: 'quality_name', sortable: true, filter: true },
            { headerName: 'Quality Type', field: 'quality_type', sortable: true, filter: true },
        ];
        this.batchColumnDefs = [
            { headerName: 'Actions', field: '', sortable: false, width: 120, checkboxSelection: true },
            { headerName: 'Batch No.', field: 'batch_no', sortable: true, filter: true },
            { headerName: 'Total Weight', field: 'total_wt', sortable: true, filter: true },
            { headerName: 'Total No. of Taka/Cones', field: 'total_taka', sortable: true, filter: true },
            { headerName: 'Total Metre', field: 'total_mtr', sortable: true, filter: true },
        ];
        this.viewProcessPlanningGivenByReqOb = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_3__["ViewReqObj"]();
        this.viewPartyReqOb = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_3__["ViewReqObj"]();
        this.viewShadeReqOb = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_3__["ViewReqObj"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserHeadid = ele.user.user_head_id;
                _this.currentUserPermission = ele.user_permission;
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
            }
        });
        // this.setColumns();
    }
    AddEditProcessPlanningComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    AddEditProcessPlanningComponent.prototype.ngOnInit = function () {
        this.getPartyList();
        this.getQualityList();
        this.getShadeList();
        this.getShadeData();
        this.getQualityNameList(); // to fill name in program table
        this.getProgramList();
        this.onPageLoad();
    };
    AddEditProcessPlanningComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        // this.getUserList(this.currentUserId);
    };
    AddEditProcessPlanningComponent.prototype.onBatchGridReady = function (params) {
        var _this = this;
        this.gridBatchApi = params.api;
        this.gridBatchColumnApi = params.columnApi;
        if (this.id) {
            var j = this.batchList.findIndex(function (v) { return v.batch_no == _this.productionPlanningObj.batch_control_id; });
            if (j > -1) {
                this.selectedBatchRow = [];
                this.selectedBatchRow.push(this.batchList[j]);
                this.gridBatchApi.forEachNode(function (node) {
                    node.data['batch_no'] == _this.productionPlanningObj.batch_control_id ? node.setSelected(true) : 0;
                });
            }
        }
    };
    AddEditProcessPlanningComponent.prototype.getProgramList = function () {
        var _this = this;
        this.clearBatchList();
        this.programReqObj.quality_id = this.selectedQualityId;
        this.programReqObj.shade_id = this.selectedShadeId;
        this.programReqObj.party_id = this.selectedPartyId;
        this.programReqObj.group_user_ids = this.currentUserGroupUserIds;
        this.programService.getProgramsByFilter(this.programReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.programList = data[0].data;
                _this.programList.forEach(function (ele) {
                    var i = _this.qualityNameList.findIndex(function (v) { return v.entry_id == ele.quality_id; });
                    if (i > -1) {
                        ele.quality_name = _this.qualityNameList[i].quality_name;
                        ele.quality_type = _this.qualityNameList[i].quality_type;
                    }
                    var partyIndex = _this.partyList.findIndex(function (v) { return v.entry_id == ele.party_id; });
                    if (partyIndex > -1) {
                        ele.party_name = _this.partyList[partyIndex].party_name;
                    }
                    var j = _this.allShadeList.findIndex(function (v) { return v.entry_id == ele.shade_no; });
                    if (j > -1) {
                        ele.color_tone = _this.allShadeList[i].colour_tone;
                    }
                });
                _this.rowData = _this.programList;
            }
            else {
                _this.toasterService.error(data[0].message);
            }
        });
    };
    AddEditProcessPlanningComponent.prototype.onSelectionChanged = function (event) {
        this.clearBatchList();
        this.selectedProgramRow = this.gridApi.getSelectedRows();
        console.log(this.selectedProgramRow);
        this.getBatchListByProgramSelected(this.selectedProgramRow);
    };
    AddEditProcessPlanningComponent.prototype.onBatchSelectionChanged = function (event) {
        this.selectedBatchRow = this.gridBatchApi.getSelectedRows();
        console.log('batch selection', this.selectedBatchRow);
    };
    AddEditProcessPlanningComponent.prototype.onAddPlanning = function () {
        var _this = this;
        if (this.selectedBatchRow) {
            this.productionPlanningObj.batch_control_id = this.selectedBatchRow[0].batch_no;
            this.productionPlanningObj.quality_id = this.selectedBatchRow[0].quality_id;
            this.productionPlanningObj.quantity = this.selectedBatchRow[0].total_wt;
            this.productionPlanningObj.time = '';
            this.productionPlanningObj.program_control_id = this.selectedProgramRow[0].entry_id;
            this.productionPlanningObj.priority = this.selectedProgramRow[0].priority;
            this.productionPlanningObj.shade_no = this.selectedProgramRow[0].shade_no;
            this.productionPlanningObj.color_tone = this.selectedProgramRow[0].color_tone;
            this.productionPlanningObj.user_head_id = this.currentUserHeadid;
            if (!this.id) {
                this.productionPlanningObj.created_by = this.currentUserId;
                this.processPlanningService.addProductionPlanning(this.productionPlanningObj).subscribe(function (data) {
                    if (!data[0].error) {
                        _this.toasterService.success(data[0].message);
                        _this.router.navigate(['/pages/process-planning']);
                    }
                    else {
                        _this.toasterService.error(data[0].message);
                    }
                }, function (err) {
                    _this.toasterService.error(err);
                });
            }
            else {
                this.productionPlanningObj.updated_by = this.currentUserId;
                this.processPlanningService.editProductionPlanning(this.productionPlanningObj).subscribe(function (data) {
                    if (!data[0].error) {
                        _this.toasterService.success(data[0].message);
                        _this.router.navigate(['/pages/process-planning']);
                    }
                    else {
                        _this.toasterService.error(data[0].message);
                    }
                }, function (err) {
                    _this.toasterService.error(err);
                });
            }
        }
    };
    AddEditProcessPlanningComponent.prototype.getBatchListByProgramSelected = function (row) {
        var _this = this;
        this.batchViewReqObj = {
            quality_id: row[0].quality_id,
            group_user_ids: this.currentUserGroupUserIds
        };
        this.batchService.getAllBatchByQualityId(this.batchViewReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.batchList = data[0].data;
                _this.rowBatchData = _this.batchList;
            }
        });
    };
    AddEditProcessPlanningComponent.prototype.getPartyList = function () {
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
    AddEditProcessPlanningComponent.prototype.getShadeList = function () {
        var _this = this;
        var qualityId = [];
        if (this.selectedPartyId != '') {
            var obj = {
                party_id: this.selectedPartyId,
                group_user_ids: this.currentUserGroupUserIds
            };
            this.qualityService.getAllQualityByPartyId(obj).subscribe(function (data) {
                if (!data[0].error) {
                    qualityId = data[0].data;
                    var str = '';
                    if (qualityId.length) {
                        str = '(';
                        var i = void 0;
                        for (i = 0; i < qualityId.length - 1; i++) {
                            str = qualityId[i].entry_id + ',';
                        }
                        if (i == qualityId.length - 1) {
                            str = qualityId[i].entry_id + ')';
                        }
                    }
                    _this.shadeReqObj.quality_id = str;
                    _this.getShadeFinalList();
                }
            });
        }
        else {
            this.getShadeFinalList();
        }
    };
    AddEditProcessPlanningComponent.prototype.getShadeFinalList = function () {
        var _this = this;
        this.shadeReqObj.quality_id = this.selectedQualityId;
        if (this.shadeReqObj.quality_id == '') {
            this.shadeReqObj.quality_id = "('')";
        }
        this.shadeReqObj.group_user_ids = this.currentUserGroupUserIds;
        this.shadeService.getShadesByFilter(this.shadeReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.shadeList = data[0].data;
                if (_this.id) {
                }
            }
        });
    };
    AddEditProcessPlanningComponent.prototype.onPartySelect = function () {
        this.selectedQualityId = '';
        this.selectedShadeId = '';
        this.clearBatchList();
        this.getQualityList();
        this.getProgramList();
        this.getShadeList();
    };
    AddEditProcessPlanningComponent.prototype.getShadeData = function () {
        var _this = this;
        this.viewShadeReqOb.view_all = true;
        this.viewShadeReqOb.current_user_id = this.currentUserId;
        this.viewShadeReqOb.user_head_id = this.currentUser.user_head_id;
        this.viewShadeReqOb.group_user_ids = this.currentUserGroupUserIds;
        this.shadeService.getAllShades(this.viewShadeReqOb).subscribe(function (data) {
            if (!data[0].error) {
                _this.allShadeList = data[0].data;
            }
        });
    };
    AddEditProcessPlanningComponent.prototype.onShadeSelect = function () {
        this.clearBatchList();
        this.getProgramList();
        this.getQualityList();
    };
    AddEditProcessPlanningComponent.prototype.onQualitySelect = function () {
        this.clearBatchList();
        this.getProgramList();
    };
    AddEditProcessPlanningComponent.prototype.getQualityList = function () {
        var _this = this;
        var entry_id = '';
        if (this.selectedShadeId != '') {
            var i = this.shadeList.findIndex(function (v) { return v.entry_id == _this.selectedShadeId; });
            if (i > -1) {
                entry_id = this.shadeList[i].quality_id;
            }
        }
        this.qualityReqObj.party_id = this.selectedPartyId;
        this.qualityReqObj.entry_id = entry_id;
        this.qualityReqObj.group_user_ids = this.currentUserGroupUserIds;
        this.qualityService.getAllQualityFilterData(this.qualityReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.qualityList = data[0].data;
                if (_this.id) {
                }
            }
        });
    };
    AddEditProcessPlanningComponent.prototype.getQualityNameList = function () {
        var _this = this;
        this.viewPartyReqOb.view_group = true;
        this.viewPartyReqOb.current_user_id = this.currentUserId;
        this.viewPartyReqOb.user_head_id = this.currentUser.user_head_id;
        this.viewPartyReqOb.group_user_ids = this.currentUserGroupUserIds;
        this.qualityService.getAllQualityData(this.viewPartyReqOb).subscribe(function (data) {
            if (!data[0].error) {
                _this.qualityNameList = data[0].data;
            }
        });
    };
    AddEditProcessPlanningComponent.prototype.clearBatchList = function () {
        this.batchList = [];
        this.rowBatchData = [];
    };
    AddEditProcessPlanningComponent.prototype.onPageLoad = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            this.subBtnName = 'Update Process Planning';
            this.topHeader = 'Edit Process Planning';
            this.processPlanningService.getprocessPlanningById(this.id).subscribe(function (data) {
                if (!data[0].error) {
                    _this.productionPlanningObj = data[0].data[0];
                    console.log('this.productionPlanningObj', _this.productionPlanningObj.program_control_id);
                    if (_this.programList.length) {
                        var i = _this.programList.findIndex(function (v) { return v.entry_id == _this.productionPlanningObj.program_control_id; });
                        if (i > -1) {
                            _this.selectedProgramRow = [];
                            _this.selectedProgramRow.push(_this.programList[i]);
                            _this.gridApi.forEachNode(function (node) {
                                console.log('node.data', node.data);
                                node.data['entry_id'] == _this.productionPlanningObj.program_control_id ? node.setSelected(true) : 0;
                            });
                            // this.getBatchListByProgramSelected(this.selectedProgramRow);
                        }
                    }
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            this.subBtnName = 'Add Process Planning';
            this.topHeader = 'Add Process Planning';
        }
    };
    AddEditProcessPlanningComponent.prototype.onResetFilter = function () {
        this.selectedPartyId = '';
        this.selectedQualityId = '';
        this.selectedShadeId = '';
        this.clearBatchList();
        this.getProgramList();
    };
    AddEditProcessPlanningComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
            return false;
        }
        return true;
    };
    AddEditProcessPlanningComponent.prototype.onCustomFormSubmit = function (form) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instance'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTypeahead"])
    ], AddEditProcessPlanningComponent.prototype, "instance", void 0);
    AddEditProcessPlanningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-add-edit-process-planning',
            template: __webpack_require__(/*! ./add-edit-process-planning.component.html */ "./src/app/pages/process-planning/add-edit-process-planning/add-edit-process-planning.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-process-planning.component.scss */ "./src/app/pages/process-planning/add-edit-process-planning/add-edit-process-planning.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _theme_services_party_service__WEBPACK_IMPORTED_MODULE_6__["PartyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _theme_services_process_planning_service__WEBPACK_IMPORTED_MODULE_7__["ProcessPlanningService"], _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_8__["QualityService"],
            _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _theme_services_shade_service__WEBPACK_IMPORTED_MODULE_11__["ShadeService"], _theme_services_fabric_in_service__WEBPACK_IMPORTED_MODULE_12__["FabricInService"],
            _theme_services_batch_service__WEBPACK_IMPORTED_MODULE_13__["BatchService"], _theme_services_program_service__WEBPACK_IMPORTED_MODULE_14__["ProgramService"]])
    ], AddEditProcessPlanningComponent);
    return AddEditProcessPlanningComponent;
}());



/***/ }),

/***/ "./src/app/pages/process-planning/process-planning-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/process-planning/process-planning-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProcessPlanningRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessPlanningRoutingModule", function() { return ProcessPlanningRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _process_planning_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process-planning.component */ "./src/app/pages/process-planning/process-planning.component.ts");
/* harmony import */ var _view_process_planning_view_process_planning_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-process-planning/view-process-planning.component */ "./src/app/pages/process-planning/view-process-planning/view-process-planning.component.ts");
/* harmony import */ var _add_edit_process_planning_add_edit_process_planning_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-process-planning/add-edit-process-planning.component */ "./src/app/pages/process-planning/add-edit-process-planning/add-edit-process-planning.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _process_planning_component__WEBPACK_IMPORTED_MODULE_2__["ProcessPlanningComponent"],
        children: [
            {
                path: 'view-process-planning-list',
                component: _view_process_planning_view_process_planning_component__WEBPACK_IMPORTED_MODULE_3__["ViewProcessPlanningComponent"]
            },
            {
                path: 'add-process-planning',
                component: _add_edit_process_planning_add_edit_process_planning_component__WEBPACK_IMPORTED_MODULE_4__["AddEditProcessPlanningComponent"],
            },
            {
                path: 'edit-process-planning/:id',
                component: _add_edit_process_planning_add_edit_process_planning_component__WEBPACK_IMPORTED_MODULE_4__["AddEditProcessPlanningComponent"],
            },
            {
                path: '',
                redirectTo: 'view-process-planning-list',
                pathMatch: 'full',
            },
        ]
    }
];
var ProcessPlanningRoutingModule = /** @class */ (function () {
    function ProcessPlanningRoutingModule() {
    }
    ProcessPlanningRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ProcessPlanningRoutingModule);
    return ProcessPlanningRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/process-planning/process-planning.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/process-planning/process-planning.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/process-planning/process-planning.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/process-planning/process-planning.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Nlc3MtcGxhbm5pbmcvcHJvY2Vzcy1wbGFubmluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/process-planning/process-planning.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/process-planning/process-planning.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProcessPlanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessPlanningComponent", function() { return ProcessPlanningComponent; });
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

var ProcessPlanningComponent = /** @class */ (function () {
    function ProcessPlanningComponent() {
    }
    ProcessPlanningComponent.prototype.ngOnInit = function () {
    };
    ProcessPlanningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-process-planning',
            template: __webpack_require__(/*! ./process-planning.component.html */ "./src/app/pages/process-planning/process-planning.component.html"),
            styles: [__webpack_require__(/*! ./process-planning.component.scss */ "./src/app/pages/process-planning/process-planning.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProcessPlanningComponent);
    return ProcessPlanningComponent;
}());



/***/ }),

/***/ "./src/app/pages/process-planning/process-planning.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/process-planning/process-planning.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProcessPlanningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessPlanningModule", function() { return ProcessPlanningModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _process_planning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./process-planning.component */ "./src/app/pages/process-planning/process-planning.component.ts");
/* harmony import */ var _view_process_planning_view_process_planning_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-process-planning/view-process-planning.component */ "./src/app/pages/process-planning/view-process-planning/view-process-planning.component.ts");
/* harmony import */ var _add_edit_process_planning_add_edit_process_planning_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-edit-process-planning/add-edit-process-planning.component */ "./src/app/pages/process-planning/add-edit-process-planning/add-edit-process-planning.component.ts");
/* harmony import */ var _process_planning_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./process-planning-routing.module */ "./src/app/pages/process-planning/process-planning-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ProcessPlanningModule = /** @class */ (function () {
    function ProcessPlanningModule() {
    }
    ProcessPlanningModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _process_planning_component__WEBPACK_IMPORTED_MODULE_9__["ProcessPlanningComponent"],
                _view_process_planning_view_process_planning_component__WEBPACK_IMPORTED_MODULE_10__["ViewProcessPlanningComponent"],
                _add_edit_process_planning_add_edit_process_planning_component__WEBPACK_IMPORTED_MODULE_11__["AddEditProcessPlanningComponent"],
                _view_process_planning_view_process_planning_component__WEBPACK_IMPORTED_MODULE_10__["CustomRendererProcessPlanningComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"],
                _process_planning_routing_module__WEBPACK_IMPORTED_MODULE_12__["ProcessPlanningRoutingModule"]
            ],
            entryComponents: [
                _view_process_planning_view_process_planning_component__WEBPACK_IMPORTED_MODULE_10__["CustomRendererProcessPlanningComponent"],
            ]
        })
    ], ProcessPlanningModule);
    return ProcessPlanningModule;
}());



/***/ }),

/***/ "./src/app/pages/process-planning/view-process-planning/view-process-planning.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/process-planning/view-process-planning/view-process-planning.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Process Planning\r\n    <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\"\r\n      (click)=\"onAddProcessPlanning()\">\r\n      Add Process Planning\r\n    </button>\r\n    <button style=\"float: right;\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onExport()\">Export</button>\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div *ngIf=\"viewGroupDataPermission && !viewAllDataPermission\">\r\n      <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getProcessPlanningData($event)\">\r\n        <nb-radio [value]=\"1\">\r\n          View Own\r\n        </nb-radio>\r\n        <nb-radio [value]=\"2\">\r\n          View Group\r\n        </nb-radio>\r\n      </nb-radio-group>\r\n    </div>\r\n    <div *ngIf=\"viewGroupDataPermission && viewAllDataPermission\">\r\n      <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getProcessPlanningData($event)\">\r\n        <nb-radio class=\"radio-inline\" [value]=\"1\">\r\n          View Own\r\n        </nb-radio>\r\n        <nb-radio class=\"radio-inline\" [value]=\"2\">\r\n          View Group\r\n        </nb-radio>\r\n        <nb-radio class=\"radio-inline\" [value]=\"3\">\r\n          View All\r\n        </nb-radio>\r\n      </nb-radio-group>\r\n    </div>\r\n    <ag-grid-angular style=\"width: 100%; height:500px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n      [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='100' (gridReady)=\"onGridReady($event)\">\r\n    </ag-grid-angular>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/process-planning/view-process-planning/view-process-planning.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/process-planning/view-process-planning/view-process-planning.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Nlc3MtcGxhbm5pbmcvdmlldy1wcm9jZXNzLXBsYW5uaW5nL3ZpZXctcHJvY2Vzcy1wbGFubmluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/process-planning/view-process-planning/view-process-planning.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/process-planning/view-process-planning/view-process-planning.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ViewProcessPlanningComponent, CustomRendererProcessPlanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProcessPlanningComponent", function() { return ViewProcessPlanningComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererProcessPlanningComponent", function() { return CustomRendererProcessPlanningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _theme_services_process_planning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/services/process-planning.service */ "./src/app/@theme/services/process-planning.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@theme/services/permission.service */ "./src/app/@theme/services/permission.service.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ViewProcessPlanningComponent = /** @class */ (function () {
    function ViewProcessPlanningComponent(processPlanningService, router, tosterService, permissionService, papa, authService) {
        var _this = this;
        this.processPlanningService = processPlanningService;
        this.router = router;
        this.tosterService = tosterService;
        this.permissionService = permissionService;
        this.papa = papa;
        this.authService = authService;
        this.processPlanningList = [];
        this.addProcessPlanningPermission = 1;
        this.columnDefs = [
            { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
            { headerName: 'Program  No.', field: 'program_control_id', sortable: true, filter: true },
            { headerName: 'Batch No.', field: 'batch_control_id', sortable: true, filter: true },
            { headerName: 'Created By', field: 'created_by', sortable: true, filter: true },
            { headerName: 'Updated By', field: 'updated_by', sortable: true, filter: true },
        ];
        this.columnExportDefs = [
            'program_control_id', 'batch_control_id', 'created_by', 'updated_by'
        ];
        this.currentUserPermission = [];
        this.viewAllDataPermission = false;
        this.viewOwnDataPermission = false;
        this.viewGroupDataPermission = false;
        this.radioSelected = 1;
        this.processPlanningReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_2__["ViewReqObj"]();
        this.viewPartyReqOb = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_2__["ViewReqObj"]();
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
    ViewProcessPlanningComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUserPermission && this.currentUserPermission.length) {
            this.currentUserPermission.forEach(function (ele) {
                if (ele.form_name === 'Process') {
                    _this.addProcessPlanningPermission = 1;
                    _this.viewAllDataPermission = ele.can_view_all;
                    _this.viewGroupDataPermission = ele.can_view_group;
                    _this.viewOwnDataPermission = ele.can_view;
                    _this.processPlanningReqObj.current_user_id = _this.currentUserId;
                    _this.processPlanningReqObj.user_head_id = _this.currentUser.user_head_id;
                    _this.processPlanningReqObj.group_user_ids = _this.currentUserGroupUserIds;
                }
            });
        }
        this.getProcessPlanningData();
    };
    ViewProcessPlanningComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    ViewProcessPlanningComponent.prototype.getProcessPlanningData = function (value) {
        var _this = this;
        this.processPlanningReqObj.view_all = false;
        this.processPlanningReqObj.view_group = false;
        this.processPlanningReqObj.view_own = false;
        if (value)
            this.radioSelected = value;
        //check which radio button is selected
        if (this.radioSelected == 1)
            this.processPlanningReqObj.view_own = true;
        else if (this.radioSelected == 2)
            this.processPlanningReqObj.view_group = true;
        else if (this.radioSelected == 3)
            this.processPlanningReqObj.view_all = true;
        this.processPlanningService.getAllprocessPlannings(this.processPlanningReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.processPlanningList = data[0].data;
                _this.rowData = _this.processPlanningList;
            }
            else {
                _this.tosterService.error(data[0].message);
            }
        });
    };
    ViewProcessPlanningComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'entry_id') {
                column.cellRendererFramework = CustomRendererProcessPlanningComponent;
                column.cellRendererParams = {
                    inRouterLink: '/pages/process-planning/edit-process-planning/',
                    action: _this
                };
            }
        });
    };
    ViewProcessPlanningComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    ViewProcessPlanningComponent.prototype.onAddProcessPlanning = function () {
        if (this.addProcessPlanningPermission) {
            this.router.navigate(['/pages/process-planning/add-process-planning']);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add process planning. If you want to add process planning ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ViewProcessPlanningComponent.prototype.onExport = function () {
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
    ViewProcessPlanningComponent.prototype.exportExcel = function (data) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].json_to_sheet(data);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        xlsx__WEBPACK_IMPORTED_MODULE_10__["writeFile"](workbook, 'my_file.xls', { bookType: 'xls', type: 'buffer' });
    };
    ViewProcessPlanningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-view-process-planning',
            template: __webpack_require__(/*! ./view-process-planning.component.html */ "./src/app/pages/process-planning/view-process-planning/view-process-planning.component.html"),
            styles: [__webpack_require__(/*! ./view-process-planning.component.scss */ "./src/app/pages/process-planning/view-process-planning/view-process-planning.component.scss")]
        }),
        __metadata("design:paramtypes", [_theme_services_process_planning_service__WEBPACK_IMPORTED_MODULE_3__["ProcessPlanningService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_6__["PermissionService"], ngx_papaparse__WEBPACK_IMPORTED_MODULE_7__["Papa"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], ViewProcessPlanningComponent);
    return ViewProcessPlanningComponent;
}());

var CustomRendererProcessPlanningComponent = /** @class */ (function () {
    function CustomRendererProcessPlanningComponent(router, _modalService, processPlanningService, toasterService, permissionService, authService) {
        var _this = this;
        this.router = router;
        this._modalService = _modalService;
        this.processPlanningService = processPlanningService;
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.authService = authService;
        this.editProcessPlanningPermission = 1;
        this.deleteProcessPlanningPermission = 1;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserPermission = ele.user_permission;
            }
        });
    }
    CustomRendererProcessPlanningComponent.prototype.agInit = function (params) {
        var _this = this;
        this.params = params;
        this.currentUserPermission.forEach(function (ele) {
            if (ele.form_name === 'Process') {
                if (_this.params.action.radioSelected == 1) {
                    _this.editProcessPlanningPermission = ele.can_edit;
                    _this.deleteProcessPlanningPermission = ele.can_delete;
                }
                else if (_this.params.action.radioSelected == 2) {
                    _this.editProcessPlanningPermission = ele.can_edit_group;
                    _this.deleteProcessPlanningPermission = ele.can_delete_group;
                }
                else if (_this.params.action.radioSelected == 3) {
                    _this.editProcessPlanningPermission = ele.can_edit_all;
                    _this.deleteProcessPlanningPermission = ele.can_delete_all;
                }
            }
        });
    };
    CustomRendererProcessPlanningComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    CustomRendererProcessPlanningComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererProcessPlanningComponent.prototype.viewProcessPlanning = function () {
    };
    CustomRendererProcessPlanningComponent.prototype.onEditProcessPlanning = function () {
        if (this.editProcessPlanningPermission) {
            this.router.navigate([this.params.inRouterLink + this.params.value]);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit process. If you want to edit process ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererProcessPlanningComponent.prototype.onDeleteProcessPlanning = function () {
        var _this = this;
        if (this.deleteProcessPlanningPermission) {
            var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"]);
            modalRef.componentInstance.titleFrom = 'Delete Process Planning ';
            modalRef.componentInstance.message = 'Are you sure you want to delete this process planning?';
            modalRef.result
                .then(function (result) {
                if (result) {
                    var id = _this.params.value;
                    _this.processPlanningService.deleteprocessPlanningById(id).subscribe(function (data) {
                        if (!data[0].error) {
                            _this.params.action.getProcessPlanningData();
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
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete process planning. If you want to delete process planning ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererProcessPlanningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"onEditProcessPlanning()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteProcessPlanning()\"></i>",
            styles: [__webpack_require__(/*! ./view-process-planning.component.scss */ "./src/app/pages/process-planning/view-process-planning/view-process-planning.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"], _theme_services_process_planning_service__WEBPACK_IMPORTED_MODULE_3__["ProcessPlanningService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_6__["PermissionService"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], CustomRendererProcessPlanningComponent);
    return CustomRendererProcessPlanningComponent;
}());



/***/ })

}]);
//# sourceMappingURL=process-planning-process-planning-module.js.map