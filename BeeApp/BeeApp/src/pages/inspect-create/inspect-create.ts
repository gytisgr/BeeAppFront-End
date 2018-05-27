import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthenticationService } from "../../app/service/authenticationService";
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { HiveService } from "../../app/service/hiveService";
import { InspectionService } from "../../app/service/inspectionService";

@Component({
    selector: 'page-inspect-create',
    templateUrl: 'inspect-create.html'
})
export class InspectCreatePage {

    edit: boolean = false;
    inspectionObject: any = {
        name: "",
        date: new Date().toISOString(),
        strength: "",
        temper: "",
        disease: "",
        framesBees: null,
        framesHoney: null,
        framesHoneySupers: null,
        drones: null,
        droneCells: null
    };

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public http: Http,
        public authService: AuthenticationService,
        public apiaryService: ApiaryService,
        public hiveService: HiveService,
        public inspectionService: InspectionService,
        public loadingCtrl: LoadingController) {
    }

    ionViewDidEnter() {
        this.inspectionObject = {
            name: "",
            date: new Date().toISOString(),
            strength: "",
            temper: "",
            disease: "",
            framesBees: null,
            framesHoney: null,
            framesHoneySupers: null,
            drones: null,
            droneCells: null
        };

        if (this.inspectionService.getEditInspectionObject()) {
            this.edit = true;
            this.inspectionObject = this.inspectionService.getEditInspectionObject();
            this.inspectionObject.strength = this.inspectionObject.strength.replace('%', '');
        }
    }

    ionViewDidLeave() {
        this.inspectionService.setEditInspectionObject(null);
    }

    createInspection() {
        let apiaryId = this.apiaryService.getId();
        let hiveId = this.hiveService.getId();
        this.inspectionObject.date = new Date(this.inspectionObject.date).toISOString();
        this.inspectionObject.strength = this.inspectionObject.strength + "%";
        if (this.inspectionObject.disease == "Nodisease") {
            this.inspectionObject.disease = "No disease";
        } else if (this.inspectionObject.disease == "Foulbrood") {
            this.inspectionObject.disease = "Foul brood";
        }

        this.http.post('https://beeapi.azurewebsites.net/api/inspection/' + apiaryId + '/' + hiveId, this.inspectionObject, { headers: this.authService.getHeader(true) }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    console.log(data);
                }
            },
            error => {
                if (error.status == 400) {
                    let errorMessage = JSON.parse(error._body);
                    this.popAlert(errorMessage.message, 'danger', 7000, 'bottom');
                }
            },
            () => {
                // done
                this.popAlert('You have successfully created a new inspection named: ' + this.inspectionObject.name, 'success', 7000, 'bottom');
                this.navCtrl.pop();
            });
    }

    editInspection() {
        let inspectionId = this.inspectionService.getId();
        this.inspectionObject.date = new Date(this.inspectionObject.date).toISOString();
        this.inspectionObject.strength = this.inspectionObject.strength + "%";
        if (this.inspectionObject.disease == "Nodisease") {
            this.inspectionObject.disease = "No disease";
        } else if (this.inspectionObject.disease == "Foulbrood") {
            this.inspectionObject.disease = "Foul brood";
        }

        delete this.inspectionObject.id;

        this.http.put('https://beeapi.azurewebsites.net/api/inspection/' + inspectionId, this.inspectionObject, { headers: this.authService.getHeader(true) }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    console.log(data);
                }
            },
            error => {
                if (error.status == 400) {
                    let errorMessage = JSON.parse(error._body);
                    this.popAlert(errorMessage.message, 'danger', 7000, 'bottom');
                }
            },
            () => {
                // done
                this.popAlert('You have successfully update inspection named: ' + this.inspectionObject.name, 'success', 7000, 'bottom');
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
