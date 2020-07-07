(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/@theme/model/batch-class.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/model/batch-class.ts ***!
  \*********************************************/
/*! exports provided: BatchMast, BatchData, BatchWeightMtrDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchMast", function() { return BatchMast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchData", function() { return BatchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchWeightMtrDetail", function() { return BatchWeightMtrDetail; });
var BatchMast = /** @class */ (function () {
    function BatchMast() {
        this.quality_entry_id = '';
    }
    return BatchMast;
}());

var BatchData = /** @class */ (function () {
    function BatchData() {
        this.gr_status = 'unused';
        // this.gr = '';
        this.unit = '';
    }
    return BatchData;
}());

var BatchWeightMtrDetail = /** @class */ (function () {
    function BatchWeightMtrDetail() {
        this.quantity = '';
    }
    return BatchWeightMtrDetail;
}());



/***/ }),

/***/ "./src/app/@theme/model/process-planning-class.ts":
/*!********************************************************!*\
  !*** ./src/app/@theme/model/process-planning-class.ts ***!
  \********************************************************/
/*! exports provided: FunctionObj, TempFunctionObj, WaterDrainFunctionObj, PumpMotorFunctionObj, OperatorMessageObj, DosingFunctionObj, Step, DynamicProcessReq, DynamicProcessRecordReq, ChemicalReq, ProductionPlanningReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionObj", function() { return FunctionObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempFunctionObj", function() { return TempFunctionObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterDrainFunctionObj", function() { return WaterDrainFunctionObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpMotorFunctionObj", function() { return PumpMotorFunctionObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorMessageObj", function() { return OperatorMessageObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DosingFunctionObj", function() { return DosingFunctionObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicProcessReq", function() { return DynamicProcessReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicProcessRecordReq", function() { return DynamicProcessRecordReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChemicalReq", function() { return ChemicalReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionPlanningReq", function() { return ProductionPlanningReq; });
var FunctionObj = /** @class */ (function () {
    function FunctionObj() {
        this.func_value = '';
    }
    return FunctionObj;
}());

var TempFunctionObj = /** @class */ (function () {
    function TempFunctionObj() {
        this.pressure = false;
    }
    return TempFunctionObj;
}());

var WaterDrainFunctionObj = /** @class */ (function () {
    function WaterDrainFunctionObj() {
        this.type = 'water';
        this.water_type = '';
        this.drain_type = '';
        this.fabric_ratio = 0;
        this.jet_level = false;
    }
    return WaterDrainFunctionObj;
}());

var PumpMotorFunctionObj = /** @class */ (function () {
    function PumpMotorFunctionObj() {
    }
    return PumpMotorFunctionObj;
}());

var OperatorMessageObj = /** @class */ (function () {
    function OperatorMessageObj() {
    }
    return OperatorMessageObj;
}());

var DosingFunctionObj = /** @class */ (function () {
    function DosingFunctionObj() {
        this.have_dose = false;
        this.fill_type = 'Pre Fill Machine Water';
        this.dosing_percentage = 'Level 1';
        this.dose_while_heating = false;
        this.dose_type = '';
        this.dosing_chemical = [];
    }
    return DosingFunctionObj;
}());

var Step = /** @class */ (function () {
    function Step() {
    }
    return Step;
}());

var DynamicProcessReq = /** @class */ (function () {
    function DynamicProcessReq() {
    }
    return DynamicProcessReq;
}());

var DynamicProcessRecordReq = /** @class */ (function () {
    function DynamicProcessRecordReq() {
        this.func_value = '';
        this.pressure = false;
        this.water_type = '';
        this.drain_type = '';
        this.jet_level = false;
        this.have_dose = false;
        this.fill_type = 'Pre Fill Machine Water';
        this.dose_while_heating = false;
        this.dose_type = '';
        this.dosing_chemical = [];
    }
    return DynamicProcessRecordReq;
}());

var ChemicalReq = /** @class */ (function () {
    function ChemicalReq() {
    }
    return ChemicalReq;
}());

var ProductionPlanningReq = /** @class */ (function () {
    function ProductionPlanningReq() {
    }
    return ProductionPlanningReq;
}());



/***/ }),

/***/ "./src/app/@theme/services/process-planning.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/@theme/services/process-planning.service.ts ***!
  \*************************************************************/
/*! exports provided: ProcessPlanningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessPlanningService", function() { return ProcessPlanningService; });
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


var ProcessPlanningService = /** @class */ (function () {
    function ProcessPlanningService(apiService) {
        this.apiService = apiService;
    }
    ProcessPlanningService.prototype.getAllprocessPlannings = function (processPlanningReqObj) {
        return this.apiService.apiCaller('post', '/productionPlanningList', processPlanningReqObj);
    };
    ProcessPlanningService.prototype.getprocessPlanningById = function (id) {
        return this.apiService.apiCaller('get', '/getProductionById/' + id);
    };
    ProcessPlanningService.prototype.updateprocessPlanning = function (processPlanning) {
        return this.apiService.apiCaller('post', '/updateProduction', processPlanning);
    };
    ProcessPlanningService.prototype.deleteprocessPlanningById = function (id) {
        return this.apiService.apiCaller('get', '/deleteProduction/' + id);
    };
    ProcessPlanningService.prototype.addProductionPlanning = function (obj) {
        return this.apiService.apiCaller('post', '/addProductionPlanning', obj);
    };
    ProcessPlanningService.prototype.editProductionPlanning = function (obj) {
        return this.apiService.apiCaller('post', '/updateProductionPlanning', obj);
    };
    ProcessPlanningService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ProcessPlanningService);
    return ProcessPlanningService;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MiscellaneousRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousRoutingModule", function() { return MiscellaneousRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _miscellaneous_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous.component */ "./src/app/pages/miscellaneous/miscellaneous.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/pages/miscellaneous/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _miscellaneous_component__WEBPACK_IMPORTED_MODULE_2__["MiscellaneousComponent"],
        children: [{
                path: '404',
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
            }],
    }];
var MiscellaneousRoutingModule = /** @class */ (function () {
    function MiscellaneousRoutingModule() {
    }
    MiscellaneousRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], MiscellaneousRoutingModule);
    return MiscellaneousRoutingModule;
}());

var routedComponents = [
    _miscellaneous_component__WEBPACK_IMPORTED_MODULE_2__["MiscellaneousComponent"],
    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
];


/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous.component.ts ***!
  \****************************************************************/
/*! exports provided: MiscellaneousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousComponent", function() { return MiscellaneousComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MiscellaneousComponent = /** @class */ (function () {
    function MiscellaneousComponent() {
    }
    MiscellaneousComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-miscellaneous',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], MiscellaneousComponent);
    return MiscellaneousComponent;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous.module.ts ***!
  \*************************************************************/
/*! exports provided: MiscellaneousModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousModule", function() { return MiscellaneousModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous-routing.module */ "./src/app/pages/miscellaneous/miscellaneous-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MiscellaneousModule = /** @class */ (function () {
    function MiscellaneousModule() {
    }
    MiscellaneousModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_2__["MiscellaneousRoutingModule"],
            ],
            declarations: _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_2__["routedComponents"].slice(),
        })
    ], MiscellaneousModule);
    return MiscellaneousModule;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/not-found/not-found.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/miscellaneous/not-found/not-found.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <nb-card>\r\n      <nb-card-body>\r\n        <div class=\"flex-centered col-xl-4 col-lg-6 col-md-8 col-sm-12\">\r\n          <h2 class=\"title\">404 Page Not Found</h2>\r\n          <small class=\"sub-title\">The page you were looking for doesn't exist</small>\r\n          <button (click)=\"goToHome()\" type=\"button\" class=\"btn btn-block btn-hero-primary\">\r\n            Take me home\r\n          </button>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/miscellaneous/not-found/not-found.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/miscellaneous/not-found/not-found.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-centered {\n  margin: auto; }\n\nnb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.title {\n  text-align: center; }\n\n.sub-title {\n  text-align: center;\n  display: block;\n  margin-bottom: 3rem; }\n\n.btn {\n  margin-bottom: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWlzY2VsbGFuZW91cy9ub3QtZm91bmQvQzpcXFVzZXJzXFxQQ1xcRGVza3RvcFxcZ2ZsXFxnZmwtZnJvbnQtZW5kXFxuZ3gtd2lyZWZyYW1lL3NyY1xcYXBwXFxwYWdlc1xcbWlzY2VsbGFuZW91c1xcbm90LWZvdW5kXFxub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxxQkFBYTtFQUFiLHFCQUFhO0VBQWIsY0FBYSxFQUNkOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9taXNjZWxsYW5lb3VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jZW50ZXJlZCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbm5iLWNhcmQtYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/miscellaneous/not-found/not-found.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/miscellaneous/not-found/not-found.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(menuService) {
        this.menuService = menuService;
    }
    NotFoundComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-not-found',
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/miscellaneous/not-found/not-found.component.scss")],
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/miscellaneous/not-found/not-found.component.html"),
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbMenuService"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-menu.ts":
/*!*************************************!*\
  !*** ./src/app/pages/pages-menu.ts ***!
  \*************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Party',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Party',
                link: '/pages/party/view-party',
            },
        ],
    },
    {
        title: 'Quality',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Quality',
                link: '/pages/quality/view-quality',
            },
        ],
    },
    {
        title: 'User',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View User',
                link: '/pages/user/view-user',
            },
        ],
    },
    {
        title: 'Fabric In',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Fabric In',
                link: '/pages/fabric-in/view-fabric-in-list',
            },
        ],
    },
    {
        title: 'Batch',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Batch',
                link: '/pages/batch/view-batch-list',
            },
        ],
    },
    {
        title: 'Program',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Program',
                link: '/pages/program/view-program-list',
            },
        ],
    },
    {
        title: 'Process',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Process',
                link: '/pages/process/view-process-list',
            },
        ],
    },
    {
        title: 'Process Planning',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Process Planning',
                link: '/pages/process-planning/view-process-planning-list',
            },
        ],
    },
    {
        title: 'Jet Planning',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Jet Planning',
                link: '/pages/jet-planning',
            },
        ],
    },
    {
        title: 'Shade',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Shade',
                link: '/pages/shade/view-shade-list',
            },
        ],
    },
    {
        title: 'Colour Stock',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Colour Stock',
                link: '/pages/colour-stock/view-colour-stock-list',
            },
        ],
    },
    {
        title: 'Supplier',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Suppliers',
                link: '/pages/supplier/view-supplier-list',
            },
        ],
    },
];


/***/ })

}]);
//# sourceMappingURL=common.js.map