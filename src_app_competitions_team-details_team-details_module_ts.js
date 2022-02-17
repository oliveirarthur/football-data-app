"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_competitions_team-details_team-details_module_ts"],{

/***/ 7304:
/*!**************************************************************************!*\
  !*** ./src/app/competitions/team-details/team-details-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamDetailsPageRoutingModule": () => (/* binding */ TeamDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _team_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team-details.page */ 2759);




const routes = [
    {
        path: '',
        component: _team_details_page__WEBPACK_IMPORTED_MODULE_0__.TeamDetailsPage
    }
];
let TeamDetailsPageRoutingModule = class TeamDetailsPageRoutingModule {
};
TeamDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TeamDetailsPageRoutingModule);



/***/ }),

/***/ 9537:
/*!******************************************************************!*\
  !*** ./src/app/competitions/team-details/team-details.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamDetailsPageModule": () => (/* binding */ TeamDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _team_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team-details-routing.module */ 7304);
/* harmony import */ var _team_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team-details.page */ 2759);







let TeamDetailsPageModule = class TeamDetailsPageModule {
};
TeamDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _team_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeamDetailsPageRoutingModule
        ],
        declarations: [_team_details_page__WEBPACK_IMPORTED_MODULE_1__.TeamDetailsPage]
    })
], TeamDetailsPageModule);



/***/ }),

/***/ 2759:
/*!****************************************************************!*\
  !*** ./src/app/competitions/team-details/team-details.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamDetailsPage": () => (/* binding */ TeamDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_oliveirarthur_projects_personal_football_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_team_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./team-details.page.html */ 9539);
/* harmony import */ var _team_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team-details.page.scss */ 4349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/teams.service */ 2817);






let TeamDetailsPage = class TeamDetailsPage {
    constructor(route, teamsService) {
        this.route = route;
        this.teamsService = teamsService;
    }
    ngOnInit() {
        const { competitionID, teamID } = this.route.snapshot.params;
        this.competitionID = competitionID;
        this.teamID = teamID;
        this.loadTeamDetails(teamID);
    }
    loadTeamDetails(teamID) {
        this.teamData$ = this.teamsService.details(teamID);
    }
};
TeamDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_2__.TeamsService }
];
TeamDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-team-details',
        template: _home_oliveirarthur_projects_personal_football_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_team_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_team_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeamDetailsPage);



/***/ }),

/***/ 2817:
/*!*******************************************!*\
  !*** ./src/app/services/teams.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamsService": () => (/* binding */ TeamsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
var TeamsService_1;



let TeamsService = TeamsService_1 = class TeamsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    details(teamID) {
        return this.httpClient.get(`${TeamsService_1.baseURL + teamID}`);
    }
};
TeamsService.baseURL = 'http://api.football-data.org/v2/teams/';
TeamsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
TeamsService = TeamsService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], TeamsService);



/***/ }),

/***/ 9539:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/competitions/team-details/team-details.page.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"teamData$ | async as teamData; else titleLoading\">\n      <ion-item>\n        <ion-thumbnail slot=\"start\" *ngIf=\"teamData.crestUrl\">\n          <ion-img [src]=\"teamData.crestUrl\"></ion-img>\n        </ion-thumbnail>\n        <ion-label>\n          {{ teamData.name }}\n          <small *ngIf=\"teamData.tla\"> ({{ teamData.tla }}) </small>\n        </ion-label>\n      </ion-item>\n    </ion-title>\n    <ng-template #titleLoading>\n      <ion-title> Team's details </ion-title>\n    </ng-template>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"teamData$ | async as teamData\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-label>\n              Active competitions: {{ teamData.activeCompetitions.length }}\n            </ion-label>\n          </ion-item>\n\n          <ion-item *ngIf=\"teamData.address\">\n            <ion-label>\n              Address:\n              <a\n                [href]=\"'https://www.google.com/maps/search/?api=1&query=' + teamData.address\"\n                target=\"_blank\"\n                rel=\"noopener noreferrer\"\n              >\n                {{ teamData.address }}\n              </a>\n            </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label> Origin: {{ teamData. area.name}} </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label> Colors: {{ teamData.clubColors }} </ion-label>\n          </ion-item>\n\n          <ion-item *ngIf=\"teamData.email\">\n            <ion-label>\n              Email:\n              <a [href]=\"'mailto:' + teamData.email\"> {{ teamData.email }} </a>\n            </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label> Founded on: {{ teamData.founded }} </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n\n      <ion-col>\n        <ion-list>\n          <ion-item *ngIf=\"teamData.lastUpdated\">\n            <ion-label>\n              Last updated at {{ teamData.lastUpdated | date }}\n            </ion-label>\n          </ion-item>\n\n          <ion-item *ngIf=\"teamData.phone\">\n            <ion-label>\n              Phone:\n              <a [href]=\"'tel:' + teamData.phone\">{{ teamData.phone }}</a>\n            </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label> Short name: {{ teamData.shortName }} </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label> Venue: {{ teamData.venue }} </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>\n              Website:\n              <a\n                [href]=\"teamData.website\"\n                target=\"_blank\"\n                rel=\"noopener noreferrer\"\n                >{{ teamData.website }}</a\n              >\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list *ngIf=\"teamData.squad?.length > 0; else noSquadMessage\">\n    <ion-list-header>\n      <ion-label>Team's players</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let member of teamData.squad\">\n      <ion-label>\n        <small *ngIf=\"member.role\"> {{ member.role }} </small>\n        {{ member.name }}\n        <span *ngIf=\"member.position\">({{ member.position }})</span>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ng-template #noSquadMessage>\n    <p class=\"ion-text-center\">No squad members to show</p>\n  </ng-template>\n</ion-content>\n");

/***/ }),

/***/ 4349:
/*!******************************************************************!*\
  !*** ./src/app/competitions/team-details/team-details.page.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLWRldGFpbHMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_competitions_team-details_team-details_module_ts.js.map