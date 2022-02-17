"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_competitions_competitions_module_ts"],{

/***/ 1520:
/*!*************************************************************!*\
  !*** ./src/app/competitions/competitions-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetitionsPageRoutingModule": () => (/* binding */ CompetitionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _competitions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./competitions.page */ 494);




const routes = [
    {
        path: '',
        component: _competitions_page__WEBPACK_IMPORTED_MODULE_0__.CompetitionsPage,
        children: [
            {
                path: 'list',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_competitions_competitions-list_competitions-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./competitions-list/competitions-list.module */ 7215)).then((m) => m.CompetitionsListPageModule),
            },
            {
                path: ':competitionID/teams/:teamID',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_competitions_team-details_team-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./team-details/team-details.module */ 9537)).then((m) => m.TeamDetailsPageModule),
            },
            {
                path: ':competitionID/teams',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_competitions_teams-by-competition-list_teams-by-competition-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./teams-by-competition-list/teams-by-competition-list.module */ 2716)).then((m) => m.TeamsByCompetitionListPageModule),
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
        ],
    },
];
let CompetitionsPageRoutingModule = class CompetitionsPageRoutingModule {
};
CompetitionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompetitionsPageRoutingModule);



/***/ }),

/***/ 7178:
/*!*****************************************************!*\
  !*** ./src/app/competitions/competitions.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetitionsPageModule": () => (/* binding */ CompetitionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _competitions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./competitions-routing.module */ 1520);
/* harmony import */ var _competitions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./competitions.page */ 494);







let CompetitionsPageModule = class CompetitionsPageModule {
};
CompetitionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _competitions_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompetitionsPageRoutingModule
        ],
        declarations: [_competitions_page__WEBPACK_IMPORTED_MODULE_1__.CompetitionsPage]
    })
], CompetitionsPageModule);



/***/ }),

/***/ 494:
/*!***************************************************!*\
  !*** ./src/app/competitions/competitions.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetitionsPage": () => (/* binding */ CompetitionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_oliveirarthur_projects_personal_football_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_competitions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./competitions.page.html */ 4365);
/* harmony import */ var _competitions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./competitions.page.scss */ 6507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let CompetitionsPage = class CompetitionsPage {
    constructor() { }
    ngOnInit() {
    }
};
CompetitionsPage.ctorParameters = () => [];
CompetitionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-competitions',
        template: _home_oliveirarthur_projects_personal_football_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_competitions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_competitions_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompetitionsPage);



/***/ }),

/***/ 4365:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/competitions/competitions.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-router-outlet></ion-router-outlet>\n");

/***/ }),

/***/ 6507:
/*!*****************************************************!*\
  !*** ./src/app/competitions/competitions.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wZXRpdGlvbnMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_competitions_competitions_module_ts.js.map