import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, ToastController, Select } from 'ionic-angular';
import { AuthenticationService } from "../../app/service/authenticationService";
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { HiveService } from "../../app/service/hiveService";
import { HarvestService } from "../../app/service/harvestService";

/*
  Generated class for the HarvestCreatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-harvest-create',
    templateUrl: 'harvest-create.html'
})
export class HarvestCreatePage {

    edit: boolean = false;
    harvestObject: any =
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
        public harvestService: HarvestService) { }

    ionViewDidLoad() {
        this.harvestObject =
            {
                name: "",
                date: new Date().toISOString(),
                product: "",
                quantity: "",
                unit: "",
                note: ""
            }

        this.getHivesList();

        if (this.harvestService.getEditHarvestObject()) {
            this.edit = true;
            this.harvestObject = this.harvestService.getEditHarvestObject();

            if (this.harvestObject.note != 'null') {
                this.noteData.value = this.harvestObject.note;
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

    createHarvest(noteData) {
        if (this.hive.name) {
            let apiaryId = this.apiaryService.getId();
            let hiveId = this.hive;

            this.harvestObject.date = new Date(this.harvestObject.date).toISOString();
            if (noteData == '') {
                this.harvestObject.note = 'null';
            } else {
                this.harvestObject.note = noteData;
            }

            delete this.harvestObject.id;

            this.http.post('https://beeapi.azurewebsites.net/api/harvest/' + apiaryId + '/' + hiveId, this.harvestObject, { headers: this.authService.getHeader(true) }).map(res => res.json()).subscribe(
                data => {
                    if (data) {
                        console.log(data);
                    }
                    this.popAlert('You have successfully created a new harvest named: ' + this.harvestObject.name, 'success', 7000, 'top');
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
        } else {
            this.popAlert('Please select hive', 'warning', 7000, 'top');
        }
    }

    editHarvest(noteData) {
        let harvestId = this.harvestService.getId();
        this.harvestObject.date = new Date(this.harvestObject.date).toISOString();
        if (noteData == '') {
            this.harvestObject.note = 'null';
        } else {
            this.harvestObject.note = noteData;
        }

        delete this.harvestObject.id;

        this.http.put('https://beeapi.azurewebsites.net/api/harvest/' + harvestId, this.harvestObject, { headers: this.authService.getHeader(true) }).map(res => res.json()).subscribe(
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
                this.popAlert('You have successfully update harvest named: ' + this.harvestObject.name, 'success', 7000, 'top');
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
