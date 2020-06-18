(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comps_jiraf_jiraf_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comps/jiraf/jiraf.component */ "./src/app/comps/jiraf/jiraf.component.ts");
/* harmony import */ var _comps_rebbit_rebbit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/rebbit/rebbit.component */ "./src/app/comps/rebbit/rebbit.component.ts");
/* harmony import */ var _comps_tiger_tiger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/tiger/tiger.component */ "./src/app/comps/tiger/tiger.component.ts");





class AppComponent {
    constructor() {
        this.title = 'componentstrain';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-jiraf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-rebbit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-tiger");
    } }, directives: [_comps_jiraf_jiraf_component__WEBPACK_IMPORTED_MODULE_1__["JirafComponent"], _comps_rebbit_rebbit_component__WEBPACK_IMPORTED_MODULE_2__["RebbitComponent"], _comps_tiger_tiger_component__WEBPACK_IMPORTED_MODULE_3__["TigerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_jiraf_jiraf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/jiraf/jiraf.component */ "./src/app/comps/jiraf/jiraf.component.ts");
/* harmony import */ var _comps_jiraf_h1jiraf_h1jiraf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/jiraf/h1jiraf/h1jiraf.component */ "./src/app/comps/jiraf/h1jiraf/h1jiraf.component.ts");
/* harmony import */ var _comps_jiraf_uljiraf_uljiraf_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/jiraf/uljiraf/uljiraf.component */ "./src/app/comps/jiraf/uljiraf/uljiraf.component.ts");
/* harmony import */ var _comps_jiraf_footerjiraf_footerjiraf_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/jiraf/footerjiraf/footerjiraf.component */ "./src/app/comps/jiraf/footerjiraf/footerjiraf.component.ts");
/* harmony import */ var _comps_rebbit_rebbit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/rebbit/rebbit.component */ "./src/app/comps/rebbit/rebbit.component.ts");
/* harmony import */ var _comps_rebbit_h1rebbit_h1rebbit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/rebbit/h1rebbit/h1rebbit.component */ "./src/app/comps/rebbit/h1rebbit/h1rebbit.component.ts");
/* harmony import */ var _comps_rebbit_ulrebbit_ulrebbit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/rebbit/ulrebbit/ulrebbit.component */ "./src/app/comps/rebbit/ulrebbit/ulrebbit.component.ts");
/* harmony import */ var _comps_rebbit_foterrebbit_foterrebbit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/rebbit/foterrebbit/foterrebbit.component */ "./src/app/comps/rebbit/foterrebbit/foterrebbit.component.ts");
/* harmony import */ var _comps_tiger_tiger_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/tiger/tiger.component */ "./src/app/comps/tiger/tiger.component.ts");
/* harmony import */ var _comps_tiger_h1tiger_h1tiger_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/tiger/h1tiger/h1tiger.component */ "./src/app/comps/tiger/h1tiger/h1tiger.component.ts");
/* harmony import */ var _comps_tiger_ultiger_ultiger_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/tiger/ultiger/ultiger.component */ "./src/app/comps/tiger/ultiger/ultiger.component.ts");
/* harmony import */ var _comps_tiger_fotertiger_fotertiger_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comps/tiger/fotertiger/fotertiger.component */ "./src/app/comps/tiger/fotertiger/fotertiger.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _comps_jiraf_jiraf_component__WEBPACK_IMPORTED_MODULE_3__["JirafComponent"],
        _comps_jiraf_h1jiraf_h1jiraf_component__WEBPACK_IMPORTED_MODULE_4__["H1jirafComponent"],
        _comps_jiraf_uljiraf_uljiraf_component__WEBPACK_IMPORTED_MODULE_5__["UljirafComponent"],
        _comps_jiraf_footerjiraf_footerjiraf_component__WEBPACK_IMPORTED_MODULE_6__["FooterjirafComponent"],
        _comps_rebbit_rebbit_component__WEBPACK_IMPORTED_MODULE_7__["RebbitComponent"],
        _comps_rebbit_h1rebbit_h1rebbit_component__WEBPACK_IMPORTED_MODULE_8__["H1rebbitComponent"],
        _comps_rebbit_ulrebbit_ulrebbit_component__WEBPACK_IMPORTED_MODULE_9__["UlrebbitComponent"],
        _comps_rebbit_foterrebbit_foterrebbit_component__WEBPACK_IMPORTED_MODULE_10__["FoterrebbitComponent"],
        _comps_tiger_tiger_component__WEBPACK_IMPORTED_MODULE_11__["TigerComponent"],
        _comps_tiger_h1tiger_h1tiger_component__WEBPACK_IMPORTED_MODULE_12__["H1tigerComponent"],
        _comps_tiger_ultiger_ultiger_component__WEBPACK_IMPORTED_MODULE_13__["UltigerComponent"],
        _comps_tiger_fotertiger_fotertiger_component__WEBPACK_IMPORTED_MODULE_14__["FotertigerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _comps_jiraf_jiraf_component__WEBPACK_IMPORTED_MODULE_3__["JirafComponent"],
                    _comps_jiraf_h1jiraf_h1jiraf_component__WEBPACK_IMPORTED_MODULE_4__["H1jirafComponent"],
                    _comps_jiraf_uljiraf_uljiraf_component__WEBPACK_IMPORTED_MODULE_5__["UljirafComponent"],
                    _comps_jiraf_footerjiraf_footerjiraf_component__WEBPACK_IMPORTED_MODULE_6__["FooterjirafComponent"],
                    _comps_rebbit_rebbit_component__WEBPACK_IMPORTED_MODULE_7__["RebbitComponent"],
                    _comps_rebbit_h1rebbit_h1rebbit_component__WEBPACK_IMPORTED_MODULE_8__["H1rebbitComponent"],
                    _comps_rebbit_ulrebbit_ulrebbit_component__WEBPACK_IMPORTED_MODULE_9__["UlrebbitComponent"],
                    _comps_rebbit_foterrebbit_foterrebbit_component__WEBPACK_IMPORTED_MODULE_10__["FoterrebbitComponent"],
                    _comps_tiger_tiger_component__WEBPACK_IMPORTED_MODULE_11__["TigerComponent"],
                    _comps_tiger_h1tiger_h1tiger_component__WEBPACK_IMPORTED_MODULE_12__["H1tigerComponent"],
                    _comps_tiger_ultiger_ultiger_component__WEBPACK_IMPORTED_MODULE_13__["UltigerComponent"],
                    _comps_tiger_fotertiger_fotertiger_component__WEBPACK_IMPORTED_MODULE_14__["FotertigerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comps/jiraf/footerjiraf/footerjiraf.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/comps/jiraf/footerjiraf/footerjiraf.component.ts ***!
  \******************************************************************/
/*! exports provided: FooterjirafComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterjirafComponent", function() { return FooterjirafComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterjirafComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterjirafComponent.ɵfac = function FooterjirafComponent_Factory(t) { return new (t || FooterjirafComponent)(); };
FooterjirafComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterjirafComponent, selectors: [["app-footerjiraf"]], decls: 2, vars: 0, template: function FooterjirafComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " jiraf data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmL2Zvb3RlcmppcmFmL2Zvb3RlcmppcmFmLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterjirafComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footerjiraf',
                templateUrl: './footerjiraf.component.html',
                styleUrls: ['./footerjiraf.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/jiraf/h1jiraf/h1jiraf.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/jiraf/h1jiraf/h1jiraf.component.ts ***!
  \**********************************************************/
/*! exports provided: H1jirafComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1jirafComponent", function() { return H1jirafComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class H1jirafComponent {
    constructor() { }
    ngOnInit() {
    }
}
H1jirafComponent.ɵfac = function H1jirafComponent_Factory(t) { return new (t || H1jirafComponent)(); };
H1jirafComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: H1jirafComponent, selectors: [["app-h1jiraf"]], decls: 2, vars: 0, template: function H1jirafComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "jiraf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmL2gxamlyYWYvaDFqaXJhZi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](H1jirafComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-h1jiraf',
                templateUrl: './h1jiraf.component.html',
                styleUrls: ['./h1jiraf.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/jiraf/jiraf.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/jiraf/jiraf.component.ts ***!
  \************************************************/
/*! exports provided: JirafComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JirafComponent", function() { return JirafComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _h1jiraf_h1jiraf_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h1jiraf/h1jiraf.component */ "./src/app/comps/jiraf/h1jiraf/h1jiraf.component.ts");
/* harmony import */ var _uljiraf_uljiraf_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uljiraf/uljiraf.component */ "./src/app/comps/jiraf/uljiraf/uljiraf.component.ts");
/* harmony import */ var _footerjiraf_footerjiraf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footerjiraf/footerjiraf.component */ "./src/app/comps/jiraf/footerjiraf/footerjiraf.component.ts");





class JirafComponent {
    constructor() { }
    ngOnInit() {
    }
}
JirafComponent.ɵfac = function JirafComponent_Factory(t) { return new (t || JirafComponent)(); };
JirafComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JirafComponent, selectors: [["app-jiraf"]], decls: 3, vars: 0, template: function JirafComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-h1jiraf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-uljiraf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footerjiraf");
    } }, directives: [_h1jiraf_h1jiraf_component__WEBPACK_IMPORTED_MODULE_1__["H1jirafComponent"], _uljiraf_uljiraf_component__WEBPACK_IMPORTED_MODULE_2__["UljirafComponent"], _footerjiraf_footerjiraf_component__WEBPACK_IMPORTED_MODULE_3__["FooterjirafComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmL2ppcmFmLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JirafComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jiraf',
                templateUrl: './jiraf.component.html',
                styleUrls: ['./jiraf.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/jiraf/uljiraf/uljiraf.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/jiraf/uljiraf/uljiraf.component.ts ***!
  \**********************************************************/
/*! exports provided: UljirafComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UljirafComponent", function() { return UljirafComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UljirafComponent {
    constructor() { }
    ngOnInit() {
    }
}
UljirafComponent.ɵfac = function UljirafComponent_Factory(t) { return new (t || UljirafComponent)(); };
UljirafComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UljirafComponent, selectors: [["app-uljiraf"]], decls: 7, vars: 0, template: function UljirafComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "4 legs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "2 horns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "het gress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmL3VsamlyYWYvdWxqaXJhZi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UljirafComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uljiraf',
                templateUrl: './uljiraf.component.html',
                styleUrls: ['./uljiraf.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/rebbit/foterrebbit/foterrebbit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comps/rebbit/foterrebbit/foterrebbit.component.ts ***!
  \*******************************************************************/
/*! exports provided: FoterrebbitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoterrebbitComponent", function() { return FoterrebbitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FoterrebbitComponent {
    constructor() { }
    ngOnInit() {
    }
}
FoterrebbitComponent.ɵfac = function FoterrebbitComponent_Factory(t) { return new (t || FoterrebbitComponent)(); };
FoterrebbitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FoterrebbitComponent, selectors: [["app-foterrebbit"]], decls: 2, vars: 0, template: function FoterrebbitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "rebbit data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3JlYmJpdC9mb3RlcnJlYmJpdC9mb3RlcnJlYmJpdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoterrebbitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-foterrebbit',
                templateUrl: './foterrebbit.component.html',
                styleUrls: ['./foterrebbit.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/rebbit/h1rebbit/h1rebbit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/comps/rebbit/h1rebbit/h1rebbit.component.ts ***!
  \*************************************************************/
/*! exports provided: H1rebbitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1rebbitComponent", function() { return H1rebbitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class H1rebbitComponent {
    constructor() { }
    ngOnInit() {
    }
}
H1rebbitComponent.ɵfac = function H1rebbitComponent_Factory(t) { return new (t || H1rebbitComponent)(); };
H1rebbitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: H1rebbitComponent, selectors: [["app-h1rebbit"]], decls: 2, vars: 0, template: function H1rebbitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "rebbit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3JlYmJpdC9oMXJlYmJpdC9oMXJlYmJpdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](H1rebbitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-h1rebbit',
                templateUrl: './h1rebbit.component.html',
                styleUrls: ['./h1rebbit.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/rebbit/rebbit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/rebbit/rebbit.component.ts ***!
  \**************************************************/
/*! exports provided: RebbitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RebbitComponent", function() { return RebbitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _h1rebbit_h1rebbit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h1rebbit/h1rebbit.component */ "./src/app/comps/rebbit/h1rebbit/h1rebbit.component.ts");
/* harmony import */ var _ulrebbit_ulrebbit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ulrebbit/ulrebbit.component */ "./src/app/comps/rebbit/ulrebbit/ulrebbit.component.ts");
/* harmony import */ var _foterrebbit_foterrebbit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foterrebbit/foterrebbit.component */ "./src/app/comps/rebbit/foterrebbit/foterrebbit.component.ts");





class RebbitComponent {
    constructor() { }
    ngOnInit() {
    }
}
RebbitComponent.ɵfac = function RebbitComponent_Factory(t) { return new (t || RebbitComponent)(); };
RebbitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RebbitComponent, selectors: [["app-rebbit"]], decls: 3, vars: 0, template: function RebbitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-h1rebbit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ulrebbit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-foterrebbit");
    } }, directives: [_h1rebbit_h1rebbit_component__WEBPACK_IMPORTED_MODULE_1__["H1rebbitComponent"], _ulrebbit_ulrebbit_component__WEBPACK_IMPORTED_MODULE_2__["UlrebbitComponent"], _foterrebbit_foterrebbit_component__WEBPACK_IMPORTED_MODULE_3__["FoterrebbitComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3JlYmJpdC9yZWJiaXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RebbitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rebbit',
                templateUrl: './rebbit.component.html',
                styleUrls: ['./rebbit.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/rebbit/ulrebbit/ulrebbit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/comps/rebbit/ulrebbit/ulrebbit.component.ts ***!
  \*************************************************************/
/*! exports provided: UlrebbitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UlrebbitComponent", function() { return UlrebbitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UlrebbitComponent {
    constructor() { }
    ngOnInit() {
    }
}
UlrebbitComponent.ɵfac = function UlrebbitComponent_Factory(t) { return new (t || UlrebbitComponent)(); };
UlrebbitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UlrebbitComponent, selectors: [["app-ulrebbit"]], decls: 7, vars: 0, template: function UlrebbitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "2 legs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "het carrot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "big ears");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3JlYmJpdC91bHJlYmJpdC91bHJlYmJpdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UlrebbitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ulrebbit',
                templateUrl: './ulrebbit.component.html',
                styleUrls: ['./ulrebbit.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/tiger/fotertiger/fotertiger.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/comps/tiger/fotertiger/fotertiger.component.ts ***!
  \****************************************************************/
/*! exports provided: FotertigerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotertigerComponent", function() { return FotertigerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FotertigerComponent {
    constructor() { }
    ngOnInit() {
    }
}
FotertigerComponent.ɵfac = function FotertigerComponent_Factory(t) { return new (t || FotertigerComponent)(); };
FotertigerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FotertigerComponent, selectors: [["app-fotertiger"]], decls: 2, vars: 0, template: function FotertigerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tiger data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3RpZ2VyL2ZvdGVydGlnZXIvZm90ZXJ0aWdlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FotertigerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fotertiger',
                templateUrl: './fotertiger.component.html',
                styleUrls: ['./fotertiger.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/tiger/h1tiger/h1tiger.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/tiger/h1tiger/h1tiger.component.ts ***!
  \**********************************************************/
/*! exports provided: H1tigerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1tigerComponent", function() { return H1tigerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class H1tigerComponent {
    constructor() { }
    ngOnInit() {
    }
}
H1tigerComponent.ɵfac = function H1tigerComponent_Factory(t) { return new (t || H1tigerComponent)(); };
H1tigerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: H1tigerComponent, selectors: [["app-h1tiger"]], decls: 2, vars: 0, template: function H1tigerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tiger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3RpZ2VyL2gxdGlnZXIvaDF0aWdlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](H1tigerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-h1tiger',
                templateUrl: './h1tiger.component.html',
                styleUrls: ['./h1tiger.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/tiger/tiger.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/tiger/tiger.component.ts ***!
  \************************************************/
/*! exports provided: TigerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TigerComponent", function() { return TigerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _h1tiger_h1tiger_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h1tiger/h1tiger.component */ "./src/app/comps/tiger/h1tiger/h1tiger.component.ts");
/* harmony import */ var _ultiger_ultiger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ultiger/ultiger.component */ "./src/app/comps/tiger/ultiger/ultiger.component.ts");
/* harmony import */ var _fotertiger_fotertiger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fotertiger/fotertiger.component */ "./src/app/comps/tiger/fotertiger/fotertiger.component.ts");





class TigerComponent {
    constructor() { }
    ngOnInit() {
    }
}
TigerComponent.ɵfac = function TigerComponent_Factory(t) { return new (t || TigerComponent)(); };
TigerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TigerComponent, selectors: [["app-tiger"]], decls: 3, vars: 0, template: function TigerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-h1tiger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ultiger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-fotertiger");
    } }, directives: [_h1tiger_h1tiger_component__WEBPACK_IMPORTED_MODULE_1__["H1tigerComponent"], _ultiger_ultiger_component__WEBPACK_IMPORTED_MODULE_2__["UltigerComponent"], _fotertiger_fotertiger_component__WEBPACK_IMPORTED_MODULE_3__["FotertigerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3RpZ2VyL3RpZ2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TigerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tiger',
                templateUrl: './tiger.component.html',
                styleUrls: ['./tiger.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/tiger/ultiger/ultiger.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/tiger/ultiger/ultiger.component.ts ***!
  \**********************************************************/
/*! exports provided: UltigerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltigerComponent", function() { return UltigerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UltigerComponent {
    constructor() { }
    ngOnInit() {
    }
}
UltigerComponent.ɵfac = function UltigerComponent_Factory(t) { return new (t || UltigerComponent)(); };
UltigerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UltigerComponent, selectors: [["app-ultiger"]], decls: 7, vars: 0, template: function UltigerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "4 legs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "het meet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "very fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3RpZ2VyL3VsdGlnZXIvdWx0aWdlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UltigerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ultiger',
                templateUrl: './ultiger.component.html',
                styleUrls: ['./ultiger.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\b\componentstrain\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map