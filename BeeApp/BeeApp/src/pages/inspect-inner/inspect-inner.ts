import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { AuthenticationService } from "../../app/service/authenticationService";
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { HiveService } from "../../app/service/hiveService";
import { InspectionService } from "../../app/service/inspectionService";
import { InspectCreatePage } from "../inspect-create/inspect-create";

/*
  Generated class for the InspectInnerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-inspect-inner',
    templateUrl: 'inspect-inner.html'
})
export class InspectInnerPage {

    inspection: any;

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public http: Http,
        public authService: AuthenticationService,
        public apiaryService: ApiaryService,
        public hiveService: HiveService,
        public inspectionService: InspectionService,
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController) { }

    ionViewDidLoad() {
        let apiaryId = this.apiaryService.getId();
        let hiveId = this.hiveService.getId();
        let inspectionId = this.inspectionService.getId();

        this.http.get('https://beeapi.azurewebsites.net/api/inspection/' + apiaryId + '/' + hiveId + '/' + inspectionId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    console.log(data);
                    this.inspection = data;
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

    editInspectionPage() {
        this.inspectionService.setEditInspectionObject(this.inspection);
        this.navCtrl.push(InspectCreatePage);
    }

    deleteInspection() {
        let alert = this.alertCtrl.create({
            title: 'Delete Confirmation',
            subTitle: 'Would you like to delete' + this.inspection.name + '?',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'confirm',
                    handler: () => {
                        let inspectionId = this.inspectionService.getId();

                        this.http.delete('https://beeapi.azurewebsites.net/api/inspection/' + inspectionId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
                            data => {

                                this.popAlert('You have successfully deleted inspection named: ' + this.inspection.name, 'success', 7000, 'top');
                                this.inspectionService.setId(0);
                                this.inspectionService.setInspectionObject(null);
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
}
