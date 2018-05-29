import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, ToastController, Select } from 'ionic-angular';
import { AuthenticationService } from "../../app/service/authenticationService";
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { HiveService } from "../../app/service/hiveService";
import { InspectionService } from "../../app/service/inspectionService";
import { TreatmentService } from "../../app/service/treatmentService";

/*
  Generated class for the TreatmentCreatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-treatment-create',
    templateUrl: 'treatment-create.html'
})
export class TreatmentCreatePage {

    edit: boolean = false;
    treatmentObject: any =
    {
        name: "",
        date: new Date().toISOString(),
        product: "",
        quantity: "",
        unit: "",
        note: ""
    }
    hivesList: any = [];
    hive: any = {
        id: 0
    }

    @ViewChild('noteData') noteData;

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public http: Http,
        public authService: AuthenticationService,
        public apiaryService: ApiaryService,
        public hiveService: HiveService,
        public inspectionService: InspectionService,
        public treatmentService: TreatmentService,
        public loadingCtrl: LoadingController) {
    }

    ionViewDidLoad() {
        this.treatmentObject =
            {
                name: "",
                date: new Date().toISOString(),
                product: "",
                quantity: "",
                unit: "",
                note: ""
            }

        this.getHivesList();

        if (this.treatmentService.getEditTreatmentObject()) {
            this.edit = true;
            this.treatmentObject = this.treatmentService.getEditTreatmentObject();

            if (this.treatmentObject.note != 'null') {
                this.noteData.value = this.treatmentObject.note;
            }
        }
    }

    getHivesList() {
        let apiaryId = this.apiaryService.getId();

        this.http.get('https://beeapi.azurewebsites.net/api/hive/' + apiaryId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    this.hivesList = data;
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

    createTreatment(noteData) {

        let apiaryId = this.apiaryService.getId();
        let hiveId = this.hive;

        this.treatmentObject.date = new Date(this.treatmentObject.date).toISOString();
        if (noteData == '') {
            this.treatmentObject.note = 'null';
        } else {
            this.treatmentObject.note = noteData;
        }

        this.http.post('https://beeapi.azurewebsites.net/api/treatment/' + apiaryId + '/' + hiveId, this.treatmentObject, { headers: this.authService.getHeader(true) }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    console.log(data);
                }
                this.popAlert('You have successfully created a new treatment named: ' + this.treatmentObject.name, 'success', 7000, 'top');
                this.navCtrl.pop();
            },
            error => {
                if (error.status == 400) {
                    let errorMessage = JSON.parse(error._body);
                    this.popAlert(errorMessage.message, 'danger', 7000, 'top');
                }
            },
            () => {
                // done

            });
    }

    editTreatment(noteData) {
        let treatmentId = this.treatmentService.getId();
        this.treatmentObject.date = new Date(this.treatmentObject.date).toISOString();
        if (noteData == '') {
            this.treatmentObject.note = 'null';
        } else {
            this.treatmentObject.note = noteData;
        }

        delete this.treatmentObject.id;

        this.http.put('https://beeapi.azurewebsites.net/api/treatment/' + treatmentId, this.treatmentObject, { headers: this.authService.getHeader(true) }).map(res => res.json()).subscribe(
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
                this.popAlert('You have successfully update treatment named: ' + this.treatmentObject.name, 'success', 7000, 'top');
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


