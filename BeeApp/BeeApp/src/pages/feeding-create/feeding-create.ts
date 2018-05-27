import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, ToastController, Select } from 'ionic-angular';
import { AuthenticationService } from "../../app/service/authenticationService";
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { HiveService } from "../../app/service/hiveService";
import { FeedingsService } from "../../app/service/feedingsService";

/*
  Generated class for the FeedingCreatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feeding-create',
  templateUrl: 'feeding-create.html'
})
export class FeedingCreatePage {

    edit: boolean = false;
    feedingObject: any =
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
        public feedingsService: FeedingsService,
        public loadingCtrl: LoadingController) { }

    ionViewDidLoad() {
        this.feedingObject =
            {
                name: "",
                date: new Date().toISOString(),
                product: "",
                quantity: "",
                unit: "",
                note: ""
            }

        this.getHivesList();

        if (this.feedingsService.getEditFeedingsObject()) {
            this.edit = true;
            this.feedingObject = this.feedingsService.getEditFeedingsObject();

            if (this.feedingObject.note != 'null') {
                this.noteData.value = this.feedingObject.note;
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

    createFeeding(noteData) {
        if (this.hive.name) {
            let apiaryId = this.apiaryService.getId();
            let hiveId = this.hive;

            this.feedingObject.date = new Date(this.feedingObject.date).toISOString();
            if (noteData == '') {
                this.feedingObject.note = 'null';
            } else {
                this.feedingObject.note = noteData;
            }

            this.http.post('https://beeapi.azurewebsites.net/api/feeding/' + apiaryId + '/' + hiveId, this.feedingObject, { headers: this.authService.getHeader(true) }).map(res => res.json()).subscribe(
                data => {
                    if (data) {
                        console.log(data);
                    }
                    this.popAlert('You have successfully created a new feeding named: ' + this.feedingObject.name, 'success', 7000, 'bottom');
                    this.navCtrl.pop();
                },
                error => {
                    if (error.status == 400) {
                        let errorMessage = JSON.parse(error._body);
                        this.popAlert(errorMessage.message, 'danger', 7000, 'bottom');
                    }
                },
                () => {
                    // done
                    
                });
        } else {
            this.popAlert('Please select hive', 'warning', 7000, 'bottom');
        }
    }

    editFeeding(noteData) {
        let feedingId = this.feedingsService.getId();
        this.feedingObject.date = new Date(this.feedingObject.date).toISOString();
        if (noteData == '') {
            this.feedingObject.note = 'null';
        } else {
            this.feedingObject.note = noteData;
        }

        delete this.feedingObject.id;

        this.http.put('https://beeapi.azurewebsites.net/api/feeding/' + feedingId, this.feedingObject, { headers: this.authService.getHeader(true) }).map(res => res.json()).subscribe(
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
                this.popAlert('You have successfully update feeding named: ' + this.feedingObject.name, 'success', 7000, 'bottom');
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
