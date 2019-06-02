(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-pages-module~lot-lot-module"],{

/***/ "./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js ***!
  \***************************************************************************/
/*! exports provided: Ng2Dropdown, Ng2DropdownMenu, Ng2MenuItem, Ng2DropdownButton, Ng2DropdownModule, DropdownStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2Dropdown", function() { return Ng2Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownMenu", function() { return Ng2DropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2MenuItem", function() { return Ng2MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownButton", function() { return Ng2DropdownButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownModule", function() { return Ng2DropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownStateService", function() { return DropdownStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownButton = /** @class */ (function () {
    function Ng2DropdownButton(element) {
        this.element = element;
        this.onMenuToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showCaret = true;
    }
    /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    Ng2DropdownButton.prototype.toggleMenu = /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    function () {
        this.onMenuToggled.emit(true);
    };
    /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    Ng2DropdownButton.prototype.getPosition = /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    function () {
        return this.element.nativeElement.getBoundingClientRect();
    };
    Ng2DropdownButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-dropdown-button',
                    styles: [".ng2-dropdown-button{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196f3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}"],
                    template: "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"\u0421\u043B\u043E\u0439_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n"
                },] },
    ];
    /** @nocollapse */
    Ng2DropdownButton.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    Ng2DropdownButton.propDecorators = {
        "onMenuToggled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "showCaret": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return Ng2DropdownButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ KEYS = {
    BACKSPACE: 9,
    PREV: 38,
    NEXT: 40,
    ENTER: 13,
    ESCAPE: 27
};
/**
 * \@name onSwitchNext
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onSwitchNext = function (index, items, state$$1) {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
};
/**
 * \@name onSwitchPrev
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onSwitchPrev = function (index, items, state$$1) {
    if (index > 0) {
        state$$1.select(items[index - 1], true);
    }
};
/**
 * \@name onBackspace
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onBackspace = function (index, items, state$$1) {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
    else {
        state$$1.select(items[0], true);
    }
};
/**
 * @this {?}
 * @return {?}
 */
function onEscape() {
    this.hide();
}
/**
 * \@name onItemClicked
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onItemClicked = function (index, items, state$$1) {
    return state$$1.selectedItem ? state$$1.selectedItem.click() : undefined;
};
var /** @type {?} */ ACTIONS = (_a = {},
    _a[KEYS.BACKSPACE] = onBackspace,
    _a[KEYS.PREV] = onSwitchPrev,
    _a[KEYS.NEXT] = onSwitchNext,
    _a[KEYS.ENTER] = onItemClicked,
    _a[KEYS.ESCAPE] = onEscape,
    _a);
/**
 * @param {?} event
 * @return {?}
 */
function arrowKeysHandler(event) {
    if ([38, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}
var _a;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownState = /** @class */ (function () {
    function Ng2DropdownState() {
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemDestroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(Ng2DropdownState.prototype, "selectedItem", {
        get: /**
         * \@name selectedItem
         * @desc getter for _selectedItem
         * @return {?}
         */
        function () {
            return this._selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name selects a menu item and emits event
     * @param {?} item
     * @param {?=} dispatchEvent
     * @return {?}
     */
    Ng2DropdownState.prototype.select = /**
     * \@name selects a menu item and emits event
     * @param {?} item
     * @param {?=} dispatchEvent
     * @return {?}
     */
    function (item, dispatchEvent) {
        if (dispatchEvent === void 0) { dispatchEvent = true; }
        this._selectedItem = item;
        if (!dispatchEvent || !item) {
            return;
        }
        item.focus();
        this.onItemSelected.emit(item);
    };
    /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    Ng2DropdownState.prototype.unselect = /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    function () {
        this._selectedItem = undefined;
    };
    return Ng2DropdownState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropdownStateService = /** @class */ (function () {
    function DropdownStateService() {
        this.menuState = {
            isVisible: /** @type {?} */ (false),
            toString: /**
             * @return {?}
             */
            function () {
                return this.isVisible === true ? 'visible' : 'hidden';
            }
        };
        this.dropdownState = new Ng2DropdownState();
    }
    DropdownStateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return DropdownStateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2MenuItem = /** @class */ (function () {
    function Ng2MenuItem(state$$1, element, renderer) {
        this.state = state$$1;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@preventClose
         * @desc if true, clicking on the item won't close the dropdown
         */
        this.preventClose = false;
    }
    /**
     * @return {?}
     */
    Ng2MenuItem.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.state.dropdownState.onItemDestroyed.emit(this);
    };
    Object.defineProperty(Ng2MenuItem.prototype, "isSelected", {
        get: /**
         * \@name isSelected
         * @desc returns current selected item
         * @return {?}
         */
        function () {
            return this === this.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    Ng2MenuItem.prototype.select = /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    function ($event) {
        this.state.dropdownState.select(this, true);
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
    };
    /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    Ng2MenuItem.prototype.click = /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    function () {
        this.state.dropdownState.onItemClicked.emit(this);
    };
    /**
     * \@name focus
     * @return {?}
     */
    Ng2MenuItem.prototype.focus = /**
     * \@name focus
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus');
    };
    Ng2MenuItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-menu-item',
                    styles: [".ng2-menu-item{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) /deep/ [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}"],
                    template: "<div class='ng2-menu-item'\n     role=\"button\"\n     tabindex=\"0\"\n     [class.ng2-menu-item--selected]=\"isSelected\"\n     (keydown.enter)=\"click()\"\n     (click)=\"click()\"\n     (mouseover)=\"select()\">\n        <ng-content></ng-content>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    Ng2MenuItem.ctorParameters = function () { return [
        { type: DropdownStateService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
    ]; };
    Ng2MenuItem.propDecorators = {
        "preventClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return Ng2MenuItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownMenu = /** @class */ (function () {
    function Ng2DropdownMenu(state$$1, element, renderer) {
        this.state = state$$1;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@name width
         */
        this.width = 4;
        /**
         * \@description if set to true, the first element of the dropdown will be automatically focused
         * \@name focusFirstElement
         */
        this.focusFirstElement = true;
        /**
         * \@name appendToBody
         */
        this.appendToBody = true;
        /**
         * \@name zIndex
         */
        this.zIndex = 1000;
        this.listeners = {
            arrowHandler: undefined,
            handleKeypress: undefined
        };
    }
    /**
     * \@name show
     * \@shows menu and selects first item
     * @param {?=} position
     * @param {?=} dynamic
     * @return {?}
     */
    Ng2DropdownMenu.prototype.show = /**
     * \@name show
     * \@shows menu and selects first item
     * @param {?=} position
     * @param {?=} dynamic
     * @return {?}
     */
    function (position, dynamic) {
        if (dynamic === void 0) { dynamic = true; }
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        var /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        if (!this.state.menuState.isVisible) {
            // setting handlers
            this.listeners.handleKeypress = this.renderer.listen(dc.body, 'keydown', this.handleKeypress.bind(this));
            this.listeners.arrowHandler = this.renderer.listen(wd, 'keydown', arrowKeysHandler);
        }
        // update state
        this.state.menuState.isVisible = true;
        if (position) {
            this.updatePosition(position, dynamic);
        }
    };
    /**
     * \@name hide
     * @desc hides menu
     * @return {?}
     */
    Ng2DropdownMenu.prototype.hide = /**
     * \@name hide
     * @desc hides menu
     * @return {?}
     */
    function () {
        this.state.menuState.isVisible = false;
        // reset selected item state
        this.state.dropdownState.unselect();
        // call function to unlisten
        this.listeners.arrowHandler ? this.listeners.arrowHandler() : undefined;
        this.listeners.handleKeypress ? this.listeners.handleKeypress() : undefined;
    };
    /**
     * \@name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param {?} position {ClientRect}
     * @param {?} dynamic {boolean}
     * @return {?}
     */
    Ng2DropdownMenu.prototype.updatePosition = /**
     * \@name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param {?} position {ClientRect}
     * @param {?} dynamic {boolean}
     * @return {?}
     */
    function (position, dynamic) {
        this.position = position;
        this.updateOnChange(dynamic);
    };
    /**
     * \@name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param {?} $event
     * @return {?}
     */
    Ng2DropdownMenu.prototype.handleKeypress = /**
     * \@name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var /** @type {?} */ key = $event.keyCode;
        var /** @type {?} */ items = this.items.toArray();
        var /** @type {?} */ index = items.indexOf(this.state.dropdownState.selectedItem);
        if (!ACTIONS.hasOwnProperty(key)) {
            return;
        }
        ACTIONS[key].call(this, index, items, this.state.dropdownState);
    };
    /**
     * \@name getMenuElement
     * @return {?}
     */
    Ng2DropdownMenu.prototype.getMenuElement = /**
     * \@name getMenuElement
     * @return {?}
     */
    function () {
        return this.element.nativeElement.children[0];
    };
    /**
     * \@name calcPositionOffset
     * @param {?} position
     * @return {?}
     */
    Ng2DropdownMenu.prototype.calcPositionOffset = /**
     * \@name calcPositionOffset
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (!wd || !dc || !position) {
            return;
        }
        var /** @type {?} */ element = this.getMenuElement();
        var /** @type {?} */ supportPageOffset = wd.pageXOffset !== undefined;
        var /** @type {?} */ isCSS1Compat = ((dc.compatMode || '') === 'CSS1Compat');
        var /** @type {?} */ x = supportPageOffset ? wd.pageXOffset : isCSS1Compat ?
            dc.documentElement.scrollLeft : dc.body.scrollLeft;
        var /** @type {?} */ y = supportPageOffset ? wd.pageYOffset : isCSS1Compat ?
            dc.documentElement.scrollTop : dc.body.scrollTop;
        var _a = this.applyOffset(position.top + (this.appendToBody ? y - 15 : 0) + "px", position.left + x - 5 + "px"), top = _a.top, left = _a.left;
        var /** @type {?} */ clientWidth = element.clientWidth;
        var /** @type {?} */ clientHeight = element.clientHeight;
        var /** @type {?} */ marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
        var /** @type {?} */ marginFromRight = parseInt(left) + clientWidth;
        var /** @type {?} */ windowScrollHeight = wd.innerHeight + wd.scrollY;
        var /** @type {?} */ windowScrollWidth = wd.innerWidth + wd.scrollX;
        if (marginFromBottom >= windowScrollHeight) {
            top = parseInt(top.replace('px', '')) - clientHeight + "px";
        }
        if (marginFromRight >= windowScrollWidth) {
            var /** @type {?} */ marginRight = marginFromRight - windowScrollWidth + 30;
            left = parseInt(left.replace('px', '')) - marginRight + "px";
        }
        return { top: top, left: left };
    };
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    Ng2DropdownMenu.prototype.applyOffset = /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    function (top, left) {
        if (!this.offset) {
            return { top: top, left: left };
        }
        var /** @type {?} */ offset = this.offset.split(' ');
        if (!offset[1]) {
            offset[1] = '0';
        }
        top = parseInt(top.replace('px', '')) + parseInt(offset[0]) + "px";
        left = parseInt(left.replace('px', '')) + parseInt(offset[1]) + "px";
        return { top: top, left: left };
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (this.appendToBody) {
            // append menu element to the body
            dc.body.appendChild(this.element.nativeElement);
        }
    };
    /**
     * @param {?=} dynamic
     * @return {?}
     */
    Ng2DropdownMenu.prototype.updateOnChange = /**
     * @param {?=} dynamic
     * @return {?}
     */
    function (dynamic) {
        if (dynamic === void 0) { dynamic = true; }
        var /** @type {?} */ element = this.getMenuElement();
        var /** @type {?} */ position = this.calcPositionOffset(this.position);
        if (position) {
            this.renderer.setElementStyle(element, 'top', position.top.toString());
            this.renderer.setElementStyle(element, 'left', position.left.toString());
        }
        // select first item unless user disabled this option
        if (this.focusFirstElement &&
            this.items.first &&
            !this.state.dropdownState.selectedItem) {
            this.state.dropdownState.select(this.items.first, false);
        }
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);
        if (this.listeners.handleKeypress) {
            this.listeners.handleKeypress();
        }
    };
    Ng2DropdownMenu.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-dropdown-menu',
                    styles: [":host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host /deep/ .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"],
                    template: "<!-- MENU -->\n<div class='ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}'\n     [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n     [class.ng2-dropdown-menu--open]=\"state.menuState.isVisible\"\n     [style.z-index]=\"zIndex\"\n     [@fade]=\"state.menuState.toString()\">\n        <div class=\"ng2-dropdown-menu__options-container\"\n             [@opacity]=\"state.menuState.toString()\">\n            <ng-content></ng-content>\n        </div>\n</div>\n\n<!-- BACKDROP -->\n<div class=\"ng2-dropdown-backdrop\" *ngIf=\"state.menuState.isVisible\" (click)=\"hide()\"></div>\n",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ display: 'block', opacity: 1, height: '*', width: '*' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ display: 'none', opacity: 0, overflow: 'hidden', height: 0, width: 0 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, height: '*', width: '*' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, width: 0, height: 0 }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('opacity', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('450ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, offset: 1 }),
                                ]))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0.5, offset: 0.3 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, offset: 1 }),
                                ]))
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2DropdownMenu.ctorParameters = function () { return [
        { type: DropdownStateService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
    ]; };
    Ng2DropdownMenu.propDecorators = {
        "width": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "focusFirstElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "offset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "appendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Ng2MenuItem,] },],
    };
    return Ng2DropdownMenu;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2Dropdown = /** @class */ (function () {
    function Ng2Dropdown(state$$1) {
        this.state = state$$1;
        this.dynamicUpdate = true;
        // outputs
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    Ng2Dropdown.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.state.dropdownState.onItemClicked.subscribe(function (item) {
            _this.onItemClicked.emit(item);
            if (item.preventClose) {
                return;
            }
            _this.hide.call(_this);
        });
        if (this.button) {
            this.button.onMenuToggled.subscribe(function () {
                _this.toggleMenu();
            });
        }
        this.state.dropdownState.onItemSelected.subscribe(function (item) {
            _this.onItemSelected.emit(item);
        });
        this.state.dropdownState.onItemDestroyed.subscribe(function (item) {
            var /** @type {?} */ newSelectedItem;
            var /** @type {?} */ items = _this.menu.items.toArray();
            if (item !== _this.state.dropdownState.selectedItem) {
                return;
            }
            if (_this.menu.focusFirstElement) {
                newSelectedItem = item === items[0] && items.length > 1 ? items[1] : items[0];
            }
            _this.state.dropdownState.select(newSelectedItem);
        });
    };
    /**
     * \@name toggleMenu
     * @desc toggles menu visibility
     * @param {?=} position
     * @return {?}
     */
    Ng2Dropdown.prototype.toggleMenu = /**
     * \@name toggleMenu
     * @desc toggles menu visibility
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.state.menuState.isVisible ? this.hide() : this.show(position);
    };
    /**
     * - hides dropdown
     * \@name hide
     * @return {?}
     */
    Ng2Dropdown.prototype.hide = /**
     * - hides dropdown
     * \@name hide
     * @return {?}
     */
    function () {
        this.menu.hide();
        this.onHide.emit(this);
    };
    /**
     * - shows dropdown
     * \@name show
     * @param {?=} position
     * @return {?}
     */
    Ng2Dropdown.prototype.show = /**
     * - shows dropdown
     * \@name show
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.menu.show(position, this.dynamicUpdate);
        this.onShow.emit(this);
    };
    /**
     * \@name scrollListener
     * @return {?}
     */
    Ng2Dropdown.prototype.scrollListener = /**
     * \@name scrollListener
     * @return {?}
     */
    function () {
        if (this.button && this.dynamicUpdate) {
            this.menu.updatePosition(this.button.getPosition(), true);
        }
    };
    Ng2Dropdown.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-dropdown',
                    template: "<div class=\"ng2-dropdown-container\">\n    <ng-content select=\"ng2-dropdown-button\"></ng-content>\n    <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n</div>\n",
                    providers: [DropdownStateService]
                },] },
    ];
    /** @nocollapse */
    Ng2Dropdown.ctorParameters = function () { return [
        { type: DropdownStateService, },
    ]; };
    Ng2Dropdown.propDecorators = {
        "button": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Ng2DropdownButton,] },],
        "menu": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Ng2DropdownMenu,] },],
        "dynamicUpdate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onItemClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onItemSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "scrollListener": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:scroll',] },],
    };
    return Ng2Dropdown;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownModule = /** @class */ (function () {
    function Ng2DropdownModule() {
    }
    Ng2DropdownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    exports: [
                        Ng2MenuItem,
                        Ng2DropdownButton,
                        Ng2DropdownMenu,
                        Ng2Dropdown
                    ],
                    declarations: [
                        Ng2Dropdown,
                        Ng2MenuItem,
                        Ng2DropdownButton,
                        Ng2DropdownMenu,
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ]
                },] },
    ];
    return Ng2DropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLW1hdGVyaWFsLWRyb3Bkb3duLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvY29tcG9uZW50cy9idXR0b24vbmcyLWRyb3Bkb3duLWJ1dHRvbi50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbWVudS9hY3Rpb25zLnRzIiwibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvc2VydmljZXMvbmcyLWRyb3Bkb3duLXN0YXRlLnRzIiwibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZS50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbWVudS1pdGVtL25nMi1tZW51LWl0ZW0udHMiLCJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL21lbnUvbmcyLWRyb3Bkb3duLW1lbnUudHMiLCJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2Ryb3Bkb3duL25nMi1kcm9wZG93bi50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL25nMi1kcm9wZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT3V0cHV0LFxuICAgIElucHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1kcm9wZG93bi1idXR0b24nLFxuICAgIHN0eWxlczogW2AubmcyLWRyb3Bkb3duLWJ1dHRvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbDtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzouNDVyZW0gLjI1cmVtO2ZvbnQtc2l6ZToxNHB4O2xldHRlci1zcGFjaW5nOi4wOHJlbTtjb2xvcjojNDQ0O291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjtmb250LXdlaWdodDo0MDA7Ym9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VmZWZlZjt0ZXh0LWFsaWduOmxlZnQ7bWluLXdpZHRoOjEwMHB4O3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzttYXgtd2lkdGg6MTUwcHh9Lm5nMi1kcm9wZG93bi1idXR0b246aG92ZXJ7Y29sb3I6IzIyMn0ubmcyLWRyb3Bkb3duLWJ1dHRvbjphY3RpdmUsLm5nMi1kcm9wZG93bi1idXR0b246Zm9jdXN7Y29sb3I6IzIyMjtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMjE5NmYzfS5uZzItZHJvcGRvd24tYnV0dG9uX19sYWJlbHtmbGV4OjEgMSA5NSV9Lm5nMi1kcm9wZG93bi1idXR0b25fX2NhcmV0e3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIDYlfTpob3N0LWNvbnRleHQoLm5nMi1kcm9wZG93bi1idXR0b24tLWljb24pIC5uZzItZHJvcGRvd24tYnV0dG9ue2JvcmRlcjpub25lO21pbi13aWR0aDo0MHB4O3dpZHRoOjQwcHg7Ym9yZGVyLXJhZGl1czoxMDAlO3RyYW5zaXRpb246YWxsIC4yczt0ZXh0LWFsaWduOmNlbnRlcjtoZWlnaHQ6NDBweDtwYWRkaW5nOi41ZW19Omhvc3QtY29udGV4dCgubmcyLWRyb3Bkb3duLWJ1dHRvbi0taWNvbikgLm5nMi1kcm9wZG93bi1idXR0b246YWN0aXZle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMil9YF0sXG4gICAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPSduZzItZHJvcGRvd24tYnV0dG9uJyB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZU1lbnUoKVwiIHRhYmluZGV4PVwiMHNcIj5cbiAgICA8c3BhbiBjbGFzcz1cIm5nMi1kcm9wZG93bi1idXR0b25fX2xhYmVsXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cIm5nMi1kcm9wZG93bi1idXR0b25fX2NhcmV0XCIgKm5nSWY9XCJzaG93Q2FyZXRcIj5cbiAgICAgICAgPHN2ZyBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMzIgMzJcIiBoZWlnaHQ9XCIxNnB4XCIgaWQ9XCLDkMKhw5DCu8OQwr7DkMK5XzFcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHdpZHRoPVwiMTZweFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPjxwYXRoIGQ9XCJNMjQuMjg1LDExLjI4NEwxNiwxOS41NzFsLTguMjg1LTguMjg4Yy0wLjM5NS0wLjM5NS0xLjAzNC0wLjM5NS0xLjQyOSwwICBjLTAuMzk0LDAuMzk1LTAuMzk0LDEuMDM1LDAsMS40M2w4Ljk5OSw5LjAwMmwwLDBsMCwwYzAuMzk0LDAuMzk1LDEuMDM0LDAuMzk1LDEuNDI4LDBsOC45OTktOS4wMDIgIGMwLjM5NC0wLjM5NSwwLjM5NC0xLjAzNiwwLTEuNDMxQzI1LjMxOSwxMC44ODksMjQuNjc5LDEwLjg4OSwyNC4yODUsMTEuMjg0elwiIGZpbGw9XCIjMTIxMzEzXCIgaWQ9XCJFeHBhbmRfTW9yZVwiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz5cbiAgICA8L3NwYW4+XG48L2J1dHRvbj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgTmcyRHJvcGRvd25CdXR0b24ge1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25NZW51VG9nZ2xlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93Q2FyZXQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdG9nZ2xlTWVudVxuICAgICAqIEBkZXNjIGVtaXRzIGV2ZW50IHRvIHRvZ2dsZSBtZW51XG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZU1lbnUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25NZW51VG9nZ2xlZC5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldFBvc2l0aW9uXG4gICAgICogQGRlc2MgcmV0dXJucyBwb3NpdGlvbiBvZiB0aGUgYnV0dG9uXG4gICAgICovXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IENsaWVudFJlY3Qge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nMk1lbnVJdGVtIH0gZnJvbSAnLi4vbWVudS1pdGVtL25nMi1tZW51LWl0ZW0nO1xuaW1wb3J0IHsgTmcyRHJvcGRvd25NZW51IH0gZnJvbSAnLi9uZzItZHJvcGRvd24tbWVudSc7XG5pbXBvcnQgeyBOZzJEcm9wZG93blN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmcyLWRyb3Bkb3duLXN0YXRlJztcblxuY29uc3QgS0VZUyA9IHtcbiAgICBCQUNLU1BBQ0U6IDksXG4gICAgUFJFVjogMzgsXG4gICAgTkVYVDogNDAsXG4gICAgRU5URVI6IDEzLFxuICAgIEVTQ0FQRTogMjdcbn07XG5cbi8qKlxuICogQG5hbWUgb25Td2l0Y2hOZXh0XG4gKiBAcGFyYW0gaW5kZXhcbiAqIEBwYXJhbSBpdGVtc1xuICogQHBhcmFtIHN0YXRlXG4gKi9cbmNvbnN0IG9uU3dpdGNoTmV4dCA9IChpbmRleDogbnVtYmVyLCBpdGVtczogTmcyTWVudUl0ZW1bXSwgc3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUpID0+IHtcbiAgICBpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdChpdGVtc1tpbmRleCArIDFdLCB0cnVlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBuYW1lIG9uU3dpdGNoUHJldlxuICogQHBhcmFtIGluZGV4XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSBzdGF0ZVxuICovXG5jb25zdCBvblN3aXRjaFByZXYgPSAoaW5kZXg6IG51bWJlciwgaXRlbXM6IE5nMk1lbnVJdGVtW10sIHN0YXRlOiBOZzJEcm9wZG93blN0YXRlKSA9PiB7XG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBzdGF0ZS5zZWxlY3QoaXRlbXNbaW5kZXggLSAxXSwgdHJ1ZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAbmFtZSBvbkJhY2tzcGFjZVxuICogQHBhcmFtIGluZGV4XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSBzdGF0ZVxuICovXG5jb25zdCBvbkJhY2tzcGFjZSA9IChpbmRleDogbnVtYmVyLCBpdGVtczogTmcyTWVudUl0ZW1bXSwgc3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUpID0+IHtcbiAgICBpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdChpdGVtc1tpbmRleCArIDFdLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5zZWxlY3QoaXRlbXNbMF0sIHRydWUpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIG9uRXNjYXBlKHRoaXM6IE5nMkRyb3Bkb3duTWVudSkge1xuICAgIHRoaXMuaGlkZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBvbkl0ZW1DbGlja2VkXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEBwYXJhbSBpdGVtc1xuICogQHBhcmFtIHN0YXRlXG4gKi9cbmNvbnN0IG9uSXRlbUNsaWNrZWQgPSAoaW5kZXg6IG51bWJlciwgaXRlbXM6IE5nMk1lbnVJdGVtW10sIHN0YXRlOiBOZzJEcm9wZG93blN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLnNlbGVjdGVkSXRlbSA/IHN0YXRlLnNlbGVjdGVkSXRlbS5jbGljaygpIDogdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XG4gICAgW0tFWVMuQkFDS1NQQUNFXTogb25CYWNrc3BhY2UsXG4gICAgW0tFWVMuUFJFVl06IG9uU3dpdGNoUHJldixcbiAgICBbS0VZUy5ORVhUXTogb25Td2l0Y2hOZXh0LFxuICAgIFtLRVlTLkVOVEVSXTogb25JdGVtQ2xpY2tlZCxcbiAgICBbS0VZUy5FU0NBUEVdOiBvbkVzY2FwZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFycm93S2V5c0hhbmRsZXIoZXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoWzM4LCA0MF0uaW5kZXhPZihldmVudC5rZXlDb2RlKSA+IC0xKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZzJNZW51SXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudS1pdGVtL25nMi1tZW51LWl0ZW0nO1xuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duU3RhdGUge1xuICAgIHB1YmxpYyBvbkl0ZW1TZWxlY3RlZDogRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmcyTWVudUl0ZW0+KCk7XG4gICAgcHVibGljIG9uSXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPigpO1xuICAgIHB1YmxpYyBvbkl0ZW1EZXN0cm95ZWQ6IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPigpO1xuXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtOiBOZzJNZW51SXRlbTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlbGVjdGVkSXRlbVxuICAgICAqIEBkZXNjIGdldHRlciBmb3IgX3NlbGVjdGVkSXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRJdGVtKCk6IE5nMk1lbnVJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZWxlY3RzIGEgbWVudSBpdGVtIGFuZCBlbWl0cyBldmVudFxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdChpdGVtOiBOZzJNZW51SXRlbSB8IHVuZGVmaW5lZCwgZGlzcGF0Y2hFdmVudCA9IHRydWUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcblxuICAgICAgICBpZiAoIWRpc3BhdGNoRXZlbnQgfHwgIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0uZm9jdXMoKTtcblxuICAgICAgICB0aGlzLm9uSXRlbVNlbGVjdGVkLmVtaXQoaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdW5zZWxlY3RcbiAgICAgKiBAZGVzYyBzZXRzIF9zZWxlY3RlZEl0ZW0gYXMgdW5kZWZpbmVkXG4gICAgICovXG4gICAgcHVibGljIHVuc2VsZWN0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmcyRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vbmcyLWRyb3Bkb3duLXN0YXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duU3RhdGVTZXJ2aWNlIHtcbiAgICBwdWJsaWMgbWVudVN0YXRlID0ge1xuICAgICAgICBpc1Zpc2libGU6IDxib29sZWFuPmZhbHNlLFxuICAgICAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlID09PSB0cnVlID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRyb3Bkb3duU3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUgPSBuZXcgTmcyRHJvcGRvd25TdGF0ZSgpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgUmVuZGVyZXIsXG4gICAgRWxlbWVudFJlZixcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERyb3Bkb3duU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmcyLW1lbnUtaXRlbScsXG4gICAgc3R5bGVzOiBbYC5uZzItbWVudS1pdGVte2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOi45ZW07dGV4dC10cmFuc2Zvcm06bm9uZTtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LjAzZW07aGVpZ2h0OjQ4cHg7bGluZS1oZWlnaHQ6NDhweDtwYWRkaW5nOi4zZW0gMS4yNXJlbTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4yNXN9Lm5nMi1tZW51LWl0ZW0tLXNlbGVjdGVke2JhY2tncm91bmQ6cmdiYSgxNTgsMTU4LDE1OCwuMik7b3V0bGluZTowfS5uZzItbWVudS1pdGVtOmZvY3Vze291dGxpbmU6MH0ubmcyLW1lbnUtaXRlbTphY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDE1OCwxNTgsMTU4LC40KX06aG9zdChuZzItbWVudS1pdGVtKSAvZGVlcC8gW25nMi1tZW51LWl0ZW0taWNvbl17dmVydGljYWwtYWxpZ246bWlkZGxlO2ZvbnQtc2l6ZToyOHB4O3dpZHRoOjEuNWVtO2hlaWdodDozMHB4O2NvbG9yOnJnYmEoMCwwLDAsLjQ0KX1gXSxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J25nMi1tZW51LWl0ZW0nXG4gICAgIHJvbGU9XCJidXR0b25cIlxuICAgICB0YWJpbmRleD1cIjBcIlxuICAgICBbY2xhc3MubmcyLW1lbnUtaXRlbS0tc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZFwiXG4gICAgIChrZXlkb3duLmVudGVyKT1cImNsaWNrKClcIlxuICAgICAoY2xpY2spPVwiY2xpY2soKVwiXG4gICAgIChtb3VzZW92ZXIpPVwic2VsZWN0KClcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE5nMk1lbnVJdGVtIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICAvKipcbiAgICAgKiBAcHJldmVudENsb3NlXG4gICAgICogQGRlc2MgaWYgdHJ1ZSwgY2xpY2tpbmcgb24gdGhlIGl0ZW0gd29uJ3QgY2xvc2UgdGhlIGRyb3Bkb3duXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHByZXZlbnRDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdmFsdWVcbiAgICAgKiBAZGVzYyBhbnkgdmFsdWUgYXNzb2NpYXRlZCB0byB0aGUgaXRlbVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogRHJvcGRvd25TdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtRGVzdHJveWVkLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNTZWxlY3RlZFxuICAgICAqIEBkZXNjIHJldHVybnMgY3VycmVudCBzZWxlY3RlZCBpdGVtXG4gICAgICovXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcyA9PT0gdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBjbGlja1xuICAgICAqIEBkZXNjIGVtaXRzIHNlbGVjdCBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoJGV2ZW50Pyk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0KHRoaXMsIHRydWUpO1xuXG4gICAgICAgIGlmICgkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2xpY2tcbiAgICAgKiBAZGVzYyBlbWl0cyBjbGljayBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbUNsaWNrZWQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmb2N1c1xuICAgICAqL1xuICAgIHB1YmxpYyBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLCAnZm9jdXMnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIFJlbmRlcmVyLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgdHJpZ2dlcixcbiAgICBzdHlsZSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIGFuaW1hdGUsXG4gICAga2V5ZnJhbWVzLFxuICAgIHN0YXRlXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBBQ1RJT05TLCBhcnJvd0tleXNIYW5kbGVyIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuaW1wb3J0IHsgTmcyTWVudUl0ZW0gfSBmcm9tICcuLi9tZW51LWl0ZW0vbmcyLW1lbnUtaXRlbSc7XG5pbXBvcnQgeyBEcm9wZG93blN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLXN0YXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1kcm9wZG93bi1tZW51JyxcbiAgICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubmcyLWRyb3Bkb3duLW1lbnV7b3ZlcmZsb3cteTphdXRvO2JveC1zaGFkb3c6MCAxcHggMnB4IDAgcmdiYSgwLDAsMCwuMyk7cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZzouNWVtIDA7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MXB4O21heC1oZWlnaHQ6NDAwcHg7d2lkdGg6MjYwcHg7bWluLWhlaWdodDowO2Rpc3BsYXk6YmxvY2t9Lm5nMi1kcm9wZG93bi1tZW51Lm5nMi1kcm9wZG93bi1tZW51LS1pbnNpZGUtZWxlbWVudHtwb3NpdGlvbjpmaXhlZH0ubmcyLWRyb3Bkb3duLW1lbnUubmcyLWRyb3Bkb3duLW1lbnUtLXdpZHRoLS0ye3dpZHRoOjIwMHB4fS5uZzItZHJvcGRvd24tbWVudS5uZzItZHJvcGRvd24tbWVudS0td2lkdGgtLTR7d2lkdGg6MjYwcHh9Lm5nMi1kcm9wZG93bi1tZW51Lm5nMi1kcm9wZG93bi1tZW51LS13aWR0aC0tNnt3aWR0aDozMjBweH0ubmcyLWRyb3Bkb3duLWJhY2tkcm9we3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtvdmVyZmxvdzpoaWRkZW59Omhvc3QgL2RlZXAvIC5uZzItbWVudS1kaXZpZGVye2hlaWdodDoxcHg7bWluLWhlaWdodDoxcHg7bWF4LWhlaWdodDoxcHg7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQ6I2Y5ZjlmOX1gXSxcbiAgICB0ZW1wbGF0ZTogYDwhLS0gTUVOVSAtLT5cbjxkaXYgY2xhc3M9J25nMi1kcm9wZG93bi1tZW51IG5nMi1kcm9wZG93bi1tZW51LS0td2lkdGgtLXt7IHdpZHRoIH19J1xuICAgICBbY2xhc3MubmcyLWRyb3Bkb3duLW1lbnUtLWluc2lkZS1lbGVtZW50XT1cIiFhcHBlbmRUb0JvZHlcIlxuICAgICBbY2xhc3MubmcyLWRyb3Bkb3duLW1lbnUtLW9wZW5dPVwic3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZVwiXG4gICAgIFtzdHlsZS56LWluZGV4XT1cInpJbmRleFwiXG4gICAgIFtAZmFkZV09XCJzdGF0ZS5tZW51U3RhdGUudG9TdHJpbmcoKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmcyLWRyb3Bkb3duLW1lbnVfX29wdGlvbnMtY29udGFpbmVyXCJcbiAgICAgICAgICAgICBbQG9wYWNpdHldPVwic3RhdGUubWVudVN0YXRlLnRvU3RyaW5nKClcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBCQUNLRFJPUCAtLT5cbjxkaXYgY2xhc3M9XCJuZzItZHJvcGRvd24tYmFja2Ryb3BcIiAqbmdJZj1cInN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGVcIiAoY2xpY2spPVwiaGlkZSgpXCI+PC9kaXY+XG5gLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignZmFkZScsIFtcbiAgICAgICAgICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoXG4gICAgICAgICAgICAgICAge2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIGhlaWdodDogJyonLCB3aWR0aDogJyonfVxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoXG4gICAgICAgICAgICAgICAge2Rpc3BsYXk6ICdub25lJywgb3BhY2l0eTogMCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBoZWlnaHQ6IDAsIHdpZHRoOiAwfVxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gdmlzaWJsZScsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIGhlaWdodDogJyonLCB3aWR0aDogJyonfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaGlkZGVuJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzM1MG1zIGVhc2Utb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCdvcGFjaXR5JywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHZpc2libGUnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnNDUwbXMgZWFzZS1pbicsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMX0pLFxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2aXNpYmxlID0+IGhpZGRlbicsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAuNSwgb2Zmc2V0OiAwLjN9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMX0pLFxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duTWVudSB7XG4gICAgLyoqXG4gICAgICogQG5hbWUgd2lkdGhcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDQ7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gaWYgc2V0IHRvIHRydWUsIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBkcm9wZG93biB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZm9jdXNlZFxuICAgICAqIEBuYW1lIGZvY3VzRmlyc3RFbGVtZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGZvY3VzRmlyc3RFbGVtZW50OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBzZXRzIGRyb3Bkb3duIG9mZnNldCBmcm9tIHRoZSBidXR0b25cbiAgICAgKiBAbmFtZSBvZmZzZXQge3N0cmluZ30gZm9sbG93IGZvcm1hdCAnPG51bWJlcj4gPG51bWJlcj4nIGV4LiAnMCAyMCdcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgb2Zmc2V0OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhcHBlbmRUb0JvZHlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXBwZW5kVG9Cb2R5OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHpJbmRleFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB6SW5kZXggPSAxMDAwO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXRlbXNcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKE5nMk1lbnVJdGVtKSBwdWJsaWMgaXRlbXM6IFF1ZXJ5TGlzdDxOZzJNZW51SXRlbT47XG5cbiAgICBwcml2YXRlIHBvc2l0aW9uOiBDbGllbnRSZWN0O1xuXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnMgPSB7XG4gICAgICAgIGFycm93SGFuZGxlcjogdW5kZWZpbmVkLFxuICAgICAgICBoYW5kbGVLZXlwcmVzczogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZTogRHJvcGRvd25TdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2hvd1xuICAgICAqIEBzaG93cyBtZW51IGFuZCBzZWxlY3RzIGZpcnN0IGl0ZW1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvdyhwb3NpdGlvbj86IENsaWVudFJlY3QsIGR5bmFtaWMgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRjID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB3ZCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5tZW51U3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBzZXR0aW5nIGhhbmRsZXJzXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcyA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGRjLmJvZHksICdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlwcmVzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmFycm93SGFuZGxlciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHdkLCAna2V5ZG93bicsIGFycm93S2V5c0hhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCBkeW5hbWljKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGhpZGVcbiAgICAgKiBAZGVzYyBoaWRlcyBtZW51XG4gICAgICovXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHJlc2V0IHNlbGVjdGVkIGl0ZW0gc3RhdGVcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnVuc2VsZWN0KCk7XG5cbiAgICAgICAgLy8gY2FsbCBmdW5jdGlvbiB0byB1bmxpc3RlblxuICAgICAgICB0aGlzLmxpc3RlbmVycy5hcnJvd0hhbmRsZXIgPyB0aGlzLmxpc3RlbmVycy5hcnJvd0hhbmRsZXIoKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuaGFuZGxlS2V5cHJlc3MgPyB0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcygpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHVwZGF0ZVBvc2l0aW9uXG4gICAgICogQGRlc2MgdXBkYXRlcyB0aGUgbWVudSBwb3NpdGlvbiBldmVyeSB0aW1lIGl0IGlzIHRvZ2dsZWRcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24ge0NsaWVudFJlY3R9XG4gICAgICogQHBhcmFtIGR5bmFtaWMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uOiBDbGllbnRSZWN0LCBkeW5hbWljOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy51cGRhdGVPbkNoYW5nZShkeW5hbWljKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoYW5kbGVLZXlwcmVzc1xuICAgICAqIEBkZXNjIGV4ZWN1dGVzIGZ1bmN0aW9ucyBvbiBrZXlQcmVzcyBiYXNlZCBvbiB0aGUga2V5IHByZXNzZWRcbiAgICAgKiBAcGFyYW0gJGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZUtleXByZXNzKCRldmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXkgPSAkZXZlbnQua2V5Q29kZTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5pbmRleE9mKHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5zZWxlY3RlZEl0ZW0pO1xuXG4gICAgICAgIGlmICghQUNUSU9OUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBBQ1RJT05TW2tleV0uY2FsbCh0aGlzLCBpbmRleCwgaXRlbXMsIHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0TWVudUVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldE1lbnVFbGVtZW50KCk6IEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2FsY1Bvc2l0aW9uT2Zmc2V0XG4gICAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjYWxjUG9zaXRpb25PZmZzZXQocG9zaXRpb24pOiB7IHRvcDogc3RyaW5nLCBsZWZ0OiBzdHJpbmcgfSB7XG4gICAgICAgIGNvbnN0IHdkID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGRjID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghd2QgfHwgIWRjIHx8ICFwb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0TWVudUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3Qgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3ZC5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBpc0NTUzFDb21wYXQgPSAoKGRjLmNvbXBhdE1vZGUgfHwgJycpID09PSAnQ1NTMUNvbXBhdCcpO1xuXG4gICAgICAgIGNvbnN0IHggPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdkLnBhZ2VYT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID9cbiAgICAgICAgICAgIGRjLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IDogZGMuYm9keS5zY3JvbGxMZWZ0O1xuXG4gICAgICAgIGNvbnN0IHkgPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdkLnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID9cbiAgICAgICAgICAgIGRjLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgOiBkYy5ib2R5LnNjcm9sbFRvcDtcblxuICAgICAgICBsZXQgeyB0b3AsIGxlZnQgfSA9IHRoaXMuYXBwbHlPZmZzZXQoXG4gICAgICAgICAgICBgJHtwb3NpdGlvbi50b3AgKyAodGhpcy5hcHBlbmRUb0JvZHkgPyB5IC0gMTUgOiAwKX1weGAsXG4gICAgICAgICAgICBgJHtwb3NpdGlvbi5sZWZ0ICsgeCAtIDV9cHhgXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY2xpZW50V2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgICBjb25zdCBtYXJnaW5Gcm9tQm90dG9tID0gcGFyc2VJbnQodG9wKSArIGNsaWVudEhlaWdodCArICh0aGlzLmFwcGVuZFRvQm9keSA/IDAgOiB5IC0gMTUpO1xuICAgICAgICBjb25zdCBtYXJnaW5Gcm9tUmlnaHQgPSBwYXJzZUludChsZWZ0KSArIGNsaWVudFdpZHRoO1xuXG4gICAgICAgIGNvbnN0IHdpbmRvd1Njcm9sbEhlaWdodCA9IHdkLmlubmVySGVpZ2h0ICsgd2Quc2Nyb2xsWTtcbiAgICAgICAgY29uc3Qgd2luZG93U2Nyb2xsV2lkdGggPSB3ZC5pbm5lcldpZHRoICsgd2Quc2Nyb2xsWDtcblxuICAgICAgICBpZiAobWFyZ2luRnJvbUJvdHRvbSA+PSB3aW5kb3dTY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICAgIHRvcCA9IGAke3BhcnNlSW50KHRvcC5yZXBsYWNlKCdweCcsICcnKSkgLSBjbGllbnRIZWlnaHR9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hcmdpbkZyb21SaWdodCA+PSB3aW5kb3dTY3JvbGxXaWR0aCkge1xuICAgICAgICAgICAgY29uc3QgbWFyZ2luUmlnaHQgPSBtYXJnaW5Gcm9tUmlnaHQgLSB3aW5kb3dTY3JvbGxXaWR0aCArIDMwO1xuICAgICAgICAgICAgbGVmdCA9IGAke3BhcnNlSW50KGxlZnQucmVwbGFjZSgncHgnLCAnJykpIC0gbWFyZ2luUmlnaHR9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdG9wLCBsZWZ0IH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseU9mZnNldCh0b3A6IHN0cmluZywgbGVmdDogc3RyaW5nKTogeyB0b3A6IHN0cmluZywgbGVmdDogc3RyaW5nIH0ge1xuICAgICAgICBpZiAoIXRoaXMub2Zmc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4geyB0b3AsIGxlZnQgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMub2Zmc2V0LnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKCFvZmZzZXRbMV0pIHtcbiAgICAgICAgICAgIG9mZnNldFsxXSA9ICcwJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRvcCA9IGAke3BhcnNlSW50KHRvcC5yZXBsYWNlKCdweCcsICcnKSkgKyBwYXJzZUludChvZmZzZXRbMF0pfXB4YDtcbiAgICAgICAgbGVmdCA9IGAke3BhcnNlSW50KGxlZnQucmVwbGFjZSgncHgnLCAnJykpICsgcGFyc2VJbnQob2Zmc2V0WzFdKX1weGA7XG5cbiAgICAgICAgcmV0dXJuIHsgdG9wLCBsZWZ0IH07XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCBkYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgICAgICAvLyBhcHBlbmQgbWVudSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICAgICAgICBkYy5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVPbkNoYW5nZShkeW5hbWljID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRNZW51RWxlbWVudCgpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuY2FsY1Bvc2l0aW9uT2Zmc2V0KHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZWxlbWVudCwgJ3RvcCcsIHBvc2l0aW9uLnRvcC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGVsZW1lbnQsICdsZWZ0JywgcG9zaXRpb24ubGVmdC50b1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlbGVjdCBmaXJzdCBpdGVtIHVubGVzcyB1c2VyIGRpc2FibGVkIHRoaXMgb3B0aW9uXG4gICAgICAgIGlmICh0aGlzLmZvY3VzRmlyc3RFbGVtZW50ICYmXG4gICAgICAgICAgICB0aGlzLml0ZW1zLmZpcnN0ICYmXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdCh0aGlzLml0ZW1zLmZpcnN0LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuaGFuZGxlS2V5cHJlc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgSG9zdExpc3RlbmVyLFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmcyRHJvcGRvd25CdXR0b24gfSBmcm9tICcuLi9idXR0b24vbmcyLWRyb3Bkb3duLWJ1dHRvbic7XG5pbXBvcnQgeyBOZzJEcm9wZG93bk1lbnUgfSBmcm9tICcuLi9tZW51L25nMi1kcm9wZG93bi1tZW51JztcbmltcG9ydCB7IERyb3Bkb3duU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBOZzJNZW51SXRlbSB9IGZyb20gJy4uL21lbnUtaXRlbS9uZzItbWVudS1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItZHJvcGRvd24nLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5nMi1kcm9wZG93bi1jb250YWluZXJcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuZzItZHJvcGRvd24tYnV0dG9uXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5nMi1kcm9wZG93bi1tZW51XCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICAgIHByb3ZpZGVyczogWyBEcm9wZG93blN0YXRlU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duIHtcbiAgICAvLyBnZXQgY2hpbGRyZW4gY29tcG9uZW50c1xuICAgIEBDb250ZW50Q2hpbGQoTmcyRHJvcGRvd25CdXR0b24pIHB1YmxpYyBidXR0b246IE5nMkRyb3Bkb3duQnV0dG9uO1xuICAgIEBDb250ZW50Q2hpbGQoTmcyRHJvcGRvd25NZW51KSBwdWJsaWMgbWVudTogTmcyRHJvcGRvd25NZW51O1xuXG4gICAgQElucHV0KCkgcHVibGljIGR5bmFtaWNVcGRhdGUgPSB0cnVlO1xuXG4gICAgLy8gb3V0cHV0c1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25JdGVtQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uSXRlbVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25TaG93OiBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZzJEcm9wZG93bj4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uSGlkZTogRXZlbnRFbWl0dGVyPE5nMkRyb3Bkb3duPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXRlOiBEcm9wZG93blN0YXRlU2VydmljZSkge31cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbUNsaWNrZWQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkl0ZW1DbGlja2VkLmVtaXQoaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnByZXZlbnRDbG9zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oaWRlLmNhbGwodGhpcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5idXR0b24ub25NZW51VG9nZ2xlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtU2VsZWN0ZWQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkl0ZW1TZWxlY3RlZC5lbWl0KGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtRGVzdHJveWVkLnN1YnNjcmliZSgoaXRlbTogTmcyTWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdTZWxlY3RlZEl0ZW06IE5nMk1lbnVJdGVtIHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLm1lbnUuaXRlbXMudG9BcnJheSgpO1xuXG4gICAgICAgICAgICBpZiAoaXRlbSAhPT0gdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubWVudS5mb2N1c0ZpcnN0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkSXRlbSA9IGl0ZW0gPT09IGl0ZW1zWzBdICYmIGl0ZW1zLmxlbmd0aCA+IDEgPyBpdGVtc1sxXSA6IGl0ZW1zWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0KG5ld1NlbGVjdGVkSXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRvZ2dsZU1lbnVcbiAgICAgKiBAZGVzYyB0b2dnbGVzIG1lbnUgdmlzaWJpbGl0eVxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGVNZW51KHBvc2l0aW9uID0gdGhpcy5idXR0b24uZ2V0UG9zaXRpb24oKSk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGUgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogLSBoaWRlcyBkcm9wZG93blxuICAgICAqIEBuYW1lIGhpZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZW51LmhpZGUoKTtcbiAgICAgICAgdGhpcy5vbkhpZGUuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAtIHNob3dzIGRyb3Bkb3duXG4gICAgICogQG5hbWUgc2hvd1xuICAgICAqIEBwYXJhbSBwb3NpdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93KHBvc2l0aW9uID0gdGhpcy5idXR0b24uZ2V0UG9zaXRpb24oKSk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lbnUuc2hvdyhwb3NpdGlvbiwgdGhpcy5keW5hbWljVXBkYXRlKTtcbiAgICAgICAgdGhpcy5vblNob3cuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzY3JvbGxMaXN0ZW5lclxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpzY3JvbGwnKVxuICAgIHB1YmxpYyBzY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uICYmIHRoaXMuZHluYW1pY1VwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5tZW51LnVwZGF0ZVBvc2l0aW9uKHRoaXMuYnV0dG9uLmdldFBvc2l0aW9uKCksIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmcyRHJvcGRvd24gfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24vbmcyLWRyb3Bkb3duJztcbmltcG9ydCB7IE5nMkRyb3Bkb3duTWVudSB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L25nMi1kcm9wZG93bi1tZW51JztcbmltcG9ydCB7IE5nMkRyb3Bkb3duQnV0dG9uIH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9uZzItZHJvcGRvd24tYnV0dG9uJztcbmltcG9ydCB7IE5nMk1lbnVJdGVtIH0gZnJvbSAnLi9jb21wb25lbnRzL21lbnUtaXRlbS9uZzItbWVudS1pdGVtJztcblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEcm9wZG93blN0YXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZXhwb3J0czogW1xuICAgICAgICBOZzJNZW51SXRlbSxcbiAgICAgICAgTmcyRHJvcGRvd25CdXR0b24sXG4gICAgICAgIE5nMkRyb3Bkb3duTWVudSxcbiAgICAgICAgTmcyRHJvcGRvd25cbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZzJEcm9wZG93bixcbiAgICAgICAgTmcyTWVudUl0ZW0sXG4gICAgICAgIE5nMkRyb3Bkb3duQnV0dG9uLFxuICAgICAgICBOZzJEcm9wZG93bk1lbnUsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmcyRHJvcGRvd25Nb2R1bGUge31cblxuZXhwb3J0IHtcbiAgICBOZzJEcm9wZG93bixcbiAgICBOZzJEcm9wZG93bk1lbnUsXG4gICAgTmcyTWVudUl0ZW0sXG4gICAgTmcyRHJvcGRvd25CdXR0b24sXG4gICAgRHJvcGRvd25TdGF0ZVNlcnZpY2Vcbn1cbiJdLCJuYW1lcyI6WyJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtJQTBCSSwyQkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQ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

/***/ }),

/***/ "./node_modules/ngx-chips/esm5/ngx-chips.js":
/*!**************************************************!*\
  !*** ./node_modules/ngx-chips/esm5/ngx-chips.js ***!
  \**************************************************/
/*! exports provided: TagInputModule, TagInputDropdown, DeleteIconComponent, TagInputForm, TagRipple, TagComponent, TagInputComponent, ɵb, ɵa, ɵd, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputModule", function() { return TagInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function() { return TagInputDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function() { return DeleteIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputForm", function() { return TagInputForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagRipple", function() { return TagRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return TagInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return animations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TagInputAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return HighlightPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DragProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-material-dropdown */ "./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var escape = function (s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); };
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, arg) {
        if (!arg.trim()) {
            return value;
        }
        try {
            var regex = new RegExp("(" + escape(arg) + ")", 'i');
            return value.replace(regex, '<b>$1</b>');
        }
        catch (e) {
            return value;
        }
    };
    return HighlightPipe;
}());
HighlightPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                name: 'highlight'
            },] },
];
var PLACEHOLDER = '+ Tag';
var SECONDARY_PLACEHOLDER = 'Enter a new tag';
var KEYDOWN = 'keydown';
var KEYUP = 'keyup';
var MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
var ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
var KEY_PRESS_ACTIONS = {
    8: ACTIONS_KEYS.DELETE,
    37: ACTIONS_KEYS.SWITCH_PREV,
    39: ACTIONS_KEYS.SWITCH_NEXT,
    9: ACTIONS_KEYS.TAB
};
var DRAG_AND_DROP_KEY = 'Text';
var NEXT = 'NEXT';
var PREV = 'PREV';
var DragProvider = /** @class */ (function () {
    function DragProvider() {
        this.state = {
            dragging: false,
            dropping: false,
            index: undefined
        };
    }
    DragProvider.prototype.setDraggedItem = function (event, tag) {
        event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
    };
    DragProvider.prototype.getDraggedItem = function (event) {
        var data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);
        try {
            return (JSON.parse(data));
        }
        catch (_a) {
            return;
        }
    };
    DragProvider.prototype.setSender = function (sender) {
        this.sender = sender;
    };
    DragProvider.prototype.setReceiver = function (receiver) {
        this.receiver = receiver;
    };
    DragProvider.prototype.onTagDropped = function (tag, indexDragged, indexDropped) {
        this.onDragEnd();
        this.sender.onRemoveRequested(tag, indexDragged);
        this.receiver.onAddingRequested(false, tag, indexDropped);
    };
    DragProvider.prototype.setState = function (state$$1) {
        this.state = Object.assign({}, this.state, state$$1);
    };
    DragProvider.prototype.getState = function (key) {
        return key ? this.state[key] : this.state;
    };
    DragProvider.prototype.onDragEnd = function () {
        this.setState({
            dragging: false,
            dropping: false,
            index: undefined
        });
    };
    return DragProvider;
}());
DragProvider.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
var defaults = {
    tagInput: ({
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: PLACEHOLDER,
        secondaryPlaceholder: SECONDARY_PLACEHOLDER,
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: null,
        inputClass: '',
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: '',
        disable: false,
        dragZone: '',
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value',
        animationDuration: {
            enter: '250ms',
            leave: '150ms'
        }
    }),
    dropdown: ({
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        dynamicUpdate: true,
        zIndex: 1000,
        matchingFn: matchingFn
    })
};
function matchingFn(value, target) {
    var targetValue = target[this.displayBy].toString();
    return targetValue && targetValue
        .toLowerCase()
        .indexOf(value.toLowerCase()) >= 0;
}
var OptionsProvider = /** @class */ (function () {
    function OptionsProvider() {
    }
    OptionsProvider.prototype.setOptions = function (options) {
        OptionsProvider.defaults.tagInput = Object.assign({}, defaults.tagInput, options.tagInput);
        OptionsProvider.defaults.dropdown = Object.assign({}, defaults.dropdown, options.dropdown);
    };
    return OptionsProvider;
}());
OptionsProvider.defaults = defaults;
function isObject(obj) {
    return obj === Object(obj);
}
var TagInputAccessor = /** @class */ (function () {
    function TagInputAccessor() {
        this._items = [];
        this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
        this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
    }
    Object.defineProperty(TagInputAccessor.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            this._onChangeCallback(this._items);
        },
        enumerable: true,
        configurable: true
    });
    TagInputAccessor.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    TagInputAccessor.prototype.writeValue = function (items) {
        this._items = items || [];
    };
    TagInputAccessor.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    TagInputAccessor.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    TagInputAccessor.prototype.getItemValue = function (item, fromDropdown) {
        if (fromDropdown === void 0) { fromDropdown = false; }
        var property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
        return isObject(item) ? item[property] : item;
    };
    TagInputAccessor.prototype.getItemDisplay = function (item, fromDropdown) {
        if (fromDropdown === void 0) { fromDropdown = false; }
        var property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
        return isObject(item) ? item[property] : item;
    };
    TagInputAccessor.prototype.getItemsWithout = function (index) {
        return this.items.filter(function (item, position) { return position !== index; });
    };
    return TagInputAccessor;
}());
TagInputAccessor.propDecorators = {
    "displayBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "identifyBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
function listen(listenerType, action, condition) {
    if (condition === void 0) { condition = true; }
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    if (!condition) {
        return;
    }
    this.listeners[listenerType].push(action);
}
var TagInputForm = /** @class */ (function () {
    function TagInputForm() {
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.validators = [];
        this.asyncValidators = [];
        this.tabindex = '';
        this.disabled = false;
        this.item = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.disabled });
    }
    Object.defineProperty(TagInputForm.prototype, "inputText", {
        get: function () {
            return this.item.value;
        },
        set: function (text) {
            this.item.setValue(text);
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.ngOnInit = function () {
        this.item.setValidators(this.validators);
        this.item.setAsyncValidators(this.asyncValidators);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            item: this.item
        });
    };
    TagInputForm.prototype.ngOnChanges = function (changes) {
        if (changes["disabled"] && !changes["disabled"].firstChange) {
            if (changes["disabled"].currentValue) {
                this.form.controls['item'].disable();
            }
            else {
                this.form.controls['item'].enable();
            }
        }
    };
    Object.defineProperty(TagInputForm.prototype, "value", {
        get: function () {
            return (this.form.get('item'));
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.isInputFocused = function () {
        var doc = typeof document !== 'undefined' ? document : undefined;
        return doc ? doc.activeElement === this.input.nativeElement : false;
    };
    TagInputForm.prototype.getErrorMessages = function (messages) {
        var _this = this;
        return Object.keys(messages)
            .filter(function (err) { return _this.value.hasError(err); })
            .map(function (err) { return messages[err]; });
    };
    TagInputForm.prototype.hasErrors = function () {
        var _b = this.form, dirty = _b.dirty, value = _b.value, valid = _b.valid;
        return dirty && value.item && !valid;
    };
    TagInputForm.prototype.focus = function () {
        this.input.nativeElement.focus();
    };
    TagInputForm.prototype.blur = function () {
        this.input.nativeElement.blur();
    };
    TagInputForm.prototype.getElementPosition = function () {
        return this.input.nativeElement.getBoundingClientRect();
    };
    TagInputForm.prototype.destroy = function () {
        var input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    };
    TagInputForm.prototype.onKeyDown = function ($event) {
        this.inputText = this.value.value;
        if ($event.key === 'Enter') {
            this.submit($event);
            this.inputText = '';
        }
        return this.onKeydown.emit($event);
    };
    TagInputForm.prototype.onKeyUp = function ($event) {
        this.inputText = this.value.value;
        return this.onKeyup.emit($event);
    };
    TagInputForm.prototype.submit = function ($event) {
        $event.preventDefault();
        if (this.form.valid) {
            this.onSubmit.emit($event);
        }
    };
    return TagInputForm;
}());
TagInputForm.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-input-form',
                styles: [".dark tag:focus{-webkit-box-shadow:0 0 0 1px #323232;box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;-webkit-box-shadow:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;-webkit-box-shadow:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.4);box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{-webkit-box-shadow:inset 0 1px 1px #d9534f;box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-webkit-transition:all .25s;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.minimal.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.dark.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap3-info.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;padding:4px;cursor:text;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}"],
                template: "<!-- form -->\n<form (ngSubmit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n           minlength=\"1\"\n           formControlName=\"item\"\n\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled ? disabled : null\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyUp($event)\"\n    />\n</form>\n"
            },] },
];
TagInputForm.propDecorators = {
    "onSubmit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onFocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeyup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeydown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "inputTextChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "validators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "asyncValidators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "tabindex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "input": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['input',] },],
    "inputText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var defaults$1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return OptionsProvider.defaults.dropdown; });
var TagInputDropdown = /** @class */ (function () {
    function TagInputDropdown(injector) {
        var _this = this;
        this.injector = injector;
        this.offset = new defaults$1().offset;
        this.focusFirstElement = new defaults$1().focusFirstElement;
        this.showDropdownIfEmpty = new defaults$1().showDropdownIfEmpty;
        this.minimumTextLength = new defaults$1().minimumTextLength;
        this.limitItemsTo = new defaults$1().limitItemsTo;
        this.displayBy = new defaults$1().displayBy;
        this.identifyBy = new defaults$1().identifyBy;
        this.matchingFn = new defaults$1().matchingFn;
        this.appendToBody = new defaults$1().appendToBody;
        this.keepOpen = new defaults$1().keepOpen;
        this.dynamicUpdate = new defaults$1().dynamicUpdate;
        this.zIndex = new defaults$1().zIndex;
        this.items = [];
        this.tagInput = this.injector.get(TagInputComponent);
        this._autocompleteItems = [];
        this.show = function () {
            var maxItemsReached = _this.tagInput.items.length === _this.tagInput.maxItems;
            var value = _this.getFormValue();
            var hasMinimumText = value.trim().length >= _this.minimumTextLength;
            var position = _this.calculatePosition();
            var items = _this.getMatchingItems(value);
            var hasItems = items.length > 0;
            var isHidden = _this.isVisible === false;
            var showDropdownIfEmpty = _this.showDropdownIfEmpty && hasItems && !value;
            var isDisabled = _this.tagInput.disable;
            var shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            var shouldHide = _this.isVisible && !hasItems;
            if (_this.autocompleteObservable && hasMinimumText) {
                return _this.getItemsFromObservable(value);
            }
            if ((!_this.showDropdownIfEmpty && !value) || maxItemsReached || isDisabled) {
                return _this.dropdown.hide();
            }
            _this.setItems(items);
            if (shouldShow) {
                _this.dropdown.show(position);
            }
            else if (shouldHide) {
                _this.hide();
            }
        };
        this.requestAdding = function (item) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var tag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tag = this.createTagModel(item);
                        return [4 /*yield*/, this.tagInput.onAddingRequested(true, tag).catch(function () { })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.resetItems = function () {
            _this.items = [];
        };
        this.getItemsFromObservable = function (text) {
            _this.setLoadingState(true);
            var subscribeFn = function (data) {
                _this.setLoadingState(false)
                    .populateItems(data);
                _this.setItems(_this.getMatchingItems(text));
                if (_this.items.length) {
                    _this.dropdown.show(_this.calculatePosition());
                }
                else {
                    _this.dropdown.hide();
                }
            };
            _this.autocompleteObservable(text)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .subscribe(subscribeFn, function () { return _this.setLoadingState(false); });
        };
    }
    Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
        get: function () {
            var _this = this;
            var items = this._autocompleteItems;
            if (!items) {
                return [];
            }
            return items.map(function (item) {
                return typeof item === 'string' ? (_b = {}, _b[_this.displayBy] = item, _b[_this.identifyBy] = item, _b) : item;
                var _b;
            });
        },
        set: function (items) {
            this._autocompleteItems = items;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.onItemClicked().subscribe(function (item) {
            _this.requestAdding(item);
        });
        this.onHide().subscribe(this.resetItems);
        var DEBOUNCE_TIME = 200;
        var KEEP_OPEN = this.keepOpen;
        this.tagInput
            .onTextChange
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (value) {
            if (KEEP_OPEN === false) {
                return value.length > 0;
            }
            return true;
        }))
            .subscribe(this.show);
    };
    TagInputDropdown.prototype.updatePosition = function () {
        var position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
    };
    Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
        get: function () {
            return this.dropdown.menu.state.menuState.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.onHide = function () {
        return this.dropdown.onHide;
    };
    TagInputDropdown.prototype.onItemClicked = function () {
        return this.dropdown.onItemClicked;
    };
    Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
        get: function () {
            return this.dropdown.menu.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputDropdown.prototype, "state", {
        get: function () {
            return this.dropdown.menu.state;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.hide = function () {
        this.resetItems();
        this.dropdown.hide();
    };
    TagInputDropdown.prototype.scrollListener = function () {
        if (!this.isVisible || !this.dynamicUpdate) {
            return;
        }
        this.updatePosition();
    };
    TagInputDropdown.prototype.onWindowBlur = function () {
        this.dropdown.hide();
    };
    TagInputDropdown.prototype.getFormValue = function () {
        var formValue = this.tagInput.formValue;
        return formValue ? formValue.toString().trim() : '';
    };
    TagInputDropdown.prototype.calculatePosition = function () {
        return this.tagInput.inputForm.getElementPosition();
    };
    TagInputDropdown.prototype.createTagModel = function (item) {
        var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return Object.assign({}, item.value, (_b = {}, _b[this.tagInput.displayBy] = display, _b[this.tagInput.identifyBy] = value, _b));
        var _b;
    };
    TagInputDropdown.prototype.getMatchingItems = function (value) {
        var _this = this;
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        var dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter(function (item) {
            var hasValue = dupesAllowed ? false : _this.tagInput.tags.some(function (tag) {
                var identifyBy = _this.tagInput.identifyBy;
                var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                return model === item[_this.identifyBy];
            });
            return _this.matchingFn(value, item) && (hasValue === false);
        });
    };
    TagInputDropdown.prototype.setItems = function (items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    };
    TagInputDropdown.prototype.populateItems = function (data) {
        var _this = this;
        this.autocompleteItems = data.map(function (item) {
            return typeof item === 'string' ? (_b = {}, _b[_this.displayBy] = item, _b[_this.identifyBy] = item, _b) : item;
            var _b;
        });
        return this;
    };
    TagInputDropdown.prototype.setLoadingState = function (state$$1) {
        this.tagInput.isLoading = state$$1;
        return this;
    };
    return TagInputDropdown;
}());
TagInputDropdown.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-input-dropdown',
                template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n"
            },] },
];
TagInputDropdown.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], },
]; };
TagInputDropdown.propDecorators = {
    "dropdown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"],] },],
    "templates": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],] },],
    "offset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "focusFirstElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "showDropdownIfEmpty": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "autocompleteObservable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "minimumTextLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "limitItemsTo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "displayBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "identifyBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "matchingFn": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "appendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "keepOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "dynamicUpdate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "autocompleteItems": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "scrollListener": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:scroll',] },],
    "onWindowBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:blur',] },],
};
var TagRipple = /** @class */ (function () {
    function TagRipple() {
        this.state = 'none';
    }
    return TagRipple;
}());
TagRipple.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-ripple',
                styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n        \n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "],
                template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('ink', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ width: 0, opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('none => clicked', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, offset: 0.5, width: '50%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                            ]))
                        ])
                    ])
                ]
            },] },
];
TagRipple.propDecorators = {
    "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var TagComponent = /** @class */ (function () {
    function TagComponent(element, renderer, cdRef) {
        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.disabled = false;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editing = false;
        this.rippleState = "none";
    }
    Object.defineProperty(TagComponent.prototype, "readonly", {
        get: function () {
            return typeof this.model !== "string" && this.model["readonly"] === true;
        },
        enumerable: true,
        configurable: true
    });
    TagComponent.prototype.select = function ($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    };
    TagComponent.prototype.remove = function ($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
    };
    TagComponent.prototype.focus = function () {
        this.element.nativeElement.focus();
    };
    TagComponent.prototype.move = function () {
        this.moving = true;
    };
    TagComponent.prototype.keydown = function (event) {
        if (this.editing) {
            if (event.keyCode === 13) {
                return this.disableEditMode(event);
            }
        }
        else {
            this.onKeyDown.emit({ event: event, model: this.model });
        }
    };
    TagComponent.prototype.blink = function () {
        var classList = this.element.nativeElement.classList;
        classList.add("blink");
        setTimeout(function () { return classList.remove("blink"); }, 50);
    };
    TagComponent.prototype.toggleEditMode = function () {
        if (this.editable) {
            return this.editing ? undefined : this.activateEditMode();
        }
    };
    TagComponent.prototype.onBlurred = function (event) {
        if (!this.editable) {
            return;
        }
        this.disableEditMode();
        var value = event.target.innerText;
        var result = typeof this.model === "string"
            ? value
            : Object.assign({}, this.model, (_b = {}, _b[this.displayBy] = value, _b));
        this.onBlur.emit(result);
        var _b;
    };
    TagComponent.prototype.getDisplayValue = function (item) {
        return typeof item === "string" ? item : item[this.displayBy];
    };
    Object.defineProperty(TagComponent.prototype, "isRippleVisible", {
        get: function () {
            return !this.readonly && !this.editing && isChrome && this.hasRipple;
        },
        enumerable: true,
        configurable: true
    });
    TagComponent.prototype.disableEditMode = function ($event) {
        var classList = this.element.nativeElement.classList;
        var input = this.getContentEditableText();
        this.editing = false;
        classList.remove("tag--editing");
        if (!input) {
            this.setContentEditableText(this.model);
            return;
        }
        this.storeNewValue(input);
        this.cdRef.detectChanges();
        if ($event) {
            $event.preventDefault();
        }
    };
    TagComponent.prototype.isDeleteIconVisible = function () {
        return (!this.readonly && !this.disabled && this.removable && !this.editing);
    };
    TagComponent.prototype.getContentEditableText = function () {
        var input = this.getContentEditable();
        return input ? input.innerText.trim() : "";
    };
    TagComponent.prototype.setContentEditableText = function (model) {
        var input = this.getContentEditable();
        var value = this.getDisplayValue(model);
        input.innerText = value;
    };
    TagComponent.prototype.activateEditMode = function () {
        var classList = this.element.nativeElement.classList;
        classList.add('tag--editing');
        this.editing = true;
    };
    TagComponent.prototype.storeNewValue = function (input) {
        var _this = this;
        var exists = function (tag) {
            return typeof tag === 'string'
                ? tag === input
                : tag[_this.displayBy] === input;
        };
        var hasId = function () {
            return _this.model[_this.identifyBy] !== _this.model[_this.displayBy];
        };
        if (exists(this.model)) {
            return;
        }
        var model = typeof this.model === 'string'
            ? input
            : (_b = {
                    index: this.index
                }, _b[this.identifyBy] = hasId()
                    ? this.model[this.identifyBy]
                    : input, _b[this.displayBy] = input, _b);
        if (this.canAddTag(model)) {
            this.onTagEdited.emit({ tag: model, index: this.index });
        }
        else {
            this.setContentEditableText(this.model);
        }
        var _b;
    };
    TagComponent.prototype.getContentEditable = function () {
        return this.element.nativeElement.querySelector('[contenteditable]');
    };
    return TagComponent;
}());
TagComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "tag",
                template: "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n",
                styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;-webkit-transition:opacity 1s;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:.3s ease-in-out forwards blink;animation:.3s ease-in-out forwards blink}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
            },] },
];
TagComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
]; };
TagComponent.propDecorators = {
    "model": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "removable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "template": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "displayBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "identifyBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "index": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "hasRipple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "canAddTag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onRemove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeyDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onTagEdited": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "moving": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ["class.moving",] },],
    "ripple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [TagRipple,] },],
    "keydown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["keydown", ["$event"],] },],
};
var animations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('animation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("{{ enter }}", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
            ]))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("{{ leave }}", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ])
];
var DragEvent = ((window)).DragEvent;
var CUSTOM_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TagInputComponent; }),
    multi: true
};
var defaults$2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return OptionsProvider.defaults.tagInput; });
var TagInputComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TagInputComponent, _super);
    function TagInputComponent(renderer, dragProvider) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.dragProvider = dragProvider;
        _this.separatorKeys = new defaults$2().separatorKeys;
        _this.separatorKeyCodes = new defaults$2().separatorKeyCodes;
        _this.placeholder = new defaults$2().placeholder;
        _this.secondaryPlaceholder = new defaults$2().secondaryPlaceholder;
        _this.maxItems = new defaults$2().maxItems;
        _this.validators = new defaults$2().validators;
        _this.asyncValidators = new defaults$2().asyncValidators;
        _this.onlyFromAutocomplete = new defaults$2().onlyFromAutocomplete;
        _this.errorMessages = new defaults$2().errorMessages;
        _this.theme = new defaults$2().theme;
        _this.onTextChangeDebounce = new defaults$2().onTextChangeDebounce;
        _this.inputId = new defaults$2().inputId;
        _this.inputClass = new defaults$2().inputClass;
        _this.clearOnBlur = new defaults$2().clearOnBlur;
        _this.hideForm = new defaults$2().hideForm;
        _this.addOnBlur = new defaults$2().addOnBlur;
        _this.addOnPaste = new defaults$2().addOnPaste;
        _this.pasteSplitPattern = new defaults$2().pasteSplitPattern;
        _this.blinkIfDupe = new defaults$2().blinkIfDupe;
        _this.removable = new defaults$2().removable;
        _this.editable = new defaults$2().editable;
        _this.allowDupes = new defaults$2().allowDupes;
        _this.modelAsStrings = new defaults$2().modelAsStrings;
        _this.trimTags = new defaults$2().trimTags;
        _this.ripple = new defaults$2().ripple;
        _this.tabindex = new defaults$2().tabIndex;
        _this.disable = new defaults$2().disable;
        _this.dragZone = new defaults$2().dragZone;
        _this.onRemoving = new defaults$2().onRemoving;
        _this.onAdding = new defaults$2().onAdding;
        _this.animationDuration = new defaults$2().animationDuration;
        _this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onValidationError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.isLoading = false;
        _this.listeners = (_b = {}, _b[KEYDOWN] = ([]), _b[KEYUP] = ([]), _b);
        _this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.inputTextValue = '';
        _this.errors = [];
        _this.appendTag = function (tag, index) {
            if (index === void 0) { index = _this.items.length; }
            var items = _this.items;
            var model = _this.modelAsStrings ? tag[_this.identifyBy] : tag;
            _this.items = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(items.slice(0, index), [
                model
            ], items.slice(index, items.length));
        };
        _this.createTag = function (model) {
            var trim = function (val, key) {
                return typeof val === 'string' ? val.trim() : val[key];
            };
            return Object.assign({}, typeof model !== 'string' ? model : {}, (_b = {}, _b[_this.displayBy] = _this.trimTags ? trim(model, _this.displayBy) : model, _b[_this.identifyBy] = _this.trimTags ? trim(model, _this.identifyBy) : model, _b));
            var _b;
        };
        _this.isTagValid = function (tag, fromAutocomplete) {
            if (fromAutocomplete === void 0) { fromAutocomplete = false; }
            var selectedItem = _this.dropdown ? _this.dropdown.selectedItem : undefined;
            var value = _this.getItemDisplay(tag).trim();
            if (selectedItem && !fromAutocomplete || !value) {
                return false;
            }
            var dupe = _this.findDupe(tag, fromAutocomplete);
            if (!_this.allowDupes && dupe && _this.blinkIfDupe) {
                var model = _this.tags.find(function (item) {
                    return _this.getItemValue(item.model) === _this.getItemValue(dupe);
                });
                if (model) {
                    model.blink();
                }
            }
            var isFromAutocomplete = fromAutocomplete && _this.onlyFromAutocomplete;
            var assertions = [
                !dupe || _this.allowDupes,
                !_this.maxItemsReached,
                ((isFromAutocomplete) || !_this.onlyFromAutocomplete)
            ];
            return assertions.filter(Boolean).length === assertions.length;
        };
        _this.onPasteCallback = function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            var getText, text, requests, resetInput;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                getText = function () {
                    var isIE = Boolean(((window)).clipboardData);
                    var clipboardData = isIE ? (((window)).clipboardData) : data.clipboardData;
                    var type = isIE ? 'Text' : 'text/plain';
                    return clipboardData.getData(type) || '';
                };
                text = getText();
                requests = text
                    .split(this.pasteSplitPattern)
                    .map(function (item) {
                    var tag = _this.createTag(item);
                    _this.setInputValue(tag[_this.displayBy]);
                    return _this.onAddingRequested(false, tag);
                });
                resetInput = function () { return setTimeout(function () { return _this.setInputValue(''); }, 50); };
                Promise.all(requests).then(function () {
                    _this.onPaste.emit(text);
                    resetInput();
                })
                    .catch(resetInput);
                return [2 /*return*/];
            });
        }); };
        return _this;
        var _b;
    }
    Object.defineProperty(TagInputComponent.prototype, "inputText", {
        get: function () {
            return this.inputTextValue;
        },
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "tabindexAttr", {
        get: function () {
            return this.tabindex !== '' ? '-1' : '';
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
        }
        if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
        }
        if (this.addOnPaste) {
            this.setUpOnPasteListener();
        }
        var statusChanges$ = this.inputForm.form.statusChanges;
        statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (status) { return status !== 'PENDING'; })).subscribe(function () {
            _this.errors = _this.inputForm.getErrorMessages(_this.errorMessages);
        });
        this.isProgressBarVisible$ = statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (status) {
            return status === 'PENDING' || _this.isLoading;
        }));
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    };
    TagInputComponent.prototype.ngOnInit = function () {
        var hasReachedMaxItems = this.maxItems !== undefined &&
            this.items &&
            this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(MAX_ITEMS_WARNING);
        }
        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
    };
    TagInputComponent.prototype.onRemoveRequested = function (tag, index) {
        var _this = this;
        return new Promise(function (resolve) {
            var subscribeFn = function (model) {
                _this.removeItem(model, index);
                resolve(tag);
            };
            _this.onRemoving ?
                _this.onRemoving(tag)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(subscribeFn) : subscribeFn(tag);
        });
    };
    TagInputComponent.prototype.onAddingRequested = function (fromAutocomplete, tag, index, giveupFocus) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var subscribeFn = function (model) {
                return _this
                    .addItem(fromAutocomplete, model, index, giveupFocus)
                    .then(resolve)
                    .catch(reject);
            };
            return _this.onAdding ?
                _this.onAdding(tag)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(subscribeFn, reject) : subscribeFn(tag);
        });
    };
    TagInputComponent.prototype.selectItem = function (item, emit) {
        if (emit === void 0) { emit = true; }
        var isReadonly = item && typeof item !== 'string' && item["readonly"];
        if (isReadonly || this.selectedTag === item) {
            return;
        }
        this.selectedTag = item;
        if (emit) {
            this.onSelect.emit(item);
        }
    };
    TagInputComponent.prototype.fireEvents = function (eventName, $event) {
        var _this = this;
        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
    };
    TagInputComponent.prototype.handleKeydown = function (data) {
        var event = data.event;
        var key = event.keyCode || event.which;
        var shiftKey = event.shiftKey || false;
        switch (KEY_PRESS_ACTIONS[key]) {
            case ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    var index = this.items.indexOf(this.selectedTag);
                    this.onRemoveRequested(this.selectedTag, index);
                }
                break;
            case ACTIONS_KEYS.SWITCH_PREV:
                this.moveToTag(data.model, PREV);
                break;
            case ACTIONS_KEYS.SWITCH_NEXT:
                this.moveToTag(data.model, NEXT);
                break;
            case ACTIONS_KEYS.TAB:
                if (shiftKey) {
                    if (this.isFirstTag(data.model)) {
                        return;
                    }
                    this.moveToTag(data.model, PREV);
                }
                else {
                    if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                        return;
                    }
                    this.moveToTag(data.model, NEXT);
                }
                break;
            default:
                return;
        }
        event.preventDefault();
    };
    TagInputComponent.prototype.onFormSubmit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.onAddingRequested(false, this.formValue)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a_1 = _b.sent();
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TagInputComponent.prototype.setInputValue = function (value, emitEvent) {
        if (emitEvent === void 0) { emitEvent = true; }
        var control = this.getControl();
        control.setValue(value, { emitEvent: emitEvent });
    };
    TagInputComponent.prototype.getControl = function () {
        return (this.inputForm.value);
    };
    TagInputComponent.prototype.focus = function (applyFocus, displayAutocomplete) {
        if (applyFocus === void 0) { applyFocus = false; }
        if (displayAutocomplete === void 0) { displayAutocomplete = false; }
        if (this.dragProvider.getState('dragging')) {
            return;
        }
        this.selectItem(undefined, false);
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
    };
    TagInputComponent.prototype.blur = function () {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    };
    TagInputComponent.prototype.hasErrors = function () {
        return this.inputForm && this.inputForm.hasErrors();
    };
    TagInputComponent.prototype.isInputFocused = function () {
        return this.inputForm && this.inputForm.isInputFocused();
    };
    TagInputComponent.prototype.hasCustomTemplate = function () {
        var template = this.templates ? this.templates.first : undefined;
        var menuTemplate = this.dropdown && this.dropdown.templates ?
            this.dropdown.templates.first : undefined;
        return Boolean(template && template !== menuTemplate);
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        get: function () {
            return this.maxItems !== undefined &&
                this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "formValue", {
        get: function () {
            var form = this.inputForm.value;
            return form ? form.value : '';
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.onDragStarted = function (event, tag, index) {
        event.stopPropagation();
        var item = ({ zone: this.dragZone, tag: tag, index: index });
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({ dragging: true, index: index });
    };
    TagInputComponent.prototype.onDragOver = function (event, index) {
        this.dragProvider.setState({ dropping: true });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
    };
    TagInputComponent.prototype.onTagDropped = function (event, index) {
        var item = this.dragProvider.getDraggedItem(event);
        if (!item || item.zone !== this.dragZone) {
            return;
        }
        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
    };
    TagInputComponent.prototype.isDropping = function () {
        var isReceiver = this.dragProvider.receiver === this;
        var isDropping = this.dragProvider.getState('dropping');
        return Boolean(isReceiver && isDropping);
    };
    TagInputComponent.prototype.onTagBlurred = function (changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
    };
    TagInputComponent.prototype.trackBy = function (index, item) {
        return item[this.identifyBy];
    };
    TagInputComponent.prototype.updateEditedTag = function (_b) {
        var tag = _b.tag, index = _b.index;
        this.onTagEdited.emit(tag);
    };
    TagInputComponent.prototype.moveToTag = function (item, direction) {
        var isLast = this.isLastTag(item);
        var isFirst = this.isFirstTag(item);
        var stopSwitch = (direction === NEXT && isLast) ||
            (direction === PREV && isFirst);
        if (stopSwitch) {
            this.focus(true);
            return;
        }
        var offset = direction === NEXT ? 1 : -1;
        var index = this.getTagIndex(item) + offset;
        var tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
    };
    TagInputComponent.prototype.isFirstTag = function (item) {
        return this.tags.first.model === item;
    };
    TagInputComponent.prototype.isLastTag = function (item) {
        return this.tags.last.model === item;
    };
    TagInputComponent.prototype.getTagIndex = function (item) {
        var tags = this.tags.toArray();
        return tags.findIndex(function (tag) { return tag.model === item; });
    };
    TagInputComponent.prototype.getTagAtIndex = function (index) {
        var tags = this.tags.toArray();
        return tags[index];
    };
    TagInputComponent.prototype.removeItem = function (tag, index) {
        this.items = this.getItemsWithout(index);
        if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
        }
        this.focus(true, false);
        this.onRemove.emit(tag);
    };
    TagInputComponent.prototype.addItem = function (fromAutocomplete, item, index, giveupFocus) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        var display = this.getItemDisplay(item);
        var tag = this.createTag(item);
        if (fromAutocomplete) {
            this.setInputValue(this.getItemValue(item, true));
        }
        return new Promise(function (resolve, reject) {
            var reset = function () {
                _this.setInputValue('');
                if (giveupFocus) {
                    _this.focus(false, false);
                }
                else {
                    _this.focus(true, false);
                }
                resolve(display);
            };
            var appendItem = function () {
                _this.appendTag(tag, index);
                _this.onAdd.emit(tag);
                if (!_this.dropdown) {
                    return;
                }
                _this.dropdown.hide();
                if (_this.dropdown.showDropdownIfEmpty) {
                    _this.dropdown.show();
                }
            };
            var status = _this.inputForm.form.status;
            var isTagValid = _this.isTagValid(tag, fromAutocomplete);
            var onValidationError = function () {
                _this.onValidationError.emit(tag);
                return reject();
            };
            if (status === 'VALID' && isTagValid) {
                appendItem();
                return reset();
            }
            if (status === 'INVALID' || !isTagValid) {
                reset();
                return onValidationError();
            }
            if (status === 'PENDING') {
                var statusUpdate$ = _this.inputForm.form.statusChanges;
                return statusUpdate$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (statusUpdate) { return statusUpdate !== 'PENDING'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(function (statusUpdate) {
                    if (statusUpdate === 'VALID' && isTagValid) {
                        appendItem();
                        resolve();
                    }
                    else {
                        onValidationError();
                    }
                });
            }
        });
    };
    TagInputComponent.prototype.setupSeparatorKeysListener = function () {
        var _this = this;
        var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        var listener = function ($event) {
            var hasKeyCode = _this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            var hasKey = _this.separatorKeys.indexOf($event.key) >= 0;
            var isIMEProcessing = $event.keyCode === 229;
            if (hasKeyCode || (hasKey && !isIMEProcessing)) {
                $event.preventDefault();
                _this.onAddingRequested(false, _this.formValue)
                    .catch(function () { });
            }
        };
        listen.call(this, KEYDOWN, listener, useSeparatorKeys);
    };
    TagInputComponent.prototype.setUpKeypressListeners = function () {
        var _this = this;
        var listener = function ($event) {
            var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !_this.formValue &&
                _this.items.length) {
                _this.tags.last.select.call(_this.tags.last);
            }
        };
        listen.call(this, KEYDOWN, listener);
    };
    TagInputComponent.prototype.setUpInputKeydownListeners = function () {
        var _this = this;
        this.inputForm.onKeydown.subscribe(function (event) {
            _this.fireEvents('keydown', event);
            if (event.key === 'Backspace' && _this.formValue.trim() === '') {
                event.preventDefault();
            }
        });
    };
    TagInputComponent.prototype.setUpOnPasteListener = function () {
        var _this = this;
        var input = this.inputForm.input.nativeElement;
        this.renderer.listen(input, 'paste', function (event) {
            _this.onPasteCallback(event);
            event.preventDefault();
            return true;
        });
    };
    TagInputComponent.prototype.setUpTextChangeSubscriber = function () {
        var _this = this;
        this.inputForm.form
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.onTextChangeDebounce))
            .subscribe(function (value) {
            _this.onTextChange.emit(value.item);
        });
    };
    TagInputComponent.prototype.setUpOnBlurSubscriber = function () {
        var _this = this;
        var filterFn = function () {
            var isVisible = _this.dropdown && _this.dropdown.isVisible;
            return !isVisible && !!_this.formValue;
        };
        this.inputForm
            .onBlur
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(filterFn))
            .subscribe(function () {
            var reset = function () { return _this.setInputValue(''); };
            if (_this.addOnBlur) {
                return _this
                    .onAddingRequested(false, _this.formValue, undefined, true)
                    .then(reset)
                    .catch(reset);
            }
            reset();
        });
    };
    TagInputComponent.prototype.findDupe = function (tag, isFromAutocomplete) {
        var _this = this;
        var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        var id = tag[identifyBy];
        return this.items.find(function (item) { return _this.getItemValue(item) === id; });
    };
    TagInputComponent.prototype.setAnimationMetadata = function () {
        this.animationMetadata = {
            value: 'in',
            params: Object.assign({}, this.animationDuration)
        };
    };
    return TagInputComponent;
}(TagInputAccessor));
TagInputComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-input',
                providers: [CUSTOM_ACCESSOR],
                styles: [".dark tag:focus{-webkit-box-shadow:0 0 0 1px #323232;box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;-webkit-box-shadow:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;-webkit-box-shadow:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.4);box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{-webkit-box-shadow:inset 0 1px 1px #d9534f;box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-webkit-transition:all .25s;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.minimal.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.dark.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap3-info.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;padding:4px;cursor:text;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:'';-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;-webkit-transition:all .3s;transition:all .3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;-webkit-box-shadow:0 2px 3px 1px #d4d1d1;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;-webkit-box-shadow:0 2px 3px 1px #d4d1d1;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;-webkit-box-shadow:0 2px 3px 1px #d4d1d1;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):active,.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):active,.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active,.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}"],
                template: "<!-- CONTAINER -->\n\n<div ngClass=\"ng2-tag-input {{ theme || '' }}\"\n     (click)=\"focus(true, false)\"\n     [attr.tabindex]=\"-1\"\n\n     (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n     (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n     [class.ng2-tag-input--dropping]=\"isDropping()\"\n     [class.ng2-tag-input--disabled]=\"disable\"\n     [class.ng2-tag-input--loading]=\"isLoading\"\n     [class.ng2-tag-input--invalid]=\"hasErrors()\"\n     [class.ng2-tag-input--focused]=\"isInputFocused()\">\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n\n             (onSelect)=\"selectItem(item)\"\n             (onRemove)=\"onRemoveRequested(item, i)\"\n             (onKeyDown)=\"handleKeydown($event)\"\n             (onTagEdited)=\"updateEditedTag($event)\"\n             (onBlur)=\"onTagBlurred($event, i)\"\n             draggable=\"{{ editable }}\"\n\n             (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n             (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n             (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n             (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n             (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n             [canAddTag]=\"isTagValid\"\n             [attr.tabindex]=\"0\"\n             [disabled]=\"disable\"\n             [@animation]=\"animationMetadata\"\n             [hasRipple]=\"ripple\"\n             [index]=\"i\"\n             [removable]=\"removable\"\n             [editable]=\"editable\"\n             [displayBy]=\"displayBy\"\n             [identifyBy]=\"identifyBy\"\n             [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n             [draggable]=\"dragZone\"\n             [model]=\"item\">\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"onFormSubmit()\"\n            (onBlur)=\"blur()\"\n            (click)=\"dropdown ? dropdown.show() : undefined\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n\n            [(inputText)]=\"inputText\"\n            [disabled]=\"disable\"\n            [validators]=\"validators\"\n            [asyncValidators]=\"asyncValidators\"\n            [hidden]=\"maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\">\n        </tag-input-form>\n    </div>\n\n    <div class=\"progress-bar\" *ngIf=\"isProgressBarVisible$ | async\"></div>\n</div>\n\n<!-- ERRORS -->\n<div *ngIf=\"hasErrors()\" class=\"error-messages {{ theme || '' }}\">\n    <p *ngFor=\"let error of errors\" class=\"error-message\">\n        <span>{{ error }}</span>\n    </p>\n</div>\n\n<ng-content></ng-content>\n",
                animations: animations
            },] },
];
TagInputComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    { type: DragProvider, },
]; };
TagInputComponent.propDecorators = {
    "separatorKeys": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "separatorKeyCodes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "secondaryPlaceholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "maxItems": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "validators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "asyncValidators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onlyFromAutocomplete": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "errorMessages": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "theme": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onTextChangeDebounce": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "clearOnBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "hideForm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "addOnBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "addOnPaste": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "pasteSplitPattern": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "blinkIfDupe": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "removable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "allowDupes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "modelAsStrings": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "trimTags": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "ripple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "tabindex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "dragZone": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onRemoving": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onAdding": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "animationDuration": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onAdd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onRemove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onFocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onTextChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onPaste": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onValidationError": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onTagEdited": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "dropdown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [TagInputDropdown,] },],
    "templates": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { descendants: false },] },],
    "inputForm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [TagInputForm,] },],
    "tags": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [TagComponent,] },],
    "inputTextChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "tabindexAttr": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.tabindex',] },],
};
var DeleteIconComponent = /** @class */ (function () {
    function DeleteIconComponent() {
    }
    return DeleteIconComponent;
}());
DeleteIconComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'delete-icon',
                template: "<span>\n    <svg height=\"16px\" viewBox=\"0 0 32 32\" width=\"16px\">\n        <path d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\n              fill=\"#121313\" />\n    </svg>\n</span>\n",
                styles: [".dark tag:focus{-webkit-box-shadow:0 0 0 1px #323232;box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;-webkit-box-shadow:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;-webkit-box-shadow:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.4);box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{-webkit-box-shadow:inset 0 1px 1px #d9534f;box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-webkit-transition:all .25s;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.minimal.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.dark.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap3-info.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;padding:4px;cursor:text;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}:host(delete-icon){width:20px;height:16px;-webkit-transition:all .15s;transition:all .15s;display:inline-block;text-align:right}:host(delete-icon) path{fill:#444}:host(delete-icon) svg{vertical-align:bottom;height:34px}:host(delete-icon):hover{-webkit-transform:scale(1.5) translateY(-3px);transform:scale(1.5) translateY(-3px)}:host-context(.dark){text-align:right}:host-context(.dark) path{fill:#fff}:host-context(.dark) svg{vertical-align:bottom;height:34px}:host-context(.minimal){text-align:right}:host-context(.minimal) path{fill:#444}:host-context(.minimal) svg{vertical-align:bottom;height:34px}:host-context(.bootstrap){text-align:right}:host-context(.bootstrap) path{fill:#fff}:host-context(.bootstrap) svg{vertical-align:bottom;height:34px}:host-context(tag:active) path,:host-context(tag:focus) path{fill:#fff}:host-context(.darktag:active) path,:host-context(.darktag:focus) path{fill:#000}:host-context(.minimaltag:active) path,:host-context(.minimaltag:focus) path{fill:#000}:host-context(.bootstraptag:active) path,:host-context(.bootstraptag:focus) path{fill:#fff}:host-context(.bootstrap3-info){height:inherit}:host-context(.bootstrap3-info) path{fill:#fff}"]
            },] },
];
var optionsProvider = new OptionsProvider();
var TagInputModule = /** @class */ (function () {
    function TagInputModule() {
    }
    TagInputModule.withDefaults = function (options) {
        optionsProvider.setOptions(options);
    };
    return TagInputModule;
}());
TagInputModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownModule"]
                ],
                declarations: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                exports: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                providers: [
                    DragProvider,
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"], useValue: false },
                ]
            },] },
];


//# sourceMappingURL=ngx-chips.js.map


/***/ }),

/***/ "./src/app/@theme/model/lot-class.ts":
/*!*******************************************!*\
  !*** ./src/app/@theme/model/lot-class.ts ***!
  \*******************************************/
/*! exports provided: LotMast, LotData, LotWeightMtrDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotMast", function() { return LotMast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotData", function() { return LotData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotWeightMtrDetail", function() { return LotWeightMtrDetail; });
var LotMast = /** @class */ (function () {
    function LotMast() {
        this.quality_entry_id = '';
    }
    return LotMast;
}());

var LotData = /** @class */ (function () {
    function LotData() {
        // this.gr = '';
        this.unit = '';
    }
    return LotData;
}());

var LotWeightMtrDetail = /** @class */ (function () {
    function LotWeightMtrDetail() {
        this.quantity = '';
    }
    return LotWeightMtrDetail;
}());



/***/ }),

/***/ "./src/app/@theme/services/lot.service.ts":
/*!************************************************!*\
  !*** ./src/app/@theme/services/lot.service.ts ***!
  \************************************************/
/*! exports provided: LotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotService", function() { return LotService; });
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


var LotService = /** @class */ (function () {
    function LotService(apiService) {
        this.apiService = apiService;
    }
    LotService.prototype.getAllLots = function (lotReqObj) {
        return this.apiService.apiCaller('post', '/lotList', lotReqObj);
    };
    LotService.prototype.addLot = function (lot) {
        return this.apiService.apiCaller('post', '/addLot', lot);
    };
    LotService.prototype.getLotById = function (id) {
        return this.apiService.apiCaller('get', '/getLotById/' + id);
    };
    LotService.prototype.getGrListByQualityId = function (id) {
        return this.apiService.apiCaller('get', '/getGrListByQualityId/' + id);
    };
    LotService.prototype.updateLot = function (lot) {
        return this.apiService.apiCaller('post', '/updateLot', lot);
    };
    LotService.prototype.deleteLotById = function (id) {
        return this.apiService.apiCaller('get', '/deleteLot/' + id);
    };
    LotService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], LotService);
    return LotService;
}());



/***/ }),

/***/ "./src/app/pages/lot/add-edit-lot/add-edit-lot.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/lot/add-edit-lot/add-edit-lot.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>{{topHeader}}\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <form #vform=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>Lot No.</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lotModal.lot_id\" name=\"lotId\" #LotId=\"ngModel\"\r\n              required />\r\n            <div *ngIf=\"LotId.invalid && (LotId.dirty || LotId.touched)\" class=\"errors\">\r\n              <div *ngIf=\"LotId.errors && LotId.errors.required\">\r\n                Lot No is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Quality Id</label>\r\n            <!-- pattern -->\r\n            <select class=\"form-control\" [(ngModel)]=\"lotModal.quality_entry_id\" name=\"quality_id\" #quality=\"ngModel\"\r\n              (change)=\"onQualitySelect($event.target.value)\" required>\r\n              <option disabled value=\"\">Select Quality Id\r\n              </option>\r\n              <option *ngFor=\"let quality of qualityList\" [value]=\"quality.entry_id\">{{quality.quality_id}}\r\n              </option>\r\n            </select>\r\n            <div *ngIf=\"quality.invalid && (quality.dirty || quality.touched)\" class=\"errors\">\r\n              <div *ngIf=\"quality.errors && quality.errors.required\">\r\n                Quality Id is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Quality Name</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lotModal.quality_name\" name=\"quallityname\"\r\n              #qualityName=\"ngModel\" required />\r\n            <div *ngIf=\"qualityName.invalid && (qualityName.dirty || qualityName.touched)\" class=\"errors\">\r\n              <div *ngIf=\"qualityName.errors && qualityName.errors.required\">\r\n                Quality Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Quality Type</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lotModal.quality_type\" name=\"qualitytype\"\r\n              #qualityType=\"ngModel\" required />\r\n            <div *ngIf=\"qualityType.invalid && (qualityType.dirty || qualityType.touched)\" class=\"errors\">\r\n              <div *ngIf=\"qualityType.errors && qualityType.errors.required\">\r\n                Quality Type is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row col-md-12 table table-responsive\" *ngIf=\"lotDataArray.length\">\r\n        <ag-grid-angular style=\"width: 55%; height:300px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n          [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='10'>\r\n        </ag-grid-angular>\r\n      </div>\r\n      <div class=\"row\">\r\n        <form #sform=\"ngForm\">\r\n          <div class=\"row col-md-12\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>GR</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Select Gr\" name=\"Gr\" autocomplete=\"off\"\r\n                  [(ngModel)]=\"lotDataObj.gr\" (click)=\"HideShow()\">\r\n                <div *ngIf=\"flagDiv\" class=\"dropdown\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"HideShow()\" class=\"float-right\">[X]</a>\r\n                  <table class=\"table table-bordered pointer table-responsive\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Gr</th>\r\n                        <th>Batch No</th>\r\n                        <th>Wt</th>\r\n                        <th>mtr</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let gr of grList; let i = index\" (click)=\"selectGr(gr)\" class=\"pointer\">\r\n                        <td style=\"display:none;\">{{gr.gr}}</td>\r\n                        <td>{{gr.gr}}</td>\r\n                        <td>{{gr.batch_no}}</td>\r\n                        <td>{{gr.wt}}</td>\r\n                        <td>{{gr.mtr}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Batch No.</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lotDataObj.batch_no\" name=\"batch\" #Batch=\"ngModel\"\r\n                  required />\r\n                <div *ngIf=\"Batch.invalid && (Batch.dirty || Batch.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"Batch.errors && Batch.errors.required\">\r\n                    Batch No. is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Mtr</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lotDataObj.mtr\" name=\"Mtr\"\r\n                  (keypress)=\"numberOnly($event)\" digits />\r\n                <!-- <div *ngIf=\"GR.invalid && (GR.dirty || GR.touched)\" class=\"errors\">\r\n                    <div *ngIf=\"GR.errors && GR.errors.required\">\r\n                      Gr is required.\r\n                    </div>\r\n                  </div> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Weight</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lotDataObj.wt\" name=\"Wt\" #weight=\"ngModel\"\r\n                  (keypress)=\"numberOnly($event)\" digits required />\r\n                <div *ngIf=\"weight.invalid && (weight.dirty || weight.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"weight.errors && weight.errors.required\">\r\n                    Weight is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row col-md-12\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>No. of Taka</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lotDataObj.no_of_cones_taka\" name=\"noOfTaka\"\r\n                  #taka=\"ngModel\" (keypress)=\"numberOnly($event)\" digits required />\r\n                <div *ngIf=\"taka.invalid && (taka.dirty || taka.touched)\" class=\"errors\">\r\n                  <div *ngIf=\"taka.errors && taka.errors.required\">\r\n                    No. of Cones/ Taka is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Unit</label>\r\n                <select class=\"form-control\" [(ngModel)]=\"lotDataObj.unit\" name=\"unit\" #Unit=\"ngModel\"\r\n                  (change)=\"onUnitSelect($event.target.value)\">\r\n                  <option disabled value=\"\">Select Unit\r\n                  </option>\r\n                  <option *ngFor=\"let item of unit\" [value]=\"item.id\">{{item.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\" *ngIf=\"showDetailFlag\">\r\n              <div class=\"form-group\">\r\n                <label>Detail of Taka</label>\r\n                <tag-input name=\"detail\" [(ngModel)]=\"items\" [allowDupes]=\"true\" [theme]=\"bootstrap\">\r\n                </tag-input>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <button type=\"reset\" [disabled]=\"sform.invalid\" style=\"margin-top: 32px;\" nbButton\r\n                (click)=\"onAddRecord(sform)\">Add\r\n                Record</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"box-footer\">\r\n        <button nbButton [disabled]=\"vform.invalid\" (click)=\"onCustomFormSubmit(vform)\">{{subBtnName}}</button>\r\n        &nbsp;\r\n        <button nbButton type=\"reset\" routerLink='/pages/lot/view-lot-list' id=\"Cancel\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/lot/add-edit-lot/add-edit-lot.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/lot/add-edit-lot/add-edit-lot.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errors {\n  color: red;\n  font-size: 13px; }\n\noptgroup[label=\"GR BATCH_NO WEIGHT METRE NO_OF_CONES/TAKA\"] {\n  color: red; }\n\noptgroup {\n  margin: 1em;\n  border: 1px solid green; }\n\noptgroup option {\n  margin: 1em;\n  border: 1px solid orange; }\n\n.dropdown {\n  position: absolute;\n  border: 1px solid grey;\n  z-index: 9999;\n  background-color: white;\n  padding: 5px; }\n\ninput:focus + .dropdown {\n  display: block;\n  z-index: 9999999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG90L2FkZC1lZGl0LWxvdC9DOlxcVXNlcnNcXFZhcnVuXFxEZXNrdG9wXFxuXFxuZ3gtd2lyZWZyYW1lL3NyY1xcYXBwXFxwYWdlc1xcbG90XFxhZGQtZWRpdC1sb3RcXGFkZC1lZGl0LWxvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVU7RUFDVixnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLFlBQVc7RUFDWCx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gseUJBQXdCLEVBQ3pCOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLGFBQVksRUFDYjs7QUFFQTtFQUNDLGVBQWM7RUFDZCxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb3QvYWRkLWVkaXQtbG90L2FkZC1lZGl0LWxvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcnMge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxub3B0Z3JvdXBbbGFiZWw9XCJHUiBCQVRDSF9OTyBXRUlHSFQgTUVUUkUgTk9fT0ZfQ09ORVMvVEFLQVwiXSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5vcHRncm91cHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgfVxyXG4gIG9wdGdyb3VwIG9wdGlvbntcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xyXG4gIH1cclxuICAuZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgIGlucHV0OmZvY3VzICsgLmRyb3Bkb3duICB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHotaW5kZXg6IDk5OTk5OTk7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/pages/lot/add-edit-lot/add-edit-lot.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/lot/add-edit-lot/add-edit-lot.component.ts ***!
  \******************************************************************/
/*! exports provided: AddEditLotComponent, CustomRendererLotDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditLotComponent", function() { return AddEditLotComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererLotDataComponent", function() { return CustomRendererLotDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_model_lot_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/model/lot-class */ "./src/app/@theme/model/lot-class.ts");
/* harmony import */ var _theme_services_lot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/services/lot.service */ "./src/app/@theme/services/lot.service.ts");
/* harmony import */ var _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@theme/services/quality.service */ "./src/app/@theme/services/quality.service.ts");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddEditLotComponent = /** @class */ (function () {
    function AddEditLotComponent(toasterService, route, qualityService, router, lotService) {
        this.toasterService = toasterService;
        this.route = route;
        this.qualityService = qualityService;
        this.router = router;
        this.lotService = lotService;
        this.flagDiv = false;
        this.subBtnName = '';
        this.topHeader = '';
        this.viewFlag = false;
        this.grList = [];
        this.lotDataArray = [];
        this.qualityViewReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_6__["ViewReqObj"]();
        this.qualityList = [];
        this.lotDetailObj = [];
        this.showDetailFlag = false;
        this.selectLabel = 'GR' + '    ' + 'BATCH NO' + '      ' + 'WEIGHT' + '      ' + 'METRE' + '      ' + 'NO OF CONES/TAKA';
        this.columnDefs = [
            { headerName: 'Gr', field: 'gr', width: 100 },
            { headerName: 'Batch No', field: 'batch_no', width: 100 },
            { headerName: 'No of Cones/Taka', field: 'no_of_cones_taka', width: 100 },
            { headerName: 'Mtr', field: 'mtr', width: 100 },
            { headerName: 'Wt', field: 'wt', width: 100 },
            { headerName: 'Actions', field: 'index', width: 100 },
        ];
        this.unit = [{ 'id': 'wt', 'value': 'Weight' }, { 'id': 'mtr', 'value': 'Metre' }];
        this.items = [];
        this.lotModal = new _theme_model_lot_class__WEBPACK_IMPORTED_MODULE_3__["LotMast"]();
        this.lotDataObj = new _theme_model_lot_class__WEBPACK_IMPORTED_MODULE_3__["LotData"]();
        this.setColumns();
    }
    AddEditLotComponent.prototype.ngOnInit = function () {
        this.getQuality();
        this.onPageLoad();
    };
    AddEditLotComponent.prototype.HideShow = function () {
        this.flagDiv = !this.flagDiv;
    };
    AddEditLotComponent.prototype.selectGr = function (gr) {
        this.flagDiv = false;
        var i = this.grList.findIndex(function (v) { return v.gr == gr.gr; });
        this.lotDataObj.gr = this.grList[i].gr;
        this.lotDataObj.wt = this.grList[i].wt;
        this.lotDataObj.mtr = this.grList[i].mtr;
        this.lotDataObj.no_of_cones_taka = this.grList[i].no_of_cones;
        this.lotDataObj.batch_no = this.grList[i].batch_no;
    };
    AddEditLotComponent.prototype.onQualitySelect = function (value) {
        var i = this.qualityList.findIndex(function (v) { return v.entry_id == value; });
        this.lotModal.quality_name = this.qualityList[i].quality_name;
        this.lotModal.quality_type = this.qualityList[i].quality_type;
        // console.log('in on quality select ' , value)
        this.getGrListByQualityId(value);
    };
    AddEditLotComponent.prototype.getGrListByQualityId = function (qualityid) {
        var _this = this;
        this.lotService.getGrListByQualityId(qualityid).subscribe(function (data) {
            if (!data[0].error) {
                _this.grList = data[0].data;
                // console.log("in qq")
                // console.log(this.grList)
            }
        });
    };
    AddEditLotComponent.prototype.onUnitSelect = function (value) {
        this.showDetailFlag = true;
        this.lotDataObj.unit = value;
    };
    AddEditLotComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererLotDataComponent;
                column.cellRendererParams = {
                    // inRouterLink: '/user/edit-user/',
                    action: _this
                };
            }
        });
    };
    AddEditLotComponent.prototype.getQuality = function () {
        var _this = this;
        this.qualityService.getAllQualityData(this.qualityViewReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.qualityList = data[0].data;
            }
        });
    };
    AddEditLotComponent.prototype.onPageLoad = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            if (this.id) {
                this.subBtnName = 'Update';
                this.topHeader = 'Edit Lot';
            }
            else {
                this.topHeader = 'Lot View';
                this.viewFlag = true;
            }
            this.lotService.getLotById(this.id).subscribe(function (data) {
                if (!data[0].error) {
                    _this.lotModal = data[0].data.lot[0];
                    _this.lotDataArray = data[0].data.lot_data;
                    _this.lotDataArray.forEach(function (ele, index) {
                        ele.index = index + 1;
                    });
                    _this.getGrListByQualityId(_this.lotModal.quality_entry_id);
                    _this.rowData = _this.lotDataArray.slice();
                    _this.lotModal.lot_data = _this.lotDataArray;
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
            this.topHeader = 'Add Lot';
        }
    };
    AddEditLotComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    AddEditLotComponent.prototype.onAddRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (!this.lotDataArray.length) {
            this.lotDataObj.index = j;
        }
        else {
            this.lotDataArray.forEach(function (ele) {
                if (ele.gr == _this.lotDataObj.gr) {
                    if (_this.items.length) {
                        _this.items.forEach(function (ele, index) {
                            if (ele.entry_id === undefined) {
                                var obj = new _theme_model_lot_class__WEBPACK_IMPORTED_MODULE_3__["LotWeightMtrDetail"]();
                                obj = ele;
                                obj.quantity = ele.value;
                                _this.lotDataObj.lot_quality_detail.push(obj);
                            }
                        });
                    }
                    else {
                        _this.lotDataObj.lot_quality_detail = [];
                    }
                    ele = _this.lotDataObj;
                    flag = 1;
                }
            });
            if (!flag) {
                this.lotDataObj.index = this.lotDataArray.length + 1;
                if (this.items.length) {
                    this.lotDataObj.lot_quality_detail = [];
                    this.items.forEach(function (ele, index) {
                        var obj = new _theme_model_lot_class__WEBPACK_IMPORTED_MODULE_3__["LotWeightMtrDetail"]();
                        obj.quantity = ele.value;
                        _this.lotDataObj.lot_quality_detail.push(obj);
                    });
                    this.lotDataArray.push(this.lotDataObj);
                }
                else {
                    this.lotDataObj.lot_quality_detail = [];
                }
            }
        }
        // if (this.items.length) {
        //   this.lotDataObj.lot_quality_detail = [];
        //   this.items.forEach((ele, index) => {
        //     let obj = new LotWeightMtrDetail();
        //     obj.quantity = ele.value;
        //     this.lotDataObj.lot_quality_detail.push(obj);
        //   });
        // }
        // this.lotDataObj.lot_quality_detail = this.lotDetailObj;
        // this.lotDataArray.forEach(ele => {
        //   if (ele.gr == this.lotDataObj.gr) {
        //     ele = this.lotDataObj
        //     flag = 1;
        //   }
        // });
        // if (!flag) {
        //   this.lotDataArray.push(this.lotDataObj);
        // }
        this.lotDetailObj = [];
        this.rowData = this.lotDataArray.slice();
        this.lotDataObj = new _theme_model_lot_class__WEBPACK_IMPORTED_MODULE_3__["LotData"]();
        form.resetForm();
    };
    AddEditLotComponent.prototype.onEditRecord = function (data) {
        var _this = this;
        var i = this.lotDataArray.findIndex(function (v) { return v.index == data; });
        this.items = [];
        this.lotDataArray[i].lot_quality_detail.forEach(function (ele) {
            _this.showDetailFlag = true;
            ele.value = ele.quantity !== undefined ? ele.quantity : ele.value;
            ele.display = ele.quantity !== undefined ? ele.quantity : ele.value;
            _this.items.push(ele);
        });
        this.lotDetailObj = this.lotDataArray[i].lot_quality_detail;
        this.lotDataObj = this.lotDataArray[i];
    };
    AddEditLotComponent.prototype.deleteRecord = function (data) {
        var i = this.lotDataArray.findIndex(function (v) { return v.index == data; });
        this.lotDataArray.splice(i, 1);
        this.rowData = this.lotDataArray.slice();
    };
    AddEditLotComponent.prototype.onCustomFormSubmit = function (form) {
        var _this = this;
        this.lotModal.lot_data = this.lotDataArray;
        console.log('lot', this.lotModal);
        // for update
        if (this.id) {
            this.lotService.updateLot(this.lotModal).subscribe(function (data) {
                console.log(data);
                if (!data[0].error) {
                    _this.toasterService.success(data[0].message);
                    form.resetForm();
                    _this.router.navigate(['/pages/lot/view-lot-list']);
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            console.log(this.lotModal);
            this.lotService.addLot(this.lotModal).subscribe(function (data) {
                data = data[0];
                if (!data.error) {
                    _this.toasterService.success(data.message);
                    form.resetForm();
                    _this.router.navigate(['/pages/lot/view-lot-list']);
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
    };
    AddEditLotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-lot',
            template: __webpack_require__(/*! ./add-edit-lot.component.html */ "./src/app/pages/lot/add-edit-lot/add-edit-lot.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-lot.component.scss */ "./src/app/pages/lot/add-edit-lot/add-edit-lot.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_5__["QualityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _theme_services_lot_service__WEBPACK_IMPORTED_MODULE_4__["LotService"]])
    ], AddEditLotComponent);
    return AddEditLotComponent;
}());

var CustomRendererLotDataComponent = /** @class */ (function () {
    function CustomRendererLotDataComponent() {
    }
    CustomRendererLotDataComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererLotDataComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererLotDataComponent.prototype.editRecord = function () {
        this.params.action.onEditRecord(this.params.value);
    };
    CustomRendererLotDataComponent.prototype.onDeleteRecord = function () {
        this.params.action.deleteRecord(this.params.value);
    };
    CustomRendererLotDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-lot.component.scss */ "./src/app/pages/lot/add-edit-lot/add-edit-lot.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomRendererLotDataComponent);
    return CustomRendererLotDataComponent;
}());



/***/ }),

/***/ "./src/app/pages/lot/lot-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/lot/lot-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LotRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotRoutingModule", function() { return LotRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_edit_lot_add_edit_lot_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-lot/add-edit-lot.component */ "./src/app/pages/lot/add-edit-lot/add-edit-lot.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_lot_view_lot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-lot/view-lot.component */ "./src/app/pages/lot/view-lot/view-lot.component.ts");
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
                path: 'view-lot-list',
                component: _view_lot_view_lot_component__WEBPACK_IMPORTED_MODULE_3__["ViewLotComponent"]
            },
            {
                path: 'view-lot/:id',
                component: _add_edit_lot_add_edit_lot_component__WEBPACK_IMPORTED_MODULE_1__["AddEditLotComponent"]
            },
            {
                path: 'add-lot',
                component: _add_edit_lot_add_edit_lot_component__WEBPACK_IMPORTED_MODULE_1__["AddEditLotComponent"],
            },
            {
                path: 'edit-lot/:id',
                component: _add_edit_lot_add_edit_lot_component__WEBPACK_IMPORTED_MODULE_1__["AddEditLotComponent"],
            },
        ]
    }
];
var LotRoutingModule = /** @class */ (function () {
    function LotRoutingModule() {
    }
    LotRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LotRoutingModule);
    return LotRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/lot/lot.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/lot/lot.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/lot/lot.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/lot/lot.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvdC9sb3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/lot/lot.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/lot/lot.component.ts ***!
  \********************************************/
/*! exports provided: LotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotComponent", function() { return LotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LotComponent = /** @class */ (function () {
    function LotComponent() {
    }
    LotComponent.prototype.ngOnInit = function () {
    };
    LotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lot',
            template: __webpack_require__(/*! ./lot.component.html */ "./src/app/pages/lot/lot.component.html"),
            styles: [__webpack_require__(/*! ./lot.component.scss */ "./src/app/pages/lot/lot.component.scss")]
        })
    ], LotComponent);
    return LotComponent;
}());



/***/ }),

/***/ "./src/app/pages/lot/lot.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/lot/lot.module.ts ***!
  \*****************************************/
/*! exports provided: LotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotModule", function() { return LotModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_edit_lot_add_edit_lot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-lot/add-edit-lot.component */ "./src/app/pages/lot/add-edit-lot/add-edit-lot.component.ts");
/* harmony import */ var _lot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lot.component */ "./src/app/pages/lot/lot.component.ts");
/* harmony import */ var _lot_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lot-routing.module */ "./src/app/pages/lot/lot-routing.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _view_lot_view_lot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-lot/view-lot.component */ "./src/app/pages/lot/view-lot/view-lot.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var LotModule = /** @class */ (function () {
    function LotModule() {
    }
    LotModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _lot_routing_module__WEBPACK_IMPORTED_MODULE_4__["LotRoutingModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_11__["TagInputModule"],
                _lot_routing_module__WEBPACK_IMPORTED_MODULE_4__["LotRoutingModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_13__["ThemeModule"]
            ],
            declarations: [_add_edit_lot_add_edit_lot_component__WEBPACK_IMPORTED_MODULE_2__["AddEditLotComponent"], _lot_component__WEBPACK_IMPORTED_MODULE_3__["LotComponent"], _add_edit_lot_add_edit_lot_component__WEBPACK_IMPORTED_MODULE_2__["CustomRendererLotDataComponent"], _view_lot_view_lot_component__WEBPACK_IMPORTED_MODULE_12__["CustomRendererLotComponent"], _view_lot_view_lot_component__WEBPACK_IMPORTED_MODULE_12__["ViewLotComponent"]],
            entryComponents: [_add_edit_lot_add_edit_lot_component__WEBPACK_IMPORTED_MODULE_2__["CustomRendererLotDataComponent"], _view_lot_view_lot_component__WEBPACK_IMPORTED_MODULE_12__["CustomRendererLotComponent"]]
        })
    ], LotModule);
    return LotModule;
}());



/***/ }),

/***/ "./src/app/pages/lot/view-lot/view-lot.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/lot/view-lot/view-lot.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Lot\r\n    <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onAddLot()\">\r\n      Add Lot\r\n    </button>\r\n    <button style=\"float: right;\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onExport()\">Export</button>\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n      <div  *ngIf=\"viewGroupDataPermission && !viewAllDataPermission\">\r\n          <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getLotData($event)\">\r\n              <nb-radio [value]=\"1\">\r\n                  View Own\r\n              </nb-radio>\r\n              <nb-radio [value]=\"2\">\r\n                  View Group\r\n              </nb-radio>\r\n          </nb-radio-group>\r\n      </div>\r\n      <div *ngIf=\"viewGroupDataPermission && viewAllDataPermission\">\r\n          <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getLotData($event)\">\r\n              <nb-radio class=\"radio-inline\" [value]=\"1\">\r\n                  View Own\r\n              </nb-radio>\r\n              <nb-radio class=\"radio-inline\" [value]=\"2\">\r\n                  View Group\r\n              </nb-radio>\r\n              <nb-radio class=\"radio-inline\" [value]=\"3\">\r\n                  View All\r\n              </nb-radio>\r\n          </nb-radio-group>\r\n      </div>\r\n    <ag-grid-angular style=\"width: 100%; height:500px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n      [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='100' (gridReady)=\"onGridReady($event)\">\r\n    </ag-grid-angular>\r\n  </nb-card-body>\r\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/lot/view-lot/view-lot.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/lot/view-lot/view-lot.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvdC92aWV3LWxvdC92aWV3LWxvdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/lot/view-lot/view-lot.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/lot/view-lot/view-lot.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewLotComponent, CustomRendererLotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLotComponent", function() { return ViewLotComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererLotComponent", function() { return CustomRendererLotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_services_lot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/services/lot.service */ "./src/app/@theme/services/lot.service.ts");
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











var ViewLotComponent = /** @class */ (function () {
    function ViewLotComponent(lotService, router, tosterService, permissionService, papa, authService) {
        var _this = this;
        this.lotService = lotService;
        this.router = router;
        this.tosterService = tosterService;
        this.permissionService = permissionService;
        this.papa = papa;
        this.authService = authService;
        this.lotList = [];
        this.addLotPermission = 1;
        this.columnDefs = [
            { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
            { headerName: 'Lot No.', field: 'lot_id', sortable: true, filter: true },
            { headerName: 'Quality Id', field: 'quality_id', sortable: true, filter: true },
            { headerName: 'Quality Name', field: 'quality_name', sortable: true, filter: true },
            { headerName: 'Quality Type', field: 'quality_type', sortable: true, filter: true },
        ];
        this.columnExportDefs = [
            'lot_id', 'quality_id', 'quality_name', 'quality_type'
        ];
        this.currentUserPermission = [];
        this.viewAllDataPermission = false;
        this.viewOwnDataPermission = false;
        this.viewGroupDataPermission = false;
        this.radioSelected = 1;
        this.lotReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_10__["ViewReqObj"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserPermission = ele.user_permission;
            }
        });
        this.setColumns();
    }
    ViewLotComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUserPermission.length) {
            this.currentUserPermission.forEach(function (ele) {
                if (ele.form_name === 'Lot') {
                    // this.addLotPermission = ele.can_add;
                    _this.addLotPermission = 1;
                    _this.viewAllDataPermission = ele.can_view_all;
                    _this.viewGroupDataPermission = ele.can_view_group;
                    _this.viewOwnDataPermission = ele.can_view;
                }
            });
        }
        this.getLotData();
    };
    ViewLotComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    ViewLotComponent.prototype.getLotData = function (value) {
        var _this = this;
        this.lotReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_10__["ViewReqObj"]();
        if (value) {
            this.radioSelected = value;
        }
        if (this.viewOwnDataPermission && this.radioSelected == 1) {
            this.lotReqObj.created_by = this.currentUserId;
        }
        if (this.viewGroupDataPermission && this.radioSelected == 2) {
            this.lotReqObj.created_by = this.currentUserId;
            this.lotReqObj.user_head_id = this.currentUser.user_head_id;
        }
        if (this.viewAllDataPermission && this.radioSelected == 3) {
            this.lotReqObj.created_by = null;
            this.lotReqObj.user_head_id = null;
        }
        this.lotService.getAllLots(this.lotReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.lotList = data[0].data;
                _this.rowData = data[0].data;
            }
            else {
                _this.tosterService.error(data[0].message);
            }
        });
    };
    ViewLotComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'entry_id') {
                column.cellRendererFramework = CustomRendererLotComponent;
                column.cellRendererParams = {
                    inRouterLink: '/pages/lot/edit-lot/',
                    inViewLink: '/pages/lot/view-lot/',
                    action: _this
                };
            }
        });
    };
    ViewLotComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        // this.getUserList(this.currentUserId);
    };
    ViewLotComponent.prototype.onAddLot = function () {
        if (this.addLotPermission) {
            this.router.navigate(['/pages/lot/add-lot']);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add lot. If you want to add lot ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ViewLotComponent.prototype.onExport = function () {
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
    ViewLotComponent.prototype.exportExcel = function (data) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].json_to_sheet(data);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        xlsx__WEBPACK_IMPORTED_MODULE_8__["writeFile"](workbook, 'my_file.xls', { bookType: 'xls', type: 'buffer' });
    };
    ViewLotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-view-lot',
            template: __webpack_require__(/*! ./view-lot.component.html */ "./src/app/pages/lot/view-lot/view-lot.component.html"),
            styles: [__webpack_require__(/*! ./view-lot.component.scss */ "./src/app/pages/lot/view-lot/view-lot.component.scss")]
        }),
        __metadata("design:paramtypes", [_theme_services_lot_service__WEBPACK_IMPORTED_MODULE_1__["LotService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"], ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__["Papa"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], ViewLotComponent);
    return ViewLotComponent;
}());

var CustomRendererLotComponent = /** @class */ (function () {
    function CustomRendererLotComponent(router, _modalService, lotService, toasterService, permissionService, authService) {
        var _this = this;
        this.router = router;
        this._modalService = _modalService;
        this.lotService = lotService;
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.authService = authService;
        this.editLotPermission = 1;
        this.deleteLotPermission = 1;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserPermission = ele.user_permission;
            }
        });
    }
    CustomRendererLotComponent.prototype.agInit = function (params) {
        var _this = this;
        this.params = params;
        this.currentUserPermission.forEach(function (ele) {
            if (ele.form_name === 'Lot') {
                if (_this.params.action.radioSelected == 1) {
                    _this.editLotPermission = ele.can_edit;
                    _this.deleteLotPermission = ele.can_delete;
                }
                else if (_this.params.action.radioSelected == 2) {
                    _this.editLotPermission = ele.can_edit_group;
                    _this.deleteLotPermission = ele.can_delete_group;
                }
                else if (_this.params.action.radioSelected == 3) {
                    _this.editLotPermission = ele.can_edit_all;
                    _this.deleteLotPermission = ele.can_delete_all;
                }
            }
        });
        // this.editLotPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_edit_lot);
        // this.deleteLotPermission = parseInt(JSON.parse(localStorage.getItem('currentUser')).can_delete_lot);
    };
    CustomRendererLotComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererLotComponent.prototype.viewBill = function () {
        //  this.router.navigate([this.params.inViewLink + 0]);
    };
    CustomRendererLotComponent.prototype.editLot = function () {
        if (this.editLotPermission) {
            this.router.navigate([this.params.inRouterLink + this.params.value]);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit lot. If you want to edit lot ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererLotComponent.prototype.onDeleteLot = function () {
        var _this = this;
        if (this.deleteLotPermission) {
            var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"]);
            modalRef.componentInstance.titleFrom = 'Delete Lot ';
            modalRef.componentInstance.message = 'Are you sure you want to delete this lot?';
            modalRef.result
                .then(function (result) {
                if (result) {
                    var id = _this.params.value;
                    _this.lotService.deleteLotById(id).subscribe(function (data) {
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
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete lot. If you want to delete lot ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererLotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editLot()\"></i>\n  <i class=\"ft-info font-medium-1 mr-2\" style=\"color:#4ca6ff\" ></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteLot()\"></i>",
            styles: [__webpack_require__(/*! ./view-lot.component.scss */ "./src/app/pages/lot/view-lot/view-lot.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _theme_services_lot_service__WEBPACK_IMPORTED_MODULE_1__["LotService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], CustomRendererLotComponent);
    return CustomRendererLotComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-pages-pages-module~lot-lot-module.js.map