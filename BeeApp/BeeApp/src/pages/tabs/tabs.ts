import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams, Tabs, MenuController, Events } from 'ionic-angular';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { HomePage } from '../home/home';
import { HivesPage } from '../hives/hives';
import { HarvestPage } from '../harvest/harvest';
import { StatsPage } from '../stats/stats';
import { TreatmentPage } from '../treatment/treatment';
import { FeedingPage } from '../feeding/feeding';
import { LoginPage } from '../login/login';
import { ApiaryService } from "../../app/service/apiaryService";
import { AuthenticationService } from "../../app/service/authenticationService";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    @ViewChild('tabs') tabRef: Tabs;

    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root = HomePage;
    tab2Root = HivesPage;
    tab3Root = TreatmentPage;
    tab4Root = HarvestPage;
    tab5Root = FeedingPage;

    token: string;
    apiaries = [];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public http: Http,
        public menuCtrl: MenuController,
        public events: Events,
        public apiaryService: ApiaryService,
        public authService: AuthenticationService) {

        this.getToken();
        this.getApiaries();
    }

    getToken() {
        if (this.authService.getToken()) {
            this.token = this.authService.getToken();
        } else {
            this.navCtrl.setRoot(LoginPage);
        }
    }

    getApiaries() {

        this.http.get('http://beeapi.azurewebsites.net/api/apiary', { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    this.apiaries = data;
                }
            },
            error => {
                if (error.status == 400) {
                    
                }
            });
    }

    selectedApiary(apiaryId: number) {
        this.menuCtrl.close();
        this.apiaryService.setId(apiaryId);
        this.tabRef.select(0);
        this.tabRef.select(1);
    }
}