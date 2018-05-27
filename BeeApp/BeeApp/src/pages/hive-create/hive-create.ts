import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthenticationService } from "../../app/service/authenticationService";
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { HiveService } from "../../app/service/hiveService";
import { InspectionService } from "../../app/service/inspectionService";

@Component({
    selector: 'hive-create',
    templateUrl: 'hive-create.html'
})
export class HiveCreate {

    edit: boolean = false;
    hiveObject:any = {
        name: "",
        status: null,
        type: "",
        note: "",
        family: "",
        familyOrigin: "",
        date: new Date().toISOString()
    };

    @ViewChild('noteData') noteData;

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
        this.hiveObject = {
            name: "",
            status: null,
            type: "",
            note: "",
            family: "",
            familyOrigin: "",
            date: new Date().toISOString()
        };

        if (this.hiveService.getEditHiveObject()) {
            this.edit = true;
            this.hiveObject = this.hiveService.getEditHiveObject();

            if (this.hiveObject.note != 'null') {
                this.noteData.value = this.hiveObject.note;
            }
        }
    }

    ionViewDidLeave() {
        this.hiveService.setEditHiveObject(null);
    }

    createHive(noteData) {
        let apiaryId = this.apiaryService.getId();
        this.hiveObject.date = new Date().toISOString();
        if (noteData == '') {
            this.hiveObject.note = 'null';
        } else {
            this.hiveObject.note = noteData;
        }

        console.log(this.hiveObject);

        this.http.post('https://beeapi.azurewebsites.net/api/hive/' + apiaryId, this.hiveObject, { headers: this.authService.getHeader(true) }).map(res => res.json()).subscribe(
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
                this.popAlert('You have successfully created a new hive named: ' + this.hiveObject.name, 'success', 7000, 'bottom');
                this.navCtrl.pop();
            });
    }

    editHive(noteData) {
        let hiveId = this.hiveService.getId();
        this.hiveObject.date = new Date(this.hiveObject.date).toISOString();
        if (noteData == '') {
            this.hiveObject.note = 'null';
        } else {
            this.hiveObject.note = noteData;
        }

        this.http.put('https://beeapi.azurewebsites.net/api/hive/' + hiveId, this.hiveObject, { headers: this.authService.getHeader(true) }).map(res => res.json()).subscribe(
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
                this.popAlert('You have successfully update hive named: ' + this.hiveObject.name, 'success', 7000, 'bottom');
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
