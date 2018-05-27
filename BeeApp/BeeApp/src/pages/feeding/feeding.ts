import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { AuthenticationService } from "../../app/service/authenticationService";
import { FeedingCreatePage } from '../feeding-create/feeding-create';
import { FeedingInnerPage } from '../feeding-inner/feeding-inner';
import { FeedingsService } from "../../app/service/feedingsService";
import { TreatmentService } from "../../app/service/treatmentService";
import { ArraySortPipe } from "../../app/pipe/sortPipe";

@Component({
    selector: 'page-feeding',
    templateUrl: 'feeding.html'
})
export class FeedingPage {

    feedings: any = [];

    constructor(
        public navCtrl: NavController,
        public http: Http,
        public apiaryService: ApiaryService,
        public authService: AuthenticationService,
        public treatmentService: TreatmentService,
        public feedingsService: FeedingsService) {
    }

    ionViewDidEnter() {
        let apiaryId = this.apiaryService.getId();
        this.feedings = [];
        this.http.get('https://beeapi.azurewebsites.net/api/feeding/get-all/' + apiaryId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    this.feedings = data;
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

    ionViewDidLeave() {
        this.feedingsService.setEditFeedingsObject(null);
    }

    openFeedingCreatePage() {
        this.navCtrl.push(FeedingCreatePage);
    }

    openFeedingInnerPage(id) {
        this.feedingsService.setId(id);
        this.navCtrl.push(FeedingInnerPage);
    }

}
