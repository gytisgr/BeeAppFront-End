import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, ToastController, Select, AlertController } from 'ionic-angular';
import { AuthenticationService } from "../../app/service/authenticationService";
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { HiveService } from "../../app/service/hiveService";
import { HarvestService } from "../../app/service/harvestService";
import { HarvestCreatePage } from "../harvest-create/harvest-create";

@Component({
    selector: 'page-harvest-inner',
    templateUrl: 'harvest-inner.html'
})
export class HarvestInnerPage {

    harvest: any;

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public http: Http,
        public authService: AuthenticationService,
        public apiaryService: ApiaryService,
        public hiveService: HiveService,
        public harvestService: HarvestService,
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController) { }

    ionViewDidLoad() {
        let apiaryId = this.apiaryService.getId();
        let harvestId = this.harvestService.getId();
        console.log(harvestId);

        this.http.get('https://beeapi.azurewebsites.net/api/harvest/get-all/' + apiaryId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    this.harvest = data.filter(x => x.id == harvestId)[0];
                    console.log(this.harvest)
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

    editHarvestPage() {
        this.harvestService.setEditHarvestObject(this.harvest);
        this.navCtrl.push(HarvestCreatePage);
    }

    deleteHarvest() {
        let alert = this.alertCtrl.create({
            title: 'Delete Confirmation',
            subTitle: 'Would you like to delete' + this.harvest.name + '?',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'confirm',
                    handler: () => {
                        let harvestId = this.harvestService.getId();

                        this.http.delete('https://beeapi.azurewebsites.net/api/harvest/' + harvestId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
                            data => {
                                this.popAlert('You have successfully deleted harvest named: ' + this.harvest.name, 'success', 7000, 'bottom');
                                this.harvestService.setId(0);
                                this.harvestService.setHarvestObject(null);
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
