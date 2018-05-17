webpackJsonp([0],{

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiveInner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inspect_inner_inspect_inner__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inspect_create_inspect_create__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HiveInner = (function () {
    function HiveInner(navCtrl) {
        this.navCtrl = navCtrl;
        this.hive = "info";
    }
    HiveInner.prototype.openInspectInnerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inspect_inner_inspect_inner__["a" /* InspectInnerPage */]);
    };
    HiveInner.prototype.openInspectCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inspect_create_inspect_create__["a" /* InspectCreatePage */]);
    };
    return HiveInner;
}());
HiveInner = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-hive-inner',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\hive-inner\hive-inner.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n            <button ion-button menuToggle icon-only>\n\n                <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n            </button>\n\n            <ion-title>Hive inner</ion-title>\n\n            <ion-buttons end>\n\n                <button ion-button icon-only>\n\n                    <ion-icon name="ios-more-outline"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar>\n\n            <ion-segment [(ngModel)]="hive">\n\n                <ion-segment-button value="info">\n\n                    Hive Info\n\n                </ion-segment-button>\n\n                <ion-segment-button value="inspections">\n\n                    Inspections\n\n                </ion-segment-button>\n\n                <ion-segment-button value="stats">\n\n                    Statistics\n\n                </ion-segment-button>\n\n            </ion-segment>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n\n\n<ion-content>\n\n\n\n    <div [ngSwitch]="hive">\n\n        <ion-list *ngSwitchCase="\'info\'">\n\n\n\n            <ion-row style="height: 1rem"></ion-row>\n\n\n\n            <ion-item no-lines>\n\n                <h1>Hive</h1>\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/img/hive-img.jpg">\n\n                </ion-avatar>\n\n                <h2>#1 Hive</h2>                            <!--Avilio pavadinimas Hive_name-->\n\n                <p>Last inspection: 2018-04-20</p>          <!--Paskutin�s (naujausios) darytos ap�i�ros data Inspection_date-->\n\n            </ion-item>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="ios-pulse"></ion-icon>\n\n                        <div>80% strengt</div>              <!--Naujausias �ra�as Bee_strength-->\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="ios-thermometer"></ion-icon>\n\n                        <div>32&deg;C TEMP</div>            <!--Naujausias �ra�as Monitoring_temperature-->\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="ios-water"></ion-icon>\n\n                        <div>25%</div>                      <!--Naujausias �ra�as Monitoring_humidity-->\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-item>\n\n                <p>Status</p>\n\n                <h2>Active</h2>                             <!--Avilio statusas Hive_status\n\n                                                            1 => "Hive active"\n\n                                                            0 => "Hive inactive"-->\n\n            </ion-item>\n\n            <ion-item>\n\n                <p>Hive type</p>\n\n                <h2>Dadan hive</h2>                         <!--Avilio tipas Hive_type-->\n\n            </ion-item>\n\n            <ion-item>\n\n                <p>Bee Family</p>\n\n                <h2>Buckfast</h2>                           <!--Bi�i� �eimos veisl� Hive_family-->\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <h1>Queen status</h1>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <p>Name</p>\n\n                <h2>#1 Queen</h2>                           <!--Motin�l�s pavadinimas Queen_name-->\n\n            </ion-item>\n\n            <ion-item>\n\n                <p>Breed</p>\n\n                <h2>Carnica</h2>                            <!--Motin�l�s veisl� Queen_breed-->\n\n            </ion-item>\n\n            <ion-item>\n\n                <p>Date</p>\n\n                <h2>2018-04-10</h2>                         <!--Motin�l�s talpinimo � avil� data Queen_date-->\n\n            </ion-item>\n\n            <ion-item>\n\n                <p>State</p>\n\n                <h2>Emerged</h2>                            <!--Queen_state-->\n\n            </ion-item>\n\n            <ion-item>\n\n                <p>Status</p>\n\n                <h2>Accepted</h2>                           <!--Queen_status-->\n\n            </ion-item>\n\n            <ion-item>\n\n                <p>Color</p>\n\n                <h2>Blue</h2>                               <!--Spalva pagal kuri� sprend�iam am�i� Queen_colour-->\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'inspections\'">\n\n\n\n            <ion-card (click)="openInspectInnerPage()">\n\n                <ion-item>\n\n                    <ion-avatar item-left>\n\n                        <img src="./assets/img/glass.jpg">\n\n                    </ion-avatar>\n\n                    <h2>#1 Inspection</h2>                  <!--Inspection_name-->\n\n                    <p>Calm temper</p>                      <!--Bee_temper-->\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <p>No disease.</p>                      <!--Disease-->\n\n                </ion-card-content>\n\n                <ion-row>\n\n                    <ion-col>\n\n                        <button ion-button icon-left clear small>\n\n                            <ion-icon name="ios-pulse"></ion-icon>\n\n                            <div>80% strength</div>         <!--Bee_strength-->\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col center text-center>\n\n                        <ion-note>\n\n                            Inspection date: 2018-04-20\n\n                        </ion-note>\n\n                    </ion-col>\n\n\n\n                </ion-row>\n\n            </ion-card>\n\n\n\n            <ion-card (click)="openInspectInnerPage()">\n\n                <ion-item>\n\n                    <ion-avatar item-left>\n\n                        <img src="./assets/img/glass.jpg">\n\n                    </ion-avatar>\n\n                    <h2>#1 Inspection</h2>                  <!--Inspection_name-->\n\n                    <p>Calm temper</p>                      <!--Bee_temper-->\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <p>No disease.</p>                      <!--Disease-->\n\n                </ion-card-content>\n\n                <ion-row>\n\n                    <ion-col>\n\n                        <button ion-button icon-left clear small>\n\n                            <ion-icon name="ios-pulse"></ion-icon>\n\n                            <div>80% strength</div>         <!--Bee_strength-->\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col center text-center>\n\n                        <ion-note>\n\n                            Inspection date: 2018-04-20     <!--Inspection_date-->\n\n                        </ion-note>\n\n                    </ion-col>\n\n\n\n                </ion-row>\n\n            </ion-card>\n\n\n\n            <ion-fab right bottom>\n\n                <button ion-fab color="primary" (click)="openInspectCreatePage()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n            </ion-fab>\n\n\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'stats\'">\n\n\n\n            <ion-item no-lines>\n\n                <h1>Temperature</h1>\n\n            </ion-item>\n\n            <img src="./assets/img/Chart-JS.png">\n\n\n\n            <ion-item no-lines>\n\n                <h1>Humidity</h1>\n\n            </ion-item>\n\n            <img src="./assets/img/Chart-JS.png">\n\n\n\n            <ion-item no-lines>\n\n                <h1>Strength</h1>\n\n            </ion-item>\n\n            <img src="./assets/img/Chart-JS.png">\n\n\n\n        </ion-list>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\hive-inner\hive-inner.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HiveInner);

//# sourceMappingURL=hive-inner.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feeding_create_feeding_create__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feeding_inner_feeding_inner__ = __webpack_require__(482);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedingPage = (function () {
    function FeedingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeedingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedingPage');
    };
    FeedingPage.prototype.openFeedingCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__feeding_create_feeding_create__["a" /* FeedingCreatePage */]);
    };
    FeedingPage.prototype.openFeedingInnerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__feeding_inner_feeding_inner__["a" /* FeedingInnerPage */]);
    };
    return FeedingPage;
}());
FeedingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-feeding',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\feeding\feeding.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Feedings</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-search-outline"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card (click)="openFeedingInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/sugar.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Feeding</h2>                                     <!--Feeding_name-->\n\n            <p>Syrup</p>                                            <!--Feeding_product-->\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Notes about feeding.</p>                             <!--Feeding_notes-->\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="md-restaurant"></ion-icon>\n\n                    <div>10kg per hive</div>                        <!--Feeding_quantity, Feeding_unit-->\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Feeding date: 2018-04-20                        <!--Feeding_date-->\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openFeedingInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/sugar.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Feeding</h2>\n\n            <p>Syrup</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Notes about feeding.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="md-restaurant"></ion-icon>\n\n                    <div>10kg per hive</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Feeding date: 2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openFeedingInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/sugar.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Feeding</h2>\n\n            <p>Syrup</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Notes about feeding.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="md-restaurant"></ion-icon>\n\n                    <div>10kg per hive</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Feeding date: 2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openFeedingInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/sugar.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Feeding</h2>\n\n            <p>Syrup</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Notes about feeding.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="md-restaurant"></ion-icon>\n\n                    <div>10kg per hive</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Feeding date: 2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openFeedingInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/sugar.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Feeding</h2>\n\n            <p>Syrup</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Notes about feeding.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="md-restaurant"></ion-icon>\n\n                    <div>10kg per hive</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Feeding date: 2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openFeedingInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/sugar.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Feeding</h2>\n\n            <p>Syrup</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Notes about feeding.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="md-restaurant"></ion-icon>\n\n                    <div>10kg per hive</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Feeding date: 2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="primary" (click)="openFeedingCreatePage()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\feeding\feeding.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], FeedingPage);

//# sourceMappingURL=feeding.js.map

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 229;

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hives_hives__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__harvest_harvest__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treatment_treatment__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feeding_feeding__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__hives_hives__["a" /* HivesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__treatment_treatment__["a" /* TreatmentPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__harvest_harvest__["a" /* HarvestPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__feeding_feeding__["a" /* FeedingPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="ios-home-outline"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Hives" tabIcon="ios-browsers-outline"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Treatments" tabIcon="ios-medkit-outline"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="Harvest" tabIcon="ios-color-fill-outline"></ion-tab>\n\n    <ion-tab [root]="tab5Root" tabTitle="Feedings" tabIcon="ios-restaurant-outline"></ion-tab>\n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiaries_apiaries__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feeding_feeding__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.onLink = function (url) {
        window.open(url);
    };
    HomePage.prototype.openApiariesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__apiaries_apiaries__["a" /* ApiariesPage */]);
    };
    HomePage.prototype.openFeedingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__feeding_feeding__["a" /* FeedingPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Home</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <button ion-button full  (click)="openApiariesPage()">Apiaries</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiariesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiary_create_apiary_create__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiary_inner_apiary_inner__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ApiariesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ApiariesPage = (function () {
    function ApiariesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ApiariesPage.prototype.openApiaryCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__apiary_create_apiary_create__["a" /* ApiaryCreatePage */]);
    };
    ApiariesPage.prototype.openApiaryInnerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__apiary_inner_apiary_inner__["a" /* ApiaryInnerPage */]);
    };
    return ApiariesPage;
}());
ApiariesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-apiaries',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\apiaries\apiaries.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Apiaries</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-search-outline"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card (click)="openApiaryInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/apiary.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Apiary</h2>      <!--Apiary_name-->\n\n            <p>Vilnius, Lietuva</p> <!--Apiary_place-->\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>45 active and 5 not active hives in apiary.</p>  <!--Atvaizduoja kiek bityne i� viso aktyvi� ir neaktyvi� avili� pagal Hive_status atribut�-->\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>80% strength AVG</div>                 <!--Vidutinis stiprumas bityne pagal atribut� Bee_strength-->\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>32&deg;C</div>                         <!--Vidutin� temperat�ra bityne pagal atribut� Monitoring_temperature-->\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openApiaryInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/apiary.jpg">\n\n            </ion-avatar>\n\n            <h2>#2 Apiary</h2>\n\n            <p>Vilnius, Lietuva</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>26 active and 2 not active hives in apiary.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>80% strength AVG</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>32&deg;C</div>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="primary" (click)="openApiaryCreatePage()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\apiaries\apiaries.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ApiariesPage);

//# sourceMappingURL=apiaries.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiaryCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ApiaryCreatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ApiaryCreatePage = (function () {
    function ApiaryCreatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ApiaryCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApiaryCreatePage');
    };
    return ApiaryCreatePage;
}());
ApiaryCreatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-apiary-create',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\apiary-create\apiary-create.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Apiaries</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n        <h1>Add New Apiary</h1>\n\n        <h2>Please, enter the following information:</h2>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Apiary Name</ion-label>\n\n            <ion-input placeholder="Enter apiary name"></ion-input>         <!--Apiary_name-->\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Location</ion-label>\n\n            <ion-input placeholder="Enter town, village"></ion-input>       <!--Apiary_place-->\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Latitude</ion-label>\n\n            <ion-input placeholder="e.g. 44.399854"></ion-input>            <!--Apiary_latitude-->\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Longtitude</ion-label>\n\n            <ion-input placeholder="e.g. 44.399854"></ion-input>            <!--Apiary_longtitude-->    \n\n        </ion-item>\n\n\n\n        <ion-row padding>\n\n            <ion-col width-33>\n\n                <ion-buttons start>\n\n                    <button ion-button outline>Cancel</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67>\n\n                <ion-buttons end>\n\n                    <button ion-button block type="submit">Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\apiary-create\apiary-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], ApiaryCreatePage);

//# sourceMappingURL=apiary-create.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiaryInnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hive_inner_hive_inner__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiaryInnerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ApiaryInnerPage = (function () {
    function ApiaryInnerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiary = "info";
    }
    ApiaryInnerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApiaryInnerPage');
    };
    ApiaryInnerPage.prototype.openHiveInnerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hive_inner_hive_inner__["a" /* HiveInner */]);
    };
    return ApiaryInnerPage;
}());
ApiaryInnerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-apiary-inner',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\apiary-inner\apiary-inner.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n        <ion-title>Apiary inner</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar>\n\n        <ion-segment [(ngModel)]="apiary">\n\n            <ion-segment-button value="info">\n\n                Apiary Info\n\n            </ion-segment-button>\n\n            <ion-segment-button value="hives">\n\n                Hives in Apiary\n\n            </ion-segment-button>\n\n            <ion-segment-button value="stats">\n\n                Statistics\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n\n\n<ion-content>\n\n\n\n    <div [ngSwitch]="apiary">\n\n        <ion-list *ngSwitchCase="\'info\'">\n\n\n\n            <ion-row style="height: 1rem"></ion-row>\n\n\n\n            <ion-item no-lines>\n\n                <h1>Apiary</h1>\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/img/apiary.jpg">\n\n                </ion-avatar>\n\n                <h2>#1 Apiary</h2>                                      <!--Apiary_name-->\n\n                <p>Vilnius, Lietuva</p>                                 <!--Apiary_place-->\n\n            </ion-item>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="ios-pulse"></ion-icon>\n\n                        <div>80% strengt</div>                          <!--Vidutinis stiprumas bityne pagal atribut� Bee_strength-->\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="ios-thermometer"></ion-icon>\n\n                        <div>32&deg;C TEMP</div>                        <!--Vidutin� temperat�ra bityne pagal atribut� Monitoring_temperature-->\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="ios-water"></ion-icon>\n\n                        <div>25%</div>                                  <!--Vidutin� dr�gm� bityne pagal atribut� Monitoring_humidity-->\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-item>\n\n                <p>Active hives</p>\n\n                <h2>45 active hives</h2>                                <!--Atvaizduoja kiek bityne i� viso aktyvi� avili� pagal Hive_status atribut�-->\n\n            </ion-item>\n\n            <ion-item>\n\n                <p>Inactive hives</p>\n\n                <h2>5 inactive hives</h2>                               <!--Atvaizduoja kiek bityne neaktyvi� avili� pagal Hive_status atribut�-->\n\n            </ion-item>\n\n            <ion-item>\n\n                <p>Location</p>\n\n                <h2>53.9752321, 24.6988943</h2>                         <!--Atvaizduoja bityno ilgum� ir platum�. Apiary_longtitude ir Apiary_latitude-->\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <h1>Bee families in apiary</h1>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <p>Carnica</p>\n\n                <h2>40 bee families</h2>                              \n\n            </ion-item>\n\n            <ion-item>\n\n                <p>Buckfast</p>\n\n                <h2>5 bee families</h2>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'hives\'">\n\n\n\n            <ion-card (click)="openHiveInnerPage()">\n\n                <ion-item>\n\n                    <ion-avatar item-left>\n\n                        <img src="./assets/img/hive-img.jpg">\n\n                    </ion-avatar>\n\n                    <h2>#1 Avilys</h2>\n\n                    <p>Active hive</p>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <p>Too high temperature.</p>\n\n                </ion-card-content>\n\n                <ion-row>\n\n                    <ion-col>\n\n                        <button ion-button icon-left clear small>\n\n                            <ion-icon name="ios-pulse"></ion-icon>\n\n                            <div>90% strength</div>\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <button ion-button icon-left clear small>\n\n                            <ion-icon name="ios-thermometer"></ion-icon>\n\n                            <div>40&deg;C</div>\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col center text-center>\n\n                        <ion-note>\n\n                            2018-04-20\n\n                        </ion-note>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card>\n\n\n\n            <ion-card (click)="openHiveInnerPage()">\n\n                <ion-item>\n\n                    <ion-avatar item-left>\n\n                        <img src="./assets/img/hive-img.jpg">\n\n                    </ion-avatar>\n\n                    <h2>#2 Avilys</h2>\n\n                    <p>Active hive</p>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <p>Everything is fine!</p>\n\n                </ion-card-content>\n\n                <ion-row>\n\n                    <ion-col>\n\n                        <button ion-button icon-left clear small>\n\n                            <ion-icon name="ios-pulse"></ion-icon>\n\n                            <div>100% strength</div>\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <button ion-button icon-left clear small>\n\n                            <ion-icon name="ios-thermometer"></ion-icon>\n\n                            <div>32&deg;C</div>\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col center text-center>\n\n                        <ion-note>\n\n                            2018-04-20\n\n                        </ion-note>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card>\n\n\n\n            <ion-card (click)="openHiveInnerPage()">\n\n                <ion-item>\n\n                    <ion-avatar item-left>\n\n                        <img src="./assets/img/hive-img.jpg">\n\n                    </ion-avatar>\n\n                    <h2>#3 Avilys</h2>\n\n                    <p>Active hive</p>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <p>Everything is fine!</p>\n\n                </ion-card-content>\n\n                <ion-row>\n\n                    <ion-col>\n\n                        <button ion-button icon-left clear small>\n\n                            <ion-icon name="ios-pulse"></ion-icon>\n\n                            <div>90% strength</div>\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <button ion-button icon-left clear small>\n\n                            <ion-icon name="ios-thermometer"></ion-icon>\n\n                            <div>33&deg;C</div>\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col center text-center>\n\n                        <ion-note>\n\n                            2018-04-20\n\n                        </ion-note>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card>\n\n\n\n            <ion-card (click)="openHiveInnerPage()">\n\n                <ion-item>\n\n                    <ion-avatar item-left>\n\n                        <img src="./assets/img/hive-img.jpg">\n\n                    </ion-avatar>\n\n                    <h2>#4 Avilys</h2>\n\n                    <p>Active hive</p>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <p>Excessive humidity.</p>\n\n                </ion-card-content>\n\n                <ion-row>\n\n                    <ion-col>\n\n                        <button ion-button icon-left clear small>\n\n                            <ion-icon name="ios-pulse"></ion-icon>\n\n                            <div>80% strength</div>\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <button ion-button icon-left clear small>\n\n                            <ion-icon name="ios-thermometer"></ion-icon>\n\n                            <div>32&deg;C</div>\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col center text-center>\n\n                        <ion-note>\n\n                            2018-04-20\n\n                        </ion-note>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card>\n\n\n\n\n\n\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'stats\'">\n\n\n\n            <ion-item no-lines>\n\n                <h1>Temperature</h1>\n\n            </ion-item>\n\n            <img src="./assets/img/Chart-JS.png">\n\n\n\n            <ion-item no-lines>\n\n                <h1>Humidity</h1>\n\n            </ion-item>\n\n            <img src="./assets/img/Chart-JS.png">\n\n\n\n            <ion-item no-lines>\n\n                <h1>Strength</h1>\n\n            </ion-item>\n\n            <img src="./assets/img/Chart-JS.png">\n\n\n\n        </ion-list>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\apiary-inner\apiary-inner.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], ApiaryInnerPage);

//# sourceMappingURL=apiary-inner.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectInnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the InspectInnerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var InspectInnerPage = (function () {
    function InspectInnerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InspectInnerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InspectInnerPage');
    };
    return InspectInnerPage;
}());
InspectInnerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-inspect-inner',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\inspect-inner\inspect-inner.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n        <ion-title>Inspection inner</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n    <ion-list>\n\n        <ion-row style="height: 1rem"></ion-row>\n\n\n\n        <ion-item no-lines>\n\n            <h1>Inspection</h1>                     \n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/glass.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Inspection</h2>                  <!--Inspection_name-->\n\n            <p>Calm temper</p>                      <!--Bee_temper-->\n\n        </ion-item>\n\n\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>80% strength</div>         <!--Bee_strength-->\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Inspection date: 2018-04-20     <!--Inspection_date-->\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-item no-lines>\n\n            <h1>Diseases</h1>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <p>Disease</p>\n\n            <h2>No disease</h2>                     <!--Disease-->\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n            <h1>Frames</h1>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <p>Frames with bees</p>\n\n            <h2>12 frames</h2>                      <!--Frames_bees-->\n\n        </ion-item>\n\n        <ion-item>\n\n            <p>Honey frames in body</p>\n\n            <h2>4 frames</h2>                       <!--Frames_honey-->\n\n        </ion-item>\n\n        <ion-item>\n\n            <p>Honey frames in supers</p>\n\n            <h2>30 frames</h2>                      <!--Frames_honey_supers-->\n\n        </ion-item>\n\n        <ion-item>\n\n            <p>Bee bread</p>                        <!--neaisku ar deti-->\n\n            <h2>2 frames</h2>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n            <h1>Drones</h1>         \n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <p>Drone cells</p>\n\n            <h2>Yes</h2>                            <!--Drones-->\n\n        </ion-item>\n\n        <ion-item>\n\n            <p>Drones</p>\n\n            <h2>No</h2>                             <!--Drone_cells-->\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\inspect-inner\inspect-inner.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], InspectInnerPage);

//# sourceMappingURL=inspect-inner.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InspectCreatePage = (function () {
    function InspectCreatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InspectCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InspectCreatePage');
    };
    return InspectCreatePage;
}());
InspectCreatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-inspect-create',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\inspect-create\inspect-create.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Inspection \n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n        <h1>Add New Inspection</h1>\n\n        <h2>Please, enter the following information:</h2>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Inspection name</ion-label>              <!--Inspection_name-->\n\n            <ion-input placeholder="Enter inspection name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Date</ion-label>\n\n            <ion-input placeholder="Enter date"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Bee temper</ion-label>                   <!--Bee_temper-->\n\n            <ion-select [(ngModel)]="bee-temper" interface="action-sheet" placeholder="Select bee temper">\n\n                <ion-option value="a">Aggressive</ion-option>\n\n                <ion-option value="c">Calm</ion-option>\n\n                <ion-option value="n">Nervous</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Bee strength</ion-label>                 <!--Bee_strength-->\n\n            <ion-select [(ngModel)]="bee-strength" interface="action-sheet" placeholder="Select bee strength">\n\n                <ion-option value="ten">10%</ion-option>\n\n                <ion-option value="thirty">30%</ion-option>\n\n                <ion-option value="fifty">50%</ion-option>\n\n                <ion-option value="seventy">70%</ion-option>\n\n                <ion-option value="ninety">90%</ion-option>\n\n                <ion-option value="hundread">100%</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <h1>Frames:</h1>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Frames with bees</ion-label>             <!--Frames_bees-->\n\n            <ion-input type="number" min="0" max="16" placeholder="Enter number"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Frames with honey in body</ion-label>    <!--Frames_honey-->\n\n            <ion-input type="number" min="0" max="16" placeholder="Enter number"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Frames with honey in supers</ion-label>  <!--Frames_honey_supers-->\n\n            <ion-input type="number" min="0" max="16" placeholder="Enter number"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <h1>Drones:</h1>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Drones</ion-label>                       <!--Drones-->\n\n            <ion-select [(ngModel)]="drones" interface="action-sheet" placeholder="Drones">\n\n                <ion-option value="no">No</ion-option>\n\n                <ion-option value="yes">Yes</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Drone cells</ion-label>                  <!--Drone_cells-->\n\n            <ion-select [(ngModel)]="drones" interface="action-sheet" placeholder="Drone cells">\n\n                <ion-option value="no-cells">No</ion-option>\n\n                <ion-option value="yes-cells">Yes</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <h1>Diseases:</h1>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Disease</ion-label>\n\n            <ion-select [(ngModel)]="inspection-disease" interface="action-sheet" placeholder="Select disease type">\n\n                <ion-option value="none">No disease</ion-option>\n\n                <ion-option value="acarine">Acarine</ion-option>\n\n                <ion-option value="foul-brood">Foul brood</ion-option>\n\n                <ion-option value="nosema">Nosema</ion-option>\n\n                <ion-option value="varoosis">Varoosis</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-row padding>\n\n            <ion-col width-33>\n\n                <ion-buttons start>\n\n                    <button ion-button outline>Cancel</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67>\n\n                <ion-buttons end>\n\n                    <button ion-button block>Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\inspect-create\inspect-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], InspectCreatePage);

//# sourceMappingURL=inspect-create.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedingCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FeedingCreatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var FeedingCreatePage = (function () {
    function FeedingCreatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeedingCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedingCreatePage');
    };
    return FeedingCreatePage;
}());
FeedingCreatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-feeding-create',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\feeding-create\feeding-create.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Feeding\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n        <h1>Add New Feeding</h1>\n\n        <h2>Please, enter the following information:</h2>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Feeding name</ion-label>     <!--Feeding_name-->\n\n            <ion-input placeholder="Enter feeding name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Date</ion-label>             <!--Feeding_date-->\n\n            <ion-input placeholder="Enter date"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Feeding product</ion-label>  <!--Feeding_product-->\n\n            <ion-select [(ngModel)]="feeding-product" interface="action-sheet" placeholder="Select feeding product">\n\n                <ion-option value="pollen">Pollen</ion-option>\n\n                <ion-option value="sugar">Sugar</ion-option>\n\n                <ion-option value="syrup">Syrup</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Quantity</ion-label>         <!--Feeding_quantity-->\n\n            <ion-input placeholder="Enter quantity"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Unit</ion-label>             <!--Feeding_unit-->\n\n            <ion-select [(ngModel)]="feeding-unit" interface="action-sheet" placeholder="Select unit">\n\n                <ion-option value="g">Grams</ion-option>\n\n                <ion-option value="g">Kilograms</ion-option>\n\n                <ion-option value="ml">Milliliters</ion-option>\n\n                <ion-option value="l">Liters</ion-option>\n\n                <ion-option value="f">Frames</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Notes</ion-label>            <!--Feeding_notes-->\n\n            <ion-input placeholder="Add notes"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-row padding>\n\n            <ion-col width-33>\n\n                <ion-buttons start>\n\n                    <button ion-button outline>Cancel</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67>\n\n                <ion-buttons end>\n\n                    <button ion-button block>Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\feeding-create\feeding-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], FeedingCreatePage);

//# sourceMappingURL=feeding-create.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedingInnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FeedingInnerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var FeedingInnerPage = (function () {
    function FeedingInnerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeedingInnerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedingInnerPage');
    };
    return FeedingInnerPage;
}());
FeedingInnerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-feeding-inner',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\feeding-inner\feeding-inner.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n        <ion-title>Feeding Inner</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-list>\n\n        <ion-row style="height: 1rem"></ion-row>\n\n\n\n        <ion-item no-lines>\n\n            <h1>Feeding</h1>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/sugar.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Feeding</h2>                                 <!--Feeding_name-->\n\n            <p>Syrup</p>                                        <!--Feeding_product-->\n\n        </ion-item>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="md-restaurant"></ion-icon>\n\n                    <div>10kg per hive</div>                    <!--Feeding quantity, Feeding_unit-->\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Feeding date: 2018-04-20                    <!--Feeding_date-->\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-item>\n\n            <p>Feeding notes</p>\n\n            <h2>Some notes about feeding.</h2>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\feeding-inner\feeding-inner.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], FeedingInnerPage);

//# sourceMappingURL=feeding-inner.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HivesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hive_create_hive_create__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hive_inner_hive_inner__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HivesPage = (function () {
    function HivesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HivesPage.prototype.openHivePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hive_create_hive_create__["a" /* HiveCreate */]);
    };
    HivesPage.prototype.openHiveInner = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hive_inner_hive_inner__["a" /* HiveInner */]);
    };
    return HivesPage;
}());
HivesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-hives',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\hives\hives.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Hives</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-search-outline"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card (click)="openHiveInner()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/hive-img.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Avilys</h2>                                  <!--Avilio pavadinimas Hive_name-->\n\n            <p>Hive active</p>\n\n            <!--Avilio statusas Hive_status\n\n                1 => "Hive active"\n\n                0 => "Hive inactive"\n\n            -->\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Too high temperature.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>90% strength</div>                     <!--Naujausias �ra�as Bee_strength-->\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>40&deg;C</div>                         <!--Naujausias �ra�as Monitoring_temperature-->\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    2018-04-20                                  <!--Paskutin�s (naujausios) darytos ap�i�ros data Inspection_date-->\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openHiveInner()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/hive-img.jpg">\n\n            </ion-avatar>\n\n            <h2>#2 Avilys</h2>\n\n            <p>Hive inactive</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Everything is fine!</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>80% strength</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>32&deg;C</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openHiveInner()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/hive-img.jpg">\n\n            </ion-avatar>\n\n            <h2>#2 Avilys</h2>\n\n            <p>Hive inactive</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Everything is fine!</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>80% strength</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>32&deg;C</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openHiveInner()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/hive-img.jpg">\n\n            </ion-avatar>\n\n            <h2>#2 Avilys</h2>\n\n            <p>Hive inactive</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Everything is fine!</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>80% strength</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>32&deg;C</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openHiveInner()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/hive-img.jpg">\n\n            </ion-avatar>\n\n            <h2>#2 Avilys</h2>\n\n            <p>Hive inactive</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Everything is fine!</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>80% strength</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>32&deg;C</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openHiveInner()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/hive-img.jpg">\n\n            </ion-avatar>\n\n            <h2>#2 Avilys</h2>\n\n            <p>Hive inactive</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Everything is fine!</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>80% strength</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>32&deg;C</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openHiveInner()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/hive-img.jpg">\n\n            </ion-avatar>\n\n            <h2>#2 Avilys</h2>\n\n            <p>Hive inactive</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Everything is fine!</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>80% strength</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>32&deg;C</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openHiveInner()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/hive-img.jpg">\n\n            </ion-avatar>\n\n            <h2>#2 Avilys</h2>\n\n            <p>Hive inactive</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Everything is fine!</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>80% strength</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>32&deg;C</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="primary" (click)="openHivePage()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\hives\hives.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HivesPage);

//# sourceMappingURL=hives.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiveCreate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HiveCreate = (function () {
    function HiveCreate(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HiveCreate.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return HiveCreate;
}());
HiveCreate = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'hive-create',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\hive-create\hive-create.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Hives\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n        <h1>Add New Hive</h1>\n\n        <h2>Please, enter the following information:</h2>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Hive Number</ion-label>      <!--Hive_name-->\n\n            <ion-input placeholder="Enter hive number"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Hive type</ion-label>             <!--Hive_type-->\n\n            <ion-select [(ngModel)]="hive-type" interface="action-sheet" placeholder="Select hive type">\n\n                <ion-option value="vertical">Vertical</ion-option>\n\n                <ion-option value="horizontal">Horizontal</ion-option>\n\n                <ion-option value="nucleus">Nucleus</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Hive status</ion-label>             <!--Hive_status-->\n\n            <ion-select [(ngModel)]="hive-status" interface="action-sheet" placeholder="Select hive status">\n\n                <ion-option value="active">Active</ion-option>\n\n                <ion-option value="inactive">Inactive</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <h1>Bee family info:</h1>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Bee family</ion-label>             <!--Hive_family-->\n\n            <ion-select [(ngModel)]="bee-family" interface="action-sheet" placeholder="Select bee family">\n\n                <ion-option value="buckfast">Buckfast</ion-option>\n\n                <ion-option value="carnica">Carnica</ion-option>\n\n                <ion-option value="other">Other</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Bee family origin</ion-label>             <!--Hive_family_origin-->\n\n            <ion-select [(ngModel)]="bee-family-origin" interface="action-sheet" placeholder="Select bee family origin">\n\n                <ion-option value="purchase">Purchase</ion-option>\n\n                <ion-option value="swarming">Natural swarming</ion-option>\n\n                <ion-option value="loss">Loss</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-row>\n\n            <ion-col padding width-33>\n\n                <ion-buttons start>\n\n                    <button ion-button outline click="goBack()">Cancel</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col padding width-67>\n\n                <ion-buttons end>\n\n                    <button ion-button block>Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\hive-create\hive-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HiveCreate);

//# sourceMappingURL=hive-create.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HarvestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__harvest_create_harvest_create__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__harvest_inner_harvest_inner__ = __webpack_require__(487);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HarvestPage = (function () {
    function HarvestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HarvestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HarvestPage');
    };
    HarvestPage.prototype.openHarvestCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__harvest_create_harvest_create__["a" /* HarvestCreatePage */]);
    };
    HarvestPage.prototype.openHarvestInnerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__harvest_inner_harvest_inner__["a" /* HarvestInnerPage */]);
    };
    return HarvestPage;
}());
HarvestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-harvest',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\harvest\harvest.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Harvest</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-search-outline"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n    <ion-card (click)="openHarvestInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/honey3.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Honey spring</h2>                            <!--Harvest_name-->\n\n            <p>Honey</p>                                        <!--Harvest_product-->\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Some notes about harvest.</p>                    <!--Harvest_notes-->\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-color-fill"></ion-icon>\n\n                    <div>120 kg</div>                           <!--Harvest_quantity, Havest_unit-->\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Harvest date: 2018-04-20                    <!--Harvest_date-->\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openHarvestInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/honey3.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Honey summer</h2>\n\n            <p>Honey</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Some notes about harvest.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-color-fill"></ion-icon>\n\n                    <div>120 kg</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Harvest date: 2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="primary" (click)="openHarvestCreatePage()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\harvest\harvest.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], HarvestPage);

//# sourceMappingURL=harvest.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HarvestCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HarvestCreatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HarvestCreatePage = (function () {
    function HarvestCreatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HarvestCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HarvestCreatePage');
    };
    return HarvestCreatePage;
}());
HarvestCreatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-harvest-create',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\harvest-create\harvest-create.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Harvest\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n        <h1>Add New Harvest</h1>\n\n        <h2>Please, enter the following information:</h2>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Harvest name</ion-label>     <!--Harvest_name-->\n\n            <ion-input placeholder="Enter harvest name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Date</ion-label>             <!--Harvest_date-->\n\n            <ion-input placeholder="Enter date"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Harvest product</ion-label>  <!--Harvest_product-->\n\n            <ion-select [(ngModel)]="harvest-product" interface="action-sheet" placeholder="Select harvest product">\n\n                <ion-option value="bee-bread">Bee bread</ion-option>\n\n                <ion-option value="bee-brood">Bee brood</ion-option>\n\n                <ion-option value="beewax">Beewax</ion-option>\n\n                <ion-option value="honey">Honey</ion-option>\n\n                <ion-option value="pollen">Pollen</ion-option>\n\n                <ion-option value="bee-bread">Propolis</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Quantity</ion-label>         <!--Harvest_quantity-->\n\n            <ion-input placeholder="Enter quantity"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Unit</ion-label>             <!--Harvest_unit-->\n\n            <ion-select [(ngModel)]="harvest-unit" interface="action-sheet" placeholder="Select unit">\n\n                <ion-option value="g">Grams</ion-option>\n\n                <ion-option value="g">Kilograms</ion-option>\n\n                <ion-option value="ml">Milliliters</ion-option>\n\n                <ion-option value="l">Liters</ion-option>\n\n                <ion-option value="f">Frames</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Notes</ion-label>            <!--Harvest_notes-->\n\n            <ion-input placeholder="Add notes"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-row padding>\n\n            <ion-col width-33>\n\n                <ion-buttons start>\n\n                    <button ion-button outline>Cancel</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67>\n\n                <ion-buttons end>\n\n                    <button ion-button block>Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\harvest-create\harvest-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], HarvestCreatePage);

//# sourceMappingURL=harvest-create.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HarvestInnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HarvestInnerPage = (function () {
    function HarvestInnerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HarvestInnerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HarvestInnerPage');
    };
    return HarvestInnerPage;
}());
HarvestInnerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-harvest-inner',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\harvest-inner\harvest-inner.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n        <ion-title>Harvest Inner</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-list>\n\n        <ion-row style="height: 1rem"></ion-row>\n\n\n\n        <ion-item no-lines>\n\n            <h1>Harvest</h1>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/honey3.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Honey spring</h2>                            <!--Harvest_name-->\n\n            <p>Honey</p>                                        <!--Harvest_product-->\n\n        </ion-item>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-color-fill"></ion-icon>\n\n                    <div>120 kg</div>                           <!--Harvest_quantity, Harvest_unit-->\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Harvest date: 2018-04-20                    <!--Harvest_date-->\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-item>\n\n            <p>Notes</p>\n\n            <h2>Some text about something.</h2>                 <!--Harvest_notes-->\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\harvest-inner\harvest-inner.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], HarvestInnerPage);

//# sourceMappingURL=harvest-inner.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treatment_create_treatment_create__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__treatment_inner_treatment_inner__ = __webpack_require__(490);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreatmentPage = (function () {
    function TreatmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TreatmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TreatmentPage');
    };
    TreatmentPage.prototype.openTreatmentInnerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__treatment_inner_treatment_inner__["a" /* TreatmentInnerPage */]);
    };
    TreatmentPage.prototype.openTreatmentCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__treatment_create_treatment_create__["a" /* TreatmentCreatePage */]);
    };
    return TreatmentPage;
}());
TreatmentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-treatment',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\treatment\treatment.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Treatments</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-search-outline"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n    <ion-card (click)="openTreatmentInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/medicine.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Treatment</h2>                       <!--Treatment_name-->\n\n            <p>Product name used for treatment.</p>     <!--Treatment_product-->\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Some notes.</p>                          <!--Treatment_disease-->\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="md-medkit"></ion-icon>\n\n                    <div>10 stripes per hive</div>      <!--Treatement_quantity, Treatment_unit-->\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Treatment date: 2018-04-20          <!--Treatment_date-->\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openTreatmentInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/medicine.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Treatment</h2>\n\n            <p>Product name used for treatment.</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Some notes.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="md-medkit"></ion-icon>\n\n                    <div>10 stripes per hive</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Treatment date: 2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openTreatmentInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/medicine.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Treatment</h2>\n\n            <p>Product name used for treatment.</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Some notes.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="md-medkit"></ion-icon>\n\n                    <div>10 stripes per hive</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Treatment date: 2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openTreatmentInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/medicine.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Treatment</h2>\n\n            <p>Product name used for treatment.</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Some notes.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="md-medkit"></ion-icon>\n\n                    <div>10 stripes per hive</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Treatment date: 2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openTreatmentInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/medicine.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Treatment</h2>\n\n            <p>Product name used for treatment.</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Some notes.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="md-medkit"></ion-icon>\n\n                    <div>10 stripes per hive</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Treatment date: 2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openTreatmentInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/medicine.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Treatment</h2>\n\n            <p>Product name used for treatment.</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n                <p>Some notes.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="md-medkit"></ion-icon>\n\n                    <div>10 stripes per hive</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Treatment date: 2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="primary" (click)="openTreatmentCreatePage()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\treatment\treatment.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], TreatmentPage);

//# sourceMappingURL=treatment.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TreatmentCreatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var TreatmentCreatePage = (function () {
    function TreatmentCreatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TreatmentCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TreatmentCreatePage');
    };
    return TreatmentCreatePage;
}());
TreatmentCreatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-treatment-create',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\treatment-create\treatment-create.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Treatments\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n        <h1>Add New Treatment</h1>\n\n        <h2>Please, enter the following information:</h2>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Date</ion-label>         <!--Treatment_date-->\n\n            <ion-input placeholder="Enter date"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Disease</ion-label>      <!--Treatment_disease-->\n\n            <ion-input placeholder="Select disease type"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Product</ion-label>      <!--Treatment_product-->\n\n            <ion-input placeholder="Enter product name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Quantity</ion-label>     <!--Treatment_quantity-->\n\n            <ion-input placeholder="Enter quantity"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Unit</ion-label>         <!--Treatment_unit-->\n\n            <ion-select [(ngModel)]="treatment-unit" interface="action-sheet" placeholder="Select unit">\n\n                <ion-option value="g">Grams</ion-option>\n\n                <ion-option value="ml">Milliliters</ion-option>\n\n                <ion-option value="s">Stripes</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-row padding>\n\n            <ion-col width-33>\n\n                <ion-buttons start>\n\n                    <button ion-button outline>Cancel</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67>\n\n                <ion-buttons end>\n\n                    <button ion-button block>Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\treatment-create\treatment-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], TreatmentCreatePage);

//# sourceMappingURL=treatment-create.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentInnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TreatmentInnerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var TreatmentInnerPage = (function () {
    function TreatmentInnerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TreatmentInnerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TreatmentInnerPage');
    };
    return TreatmentInnerPage;
}());
TreatmentInnerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-treatment-inner',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\treatment-inner\treatment-inner.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n        <ion-title>Treatment Inner</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-list>\n\n        <ion-row style="height: 1rem"></ion-row>\n\n\n\n        <ion-item no-lines>\n\n            <h1>Treatment</h1>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/medicine.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Treatment</h2>                       <!--Treatment_name-->\n\n            <p>Product name used for treatment.</p>     <!--Treatment_product-->\n\n        </ion-item>\n\n\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="md-color-filter"></ion-icon>\n\n                    <div>10 stripes</div>               <!--Treatement_quantity, Treatment_unit-->\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    Treatment date: 2018-04-20          <!--Treatment_date-->\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-item>\n\n            <p>Notes</p>\n\n            <h2>Some text about something.</h2>         <!--Treatment_disease-->\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\treatment-inner\treatment-inner.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], TreatmentInnerPage);

//# sourceMappingURL=treatment-inner.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(590);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_apiaries_apiaries__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_apiary_create_apiary_create__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_apiary_inner_apiary_inner__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_feeding_feeding__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_feeding_create_feeding_create__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_feeding_inner_feeding_inner__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_harvest_harvest__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_harvest_create_harvest_create__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_harvest_inner_harvest_inner__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_hives_hives__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_hive_create_hive_create__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_hive_inner_hive_inner__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_inspect_inner_inspect_inner__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_inspect_create_inspect_create__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_stats_stats__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_treatment_treatment__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_treatment_inner_treatment_inner__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_treatment_create_treatment_create__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Pages import




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_feeding_feeding__["a" /* FeedingPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_feeding_create_feeding_create__["a" /* FeedingCreatePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_feeding_inner_feeding_inner__["a" /* FeedingInnerPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_hives_hives__["a" /* HivesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_harvest_harvest__["a" /* HarvestPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_harvest_create_harvest_create__["a" /* HarvestCreatePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_harvest_inner_harvest_inner__["a" /* HarvestInnerPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_hive_create_hive_create__["a" /* HiveCreate */],
            __WEBPACK_IMPORTED_MODULE_14__pages_hive_inner_hive_inner__["a" /* HiveInner */],
            __WEBPACK_IMPORTED_MODULE_16__pages_inspect_inner_inspect_inner__["a" /* InspectInnerPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_inspect_create_inspect_create__["a" /* InspectCreatePage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_apiaries_apiaries__["a" /* ApiariesPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_apiary_create_apiary_create__["a" /* ApiaryCreatePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_apiary_inner_apiary_inner__["a" /* ApiaryInnerPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_stats_stats__["a" /* StatsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_treatment_treatment__["a" /* TreatmentPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_treatment_inner_treatment_inner__["a" /* TreatmentInnerPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_treatment_create_treatment_create__["a" /* TreatmentCreatePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_feeding_feeding__["a" /* FeedingPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_feeding_create_feeding_create__["a" /* FeedingCreatePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_feeding_inner_feeding_inner__["a" /* FeedingInnerPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_hives_hives__["a" /* HivesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_harvest_harvest__["a" /* HarvestPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_harvest_create_harvest_create__["a" /* HarvestCreatePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_harvest_inner_harvest_inner__["a" /* HarvestInnerPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_hive_create_hive_create__["a" /* HiveCreate */],
            __WEBPACK_IMPORTED_MODULE_14__pages_hive_inner_hive_inner__["a" /* HiveInner */],
            __WEBPACK_IMPORTED_MODULE_16__pages_inspect_inner_inspect_inner__["a" /* InspectInnerPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_inspect_create_inspect_create__["a" /* InspectCreatePage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_apiaries_apiaries__["a" /* ApiariesPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_apiary_inner_apiary_inner__["a" /* ApiaryInnerPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_apiary_create_apiary_create__["a" /* ApiaryCreatePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_stats_stats__["a" /* StatsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_treatment_treatment__["a" /* TreatmentPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_treatment_inner_treatment_inner__["a" /* TreatmentInnerPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_treatment_create_treatment_create__["a" /* TreatmentCreatePage */]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */] }]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Splashscreen */].hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n        <ion-toolbar color="primary">\n\n            <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n\n\n            <ion-item no-lines>\n\n                Your workplace:\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Choose apiary</ion-label>\n\n                <ion-select [(ngModel)]="apiaries" interface="action-sheet">\n\n                    <ion-option value="first">#1 Apiary</ion-option>\n\n                    <ion-option value="second">#2 Apiary</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                Profile\n\n            </ion-item>\n\n            <ion-item>\n\n                Info\n\n            </ion-item>\n\n            <ion-item>\n\n                Logout\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StatsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var StatsPage = (function () {
    function StatsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatsPage');
    };
    return StatsPage;
}());
StatsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
        selector: 'page-stats',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\stats\stats.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Stats</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-search-outline"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <p>Statis Page</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeApp_FRONT-END\BeeApp\BeeApp\src\pages\stats\stats.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], StatsPage);

//# sourceMappingURL=stats.js.map

/***/ })

},[491]);
//# sourceMappingURL=main.js.map