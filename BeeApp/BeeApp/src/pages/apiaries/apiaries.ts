import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { ApiaryCreatePage } from '../apiary-create/apiary-create';
import { ApiaryInnerPage } from '../apiary-inner/apiary-inner';
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { AuthenticationService } from "../../app/service/authenticationService";

/*
  Generated class for the ApiariesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-apiaries',
    templateUrl: 'apiaries.html'
})
export class ApiariesPage {

    apiaries: any = [];

    constructor(
        public navCtrl: NavController,
        public http: Http,
        public apiaryService: ApiaryService,
        public authService: AuthenticationService,
        public tabs: Tabs) {
    }

    ionViewDidEnter() {

        

        this.apiaries = [];
        this.http.get('https://beeapi.azurewebsites.net/api/apiary', { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    this.apiaries = data;
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

    openApiaryCreatePage() {
        this.navCtrl.push(ApiaryCreatePage);
    }

    openApiaryInnerPage(id) {
        this.apiaryService.setId(id)
        this.navCtrl.push(ApiaryInnerPage);
    }
}
