(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-auth-auth-module"],{

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: routes, NgxAuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAuthRoutingModule", function() { return NgxAuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        children: [{
                path: '',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
            },]
    },
];
var NgxAuthRoutingModule = /** @class */ (function () {
    function NgxAuthRoutingModule() {
    }
    NgxAuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], NgxAuthRoutingModule);
    return NgxAuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout>\r\n  <nb-layout-column>\r\n    <nb-card>\r\n      <nb-card-body>\r\n        <nb-auth-block>\r\n          <router-outlet></router-outlet>\r\n        </nb-auth-block>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </nb-layout-column>\r\n</nb-layout>"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host nb-card {\n  margin: 0;\n  height: calc(100vh - 2 * 2.5rem); }\n:host .navigation .link {\n  text-decoration: none; }\n:host .navigation .link .icon {\n    font-size: 2rem; }\n:host nb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n:host nb-auth-block {\n  margin: auto; }\n@media (max-width: 767.98px) {\n  :host nb-card {\n    border-radius: 0;\n    height: 100vh; } }\n:host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column {\n  padding: 2.5rem; }\n@media (max-width: 767.98px) {\n    :host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column {\n      padding: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcVXNlcnNcXFZhcnVuXFxEZXNrdG9wXFxuXFxuZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGdsb2JhbFxcX2JyZWFrcG9pbnRzLnNjc3MiLCJzcmMvYXBwL2F1dGgvQzpcXFVzZXJzXFxWYXJ1blxcRGVza3RvcFxcblxcbmd4LXdpcmVmcmFtZS9zcmNcXGFwcFxcYXV0aFxcYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FDREg7RUFJUSxVQUFTO0VBQ1QsaUNBQWlELEVBQ3BEO0FBTkw7RUFTUSxzQkFBcUIsRUFLeEI7QUFkTDtJQVlZLGdCQUFlLEVBQ2xCO0FBYlQ7RUFpQlEscUJBQWE7RUFBYixxQkFBYTtFQUFiLGNBQWE7RUFDYixZQUFXLEVBQ2Q7QUFuQkw7RUFzQlEsYUFBWSxFQUNmO0FEOEJEO0VDckRKO0lBMkJZLGlCQUFnQjtJQUNoQixjQUFhLEVBQ2hCLEVBQUE7QUE3QlQ7RUFrQ1ksZ0JBakNvQixFQXNDdkI7QURjTDtJQ3JESjtNQXFDZ0IsV0FBVSxFQUVqQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4kZ3JpZC1jb2x1bW5zOiAxMiAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aC1iYXNlOiAyNHB4ICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoczogKFxuICB4czogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2UsXG4gIHNtOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZSxcbiAgbWQ6ICRncmlkLWd1dHRlci13aWR0aC1iYXNlLFxuICBsZzogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2UsXG4gIHhsOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZVxuKSAhZGVmYXVsdDtcblxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgaXM6IDQwMHB4LFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0MDBweCxcbiAgeHh4bDogMTYwMHB4XG4pO1xuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgaXM6IDM4MHB4LFxuICBzbTogNTQwcHgsXG4gIG1kOiA3MjBweCxcbiAgbGc6IDk2MHB4LFxuICB4bDogMTE0MHB4LFxuICB4eGw6IDEzMjBweCxcbiAgeHh4bDogMTUwMHB4XG4pO1xuXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIDAuMDJweCwgbnVsbCk7XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCJAaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zL2JyZWFrcG9pbnRzJztcclxuQGltcG9ydCAnfkBuZWJ1bGFyL3RoZW1lL3N0eWxlcy9nbG9iYWwvYnJlYWtwb2ludHMnO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgJGF1dGgtbGF5b3V0LXBhZGRpbmc6IDIuNXJlbTtcclxuXHJcbiAgICBuYi1jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMiAqICN7JGF1dGgtbGF5b3V0LXBhZGRpbmd9KTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2aWdhdGlvbiAubGluayB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmItY2FyZC1ib2R5IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIG5iLWF1dGgtYmxvY2sge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcclxuICAgICAgICBuYi1jYXJkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgL2RlZXAvIHtcclxuICAgICAgICBuYi1sYXlvdXQgLmxheW91dCAubGF5b3V0LWNvbnRhaW5lciAuY29udGVudCAuY29sdW1ucyBuYi1sYXlvdXQtY29sdW1uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogJGF1dGgtbGF5b3V0LXBhZGRpbmc7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
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

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: NgxAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAuthModule", function() { return NgxAuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var NgxAuthModule = /** @class */ (function () {
    function NgxAuthModule() {
    }
    NgxAuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAlertModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["NgxAuthRoutingModule"],
                _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrModule"].forRoot(),
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"],
            ],
        })
    ], NgxAuthModule);
    return NgxAuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"title\" class=\"title\">Login</h1>\r\n<p class=\"sub-title\">Hello! Log in with your email.</p>\r\n\r\n<form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" aria-labelledby=\"title\">\r\n\r\n    <div class=\"form-control-group\">\r\n        <label class=\"label\" for=\"email\">Email address:</label>\r\n        <input nbInput fullWidth type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email address\" autofocus\r\n            [(ngModel)]=\"loginReq.UserName\" required #mail=\"ngModel\">\r\n        <!-- <ng-container *ngIf=\"mail.touched && mail.errors\">\r\n            <p class=\"errors\" *ngIf=\"mail.errors.required\">\r\n                Email is required!\r\n            </p>\r\n            <p class=\"errors\" *ngIf=\"maill.errors.email\">\r\n                Email must be a valid email address!\r\n            </p>\r\n        </ng-container> -->\r\n    </div>\r\n\r\n    <div class=\"form-control-group\">\r\n        <label class=\"label\" for=\"password\">Password:</label>\r\n        <input nbInput fullWidth name=\"password\" type=\"password\" id=\"password\" placeholder=\"Password\"\r\n            [(ngModel)]=\"loginReq.Password\" required #pass=\"ngModel\">\r\n        <!-- <ng-container *ngIf=\"password.touched && password.errors\">\r\n            <p class=\"errors\" *ngIf=\"password.errors.required\">\r\n                Password is required!\r\n            </p>\r\n            \r\n        </ng-container> -->\r\n    </div>\r\n    <!-- <div class=\"form-control-group accept-group\">\r\n        <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\" *ngIf=\"rememberMe\">Remember me</nb-checkbox>\r\n        <a class=\"forgot-password\" routerLink=\"../request-password\">Forgot Password?</a>\r\n    </div> -->\r\n\r\n    <button nbButton fullWidth status=\"success\" [disabled]=\"!f.valid\">\r\n        Log In\r\n    </button>\r\n</form>\r\n\r\n<!-- <section class=\"another-action\" aria-label=\"Register\">\r\n  Don't have an account? <a class=\"text-link\" routerLink=\"../register\">Register</a>\r\n</section> -->"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _theme_model_login_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme/model/login-class */ "./src/app/@theme/model/login-class.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _pages_pages_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/pages-menu */ "./src/app/pages/pages-menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService, toasterService, route) {
        this.router = router;
        this.authService = authService;
        this.toasterService = toasterService;
        this.route = route;
        this.userPermission = [];
        this.itemList = _pages_pages_menu__WEBPACK_IMPORTED_MODULE_6__["MENU_ITEMS"];
        this.loginReq = new _theme_model_login_class__WEBPACK_IMPORTED_MODULE_4__["LoginModal"]();
    }
    // On submit button click
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.signinUser(this.loginReq.UserName, this.loginReq.Password).subscribe(function (data) {
            console.log((data));
            if (!data[0].error) {
                _this.userPermission = [];
                _this.userPermission = data[0].data.user_permission;
                if (_this.userPermission.length) {
                    var flag = 0;
                    _this.userPermission.forEach(function (ele) {
                        if (!flag) {
                            if (ele.can_view) {
                                _this.itemList.forEach(function (subele) {
                                    if (!flag) {
                                        if (subele.title === ele.form_name) {
                                            _this.router.navigate([subele.children[0].link]);
                                            flag = 1;
                                        }
                                    }
                                });
                            }
                        }
                    });
                    _this.toasterService.success('User Logged In Succesfully!');
                }
                else {
                    _this.router.navigate(['/auth']);
                }
            }
            else {
                _this.router.navigate(['/auth']);
                _this.toasterService.error(data[0].message);
            }
            _this.loginForm.reset();
        }, function (error) {
            // this._toasterService.error('User login failed!!');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nb-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-auth-auth-module.js.map