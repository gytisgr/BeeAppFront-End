import { Component } from '@angular/core';

import { NavController, NavParams, Tabs, MenuController, Events } from 'ionic-angular';
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

@Component({
    selector: 'page-hives',
    templateUrl: 'hives.html'
})
export class HivesPage {

    private tabsPage: any;
    token: string;
    hives = [];


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public http: Http,
        public menuCtrl: MenuController,
        public apiaryService: ApiaryService,
        public authService: AuthenticationService,
        public hiveService: HiveService) {


        this.getToken();
    }

    ionViewDidEnter() {

        let apiaryId = this.apiaryService.getId();

        this.http.get('http://beeapi.azurewebsites.net/api/hive/' + apiaryId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    this.hives = [];
                    for (let hive of data) {
                        hive.monitoring = {
                            temperature: null
                        };
                        hive.inspections = [];

                        Observable.forkJoin(
                            this.http.get('http://beeapi.azurewebsites.net/api/monitoring/' + hive.id, { headers: this.authService.getHeader() }).map(res => res.json()),
                            this.http.get('http://beeapi.azurewebsites.net/api/inspection/' + apiaryId + '/' + hive.id, { headers: this.authService.getHeader() }).map(res => res.json())
                        ).subscribe(
                            data => {
                                console.log(data);
                                hive.monitoring = data[0][0];
                                hive.inspections = data[1];

                                this.hives.push(hive);
                            },
                            err => {
                                console.error(err);
                            },
                            () => {
                                // done
                            })
                    }

                }
            },
            error => {
                if (error.status == 400) {

                }
            });
    }


    getToken() {
        if (this.authService.getToken()) {
            this.token = this.authService.getToken();
        } else {
            this.navCtrl.setRoot(LoginPage);
        }
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
