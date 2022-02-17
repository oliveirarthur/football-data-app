"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_competitions_competitions-list_competitions-list_module_ts"],{

/***/ 4067:
/*!************************************************************************************!*\
  !*** ./src/app/competitions/competitions-list/competitions-list-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetitionsListPageRoutingModule": () => (/* binding */ CompetitionsListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _competitions_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./competitions-list.page */ 2043);




const routes = [
    {
        path: '',
        component: _competitions_list_page__WEBPACK_IMPORTED_MODULE_0__.CompetitionsListPage
    }
];
let CompetitionsListPageRoutingModule = class CompetitionsListPageRoutingModule {
};
CompetitionsListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompetitionsListPageRoutingModule);



/***/ }),

/***/ 7215:
/*!****************************************************************************!*\
  !*** ./src/app/competitions/competitions-list/competitions-list.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetitionsListPageModule": () => (/* binding */ CompetitionsListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_competitions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/competitions.service */ 7932);
/* harmony import */ var _competitions_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./competitions-list-routing.module */ 4067);
/* harmony import */ var _competitions_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./competitions-list.page */ 2043);








let CompetitionsListPageModule = class CompetitionsListPageModule {
};
CompetitionsListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _competitions_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.CompetitionsListPageRoutingModule,
        ],
        declarations: [_competitions_list_page__WEBPACK_IMPORTED_MODULE_2__.CompetitionsListPage],
        providers: [src_app_services_competitions_service__WEBPACK_IMPORTED_MODULE_0__.CompetitionsService],
    })
], CompetitionsListPageModule);



/***/ }),

/***/ 2043:
/*!**************************************************************************!*\
  !*** ./src/app/competitions/competitions-list/competitions-list.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetitionsListPage": () => (/* binding */ CompetitionsListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_oliveirarthur_projects_personal_football_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_competitions_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./competitions-list.page.html */ 3675);
/* harmony import */ var _competitions_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./competitions-list.page.scss */ 423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var src_app_services_competitions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/competitions.service */ 7932);






let CompetitionsListPage = class CompetitionsListPage {
    constructor(competitionService) {
        this.competitionService = competitionService;
        this.selectedSeason = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.seasons = [];
        this.competitions$ = this.competitionService.listCompetitions();
    }
    ngOnInit() {
        this.initSeasons();
    }
    initSeasons() {
        const currentYear = new Date().getFullYear();
        this.selectedSeason.setValue(currentYear);
        this.seasons = new Array(20).fill(0).map((_, i) => currentYear - i);
    }
};
CompetitionsListPage.ctorParameters = () => [
    { type: src_app_services_competitions_service__WEBPACK_IMPORTED_MODULE_2__.CompetitionsService }
];
CompetitionsListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-competitions-list',
        template: _home_oliveirarthur_projects_personal_football_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_competitions_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_competitions_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompetitionsListPage);



/***/ }),

/***/ 3675:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/competitions/competitions-list/competitions-list.page.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Competitions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-justify-content-around\">\n      <ion-col\n        *ngFor=\"let competition of (competitions$ | async)?.competitions\"\n        [routerLink]=\"['/competitions/', competition.id, 'teams']\"\n        sizeMd=\"4\"\n        sizeLg=\"3\"\n      >\n        <ion-card class=\"ion-text-center\">\n          <ion-card-header>\n            <ion-card-title> {{ competition.name }} </ion-card-title>\n            <ion-card-subtitle>\n              Last updated at {{ competition.lastUpdated | date }}\n            </ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 423:
/*!****************************************************************************!*\
  !*** ./src/app/competitions/competitions-list/competitions-list.page.scss ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wZXRpdGlvbnMtbGlzdC5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_competitions_competitions-list_competitions-list_module_ts.js.map