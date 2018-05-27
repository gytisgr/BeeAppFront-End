import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, ToastController, Select, AlertController } from 'ionic-angular';
import { AuthenticationService } from "../../app/service/authenticationService";
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { HiveService } from "../../app/service/hiveService";
import { TreatmentService } from "../../app/service/treatmentService";
import { TreatmentCreatePage } from "../treatment-create/treatment-create";

/*
  Generated class for the TreatmentInnerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-treatment-inner',
    templateUrl: 'treatment-inner.html'
})
export class TreatmentInnerPage {

    treatment: any;

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public http: Http,
        public authService: AuthenticationService,
        public apiaryService: ApiaryService,
        public hiveService: HiveService,
        public treatmentService: TreatmentService,
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController) { }

    ionViewDidLoad() {
        let apiaryId = this.apiaryService.getId();
        let treatmentId = this.treatmentService.getId();

        this.http.get('https://beeapi.azurewebsites.net/api/treatment/get-all/' + apiaryId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    console.log(data);
                    this.treatment = data.filter(x => x.id == treatmentId)[0];
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

    editTreatmentPage() {
        this.treatmentService.setEditTreatmentObject(this.treatment);
        this.navCtrl.push(TreatmentCreatePage);
    }

    deleteTreatment() {
        let alert = this.alertCtrl.create({
            title: 'Delete Confirmation',
            subTitle: 'Would you like to delete' + this.treatment.name + '?',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'confirm',
                    handler: () => {
                        let treatmentId = this.treatmentService.getId();

                        this.http.delete('https://beeapi.azurewebsites.net/api/treatment/' + treatmentId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
                            data => {
                                if (data) {
                                    this.popAlert('You have successfully deleted treatment named: ' + this.treatment.name, 'success', 7000, 'top');
                                    this.treatmentService.setId(0);
                                    this.treatmentService.setTreatmentObject(null);
                                    this.navCtrl.pop();
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
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        alert.dismiss();
                    }
                }
            ]
        });
        alert.present();
    }

    popAlert(message: string, type: string, duration: number, position: string) {
        let toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,

        });
        toast.present();
    }

    goBack() {
        this.navCtrl.pop();
    }

}
