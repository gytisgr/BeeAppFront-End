import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { InspectInnerPage } from '../inspect-inner/inspect-inner';
import { InspectCreatePage } from '../inspect-create/inspect-create';
import { HiveService } from "../../app/service/hiveService";
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { AuthenticationService } from "../../app/service/authenticationService";

@Component({
    selector: 'page-hive-inner',
    templateUrl: 'hive-inner.html'
})
export class HiveInner {
    hiveTabs: string;
    hive: any;

    constructor(
        public navCtrl: NavController,
        public http: Http,
        public apiaryService: ApiaryService,
        public authService: AuthenticationService,
        public hiveService: HiveService,) {
        this.hiveTabs = 'info';

        this.hive = this.hiveService.getHiveObject();
    }

    ionViewDidEnter() {
        let apiaryId = this.apiaryService.getId();
        let hiveId = this.hiveService.getId();

        this.http.get('http://beeapi.azurewebsites.net/api/queen/' + apiaryId + '/' + hiveId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    this.hive.queen = data[0];
                    console.log(this.hive);
                }
            },
            error => {
                if (error.status == 400) {

                }
            },
            () => {
                // done
            });
    }

    selectedTabChanged(hiveTabs): void {
        console.log(hiveTabs);
    }

    openInspectInnerPage() {
        this.navCtrl.push(InspectInnerPage);
    }

    openInspectCreatePage() {
        this.navCtrl.push(InspectCreatePage);
    }

}
