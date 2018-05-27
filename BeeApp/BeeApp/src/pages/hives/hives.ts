import { Component } from '@angular/core';

import { NavController, NavParams, Tabs, MenuController, Events, LoadingController } from 'ionic-angular';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HiveCreate } from '../hive-create/hive-create';
import { HiveInner } from '../hive-inner/hive-inner';
import { TabsPage } from "../tabs/tabs";
import { ApiaryService } from "../../app/service/apiaryService";
import { LoginPage } from "../login/login";
import { AuthenticationService } from "../../app/service/authenticationService";
import { HiveService } from "../../app/service/hiveService";
import { Observable } from "ionic-native/node_modules/rxjs/Rx";
import { InspectionService } from "../../app/service/inspectionService";

@Component({
    selector: 'page-hives',
    templateUrl: 'hives.html'
})
export class HivesPage {

    private tabsPage: any;
    token: string;
    highlighSelection: boolean;
    hivesData:any = [];
    hives: any = [];


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public http: Http,
        public menuCtrl: MenuController,
        public apiaryService: ApiaryService,
        public authService: AuthenticationService,
        public hiveService: HiveService,
        public loadingCtrl: LoadingController,
        public tabs: Tabs) {

        this.getToken();
    }

    ionViewDidEnter() {


        this.hives = [];
        if (this.apiaryService.getId()) {
            this.loadHivesData();
        } else {
            this.menuCtrl.open();
        }
    }

    getToken() {
        if (this.authService.getToken()) {
            this.token = this.authService.getToken();
        } else {
            this.navCtrl.setRoot(LoginPage);
        }
    }

    loadHivesData() {
        let apiaryId = this.apiaryService.getId();

        this.http.get('https://beeapi.azurewebsites.net/api/hive/' + apiaryId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    this.hivesData = data;

                }
            },
            error => {
                if (error.status == 400) {

                }
            },
            () => {
                // done                
                for (let hive of this.hivesData) {
                    hive.monitoring = {
                        temperature: null
                    };
                    hive.inspections = [];
                    hive.monitoring = [];

                    Observable.forkJoin(
                        this.http.get('https://beeapi.azurewebsites.net/api/monitoring/' + hive.id, { headers: this.authService.getHeader() }).map(res => res.json()),
                        this.http.get('https://beeapi.azurewebsites.net/api/inspection/' + apiaryId + '/' + hive.id, { headers: this.authService.getHeader() }).map(res => res.json())
                    ).subscribe(
                        data => {
                            hive.monitoring = data[0];
                            hive.inspections = data[1];

                            this.hives.push(hive);
                        },
                        error => {
                            console.error(error);
                        },
                        () => {
                            console.log(this.hives);
                            // done
                            this.hivesData = [];

                            this.hives.sort((left, right): number => {
                                if (left.id > right.id) return 1;
                                if (left.id < right.id) return -1;
                                return 0;
                            });
                        })
                }
            });
    }

    trackByFn(index, item) {
        return item.id; // or item.id
    }

    openHivePage() {
        this.navCtrl.push(HiveCreate);
    }

    openHiveInner(id) {
        this.hiveService.setHiveObject(this.hives.filter(x => x.id == id)[0]);
        this.hiveService.setId(id);
        this.navCtrl.push(HiveInner);
    }

}
