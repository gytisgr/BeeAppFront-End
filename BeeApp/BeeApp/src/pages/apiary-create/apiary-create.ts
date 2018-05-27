import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthenticationService } from "../../app/service/authenticationService";
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { HiveService } from "../../app/service/hiveService";
import { InspectionService } from "../../app/service/inspectionService";
import { ChangePasswordPage } from "../change-password/change-password";

/*
  Generated class for the ApiaryCreatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-apiary-create',
    templateUrl: 'apiary-create.html'
})
export class ApiaryCreatePage {

    edit: boolean = false;
    apiaryObject: any = {
        name: "",
        place: "",
        longtitude: "",
        latitude: ""
    }

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public http: Http,
        public authService: AuthenticationService,
        public apiaryService: ApiaryService,
        public hiveService: HiveService,
        public inspectionService: InspectionService,
        public loadingCtrl: LoadingController) { }

    ionViewDidEnter() {
        this.apiaryObject = {
            name: "",
            place: "",
            longtitude: "",
            latitude: ""
        }

        if (this.apiaryService.getEditApiaryObject()) {
            this.edit = true;
            this.apiaryObject = this.apiaryService.getEditApiaryObject();
        }
    }

    ionViewDidLeave() {
        this.apiaryService.setEditApiaryObject(null);
    }

    createApiary() {
        this.http.post('https://beeapi.azurewebsites.net/api/apiary', this.apiaryObject, { headers: this.authService.getHeader(true) }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    console.log(data);
                }
            },
            error => {
                if (error.status == 400) {
                    let errorMessage = JSON.parse(error._body);
                    this.popAlert(errorMessage.message, 'danger', 7000, 'top');
                }
            },
            () => {
                // done
                this.popAlert('You have successfully created a new apiary named: ' + this.apiaryObject.name, 'success', 7000, 'top');
                this.navCtrl.pop();
            });
    }

    editApiary() {
        let apiaryId = this.apiaryService.getId();

        delete this.apiaryObject.id;

        this.http.put('https://beeapi.azurewebsites.net/api/apiary/' + apiaryId, this.apiaryObject, { headers: this.authService.getHeader(true) }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    console.log(data);
                }
            },
            error => {
                if (error.status == 400) {
                    let errorMessage = JSON.parse(error._body);
                    this.popAlert(errorMessage.message, 'danger', 7000, 'top');
                }
            },
            () => {
                // done
                this.popAlert('You have successfully update apiary named: ' + this.apiaryObject.name, 'success', 7000, 'top');
                this.navCtrl.pop();
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

}
