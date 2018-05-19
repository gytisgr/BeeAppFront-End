import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HivesPage } from '../hives/hives';
import { HarvestPage } from '../harvest/harvest';
import { StatsPage } from '../stats/stats';
import { TreatmentPage } from '../treatment/treatment';
import { FeedingPage } from '../feeding/feeding';
import { LoginPage } from '../login/login';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = HomePage;
    tab2Root: any = HivesPage;
    tab3Root: any = TreatmentPage;
    tab4Root: any = HarvestPage;
    tab5Root: any = FeedingPage;

    token = {
        access_token: ''
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams) {

        if (navParams.get('access_token')) {
            this.token.access_token = navParams.get('access_token');
        } else {
            this.navCtrl.setRoot(LoginPage);
        }
    }


}