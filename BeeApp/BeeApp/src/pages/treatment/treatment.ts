import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TreatmentCreatePage } from '../treatment-create/treatment-create';
import { TreatmentInnerPage } from '../treatment-inner/treatment-inner';
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { AuthenticationService } from "../../app/service/authenticationService";
import { TreatmentService } from "../../app/service/treatmentService";
import { ArraySortPipe } from "../../app/pipe/sortPipe";

@Component({
    selector: 'page-treatment',
    templateUrl: 'treatment.html'
})
export class TreatmentPage {

    treatments: any = [];

    constructor(
        public navCtrl: NavController,
        public http: Http,
        public apiaryService: ApiaryService,
        public authService: AuthenticationService,
        public treatmentService: TreatmentService) {
    }

    ionViewDidEnter() {
        let apiaryId = this.apiaryService.getId();
        this.treatments = [];
        this.http.get('https://beeapi.azurewebsites.net/api/treatment/get-all/' + apiaryId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    this.treatments = data;
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
        this.treatmentService.setEditTreatmentObject(null);
    }

    openTreatmentInnerPage(id) {
        this.treatmentService.setId(id);
        this.navCtrl.push(TreatmentInnerPage);
    }

    openTreatmentCreatePage() {
        this.navCtrl.push(TreatmentCreatePage);
    }
}
