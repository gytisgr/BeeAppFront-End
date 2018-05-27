import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, ToastController, Select, AlertController } from 'ionic-angular';
import { AuthenticationService } from "../../app/service/authenticationService";
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { HiveService } from "../../app/service/hiveService";
import { FeedingsService } from "../../app/service/feedingsService";
import { FeedingCreatePage } from "../feeding-create/feeding-create";

/*
  Generated class for the FeedingInnerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-feeding-inner',
    templateUrl: 'feeding-inner.html'
})
export class FeedingInnerPage {

    feeding: any;

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public http: Http,
        public authService: AuthenticationService,
        public apiaryService: ApiaryService,
        public hiveService: HiveService,
        public feedingsService: FeedingsService,
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        let apiaryId = this.apiaryService.getId();
        let feedingId = this.feedingsService.getId();

        this.http.get('https://beeapi.azurewebsites.net/api/feeding/get-all/' + apiaryId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    console.log(data);
                    this.feeding = data.filter(x => x.id == feedingId)[0];
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

    editFeedingPage() {
        this.feedingsService.setEditFeedingsObject(this.feeding);
        this.navCtrl.push(FeedingCreatePage);
    }

    deleteFeeding() {
        let alert = this.alertCtrl.create({
            title: 'Delete Confirmation',
            subTitle: 'Would you like to delete' + this.feeding.name + '?',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'confirm',
                    handler: () => {
                        let feedingId = this.feedingsService.getId();

                        this.http.delete('https://beeapi.azurewebsites.net/api/feeding/' + feedingId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
                            data => {
                                this.popAlert('You have successfully deleted feeding named: ' + this.feeding.name, 'success', 7000, 'bottom');
                                this.feedingsService.setId(0);
                                this.feedingsService.setFeedingsObject(null);
                                this.navCtrl.pop();
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
