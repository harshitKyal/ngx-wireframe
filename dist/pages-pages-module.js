(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/@theme/guard/batch-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/@theme/guard/batch-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: BatchGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchGuardService", function() { return BatchGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/@theme/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BatchGuardService = /** @class */ (function () {
    function BatchGuardService(router, activateroute, authService, permissionService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.authService = authService;
        this.permissionService = permissionService;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
                _this.currentUserPermission = data.user_permission;
                if (_this.currentUserPermission.length) {
                    _this.currentUserPermission.forEach(function (ele) {
                        if (ele.form_name === 'Batch') {
                            _this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_1__["UserPermission"]();
                            _this.userPermission = ele;
                        }
                    });
                }
            }
        });
    }
    BatchGuardService.prototype.canLoad = function (route) {
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Batch. If you want to View Batch ask admin for permission.');
            if (res) {
            }
            else {
            }
            return false;
        }
    };
    BatchGuardService.prototype.canActivate = function (route, state) {
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Batch. If you want to View Batch ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    BatchGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"]])
    ], BatchGuardService);
    return BatchGuardService;
}());



/***/ }),

/***/ "./src/app/@theme/guard/fabric-in-guard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/@theme/guard/fabric-in-guard.service.ts ***!
  \*********************************************************/
/*! exports provided: FabricInGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricInGuardService", function() { return FabricInGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/@theme/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FabricInGuardService = /** @class */ (function () {
    function FabricInGuardService(router, activateroute, authService, permissionService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.authService = authService;
        this.permissionService = permissionService;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
                _this.currentUserPermission = data.user_permission;
                if (_this.currentUserPermission.length) {
                    _this.currentUserPermission.forEach(function (ele) {
                        if (ele.form_name === 'Fabric In') {
                            _this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_2__["UserPermission"]();
                            _this.userPermission = ele;
                        }
                    });
                }
            }
        });
    }
    FabricInGuardService.prototype.canLoad = function (route) {
        var isLoggedIn = localStorage.getItem('isLogged');
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Fabric In. If you want to View Fabric In ask admin for permission.');
            if (res) {
            }
            else {
            }
            return false;
        }
    };
    FabricInGuardService.prototype.canActivate = function (route, state) {
        var isLoggedIn = localStorage.getItem('isLogged');
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Fabric In. If you want to View Fabric In ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    FabricInGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"]])
    ], FabricInGuardService);
    return FabricInGuardService;
}());



/***/ }),

/***/ "./src/app/@theme/guard/party-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/@theme/guard/party-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: PartyGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyGuardService", function() { return PartyGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/@theme/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PartyGuardService = /** @class */ (function () {
    function PartyGuardService(router, activateroute, permissionService, authService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.permissionService = permissionService;
        this.authService = authService;
        this.currentUserPermission = [];
        this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_2__["UserPermission"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
                _this.currentUserPermission = data.user_permission;
                if (_this.currentUserPermission.length) {
                    _this.currentUserPermission.forEach(function (ele) {
                        if (ele.form_name === 'Party') {
                            _this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_2__["UserPermission"]();
                            _this.userPermission = ele;
                        }
                    });
                }
            }
        });
    }
    PartyGuardService.prototype.canLoad = function (route) {
        var isLoggedIn = localStorage.getItem('isLogged');
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== undefined && this.userPermission && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Party. If you want to View Party ask admin for permission.');
            if (res) {
            }
            else {
            }
            return false;
        }
    };
    PartyGuardService.prototype.canActivate = function (route, state) {
        var isLoggedIn = localStorage.getItem('isLogged');
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Party. If you want to View Party ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    PartyGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], PartyGuardService);
    return PartyGuardService;
}());



/***/ }),

/***/ "./src/app/@theme/guard/quality-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/@theme/guard/quality-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: QualityGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityGuardService", function() { return QualityGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/@theme/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QualityGuardService = /** @class */ (function () {
    function QualityGuardService(router, activateroute, authService, permissionService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.authService = authService;
        this.permissionService = permissionService;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
                _this.currentUserPermission = data.user_permission;
                if (_this.currentUserPermission.length) {
                    _this.currentUserPermission.forEach(function (ele) {
                        if (ele.form_name === 'Quality') {
                            _this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_2__["UserPermission"]();
                            _this.userPermission = ele;
                        }
                    });
                }
            }
        });
    }
    QualityGuardService.prototype.canLoad = function (route) {
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Quality. If you want to View Quality ask admin for permission.');
            if (res) {
            }
            else {
            }
            return false;
        }
    };
    QualityGuardService.prototype.canActivate = function (route, state) {
        var isLoggedIn = localStorage.getItem('isLogged');
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Quality. If you want to View Quality ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    QualityGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"]])
    ], QualityGuardService);
    return QualityGuardService;
}());



/***/ }),

/***/ "./src/app/@theme/guard/shade-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/@theme/guard/shade-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: ShadeGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeGuardService", function() { return ShadeGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/@theme/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShadeGuardService = /** @class */ (function () {
    function ShadeGuardService(router, activateroute, authService, permissionService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.authService = authService;
        this.permissionService = permissionService;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
                _this.currentUserPermission = data.user_permission;
                if (_this.currentUserPermission.length) {
                    _this.currentUserPermission.forEach(function (ele) {
                        if (ele.form_name === 'Shade') {
                            _this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_1__["UserPermission"]();
                            _this.userPermission = ele;
                        }
                    });
                }
            }
        });
    }
    ShadeGuardService.prototype.canLoad = function (route) {
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Shade. If you want to View Shade ask admin for permission.');
            if (res) {
            }
            else {
            }
            return false;
        }
    };
    ShadeGuardService.prototype.canActivate = function (route, state) {
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Shade. If you want to View Shade ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ShadeGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"]])
    ], ShadeGuardService);
    return ShadeGuardService;
}());



/***/ }),

/***/ "./src/app/@theme/guard/supplier-guard.service.ts":
/*!********************************************************!*\
  !*** ./src/app/@theme/guard/supplier-guard.service.ts ***!
  \********************************************************/
/*! exports provided: SupplierGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierGuardService", function() { return SupplierGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/@theme/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SupplierGuardService = /** @class */ (function () {
    function SupplierGuardService(router, activateroute, permissionService, authService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.permissionService = permissionService;
        this.authService = authService;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
                _this.currentUserPermission = data.user_permission;
                if (_this.currentUserPermission.length) {
                    _this.currentUserPermission.forEach(function (ele) {
                        if (ele.form_name === 'Supplier') {
                            _this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_1__["UserPermission"]();
                            _this.userPermission = ele;
                        }
                    });
                }
            }
        });
    }
    SupplierGuardService.prototype.canLoad = function (route) {
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Supplier. If you want to View Supplier ask admin for permission.');
            if (res) {
            }
            else {
            }
            return false;
        }
    };
    SupplierGuardService.prototype.canActivate = function (route, state) {
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Supplier. If you want to View Supplier ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    SupplierGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SupplierGuardService);
    return SupplierGuardService;
}());



/***/ }),

/***/ "./src/app/@theme/guard/user-guard.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@theme/guard/user-guard.service.ts ***!
  \****************************************************/
/*! exports provided: UserGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuardService", function() { return UserGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/@theme/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserGuardService = /** @class */ (function () {
    function UserGuardService(router, activateroute, permissionService, authService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.permissionService = permissionService;
        this.authService = authService;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
                _this.currentUserPermission = data.user_permission;
                if (_this.currentUserPermission.length) {
                    _this.currentUserPermission.forEach(function (ele) {
                        if (ele.form_name === 'User') {
                            _this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_2__["UserPermission"]();
                            _this.userPermission = ele;
                        }
                    });
                }
            }
        });
    }
    UserGuardService.prototype.canLoad = function (route) {
        var isLoggedIn = localStorage.getItem('isLogged');
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View User. If you want to View User ask admin for permission.');
            if (res) {
            }
            else {
            }
            return false;
        }
    };
    UserGuardService.prototype.canActivate = function (route, state) {
        var isLoggedIn = localStorage.getItem('isLogged');
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View User. If you want to View User ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    UserGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UserGuardService);
    return UserGuardService;
}());



/***/ }),

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
        this.current_user_id = null;
        this.user_head_id = null;
        this.group_user_ids = null;
        this.view_own = false;
        this.view_group = false;
        this.view_all = false;
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



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./miscellaneous/not-found/not-found.component */ "./src/app/pages/miscellaneous/not-found/not-found.component.ts");
/* harmony import */ var _theme_guard_fabric_in_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@theme/guard/fabric-in-guard.service */ "./src/app/@theme/guard/fabric-in-guard.service.ts");
/* harmony import */ var _theme_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@theme/guard/user-guard.service */ "./src/app/@theme/guard/user-guard.service.ts");
/* harmony import */ var _theme_guard_party_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@theme/guard/party-guard.service */ "./src/app/@theme/guard/party-guard.service.ts");
/* harmony import */ var _theme_guard_quality_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@theme/guard/quality-guard.service */ "./src/app/@theme/guard/quality-guard.service.ts");
/* harmony import */ var _theme_guard_supplier_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@theme/guard/supplier-guard.service */ "./src/app/@theme/guard/supplier-guard.service.ts");
/* harmony import */ var _theme_guard_shade_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@theme/guard/shade-guard.service */ "./src/app/@theme/guard/shade-guard.service.ts");
/* harmony import */ var _theme_guard_batch_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@theme/guard/batch-guard.service */ "./src/app/@theme/guard/batch-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [{
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [
            {
                path: 'miscellaneous',
                loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
            },
            {
                path: 'party',
                loadChildren: './party/party.module#PartyModule',
                canActivate: [_theme_guard_party_guard_service__WEBPACK_IMPORTED_MODULE_6__["PartyGuardService"]],
                canLoad: [_theme_guard_party_guard_service__WEBPACK_IMPORTED_MODULE_6__["PartyGuardService"]]
            },
            {
                path: 'quality',
                loadChildren: './quality/quality.module#QualityModule',
                canActivate: [_theme_guard_quality_guard_service__WEBPACK_IMPORTED_MODULE_7__["QualityGuardService"]],
                canLoad: [_theme_guard_quality_guard_service__WEBPACK_IMPORTED_MODULE_7__["QualityGuardService"]]
            },
            {
                path: 'user',
                loadChildren: './user/user.module#UserModule',
                canActivate: [_theme_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["UserGuardService"]],
                canLoad: [_theme_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["UserGuardService"]]
            },
            {
                path: 'fabric-in',
                loadChildren: './fabric-in/fabric-in.module#FabricInModule',
                canActivate: [_theme_guard_fabric_in_guard_service__WEBPACK_IMPORTED_MODULE_4__["FabricInGuardService"]],
                canLoad: [_theme_guard_fabric_in_guard_service__WEBPACK_IMPORTED_MODULE_4__["FabricInGuardService"]],
            },
            {
                path: 'batch',
                loadChildren: './batch/batch.module#BatchModule',
                canActivate: [_theme_guard_batch_guard_service__WEBPACK_IMPORTED_MODULE_10__["BatchGuardService"]],
                canLoad: [_theme_guard_batch_guard_service__WEBPACK_IMPORTED_MODULE_10__["BatchGuardService"]],
            },
            {
                path: 'program',
                loadChildren: './program/program.module#ProgramModule',
            },
            {
                path: 'process',
                loadChildren: './process/process.module#ProcessModule',
            },
            {
                path: 'process-planning',
                loadChildren: './process-planning/process-planning.module#ProcessPlanningModule',
            },
            {
                path: 'jet-planning',
                loadChildren: './jet-planning/jet-planning.module#JetPlanningModule',
            },
            {
                path: 'supplier',
                loadChildren: './supplier/supplier.module#SupplierModule',
                canActivate: [_theme_guard_supplier_guard_service__WEBPACK_IMPORTED_MODULE_8__["SupplierGuardService"]],
                canLoad: [_theme_guard_supplier_guard_service__WEBPACK_IMPORTED_MODULE_8__["SupplierGuardService"]],
            },
            {
                path: 'shade',
                loadChildren: './shade/shade.module#ShadeModule',
                canActivate: [_theme_guard_shade_guard_service__WEBPACK_IMPORTED_MODULE_9__["ShadeGuardService"]],
                canLoad: [_theme_guard_shade_guard_service__WEBPACK_IMPORTED_MODULE_9__["ShadeGuardService"]],
            },
            {
                path: 'colour-stock',
                loadChildren: './colour-stock/colour-stock.module#ColourStockModule',
            },
            {
                path: '**',
                component: _miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
            }
        ],
    }];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host /deep/ router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s; }\n@-webkit-keyframes fade {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fade {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host /deep/ router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s; }\n@keyframes fade {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host /deep/ router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s; }\n@keyframes fade {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQzpcXFVzZXJzXFxQQ1xcRGVza3RvcFxcZ2ZsXFxnZmwtZnJvbnQtZW5kXFxuZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXF90aGVtaW5nLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0M6XFxVc2Vyc1xcUENcXERlc2t0b3BcXGdmbFxcZ2ZsLWZyb250LWVuZFxcbmd4LXdpcmVmcmFtZS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0M6XFxVc2Vyc1xcUENcXERlc2t0b3BcXGdmbFxcZ2ZsLWZyb250LWVuZFxcbmd4LXdpcmVmcmFtZS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfZnVuY3Rpb25zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0M6XFxVc2Vyc1xcUENcXERlc2t0b3BcXGdmbFxcZ2ZsLWZyb250LWVuZFxcbmd4LXdpcmVmcmFtZS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFx0aGVtZXNcXF9kZWZhdWx0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0M6XFxVc2Vyc1xcUENcXERlc2t0b3BcXGdmbFxcZ2ZsLWZyb250LWVuZFxcbmd4LXdpcmVmcmFtZS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFx0aGVtZXNcXF9jb3NtaWMuc2NzcyIsInNyYy9hcHAvcGFnZXMvQzpcXFVzZXJzXFxQQ1xcRGVza3RvcFxcZ2ZsXFxnZmwtZnJvbnQtZW5kXFxuZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2NvcnBvcmF0ZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9DOlxcVXNlcnNcXFBDXFxEZXNrdG9wXFxnZmxcXGdmbC1mcm9udC1lbmRcXG5neC13aXJlZnJhbWUvc3JjXFxhcHBcXHBhZ2VzXFxwYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBR0g7O0dBRUc7QUNUSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUN2VEY7Ozs7R0FJRztBQ0pIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FESkg7Ozs7R0FJRztBQXNLSDs7OztHQUlHO0FBc0JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUhFO0FHdlRGOzs7O0dBSUc7QUZKSDs7OztHQUlHO0FESkg7Ozs7R0FJRztBQXNLSDs7OztHQUlHO0FBc0JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUhFO0FFdlRGOzs7O0dBSUc7QURKSDs7OztHQUlHO0FESkg7Ozs7R0FJRztBQXNLSDs7OztHQUlHO0FBc0JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUhFO0FJdlRGOzs7O0dBSUc7QUhKSDs7OztHQUlHO0FESkg7Ozs7R0FJRztBQXNLSDs7OztHQUlHO0FBc0JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUhFO0FFdlRGOzs7O0dBSUc7QURKSDs7OztHQUlHO0FESkg7Ozs7R0FJRztBQXNLSDs7OztHQUlHO0FBc0JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUhFO0FEck1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbUJFO0FNbElKO0VBQ0UsZUFBYztFQUNkLDJCQUFrQjtVQUFsQixtQkFBa0IsRUFXbkI7QUFUQztFQUNFO0lBQ0UsV0FBVSxFQUFBO0VBR1o7SUFDRSxXQUFVLEVBQUEsRUFBQTtBQU5kO0VBQ0U7SUFDRSxXQUFVLEVBQUE7RUFHWjtJQUNFLFdBQVUsRUFBQSxFQUFBO0FOcUdkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbUJFO0FNbElKO0VBQ0UsZUFBYztFQUNkLDJCQUFrQjtVQUFsQixtQkFBa0IsRUFXbkI7QUFUQztFQUNFO0lBQ0UsV0FBVSxFQUFBO0VBR1o7SUFDRSxXQUFVLEVBQUEsRUFBQTtBTnFHZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1CRTtBTWxJSjtFQUNFLGVBQWM7RUFDZCwyQkFBa0I7VUFBbEIsbUJBQWtCLEVBV25CO0FBVEM7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUdaO0lBQ0UsV0FBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuXG4vKipcbiAqIFRoaXMgaXMgYSBzdGFydGluZyBwb2ludCB3aGVyZSB3ZSBkZWNsYXJlIHRoZSBtYXBzIG9mIHRoZW1lcyBhbmQgZ2xvYmFsbHkgYXZhaWxhYmxlIGZ1bmN0aW9ucy9taXhpbnNcbiAqL1xuXG5AaW1wb3J0ICdjb3JlL21peGlucyc7XG5AaW1wb3J0ICdjb3JlL2Z1bmN0aW9ucyc7XG5cbiRuYi1lbmFibGVkLXRoZW1lczogKCkgIWdsb2JhbDtcbiRuYi1lbmFibGUtY3NzLXZhcmlhYmxlczogZmFsc2UgIWdsb2JhbDtcblxuJG5iLXRoZW1lczogKCkgIWdsb2JhbDtcbiRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogKCkgIWdsb2JhbDtcbiRuYi10aGVtZXMtZXhwb3J0OiAoKSAhZ2xvYmFsO1xuXG5AZnVuY3Rpb24gbmItdGhlbWUoJGtleSkge1xuICBAcmV0dXJuIG1hcC1nZXQoJHRoZW1lLCAka2V5KTtcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC12YWx1ZSgkdGhlbWUsICRrZXksICR2YWx1ZSkge1xuICBAaWYgKHR5cGUtb2YoJHZhbHVlKSA9PSAnc3RyaW5nJykge1xuICAgICR0bXA6IG1hcC1nZXQoJHRoZW1lLCAkdmFsdWUpO1xuXG4gICAgQGlmICgkdG1wICE9IG51bGwpIHtcbiAgICAgIEByZXR1cm4gbmItZ2V0LXZhbHVlKCR0aGVtZSwgJHZhbHVlLCAkdG1wKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIG1hcC1nZXQoJHRoZW1lLCAka2V5KTtcbn1cblxuQGZ1bmN0aW9uIGNvbnZlcnQtdG8tY3NzLXZhcmlhYmxlcygkdmFyaWFibGVzKSB7XG4gICRyZXN1bHQ6ICgpO1xuICBAZWFjaCAkdmFyLCAkdmFsdWUgaW4gJHZhcmlhYmxlcyB7XG4gICAgJHJlc3VsdDogbWFwLXNldCgkcmVzdWx0LCAkdmFyLCAnLS12YXIoI3skdmFyfSknKTtcbiAgfVxuXG4gIEBkZWJ1ZyAkcmVzdWx0O1xuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbkBmdW5jdGlvbiBzZXQtZ2xvYmFsLXRoZW1lLXZhcnMoJHRoZW1lLCAkdGhlbWUtbmFtZSkge1xuICAkdGhlbWU6ICR0aGVtZSAhZ2xvYmFsO1xuICAkdGhlbWUtbmFtZTogJHRoZW1lLW5hbWUgIWdsb2JhbDtcbiAgQGlmICgkbmItZW5hYmxlLWNzcy12YXJpYWJsZXMpIHtcbiAgICAkdGhlbWU6IGNvbnZlcnQtdG8tY3NzLXZhcmlhYmxlcygkdGhlbWUpICFnbG9iYWw7XG4gIH1cbiAgQHJldHVybiAkdGhlbWU7XG59XG5cbkBmdW5jdGlvbiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsICRuYW1lLCAkZGVmYXVsdDogbnVsbCkge1xuXG4gICR0aGVtZS1kYXRhOiAoKTtcblxuXG4gIEBpZiAoJGRlZmF1bHQgIT0gbnVsbCkge1xuXG4gICAgJHRoZW1lOiBtYXAtbWVyZ2UobWFwLWdldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRkZWZhdWx0KSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQ6IG1hcC1zZXQoJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkLCAkbmFtZSwgJHRoZW1lKSAhZ2xvYmFsO1xuXG4gICAgJHRoZW1lLWRhdGE6IG1hcC1zZXQoJHRoZW1lLWRhdGEsIGRhdGEsICR0aGVtZSk7XG4gICAgJG5iLXRoZW1lcy1leHBvcnQ6IG1hcC1zZXQoJG5iLXRoZW1lcy1leHBvcnQsICRuYW1lLCBtYXAtc2V0KCR0aGVtZS1kYXRhLCBwYXJlbnQsICRkZWZhdWx0KSkgIWdsb2JhbDtcblxuICB9IEBlbHNlIHtcbiAgICAkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQ6IG1hcC1zZXQoJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkLCAkbmFtZSwgJHRoZW1lKSAhZ2xvYmFsO1xuXG4gICAgJHRoZW1lLWRhdGE6IG1hcC1zZXQoJHRoZW1lLWRhdGEsIGRhdGEsICR0aGVtZSk7XG4gICAgJG5iLXRoZW1lcy1leHBvcnQ6IG1hcC1zZXQoJG5iLXRoZW1lcy1leHBvcnQsICRuYW1lLCBtYXAtc2V0KCR0aGVtZS1kYXRhLCBwYXJlbnQsIG51bGwpKSAhZ2xvYmFsO1xuICB9XG5cbiAgJHRoZW1lLXBhcnNlZDogKCk7XG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkdGhlbWUge1xuICAgICR0aGVtZS1wYXJzZWQ6IG1hcC1zZXQoJHRoZW1lLXBhcnNlZCwgJGtleSwgbmItZ2V0LXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSk7XG4gIH1cblxuICAvLyBlbmFibGUgcmlnaHQgYXdheSB3aGVuIGluc3RhbGxlZFxuICAkdGhlbWUtcGFyc2VkOiBzZXQtZ2xvYmFsLXRoZW1lLXZhcnMoJHRoZW1lLXBhcnNlZCwgJG5hbWUpO1xuICBAcmV0dXJuIG1hcC1zZXQoJG5iLXRoZW1lcywgJG5hbWUsICR0aGVtZS1wYXJzZWQpO1xufVxuXG5AZnVuY3Rpb24gZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuICAkdGhlbWVzLXRvLWluc3RhbGw6ICgpO1xuXG4gIEBpZiAobGVuZ3RoKCRuYi1lbmFibGVkLXRoZW1lcykgPiAwKSB7XG4gICAgQGVhY2ggJHRoZW1lLW5hbWUgaW4gJG5iLWVuYWJsZWQtdGhlbWVzIHtcbiAgICAgICR0aGVtZXMtdG8taW5zdGFsbDogbWFwLXNldCgkdGhlbWVzLXRvLWluc3RhbGwsICR0aGVtZS1uYW1lLCBtYXAtZ2V0KCRuYi10aGVtZXMsICR0aGVtZS1uYW1lKSk7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICAkdGhlbWVzLXRvLWluc3RhbGw6ICRuYi10aGVtZXM7XG4gIH1cblxuICBAcmV0dXJuICR0aGVtZXMtdG8taW5zdGFsbDtcbn1cblxuQG1peGluIGluc3RhbGwtY3NzLXZhcmlhYmxlcygkdGhlbWUtbmFtZSwgJHZhcmlhYmxlcykge1xuICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgIEBlYWNoICR2YXIsICR2YWx1ZSBpbiAkdmFyaWFibGVzIHtcbiAgICAgIC0tI3skdmFyfTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUT0RPOiB3ZSBoaWRlIDpob3N0IGluc2lkZSBvZiBpdCB3aGljaCBpcyBub3Qgb2J2aW91c1xuQG1peGluIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xuXG4gICR0aGVtZXMtdG8taW5zdGFsbDogZ2V0LWVuYWJsZWQtdGhlbWVzKCk7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUsICR0aGVtZSBpbiAkdGhlbWVzLXRvLWluc3RhbGwge1xuICAgIC8qXG4gICAgICA6aG9zdCBjYW4gYmUgcHJlZml4ZWRcbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICAgICAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSA6aG9zdCB7XG4gICAgICAkdGhlbWU6IHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUsICR0aGVtZS1uYW1lKTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItZm9yLXRoZW1lKCRuYW1lKSB7XG4gIEBpZiAoJHRoZW1lLW5hbWUgPT0gJG5hbWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItZXhjZXB0LXRoZW1lKCRuYW1lKSB7XG4gIEBpZiAoJHRoZW1lLW5hbWUgIT0gJG5hbWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBUT0RPOiBhbm90aGVyIG1peGluZyBmb3IgdGhlIGFsbW9zdCBzYW1lIHRoaW5nXG5AbWl4aW4gbmItaW5zdGFsbC1yb290LWNvbXBvbmVudCgpIHtcbiAgQHdhcm4gJ2BuYi1pbnN0YWxsLXJvb3QtY29tcG9uZW50YCBpcyBkZXByaWNhdGVkLCByZXBsYWNlIHdpdGggYG5iLWluc3RhbGwtY29tcG9uZW50YCwgYXMgYGJvZHlgIGlzIHJvb3QgZWxlbWVudCBub3cnO1xuXG4gIEBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWdsb2JhbCgpIHtcbiAgJHRoZW1lcy10by1pbnN0YWxsOiBnZXQtZW5hYmxlZC10aGVtZXMoKTtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSwgJHRoZW1lIGluICR0aGVtZXMtdG8taW5zdGFsbCB7XG4gICAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IHtcbiAgICAgICR0aGVtZTogc2V0LWdsb2JhbC10aGVtZS12YXJzKCR0aGVtZSwgJHRoZW1lLW5hbWUpO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1zY3JvbGxiYXJzKCRmZywgJGJnLCAkc2l6ZSwgJGJvcmRlci1yYWRpdXM6ICRzaXplIC8gMikge1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRmZztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gIH1cblxuICAvLyBUT0RPOiByZW1vdmVcbiAgLy8gRm9yIEludGVybmV0IEV4cGxvcmVyXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkZmc7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJnO1xufVxuXG5AbWl4aW4gbmItcmFkaWFsLWdyYWRpZW50KCRjb2xvci0xLCAkY29sb3ItMiwgJGNvbG9yLTMpIHtcbiAgYmFja2dyb3VuZDogJGNvbG9yLTI7IC8qIE9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChib3R0b20sIGVsbGlwc2UgY292ZXIsICRjb2xvci0xIDAlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0yIDQ1JSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMyAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoYm90dG9tLCBlbGxpcHNlIGNvdmVyLCAkY29sb3ItMSAwJSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMiA0NSUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTMgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGJvdHRvbSwgJGNvbG9yLTEgMCUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTIgNDUlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0zIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgZmlsdGVyOiBwcm9naWQ6ZHhpbWFnZXRyYW5zZm9ybS5taWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nJGNvbG9yLTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRDb2xvcnN0cj0nJGNvbG9yLTMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmFkaWVudFR5cGU9MSk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cbn1cblxuQG1peGluIG5iLXJpZ2h0LWdyYWRpZW50KCRsZWZ0LWNvbG9yLCAkcmlnaHQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkbGVmdC1jb2xvciwgJHJpZ2h0LWNvbG9yKTtcbn1cblxuQG1peGluIG5iLWhlYWRpbmdzKCRmcm9tOiAxLCAkdG86IDYpIHtcbiAgQGZvciAkaSBmcm9tICRmcm9tIHRocm91Z2ggJHRvIHtcbiAgICBoI3skaX0ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXItaG9yaXpvbnRhbC1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGxlZnQ6IDUwJTtcbn1cblxuQG1peGluIGluc3RhbGwtdGh1bWIoKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci10aHVtYidcbiAgICAnOjotbW96LXJhbmdlLXRodW1iJ1xuICAgICc6Oi1tcy10aHVtYidcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtdHJhY2soKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjaydcbiAgICAnOjotbW96LXJhbmdlLXRyYWNrJ1xuICAgICc6Oi1tcy10cmFjaydcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplKSB7XG4gICRwbGFjZWhvbGRlci1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJ1xuICAgICc6Oi1tb3otcGxhY2Vob2xkZXInXG4gICAgJzotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1zLWlucHV0LXBsYWNlaG9sZGVyJ1xuICApO1xuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpO1xuICB9XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICRwbGFjZWhvbGRlci1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplKTtcbiAgICB9XG5cbiAgICAmOmZvY3VzI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpIHtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlci1mb2N1cygpIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG5cbkBtaXhpbiBhbmltYXRpb24oJGFuaW1hdGUuLi4pIHtcbiAgJG1heDogbGVuZ3RoKCRhbmltYXRlKTtcbiAgJGFuaW1hdGlvbnM6ICcnO1xuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJG1heCB7XG4gICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyBudGgoJGFuaW1hdGUsICRpKX07XG5cbiAgICBAaWYgJGkgPCAkbWF4IHtcbiAgICAgICRhbmltYXRpb25zOiAjeyRhbmltYXRpb25zICsgJywgJ307XG4gICAgfVxuICB9XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9ucztcbiAgLW1vei1hbmltYXRpb246ICAgICRhbmltYXRpb25zO1xuICAtby1hbmltYXRpb246ICAgICAgJGFuaW1hdGlvbnM7XG4gIGFuaW1hdGlvbjogICAgICAgICAkYW5pbWF0aW9ucztcbn1cblxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uTmFtZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbW96LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1vLWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuQG1peGluIGJ0bi1wdWxzZSgkbmFtZSwgJGNvbG9yKSB7XG4gICYuYnRuLXB1bHNlIHtcbiAgICBAaW5jbHVkZSBhbmltYXRpb24oYnRuLSN7JG5hbWV9LXB1bHNlIDEuNXMgaW5maW5pdGUpO1xuICB9XG5cbiAgQGluY2x1ZGUga2V5ZnJhbWVzKGJ0bi0jeyRuYW1lfS1wdWxzZSkge1xuICAgIDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMXJlbSAwICRjb2xvcjtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgb3BhY2l0eTogbmItdGhlbWUoYnRuLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgIH1cbiAgfVxufVxuXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG5cbkBtaXhpbiBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCRzZWxlY3RvciwgJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICAjeyRzZWxlY3Rvcn0gJiB7XG4gICAgQGlmICRwcm9wICE9IG51bGwge1xuICAgICAgI3skcHJvcH06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItbHRyKCRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgQGluY2x1ZGUgX3ByZXBlbmQtd2l0aC1zZWxlY3RvcignW2Rpcj1sdHJdJywgJHByb3AsICR2YWx1ZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1ydGwoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPXJ0bF0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH07XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbi8vLyBTbGlnaHRseSBsaWdodGVuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHRpbnRcbi8vLyBAcGFyYW0ge051bWJlcn0gJHBlcmNlbnRhZ2UgLSBwZXJjZW50YWdlIG9mIGAkY29sb3JgIGluIHJldHVybmVkIGNvbG9yXG4vLy8gQHJldHVybiB7Q29sb3J9XG5AZnVuY3Rpb24gdGludCgkY29sb3IsICRwZXJjZW50YWdlKSB7XG4gIEByZXR1cm4gbWl4KHdoaXRlLCAkY29sb3IsICRwZXJjZW50YWdlKTtcbn1cblxuLy8vIFNsaWdodGx5IGRhcmtlbiBhIGNvbG9yXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgLSBjb2xvciB0byBzaGFkZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiBzaGFkZSgkY29sb3IsICRwZXJjZW50YWdlKSB7XG4gIEByZXR1cm4gbWl4KGJsYWNrLCAkY29sb3IsICRwZXJjZW50YWdlKTtcbn1cblxuQGZ1bmN0aW9uIG1hcC1zZXQoJG1hcCwgJGtleSwgJHZhbHVlOiBudWxsKSB7XG4gICRuZXc6ICgka2V5OiAkdmFsdWUpO1xuICBAcmV0dXJuIG1hcC1tZXJnZSgkbWFwLCAkbmV3KTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuXG4kdGhlbWU6IChcbiAgZm9udC1tYWluOiB1bnF1b3RlKCdcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZicpLFxuICBmb250LXNlY29uZGFyeTogZm9udC1tYWluLFxuXG4gIGZvbnQtd2VpZ2h0LXRoaW46IDIwMCxcbiAgZm9udC13ZWlnaHQtbGlnaHQ6IDMwMCxcbiAgZm9udC13ZWlnaHQtbm9ybWFsOiA0MDAsXG4gIGZvbnQtd2VpZ2h0LWJvbGRlcjogNTAwLFxuICBmb250LXdlaWdodC1ib2xkOiA2MDAsXG4gIGZvbnQtd2VpZ2h0LXVsdHJhLWJvbGQ6IDgwMCxcblxuICAvLyBUT0RPOiB1c2UgaXQgYXMgYSBkZWZhdWx0IGZvbnQtc2l6ZVxuICBiYXNlLWZvbnQtc2l6ZTogMTZweCxcblxuICBmb250LXNpemUteGxnOiAxLjI1cmVtLFxuICBmb250LXNpemUtbGc6IDEuMTI1cmVtLFxuICBmb250LXNpemU6IDFyZW0sXG4gIGZvbnQtc2l6ZS1zbTogMC44NzVyZW0sXG4gIGZvbnQtc2l6ZS14czogMC43NXJlbSxcblxuICByYWRpdXM6IDAuMzc1cmVtLFxuICBwYWRkaW5nOiAxLjI1cmVtLFxuICBtYXJnaW46IDEuNXJlbSxcbiAgbGluZS1oZWlnaHQ6IDEuMjUsXG5cbiAgY29sb3ItYmc6ICNmZmZmZmYsXG4gIGNvbG9yLWJnLWFjdGl2ZTogI2U5ZWRmMixcbiAgY29sb3ItZmc6ICNhNGFiYjMsXG4gIGNvbG9yLWZnLWhlYWRpbmc6ICMyYTJhMmEsXG4gIGNvbG9yLWZnLXRleHQ6ICM0YjRiNGIsXG4gIGNvbG9yLWZnLWhpZ2hsaWdodDogIzQwZGM3ZSxcblxuICBzZXBhcmF0b3I6ICNlYmVlZjIsXG5cbiAgY29sb3ItZ3JheTogcmdiYSg4MSwgMTEzLCAxNjUsIDAuMTUpLFxuICBjb2xvci1uZXV0cmFsOiB0cmFuc3BhcmVudCxcbiAgY29sb3Itd2hpdGU6ICNmZmZmZmYsXG4gIGNvbG9yLWRpc2FibGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG5cbiAgY29sb3ItcHJpbWFyeTogIzhhN2ZmZixcbiAgY29sb3Itc3VjY2VzczogIzQwZGM3ZSxcbiAgY29sb3ItaW5mbzogIzRjYTZmZixcbiAgY29sb3Itd2FybmluZzogI2ZmYTEwMCxcbiAgY29sb3ItZGFuZ2VyOiAjZmY0YzZhLFxuXG4gIC8vIFRPRE86IG1vdmUgdG8gY29uc3RhbnRzXG4gIHNvY2lhbC1jb2xvci1mYWNlYm9vazogIzNiNTk5OCxcbiAgc29jaWFsLWNvbG9yLXR3aXR0ZXI6ICM1NWFjZWUsXG4gIHNvY2lhbC1jb2xvci1nb29nbGU6ICNkZDRiMzksXG4gIHNvY2lhbC1jb2xvci1saW5rZWRpbjogIzAxNzdiNSxcbiAgc29jaWFsLWNvbG9yLWdpdGh1YjogIzZiNmI2YixcbiAgc29jaWFsLWNvbG9yLXN0YWNrb3ZlcmZsb3c6ICMyZjk2ZTgsXG4gIHNvY2lhbC1jb2xvci1kcmliYmxlOiAjZjI2Nzk4LFxuICBzb2NpYWwtY29sb3ItYmVoYW5jZTogIzAwOTNmYSxcblxuICBib3JkZXItY29sb3I6IGNvbG9yLWdyYXksXG4gIHNoYWRvdzogMCAycHggMTJweCAwICNkZmUzZWIsXG5cbiAgbGluay1jb2xvcjogIzNkY2M2ZCxcbiAgbGluay1jb2xvci1ob3ZlcjogIzJlZTU2YixcbiAgbGluay1jb2xvci12aXNpdGVkOiBsaW5rLWNvbG9yLFxuXG4gIHNjcm9sbGJhci1mZzogI2RhZGFkYSxcbiAgc2Nyb2xsYmFyLWJnOiAjZjJmMmYyLFxuICBzY3JvbGxiYXItd2lkdGg6IDVweCxcbiAgc2Nyb2xsYmFyLXRodW1iLXJhZGl1czogMi41cHgsXG5cbiAgcmFkaWFsLWdyYWRpZW50OiBub25lLFxuICBsaW5lYXItZ3JhZGllbnQ6IG5vbmUsXG5cbiAgY2FyZC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgY2FyZC1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGNhcmQtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgY2FyZC1mZzogY29sb3ItZmcsIC8vIFRPRE86IG5vdCB1c2VkXG4gIGNhcmQtZmctdGV4dDogY29sb3ItZmctdGV4dCxcbiAgY2FyZC1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLCAvLyBUT0RPOiBub3QgdXNlZFxuICBjYXJkLWJnOiBjb2xvci1iZyxcbiAgY2FyZC1oZWlnaHQteHhzbWFsbDogOTZweCxcbiAgY2FyZC1oZWlnaHQteHNtYWxsOiAyMTZweCxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDMzNnB4LFxuICBjYXJkLWhlaWdodC1tZWRpdW06IDQ1NnB4LFxuICBjYXJkLWhlaWdodC1sYXJnZTogNTc2cHgsXG4gIGNhcmQtaGVpZ2h0LXhsYXJnZTogNjk2cHgsXG4gIGNhcmQtaGVpZ2h0LXh4bGFyZ2U6IDgxNnB4LFxuICBjYXJkLXNoYWRvdzogc2hhZG93LFxuICBjYXJkLWJvcmRlci13aWR0aDogMCxcbiAgY2FyZC1ib3JkZXItdHlwZTogc29saWQsXG4gIGNhcmQtYm9yZGVyLWNvbG9yOiBjb2xvci1iZyxcbiAgY2FyZC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGNhcmQtcGFkZGluZzogcGFkZGluZyxcbiAgY2FyZC1tYXJnaW46IG1hcmdpbixcbiAgY2FyZC1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBjYXJkLWhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgY2FyZC1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG4gIGNhcmQtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGNhcmQtaGVhZGVyLWZnOiBjb2xvci1mZywgLy8gVE9ETzogbm90IHVzZWRcbiAgY2FyZC1oZWFkZXItZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZyxcbiAgY2FyZC1oZWFkZXItYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgY2FyZC1oZWFkZXItYWN0aXZlLWZnOiBjb2xvci1iZyxcbiAgY2FyZC1oZWFkZXItZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBjYXJkLWhlYWRlci1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBjYXJkLWhlYWRlci1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBjYXJkLWhlYWRlci1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjYXJkLWhlYWRlci13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBjYXJkLWhlYWRlci1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcbiAgY2FyZC1oZWFkZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNhcmQtaGVhZGVyLWJvcmRlci10eXBlOiBzb2xpZCxcbiAgY2FyZC1oZWFkZXItYm9yZGVyLWNvbG9yOiBjYXJkLXNlcGFyYXRvcixcblxuICBoZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBoZWFkZXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIGhlYWRlci1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGhlYWRlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgaGVhZGVyLWJnOiBjb2xvci1iZyxcbiAgaGVhZGVyLWhlaWdodDogNC43NXJlbSxcbiAgaGVhZGVyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGhlYWRlci1zaGFkb3c6IHNoYWRvdyxcblxuICBmb290ZXItaGVpZ2h0OiA0LjcyNXJlbSxcbiAgZm9vdGVyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGZvb3Rlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgZm9vdGVyLWZnLWhpZ2hsaWdodDogY29sb3ItZmctaGVhZGluZyxcbiAgZm9vdGVyLWJnOiBjb2xvci1iZyxcbiAgZm9vdGVyLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBmb290ZXItc2hhZG93OiBzaGFkb3csXG5cbiAgbGF5b3V0LWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIGxheW91dC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbGF5b3V0LWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgbGF5b3V0LWZnOiBjb2xvci1mZyxcbiAgbGF5b3V0LWJnOiAjZWJlZmY1LFxuICBsYXlvdXQtbWluLWhlaWdodDogMTAwdmgsXG4gIGxheW91dC1jb250ZW50LXdpZHRoOiA5MDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1pbi13aWR0aDogMzAwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1tYXgtd2lkdGg6IDE5MjBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLWJnOiBsYXlvdXQtYmcsXG4gIGxheW91dC13aW5kb3ctbW9kZS1wYWRkaW5nLXRvcDogNC43NXJlbSxcbiAgbGF5b3V0LXdpbmRvdy1zaGFkb3c6IHNoYWRvdyxcbiAgbGF5b3V0LXBhZGRpbmc6IDIuMjVyZW0gMi4yNXJlbSAwLjc1cmVtLFxuICBsYXlvdXQtbWVkaXVtLXBhZGRpbmc6IDEuNXJlbSAxLjVyZW0gMC41cmVtLFxuICBsYXlvdXQtc21hbGwtcGFkZGluZzogMXJlbSAxcmVtIDAsXG5cbiAgc2lkZWJhci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgc2lkZWJhci1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIHNpZGViYXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHNpZGViYXItYmc6IGNvbG9yLWJnLFxuICBzaWRlYmFyLWhlaWdodDogMTAwdmgsXG4gIHNpZGViYXItd2lkdGg6IDE2cmVtLFxuICBzaWRlYmFyLXdpZHRoLWNvbXBhY3Q6IDMuNXJlbSxcbiAgc2lkZWJhci1wYWRkaW5nOiBwYWRkaW5nLFxuICBzaWRlYmFyLWhlYWRlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1mb290ZXItaGVpZ2h0OiAzLjVyZW0sXG4gIHNpZGViYXItc2hhZG93OiBzaGFkb3csXG5cbiAgbWVudS1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIG1lbnUtZm9udC1zaXplOiBmb250LXNpemUsXG4gIG1lbnUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbWVudS1mZzogY29sb3ItZmctdGV4dCxcbiAgbWVudS1iZzogY29sb3ItYmcsXG4gIG1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LWFjdGl2ZS1iZzogY29sb3ItYmcsXG4gIG1lbnUtYWN0aXZlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuXG4gIG1lbnUtc3VibWVudS1iZzogY29sb3ItYmcsXG4gIG1lbnUtc3VibWVudS1mZzogY29sb3ItZmctdGV4dCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1iZzogY29sb3ItYmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1mZy1oaWdobGlnaHQsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtc2hhZG93OiBub25lLFxuICBtZW51LXN1Ym1lbnUtaG92ZXItZmc6IG1lbnUtc3VibWVudS1hY3RpdmUtZmcsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1iZzogbWVudS1zdWJtZW51LWJnLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItd2lkdGg6IDAuMTI1cmVtLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIG1lbnUtc3VibWVudS1pdGVtLXBhZGRpbmc6IDAuNXJlbSAxcmVtLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1jb250YWluZXItcGFkZGluZzogMCAxLjI1cmVtLFxuICBtZW51LXN1Ym1lbnUtcGFkZGluZzogMC41cmVtLFxuXG4gIG1lbnUtZ3JvdXAtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbWVudS1ncm91cC1mb250LXNpemU6IDAuODc1cmVtLFxuICBtZW51LWdyb3VwLWZnOiBjb2xvci1mZyxcbiAgbWVudS1ncm91cC1wYWRkaW5nOiAxcmVtIDEuMjVyZW0sXG4gIG1lbnUtaXRlbS1wYWRkaW5nOiAwLjY3NXJlbSAwLjc1cmVtLFxuICBtZW51LWl0ZW0tc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIG1lbnUtaWNvbi1mb250LXNpemU6IDIuNXJlbSxcbiAgbWVudS1pY29uLW1hcmdpbjogMCAwLjI1cmVtIDAsXG4gIG1lbnUtaWNvbi1jb2xvcjogY29sb3ItZmcsXG4gIG1lbnUtaWNvbi1hY3RpdmUtY29sb3I6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgdGFicy1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIHRhYnMtZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIHRhYnMtY29udGVudC1mb250LWZhbWlseTogZm9udC1tYWluLFxuICB0YWJzLWNvbnRlbnQtZm9udC1zaXplOiBmb250LXNpemUsXG4gIHRhYnMtYWN0aXZlLWJnOiB0cmFuc3BhcmVudCxcbiAgdGFicy1hY3RpdmUtZm9udC13ZWlnaHQ6IGNhcmQtaGVhZGVyLWZvbnQtd2VpZ2h0LFxuICB0YWJzLXBhZGRpbmc6IHBhZGRpbmcsXG4gIHRhYnMtY29udGVudC1wYWRkaW5nOiAwLFxuICB0YWJzLWhlYWRlci1iZzogdHJhbnNwYXJlbnQsXG4gIHRhYnMtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIHRhYnMtZmc6IGNvbG9yLWZnLFxuICB0YWJzLWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIHRhYnMtZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZyxcbiAgdGFicy1iZzogdHJhbnNwYXJlbnQsXG4gIHRhYnMtc2VsZWN0ZWQ6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRhYnMtc2VsZWN0ZWQtc2Vjb25kLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICB0YWJzLXNlbGVjdGVkLWRlZ3JlZXM6IDAsXG4gIHRhYnMtaWNvbi1vbmx5LW1heC13aWR0aDogNTc2cHgsXG5cbiAgcm91dGUtdGFicy1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIHJvdXRlLXRhYnMtZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIHJvdXRlLXRhYnMtYWN0aXZlLWJnOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFicy1hY3RpdmUtZm9udC13ZWlnaHQ6IGNhcmQtaGVhZGVyLWZvbnQtd2VpZ2h0LFxuICByb3V0ZS10YWJzLXBhZGRpbmc6IHBhZGRpbmcsXG4gIHJvdXRlLXRhYnMtaGVhZGVyLWJnOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFicy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgcm91dGUtdGFicy1mZzogY29sb3ItZmcsXG4gIHJvdXRlLXRhYnMtZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZyxcbiAgcm91dGUtdGFicy1iZzogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnMtc2VsZWN0ZWQ6IGNvbG9yLXN1Y2Nlc3MsXG4gIHJvdXRlLXRhYnMtaWNvbi1vbmx5LW1heC13aWR0aDogNTc2cHgsXG5cbiAgdXNlci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgdXNlci1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIHVzZXItYmc6IGNvbG9yLWJnLFxuICB1c2VyLWZnOiBjb2xvci1mZyxcbiAgdXNlci1mZy1oaWdobGlnaHQ6ICNiY2MzY2MsXG4gIHVzZXItZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBmb250LXNlY29uZGFyeSxcbiAgdXNlci1zaXplLXNtYWxsOiAxLjVyZW0sXG4gIHVzZXItc2l6ZS1tZWRpdW06IDIuNXJlbSxcbiAgdXNlci1zaXplLWxhcmdlOiAzLjI1cmVtLFxuICB1c2VyLXNpemUteGxhcmdlOiA0cmVtLFxuXG4gIHBvcG92ZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHBvcG92ZXItYmc6IGNvbG9yLWJnLFxuICBwb3BvdmVyLWJvcmRlcjogY29sb3Itc3VjY2VzcyxcbiAgcG9wb3Zlci1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIHBvcG92ZXItc2hhZG93OiBub25lLFxuICBwb3BvdmVyLWFycm93LXNpemU6IDExcHgsXG5cbiAgY29udGV4dC1tZW51LWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjb250ZXh0LW1lbnUtYmc6IGNvbG9yLWJnLFxuICBjb250ZXh0LW1lbnUtYWN0aXZlLWZnOiBjb2xvci13aGl0ZSxcbiAgY29udGV4dC1tZW51LWFjdGl2ZS1iZzogY29sb3Itc3VjY2VzcyxcbiAgY29udGV4dC1tZW51LWJvcmRlcjogY29sb3Itc3VjY2VzcyxcbiAgY29udGV4dC1tZW51LWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY29udGV4dC1tZW51LXNoYWRvdzogbm9uZSxcbiAgY29udGV4dC1tZW51LWFycm93LXNpemU6IDExcHgsXG5cbiAgYWN0aW9ucy1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGFjdGlvbnMtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBhY3Rpb25zLWZnOiBjb2xvci1mZyxcbiAgYWN0aW9ucy1iZzogY29sb3ItYmcsXG4gIGFjdGlvbnMtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGFjdGlvbnMtcGFkZGluZzogcGFkZGluZyxcbiAgYWN0aW9ucy1zaXplLXNtYWxsOiAxLjVyZW0sXG4gIGFjdGlvbnMtc2l6ZS1tZWRpdW06IDIuMjVyZW0sXG4gIGFjdGlvbnMtc2l6ZS1sYXJnZTogMy41cmVtLFxuXG4gIHNlYXJjaC1idG4tb3Blbi1mZzogY29sb3ItZmcsXG4gIHNlYXJjaC1idG4tY2xvc2UtZmc6XHRjb2xvci1mZyxcbiAgc2VhcmNoLWJnOiBsYXlvdXQtYmcsXG4gIHNlYXJjaC1iZy1zZWNvbmRhcnk6IGNvbG9yLWZnLFxuICBzZWFyY2gtdGV4dDogY29sb3ItZmctaGVhZGluZyxcbiAgc2VhcmNoLWluZm86IGNvbG9yLWZnLFxuICBzZWFyY2gtZGFzaDogY29sb3ItZmcsXG4gIHNlYXJjaC1wbGFjZWhvbGRlcjogY29sb3ItZmcsXG5cbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWJnOiBjb2xvci1iZyxcblxuICBzbWFydC10YWJsZS1mb250LWZhbWlseTogZm9udC1tYWluLFxuICBzbWFydC10YWJsZS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgc21hcnQtdGFibGUtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgc21hcnQtdGFibGUtYmc6IGNvbG9yLWJnLFxuXG4gIHNtYXJ0LXRhYmxlLWJnLWV2ZW46ICNmNWY3ZmMsXG4gIHNtYXJ0LXRhYmxlLWZnLXNlY29uZGFyeTogY29sb3ItZmcsXG4gIHNtYXJ0LXRhYmxlLWJnLWFjdGl2ZTogI2U2ZjNmZixcbiAgc21hcnQtdGFibGUtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcbiAgc21hcnQtdGFibGUtZmlsdGVyLXBhZGRpbmc6IDAuMzc1cmVtIDAuNXJlbSxcbiAgc21hcnQtdGFibGUtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIHNtYXJ0LXRhYmxlLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcblxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLWNvbG9yOiBzZXBhcmF0b3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItd2lkdGg6IDFweCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZnLWFjdGl2ZTogI2ZmZmZmZixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3Itc3VjY2VzcyxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuXG4gIHRvYXN0ci1iZzogY29sb3ItYmcsXG4gIHRvYXN0ci1wYWRkaW5nOiAxLjEyNXJlbSxcbiAgdG9hc3RyLWZnOiBjb2xvci1mZy10ZXh0LFxuICB0b2FzdHItYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCxcbiAgdG9hc3RyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgdG9hc3RyLWJvcmRlci1jb2xvcjogI2JjYzNjYyxcbiAgdG9hc3RyLWljb24tcmFkaXVzOiAwLjI1cmVtLFxuICB0b2FzdHItc2hhZG93OiBzaGFkb3csXG5cbiAgYnRuLWZnOiBjb2xvci13aGl0ZSxcbiAgYnRuLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgYnRuLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgYnRuLWRpc2FibGVkLW9wYWNpdHk6IDAuMyxcbiAgYnRuLWN1cnNvcjogZGVmYXVsdCxcblxuICBidG4tcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgYnRuLXNlY29uZGFyeS1iZzogdHJhbnNwYXJlbnQsXG4gIGJ0bi1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBidG4tc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgYnRuLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGJ0bi1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcblxuICBidG4tc2Vjb25kYXJ5LWJvcmRlcjogI2RhZGZlNixcbiAgYnRuLXNlY29uZGFyeS1ib3JkZXItd2lkdGg6IDJweCxcblxuICBidG4tcGFkZGluZy15LWxnOiAwLjg3NXJlbSxcbiAgYnRuLXBhZGRpbmcteC1sZzogMS43NXJlbSxcbiAgYnRuLWZvbnQtc2l6ZS1sZzogZm9udC1zaXplLWxnLFxuXG4gIC8vIGRlZmF1bHQgc2l6ZVxuICBidG4tcGFkZGluZy15LW1kOiAwLjc1cmVtLFxuICBidG4tcGFkZGluZy14LW1kOiAxLjVyZW0sXG4gIGJ0bi1mb250LXNpemUtbWQ6IDFyZW0sXG5cbiAgYnRuLXBhZGRpbmcteS1zbTogMC42MjVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgtc206IDEuNXJlbSxcbiAgYnRuLWZvbnQtc2l6ZS1zbTogMC44NzVyZW0sXG5cbiAgYnRuLXBhZGRpbmcteS14czogMC41cmVtLFxuICBidG4tcGFkZGluZy14LXhzOiAxLjI1cmVtLFxuICBidG4tZm9udC1zaXplLXhzOiAwLjc1cmVtLFxuXG4gIGJ0bi1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGJ0bi1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogMC4yNXJlbSxcbiAgYnRuLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgYnRuLXJvdW5kLWJvcmRlci1yYWRpdXM6IDEuNXJlbSxcblxuICBidG4taGVyby1zaGFkb3c6IG5vbmUsXG4gIGJ0bi1oZXJvLXRleHQtc2hhZG93OiBub25lLFxuICBidG4taGVyby1iZXZlbC1zaXplOiAwIDAgMCAwLFxuICBidG4taGVyby1nbG93LXNpemU6IDAgMCAwIDAsXG4gIGJ0bi1oZXJvLXByaW1hcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWluZm8tZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRhbmdlci1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1kZWdyZWU6IDIwZGVnLFxuICBidG4taGVyby1wcmltYXJ5LWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1zdWNjZXNzLWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby13YXJuaW5nLWRlZ3JlZTogMTBkZWcsXG4gIGJ0bi1oZXJvLWluZm8tZGVncmVlOiAtMTBkZWcsXG4gIGJ0bi1oZXJvLWRhbmdlci1kZWdyZWU6IC0yMGRlZyxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG5cbiAgYnRuLW91dGxpbmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1vdXRsaW5lLWhvdmVyLWZnOiAjZmZmZmZmLFxuICBidG4tb3V0bGluZS1mb2N1cy1mZzogY29sb3ItZmctaGVhZGluZyxcblxuICBidG4tZ3JvdXAtYmc6IGxheW91dC1iZyxcbiAgYnRuLWdyb3VwLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBidG4tZ3JvdXAtc2VwYXJhdG9yOiAjZGFkZmU2LFxuXG4gIGZvcm0tY29udHJvbC10ZXh0LXByaW1hcnktY29sb3I6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGZvcm0tY29udHJvbC1iZzogY29sb3ItYmcsXG4gIGZvcm0tY29udHJvbC1mb2N1cy1iZzogY29sb3ItYmcsXG5cbiAgZm9ybS1jb250cm9sLWJvcmRlci13aWR0aDogMnB4LFxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBmb3JtLWNvbnRyb2wtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBmb3JtLWNvbnRyb2wtcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAjZGFkZmU2LFxuICBmb3JtLWNvbnRyb2wtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuXG4gIGZvcm0tY29udHJvbC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mbyxcbiAgZm9ybS1jb250cm9sLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBmb3JtLWNvbnRyb2wtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLFxuICBmb3JtLWNvbnRyb2wtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmcsXG5cbiAgZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yOiBjb2xvci1mZyxcbiAgZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMXJlbSxcblxuICBmb3JtLWNvbnRyb2wtZm9udC1zaXplOiAxcmVtLFxuICBmb3JtLWNvbnRyb2wtcGFkZGluZzogMC43NXJlbSAxLjEyNXJlbSxcbiAgZm9ybS1jb250cm9sLWZvbnQtc2l6ZS1zbTogZm9udC1zaXplLXNtLFxuICBmb3JtLWNvbnRyb2wtcGFkZGluZy1zbTogMC4zNzVyZW0gMS4xMjVyZW0sXG4gIGZvcm0tY29udHJvbC1mb250LXNpemUtbGc6IGZvbnQtc2l6ZS1sZyxcbiAgZm9ybS1jb250cm9sLXBhZGRpbmctbGc6IDEuMTI1cmVtLFxuXG4gIGZvcm0tY29udHJvbC1sYWJlbC1mb250LXdlaWdodDogNDAwLFxuXG4gIGZvcm0tY29udHJvbC1mZWVkYmFjay1mb250LXNpemU6IDAuODc1cmVtLFxuICBmb3JtLWNvbnRyb2wtZmVlZGJhY2stZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcblxuICBjaGVja2JveC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWJvcmRlci1jb2xvcjogZm9ybS1jb250cm9sLWJvcmRlci1jb2xvcixcbiAgY2hlY2tib3gtY2hlY2ttYXJrOiB0cmFuc3BhcmVudCxcblxuICBjaGVja2JveC1jaGVja2VkLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtY2hlY2tlZC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1jaGVja2VkLWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBjaGVja2JveC1jaGVja2VkLWNoZWNrbWFyazogY29sb3ItZmctaGVhZGluZyxcblxuICBjaGVja2JveC1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LWRpc2FibGVkLXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWRpc2FibGVkLWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcbiAgY2hlY2tib3gtZGlzYWJsZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIG1vZGFsLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBtb2RhbC1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIG1vZGFsLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIG1vZGFsLWZnOiBjb2xvci1mZy10ZXh0LFxuICBtb2RhbC1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtb2RhbC1iZzogY29sb3ItYmcsXG4gIG1vZGFsLWJvcmRlcjogdHJhbnNwYXJlbnQsXG4gIG1vZGFsLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgbW9kYWwtcGFkZGluZzogcGFkZGluZyxcbiAgbW9kYWwtaGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgbW9kYWwtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1vZGFsLWhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgbW9kYWwtYm9keS1mb250LWZhbWlseTogZm9udC1tYWluLFxuICBtb2RhbC1ib2R5LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIG1vZGFsLWJvZHktZm9udC1zaXplOiBmb250LXNpemUsXG4gIG1vZGFsLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuXG4gIGJhZGdlLWZnLXRleHQ6IGNvbG9yLXdoaXRlLFxuICBiYWRnZS1wcmltYXJ5LWJnLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICBiYWRnZS1zdWNjZXNzLWJnLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBiYWRnZS1pbmZvLWJnLWNvbG9yOiBjb2xvci1pbmZvLFxuICBiYWRnZS13YXJuaW5nLWJnLWNvbG9yOiBjb2xvci13YXJuaW5nLFxuICBiYWRnZS1kYW5nZXItYmctY29sb3I6IGNvbG9yLWRhbmdlcixcblxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXhsZzogMS43NXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWhlaWdodC1sZzogMS41cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0OiAxLjM3NXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWhlaWdodC1zbTogMS4yNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWhlaWdodC14czogMXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMsXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUteGxnOiBmb250LXNpemUteGxnLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplLWxnOiBmb250LXNpemUtbGcsXG4gIHByb2dyZXNzLWJhci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZS1zbTogZm9udC1zaXplLXNtLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplLXhzOiBmb250LXNpemUteHMsXG4gIHByb2dyZXNzLWJhci1yYWRpdXM6IHJhZGl1cyxcbiAgcHJvZ3Jlc3MtYmFyLWJnOiBsYXlvdXQtYmcsXG4gIHByb2dyZXNzLWJhci1mb250LWNvbG9yOiBjb2xvci13aGl0ZSxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuICBwcm9ncmVzcy1iYXItZGVmYXVsdC1iZzogY29sb3ItaW5mbyxcbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIHByb2dyZXNzLWJhci1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBwcm9ncmVzcy1iYXItaW5mby1iZzogY29sb3ItaW5mbyxcbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIHByb2dyZXNzLWJhci1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcblxuICBhbGVydC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgYWxlcnQtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBhbGVydC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBhbGVydC1mZzogY29sb3Itd2hpdGUsXG4gIGFsZXJ0LW91dGxpbmUtZmc6IGNvbG9yLWZnLFxuICBhbGVydC1iZzogY29sb3ItYmcsXG4gIGFsZXJ0LWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIGFsZXJ0LWRpc2FibGVkLWJnOiBjb2xvci1kaXNhYmxlZCxcbiAgYWxlcnQtZGlzYWJsZWQtZmc6IGNvbG9yLWZnLFxuICBhbGVydC1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBhbGVydC1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBhbGVydC1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBhbGVydC13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBhbGVydC1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcbiAgYWxlcnQtaGVpZ2h0LXh4c21hbGw6IDUycHgsXG4gIGFsZXJ0LWhlaWdodC14c21hbGw6IDcycHgsXG4gIGFsZXJ0LWhlaWdodC1zbWFsbDogOTJweCxcbiAgYWxlcnQtaGVpZ2h0LW1lZGl1bTogMTEycHgsXG4gIGFsZXJ0LWhlaWdodC1sYXJnZTogMTMycHgsXG4gIGFsZXJ0LWhlaWdodC14bGFyZ2U6IDE1MnB4LFxuICBhbGVydC1oZWlnaHQteHhsYXJnZTogMTcycHgsXG4gIGFsZXJ0LXNoYWRvdzogbm9uZSxcbiAgYWxlcnQtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBhbGVydC1wYWRkaW5nOiAxcmVtIDEuMTI1cmVtLFxuICBhbGVydC1jbG9zYWJsZS1wYWRkaW5nOiAzcmVtLFxuICBhbGVydC1idXR0b24tcGFkZGluZzogM3JlbSxcbiAgYWxlcnQtbWFyZ2luOiBtYXJnaW4sXG5cbiAgY2hhdC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgY2hhdC1mZzogY29sb3Itd2hpdGUsXG4gIGNoYXQtYmc6IGNvbG9yLWJnLFxuICBjaGF0LWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY2hhdC1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICBjaGF0LWhlaWdodC14eHNtYWxsOiA5NnB4LFxuICBjaGF0LWhlaWdodC14c21hbGw6IDIxNnB4LFxuICBjaGF0LWhlaWdodC1zbWFsbDogMzM2cHgsXG4gIGNoYXQtaGVpZ2h0LW1lZGl1bTogNDU2cHgsXG4gIGNoYXQtaGVpZ2h0LWxhcmdlOiA1NzZweCxcbiAgY2hhdC1oZWlnaHQteGxhcmdlOiA2OTZweCxcbiAgY2hhdC1oZWlnaHQteHhsYXJnZTogODE2cHgsXG4gIGNoYXQtYm9yZGVyOiBib3JkZXIsXG4gIGNoYXQtcGFkZGluZzogcGFkZGluZyxcbiAgY2hhdC1zaGFkb3c6IHNoYWRvdyxcbiAgY2hhdC1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgY2hhdC1tZXNzYWdlLWZnOiBjb2xvci13aGl0ZSxcbiAgY2hhdC1tZXNzYWdlLWJnOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0Y2E2ZmYsICM1OWJmZmYpLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgY2hhdC1tZXNzYWdlLXJlcGx5LWZnOiBjb2xvci1mZy10ZXh0LFxuICBjaGF0LW1lc3NhZ2UtYXZhdGFyLWJnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXNlbmRlci1mZzogY29sb3ItZmcsXG4gIGNoYXQtbWVzc2FnZS1xdW90ZS1mZzogY29sb3ItZmcsXG4gIGNoYXQtbWVzc2FnZS1xdW90ZS1iZzogY29sb3ItYmctYWN0aXZlLFxuICBjaGF0LW1lc3NhZ2UtZmlsZS1mZzogY29sb3ItZmcsXG4gIGNoYXQtbWVzc2FnZS1maWxlLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hhdC1mb3JtLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hhdC1mb3JtLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjaGF0LWZvcm0tYm9yZGVyOiBzZXBhcmF0b3IsXG4gIGNoYXQtZm9ybS1wbGFjZWhvbGRlci1mZzogY29sb3ItZmcsXG4gIGNoYXQtZm9ybS1hY3RpdmUtYm9yZGVyOiBjb2xvci1mZyxcbiAgY2hhdC1hY3RpdmUtYmc6IGNvbG9yLWZnLFxuICBjaGF0LWRpc2FibGVkLWJnOiBjb2xvci1kaXNhYmxlZCxcbiAgY2hhdC1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIGNoYXQtcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2hhdC1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBjaGF0LXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNoYXQtd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgY2hhdC1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcblxuICBzcGlubmVyLWJnOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODMpLFxuICBzcGlubmVyLWNpcmNsZS1iZzogY29sb3ItYmctYWN0aXZlLFxuICBzcGlubmVyLWZnOiBjb2xvci1mZy10ZXh0LFxuICBzcGlubmVyLWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIHNwaW5uZXItZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBzcGlubmVyLWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgc3Bpbm5lci1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBzcGlubmVyLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIHNwaW5uZXItc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgc3Bpbm5lci13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBzcGlubmVyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBzcGlubmVyLXh4c21hbGw6IDEuMjVyZW0sXG4gIHNwaW5uZXIteHNtYWxsOiAxLjVyZW0sXG4gIHNwaW5uZXItc21hbGw6IDEuNzVyZW0sXG4gIHNwaW5uZXItbWVkaXVtOiAycmVtLFxuICBzcGlubmVyLWxhcmdlOiAyLjI1cmVtLFxuICBzcGlubmVyLXhsYXJnZTogMi41cmVtLFxuICBzcGlubmVyLXh4bGFyZ2U6IDNyZW0sXG5cbiAgc3RlcHBlci1pbmRleC1zaXplOiAycmVtLFxuICBzdGVwcGVyLWxhYmVsLWZvbnQtc2l6ZTogZm9udC1zaXplLXNtLFxuICBzdGVwcGVyLWxhYmVsLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIHN0ZXBwZXItYWNjZW50LWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICBzdGVwcGVyLWNvbXBsZXRlZC1mZzogY29sb3Itd2hpdGUsXG4gIHN0ZXBwZXItZmc6IGNvbG9yLWZnLFxuICBzdGVwcGVyLWNvbXBsZXRlZC1pY29uLXNpemU6IDEuNXJlbSxcbiAgc3RlcHBlci1jb21wbGV0ZWQtaWNvbi13ZWlnaHQ6IGZvbnQtd2VpZ2h0LXVsdHJhLWJvbGQsXG4gIHN0ZXBwZXItc3RlcC1wYWRkaW5nOiBwYWRkaW5nLFxuXG4gIGFjY29yZGlvbi1wYWRkaW5nOiBwYWRkaW5nLFxuICBhY2NvcmRpb24tc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGFjY29yZGlvbi1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBhY2NvcmRpb24taGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBhY2NvcmRpb24taGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGFjY29yZGlvbi1oZWFkZXItZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZyxcbiAgYWNjb3JkaW9uLWhlYWRlci1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci1jb2xvcjogYWNjb3JkaW9uLXNlcGFyYXRvcixcbiAgYWNjb3JkaW9uLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgYWNjb3JkaW9uLWl0ZW0tYmc6IGNvbG9yLWJnLFxuICBhY2NvcmRpb24taXRlbS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgYWNjb3JkaW9uLWl0ZW0tZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgYWNjb3JkaW9uLWl0ZW0tZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgYWNjb3JkaW9uLWl0ZW0tZmctdGV4dDogY29sb3ItZmctdGV4dCxcbiAgYWNjb3JkaW9uLWl0ZW0tc2hhZG93OiBzaGFkb3csXG5cbiAgbGlzdC1pdGVtLWJvcmRlci1jb2xvcjogdGFicy1zZXBhcmF0b3IsXG4gIGxpc3QtaXRlbS1wYWRkaW5nOiAxcmVtLFxuXG4gIGNhbGVuZGFyLXdpZHRoOiAyMS44NzVyZW0sXG4gIGNhbGVuZGFyLWJvZHktaGVpZ2h0OiAyNS42MjVyZW0sXG4gIGNhbGVuZGFyLWhlYWRlci10aXRsZS1mb250LXNpemU6IGZvbnQtc2l6ZS14bGcsXG4gIGNhbGVuZGFyLWhlYWRlci10aXRsZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgY2FsZW5kYXItaGVhZGVyLXN1Yi10aXRsZS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItaGVhZGVyLXN1Yi10aXRsZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtdGhpbixcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi1idXR0b24td2lkdGg6IDEwcmVtLFxuICBjYWxlbmRhci1zZWxlY3RlZC1pdGVtLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjYWxlbmRhci1ob3Zlci1pdGVtLWJnOiBjYWxlbmRhci1zZWxlY3RlZC1pdGVtLWJnLFxuICBjYWxlbmRhci10b2RheS1pdGVtLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIGNhbGVuZGFyLWFjdGl2ZS1pdGVtLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjYWxlbmRhci1mZzogY29sb3ItZmctdGV4dCxcbiAgY2FsZW5kYXItc2VsZWN0ZWQtZmc6IGNvbG9yLXdoaXRlLFxuICBjYWxlbmRhci10b2RheS1mZzogY2FsZW5kYXItZmcsXG4gIGNhbGVuZGFyLWRheS1jZWxsLXdpZHRoOiAyLjYyNXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0OiAyLjYyNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aDogNC4yNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQ6IDIuMzc1cmVtLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtd2lkdGg6IGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1oZWlnaHQ6IGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0LFxuICBjYWxlbmRhci1pbmFjdGl2ZS1vcGFjaXR5OiAwLjUsXG4gIGNhbGVuZGFyLWRpc2FibGVkLW9wYWNpdHk6IDAuMyxcbiAgY2FsZW5kYXItYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjYWxlbmRhci13ZWVrZGF5LXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC13aWR0aCxcbiAgY2FsZW5kYXItd2Vla2RheS1oZWlnaHQ6IDEuNzVyZW0sXG4gIGNhbGVuZGFyLXdlZWtkYXktZm9udC1zaXplOiBmb250LXNpemUteHMsXG4gIGNhbGVuZGFyLXdlZWtkYXktZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgY2FsZW5kYXItd2Vla2RheS1mZzogY29sb3ItZmcsXG4gIGNhbGVuZGFyLXdlZWtkYXktaG9saWRheS1mZzogY29sb3ItZGFuZ2VyLFxuICBjYWxlbmRhci1yYW5nZS1iZy1pbi1yYW5nZTogI2ViZmJmMixcblxuICBjYWxlbmRhci1sYXJnZS13aWR0aDogMjQuMzc1cmVtLFxuICBjYWxlbmRhci1sYXJnZS1ib2R5LWhlaWdodDogMjcuNzVyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoOiAzcmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQ6IDNyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2Utd2lkdGg6IDQuMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2UtaGVpZ2h0OiAyLjM3NXJlbSxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodCxcblxuICBvdmVybGF5LWJhY2tkcm9wLWJnOiByZ2JhKDAsIDAsIDAsIDAuMjg4KSxcblxuICB0b29sdGlwLWJnOiBjb2xvci1mZy10ZXh0LFxuICB0b29sdGlwLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIHRvb2x0aXAtaW5mby1iZzogY29sb3ItaW5mbyxcbiAgdG9vbHRpcC1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICB0b29sdGlwLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIHRvb2x0aXAtZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG4gIHRvb2x0aXAtZmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgdG9vbHRpcC1zdGF0dXMtZmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgdG9vbHRpcC1zaGFkb3c6IHNoYWRvdyxcbiAgdG9vbHRpcC1mb250LXNpemU6IGZvbnQtc2l6ZSxcblxuICBzZWxlY3QtYm9yZGVyLXdpZHRoOiAycHgsXG4gIHNlbGVjdC1tYXgtaGVpZ2h0OiAyMHJlbSxcbiAgc2VsZWN0LWJnOiBjb2xvci1iZyxcblxuICBzZWxlY3QtY2hlY2tib3gtY29sb3I6IGNoZWNrYm94LWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LWNoZWNrbWFyay1jb2xvcjogY2hlY2tib3gtYm9yZGVyLWNvbG9yLFxuXG4gIHNlbGVjdC1vcHRpb24tZGlzYWJsZWQtYmc6ICNmMmY0ZjcsXG4gIHNlbGVjdC1vcHRpb24tZGlzYWJsZWQtb3BhY2l0eTogMC4zLFxuICBzZWxlY3Qtb3B0aW9uLXBhZGRpbmc6IDAuNzVyZW0gMS41cmVtLFxuXG4gIGRhdGVwaWNrZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGRhdGVwaWNrZXItYmc6IGNvbG9yLWJnLFxuICBkYXRlcGlja2VyLWJvcmRlcjogY29sb3Itc3VjY2VzcyxcbiAgZGF0ZXBpY2tlci1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGRhdGVwaWNrZXItc2hhZG93OiBub25lLFxuICBkYXRlcGlja2VyLWFycm93LXNpemU6IDExcHgsXG5cbiAgcmFkaW8tYmc6IHRyYW5zcGFyZW50LFxuICByYWRpby1mZzogY29sb3ItZmctdGV4dCxcbiAgcmFkaW8tc2l6ZTogMS4yNXJlbSxcbiAgcmFkaW8tYm9yZGVyLXNpemU6IDJweCxcbiAgcmFkaW8tYm9yZGVyLWNvbG9yOiBmb3JtLWNvbnRyb2wtYm9yZGVyLWNvbG9yLFxuICByYWRpby1jaGVja21hcms6IHRyYW5zcGFyZW50LFxuICByYWRpby1jaGVja2VkLWJnOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY2hlY2tlZC1zaXplOiAxLjI1cmVtLFxuICByYWRpby1jaGVja2VkLWJvcmRlci1zaXplOiAycHgsXG4gIHJhZGlvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICByYWRpby1jaGVja2VkLWNoZWNrbWFyazogY29sb3Itc3VjY2VzcyxcbiAgcmFkaW8tZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50LFxuICByYWRpby1kaXNhYmxlZC1zaXplOiAxLjI1cmVtLFxuICByYWRpby1kaXNhYmxlZC1ib3JkZXItc2l6ZTogMnB4LFxuICByYWRpby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHJhZGlvLWJvcmRlci1jb2xvcixcbiAgcmFkaW8tZGlzYWJsZWQtY2hlY2ttYXJrOiByYWRpby1jaGVja21hcmssXG4pO1xuXG4vLyByZWdpc3RlciB0aGUgdGhlbWVcbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgZGVmYXVsdCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RlZmF1bHQnO1xuXG4vLyBkZWZhdWx0IHRoZSBiYXNlIHRoZW1lXG4kdGhlbWU6IChcbiAgcmFkaXVzOiAwLjVyZW0sXG5cbiAgY29sb3ItYmc6ICMzZDM3ODAsXG4gIGNvbG9yLWJnLWFjdGl2ZTogIzQ5NDI5OSxcbiAgY29sb3ItZmc6ICNhMWExZTUsXG4gIGNvbG9yLWZnLWhlYWRpbmc6ICNmZmZmZmYsXG4gIGNvbG9yLWZnLXRleHQ6ICNkMWQxZmYsXG4gIGNvbG9yLWZnLWhpZ2hsaWdodDogIzAwZjlhNixcblxuICBjb2xvci1ncmF5OiByZ2JhKDgxLCAxMTMsIDE2NSwgMC4xNSksXG4gIGNvbG9yLW5ldXRyYWw6IHRyYW5zcGFyZW50LFxuICBjb2xvci13aGl0ZTogI2ZmZmZmZixcbiAgY29sb3ItZGlzYWJsZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcblxuICBjb2xvci1wcmltYXJ5OiAjNzY1OWZmLFxuICBjb2xvci1zdWNjZXNzOiAjMDBkOTc3LFxuICBjb2xvci1pbmZvOiAjMDA4OGZmLFxuICBjb2xvci13YXJuaW5nOiAjZmZhMTAwLFxuICBjb2xvci1kYW5nZXI6ICNmZjM4NmEsXG5cbiAgbGluay1jb2xvcjogIzAwZjlhNixcbiAgbGluay1jb2xvci1ob3ZlcjogIzE0ZmZiZSxcblxuICBzZXBhcmF0b3I6ICMzNDJlNzMsXG4gIHNoYWRvdzogMCA4cHggMjBweCAwIHJnYmEoNDAsIDM3LCA4OSwgMC42KSxcblxuICBjYXJkLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuXG4gIGxheW91dC1iZzogIzJmMjk2YixcblxuICBzY3JvbGxiYXItZmc6ICM1NTRkYjMsXG4gIHNjcm9sbGJhci1iZzogIzMzMmU3MyxcblxuICByYWRpYWwtZ3JhZGllbnQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNTAlIDUwJSwgIzQyM2Y4YywgIzMwMmM2ZSksXG4gIGxpbmVhci1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTcxNzQ5LCAjNDEzNzg5KSxcblxuICBzaWRlYmFyLWZnOiBjb2xvci1zZWNvbmRhcnksXG4gIHNpZGViYXItYmc6IGNvbG9yLWJnLFxuXG4gIGhlYWRlci1mZzogY29sb3Itd2hpdGUsXG4gIGhlYWRlci1iZzogY29sb3ItYmcsXG5cbiAgZm9vdGVyLWZnOiBjb2xvci1mZyxcbiAgZm9vdGVyLWJnOiBjb2xvci1iZyxcblxuICBhY3Rpb25zLWZnOiBjb2xvci1mZyxcbiAgYWN0aW9ucy1iZzogY29sb3ItYmcsXG5cbiAgdXNlci1mZzogY29sb3ItYmcsXG4gIHVzZXItYmc6IGNvbG9yLWZnLFxuICB1c2VyLWZnLWhpZ2hsaWdodDogY29sb3ItZmctaGlnaGxpZ2h0LFxuXG4gIHBvcG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuICBwb3BvdmVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGNvbnRleHQtbWVudS1hY3RpdmUtYmc6IGNvbG9yLXByaW1hcnksXG4gIGNvbnRleHQtbWVudS1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG5cbiAgZm9vdGVyLWhlaWdodDogaGVhZGVyLWhlaWdodCxcblxuICBzaWRlYmFyLXdpZHRoOiAxNi4yNXJlbSxcbiAgc2lkZWJhci13aWR0aC1jb21wYWN0OiAzLjQ1cmVtLFxuXG4gIG1lbnUtZmc6IGNvbG9yLWZnLFxuICBtZW51LWJnOiBjb2xvci1iZyxcbiAgbWVudS1hY3RpdmUtZmc6IGNvbG9yLXdoaXRlLFxuICBtZW51LWdyb3VwLWZnOiBjb2xvci13aGl0ZSxcbiAgbWVudS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBtZW51LWFjdGl2ZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LXN1Ym1lbnUtYmc6IGxheW91dC1iZyxcbiAgbWVudS1zdWJtZW51LWZnOiBjb2xvci1mZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1iZzogcmdiYSgwLCAyNTUsIDE3MCwgMC4yNSksXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1mZy1oaWdobGlnaHQsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtc2hhZG93OiAwIDJweCAxMnB4IDAgcmdiYSgwLCAyNTUsIDE3MCwgMC4yNSksXG4gIG1lbnUtaXRlbS1wYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW0sXG4gIG1lbnUtaXRlbS1zZXBhcmF0b3I6IHRyYW5zcGFyZW50LFxuXG4gIGJ0bi1oZXJvLXNoYWRvdzogMCA0cHggMTBweCAwIHJnYmEoMzMsIDcsIDc3LCAwLjUpLFxuICBidG4taGVyby10ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKSxcbiAgYnRuLWhlcm8tYmV2ZWwtc2l6ZTogMCAzcHggMCAwLFxuICBidG4taGVyby1nbG93LXNpemU6IDAgMnB4IDhweCAwLFxuICBidG4taGVyby1wcmltYXJ5LWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zdWNjZXNzLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby13YXJuaW5nLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1pbmZvLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1kYW5nZXItZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXNlY29uZGFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLXNlY29uZGFyeS1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4gIGJ0bi1vdXRsaW5lLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBidG4tb3V0bGluZS1ob3Zlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLW91dGxpbmUtZm9jdXMtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1ncm91cC1iZzogIzM3MzI3MyxcbiAgYnRuLWdyb3VwLXNlcGFyYXRvcjogIzMxMmM2NixcblxuICBmb3JtLWNvbnRyb2wtYmc6ICMzNzMxN2EsXG4gIGZvcm0tY29udHJvbC1mb2N1cy1iZzogc2VwYXJhdG9yLFxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBzZXBhcmF0b3IsXG4gIGZvcm0tY29udHJvbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnksXG5cbiAgY2hlY2tib3gtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1ib3JkZXItY29sb3I6IGNvbG9yLWZnLFxuICBjaGVja2JveC1jaGVja21hcms6IHRyYW5zcGFyZW50LFxuXG4gIGNoZWNrYm94LWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1jaGVja2VkLXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNoZWNrYm94LWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIGNoZWNrYm94LWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjaGVja2JveC1kaXNhYmxlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgc2VhcmNoLWJnOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNzE3NDksICM0MTM3ODkpLFxuXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBzbWFydC10YWJsZS1oZWFkZXItYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgc21hcnQtdGFibGUtYmctZXZlbjogIzNhMzQ3YSxcbiAgc21hcnQtdGFibGUtYmctYWN0aXZlOiBjb2xvci1iZy1hY3RpdmUsXG5cbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci13aWR0aDogMnB4LFxuICBzbWFydC10YWJsZS1wYWdpbmctZmctYWN0aXZlOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1wcmltYXJ5LFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHJnYmEoMCwgMCwgMCwgMC4yKSxcblxuICBiYWRnZS1mZy10ZXh0OiBjb2xvci13aGl0ZSxcbiAgYmFkZ2UtcHJpbWFyeS1iZy1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgYmFkZ2Utc3VjY2Vzcy1iZy1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgYmFkZ2UtaW5mby1iZy1jb2xvcjogY29sb3ItaW5mbyxcbiAgYmFkZ2Utd2FybmluZy1iZy1jb2xvcjogY29sb3Itd2FybmluZyxcbiAgYmFkZ2UtZGFuZ2VyLWJnLWNvbG9yOiBjb2xvci1kYW5nZXIsXG5cbiAgc3Bpbm5lci1iZzogcmdiYSg2MSwgNTUsIDEyOCwgMC45KSxcbiAgc3RlcHBlci1hY2NlbnQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG5cbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRhYnMtc2VsZWN0ZWQtZGVncmVlczogMjBkZWcsXG5cbiAgY2FsZW5kYXItYWN0aXZlLWl0ZW0tYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhbGVuZGFyLXNlbGVjdGVkLWl0ZW0tYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhbGVuZGFyLXJhbmdlLWJnLWluLXJhbmdlOiAjNGU0MDk1LFxuICBjYWxlbmRhci10b2RheS1pdGVtLWJnOiAjMzUyZjZlLFxuXG4gIHNlbGVjdC1vcHRpb24tZGlzYWJsZWQtYmc6ICMzMTJlNzUsXG5cbiAgdG9hc3RyLWNvbG9yLWZnOiBjb2xvci13aGl0ZSxcbiAgdG9hc3RyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIHRvYXN0ci1ib3JkZXI6IDAsXG4gIHRvYXN0ci1kZWZhdWx0LWJhY2tncm91bmQ6ICNiY2MzY2MsXG5cbiAgdG9vbHRpcC1mZzogY29sb3ItYmcsXG4gIHRvb2x0aXAtc3RhdHVzLWZnOiBjb2xvci13aGl0ZSxcblxuICBkYXRlcGlja2VyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbiAgZGF0ZXBpY2tlci1zaGFkb3c6IHNoYWRvdyxcblxuICByYWRpby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgcmFkaW8tY2hlY2tlZC1jaGVja21hcms6IGNvbG9yLXByaW1hcnksXG4pO1xuXG4vLyByZWdpc3RlciB0aGUgdGhlbWVcbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgY29zbWljLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbi8vIGRlZmF1bHQgdGhlIGJhc2UgdGhlbWVcbiR0aGVtZTogKFxuICBoZWFkZXItZmc6ICNmN2ZhZmIsXG4gIGhlYWRlci1iZzogIzExMTIxOCxcblxuICBsYXlvdXQtYmc6ICNmMWY1ZjgsXG5cbiAgY29sb3ItZmctaGVhZGluZzogIzE4MTgxOCxcbiAgY29sb3ItZmctdGV4dDogIzRiNGI0YixcbiAgY29sb3ItZmctaGlnaGxpZ2h0OiBjb2xvci1mZyxcblxuICBzZXBhcmF0b3I6ICNjZGQ1ZGMsXG5cbiAgcmFkaXVzOiAwLjE3cmVtLFxuXG4gIHNjcm9sbGJhci1iZzogI2UzZTllZSxcblxuICBjb2xvci1wcmltYXJ5OiAjNzNhMWZmLFxuICBjb2xvci1zdWNjZXNzOiAjNWRjZmUzLFxuICBjb2xvci1pbmZvOiAjYmE3ZmVjLFxuICBjb2xvci13YXJuaW5nOiAjZmZhMzZiLFxuICBjb2xvci1kYW5nZXI6ICNmZjZiODMsXG5cbiAgYnRuLXNlY29uZGFyeS1iZzogI2VkZjJmNSxcbiAgYnRuLXNlY29uZGFyeS1ib3JkZXI6ICNlZGYyZjUsXG5cbiAgYWN0aW9ucy1mZzogI2QzZGJlNSxcbiAgYWN0aW9ucy1iZzogY29sb3ItYmcsXG5cbiAgc2lkZWJhci1iZzogI2UzZTllZSxcblxuICBib3JkZXItY29sb3I6ICNkNWRiZTAsXG5cbiAgbWVudS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LWJnOiAjZTNlOWVlLFxuICBtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgbWVudS1hY3RpdmUtYmc6IG1lbnUtYmcsXG5cbiAgbWVudS1zdWJtZW51LWJnOiBtZW51LWJnLFxuICBtZW51LXN1Ym1lbnUtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtYmc6ICNjZGQ1ZGMsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLXNoYWRvdzogbm9uZSxcbiAgbWVudS1zdWJtZW51LWhvdmVyLWZnOiBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnLFxuICBtZW51LXN1Ym1lbnUtaG92ZXItYmc6IG1lbnUtYmcsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci13aWR0aDogMC4xMjVyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWNvbnRhaW5lci1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIG1lbnUtc3VibWVudS1wYWRkaW5nOiAwLjVyZW0sXG5cbiAgYnRuLWJvcmRlci1yYWRpdXM6IGJ0bi1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXMsXG5cbiAgYnRuLWhlcm8tZGVncmVlOiAwZGVnLFxuICBidG4taGVyby1wcmltYXJ5LWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1zdWNjZXNzLWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby13YXJuaW5nLWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1pbmZvLWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1kYW5nZXItZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXNlY29uZGFyeS1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tZ2xvdy1zaXplOiAwIDAgMjBweCAwLFxuICBidG4taGVyby1wcmltYXJ5LWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zdWNjZXNzLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby13YXJuaW5nLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1pbmZvLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1kYW5nZXItZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXNlY29uZGFyeS1nbG93LXNpemU6IDAgMCAwIDAsXG4gIGJ0bi1oZXJvLWJvcmRlci1yYWRpdXM6IGJ0bi1ib3JkZXItcmFkaXVzLFxuXG4gIGNhcmQtc2hhZG93OiBub25lLFxuICBjYXJkLWJvcmRlci13aWR0aDogMXB4LFxuICBjYXJkLWJvcmRlci1jb2xvcjogYm9yZGVyLWNvbG9yLFxuICBjYXJkLWhlYWRlci1ib3JkZXItd2lkdGg6IDAsXG5cbiAgbGluay1jb2xvcjogIzVkY2ZlMyxcbiAgbGluay1jb2xvci1ob3ZlcjogIzdkY2ZlMyxcbiAgbGluay1jb2xvci12aXNpdGVkOiBsaW5rLWNvbG9yLFxuXG4gIGFjdGlvbnMtc2VwYXJhdG9yOiAjZjFmNGY1LFxuXG4gIG1vZGFsLXNlcGFyYXRvcjogYm9yZGVyLWNvbG9yLFxuXG4gIHRhYnMtc2VsZWN0ZWQ6IGNvbG9yLXByaW1hcnksXG4gIHRhYnMtc2VsZWN0ZWQtc2Vjb25kLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICB0YWJzLXNlcGFyYXRvcjogI2ViZWNlZSxcblxuICBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1wcmltYXJ5LFxuXG4gIHJvdXRlLXRhYnMtc2VsZWN0ZWQ6IGNvbG9yLXByaW1hcnksXG5cbiAgcG9wb3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG5cbiAgZm9vdGVyLXNoYWRvdzogbm9uZSxcbiAgZm9vdGVyLXNlcGFyYXRvcjogYm9yZGVyLWNvbG9yLFxuICBmb290ZXItZmctaGlnaGxpZ2h0OiAjMmEyYTJhLFxuXG4gIGNhbGVuZGFyLXRvZGF5LWl0ZW0tYmc6ICNhMmIyYzcsXG4gIGNhbGVuZGFyLWFjdGl2ZS1pdGVtLWJnOiBjb2xvci1wcmltYXJ5LFxuICBjYWxlbmRhci1yYW5nZS1iZy1pbi1yYW5nZTogI2UzZWNmZSxcbiAgY2FsZW5kYXItdG9kYXktZmc6IGNvbG9yLXdoaXRlLFxuXG4gIHRvYXN0ci1pY29uLXJhZGl1czogcmFkaXVzLFxuXG4gIGRhdGVwaWNrZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuKTtcblxuLy8gcmVnaXN0ZXIgdGhlIHRoZW1lXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGNvcnBvcmF0ZSwgZGVmYXVsdCk7XG4iLCJAaW1wb3J0ICcuLi9AdGhlbWUvc3R5bGVzL3RoZW1lcyc7XHJcblxyXG5AaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcclxuICAvZGVlcC8gcm91dGVyLW91dGxldCArICoge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBhbmltYXRpb246IGZhZGUgMXM7XHJcblxyXG4gICAgQGtleWZyYW1lcyBmYWRlIHtcclxuICAgICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages-menu */ "./src/app/pages/pages-menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
        this.menu = _pages_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"];
    }
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-pages',
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")],
            template: "\n    <ngx-sample-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>\n  ",
        })
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./miscellaneous/miscellaneous.module */ "./src/app/pages/miscellaneous/miscellaneous.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PAGES_COMPONENTS = [
    _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_4__["MiscellaneousModule"]
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map