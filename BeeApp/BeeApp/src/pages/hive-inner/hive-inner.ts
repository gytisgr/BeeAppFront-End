import { Component } from '@angular/core';

import { NavController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { InspectInnerPage } from '../inspect-inner/inspect-inner';
import { InspectCreatePage } from '../inspect-create/inspect-create';
import { HiveService } from "../../app/service/hiveService";
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { AuthenticationService } from "../../app/service/authenticationService";
import { Observable } from "ionic-native/node_modules/rxjs/Rx";
import { InspectionService } from "../../app/service/inspectionService";
import { HiveCreate } from "../hive-create/hive-create";
import * as moment from 'moment';

@Component({
    selector: 'page-hive-inner',
    templateUrl: 'hive-inner.html'
})
export class HiveInner {
    hiveTabs: string;
    hive: any = {};

    chartOptions = {
        responsive: true
    };

    temperatureChartData: any = [
        { data: [] }
    ];

    temperatureChartLabels: any = [];

    humidityChartData: any = [
        { data: [] }
    ];

    humidityChartLabels: any = [];

    strenghtChartData: any = [
        { data: [80, 74, 71, 79, 83, 89] }
    ];

    strenghtChartLabels: any = ['2018-05-21', '2018-05-22', '2018-05-23', '2018-05-24', '2018-05-25', '2018-05-26'];


    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public http: Http,
        public authService: AuthenticationService,
        public apiaryService: ApiaryService,
        public hiveService: HiveService,
        public inspectionService: InspectionService,
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController) {
        this.hiveTabs = 'info';
        this.hive = this.hiveService.getHiveObject();
    }

    ionViewDidEnter() {
        this.loadHiveInfo();
    }

    selectedTabChanged(hiveTabs): void {
        console.log(hiveTabs);
        this.loadHiveInfo();
    }

    loadHiveInfo() {

        let apiaryId = this.apiaryService.getId();
        let hiveId = this.hiveService.getId();
        this.http.get('https://beeapi.azurewebsites.net/api/hive/' + apiaryId + '/' + hiveId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    Observable.forkJoin(
                        this.http.get('https://beeapi.azurewebsites.net/api/monitoring/' + hiveId, { headers: this.authService.getHeader() }).map(res => res.json()),
                        this.http.get('https://beeapi.azurewebsites.net/api/inspection/' + apiaryId + '/' + hiveId, { headers: this.authService.getHeader() }).map(res => res.json()),
                        this.http.get('https://beeapi.azurewebsites.net/api/queen/' + apiaryId + '/' + hiveId, { headers: this.authService.getHeader() }).map(res => res.json())
                    ).subscribe(
                        data => {
                            this.hive.monitoring = data[0];
                            this.hive.inspections = data[1];
                            this.hive.queen = data[2][0];
                        },
                        error => {
                            console.error(error);
                        },
                        () => {
                            // done
                            console.log(this.hive);

                        })
                }
            },
            error => {
                if (error.status == 400) {

                }
            },
            () => {
                // done
                this.getMonitoringData();
            });
    }

    editHivePage() {
        this.hiveService.setEditHiveObject(this.hive);
        this.navCtrl.push(HiveCreate);
    }

    deleteHive() {
        let alert = this.alertCtrl.create({
            title: 'Delete Confirmation',
            subTitle: 'Would you like to delete' + this.hive.name + '?',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'confirm',
                    handler: () => {
                        let hiveId = this.hiveService.getId();

                        this.http.delete('https://beeapi.azurewebsites.net/api/hive/' + hiveId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
                            data => {

                                this.popAlert('You have successfully deleted hive named: ' + this.hive.name, 'success', 7000, 'bottom');
                                this.hiveService.setId(0);
                                this.hiveService.setHiveObject(null);
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

    openInspectInnerPage(id) {
        this.inspectionService.setId(id);
        this.navCtrl.push(InspectInnerPage);
    }

    openInspectCreatePage() {
        this.navCtrl.push(InspectCreatePage);
    }



    getMonitoringData() {
        let apiaryId = this.apiaryService.getId();
        let hiveId = this.hiveService.getId();

        Observable.forkJoin(
            this.http.get('https://beeapi.azurewebsites.net/api/monitoring/' + hiveId, { headers: this.authService.getHeader() }).map(res => res.json()),
            this.http.get('https://beeapi.azurewebsites.net/api/inspection/' + apiaryId + '/' + hiveId, { headers: this.authService.getHeader() }).map(res => res.json())
        ).subscribe(
            data => {
                if (data[0]) {
                    if (data[0].length > 0) {
                        this.setTemperatureChart(data[0]);
                        this.setHumidityChart(data[0]);
                    }
                }

                if (data[1]) {
                    if (data[1].length > 0) {
                        //this.setStrenghtChart(data[1]);
                    }
                }
            },
            error => {
                console.error(error);
            },
            () => {

            })


        this.http.get('https://beeapi.azurewebsites.net/api/monitoring/' + hiveId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {

                    if (data.length > 0) {
                        this.setTemperatureChart(data);
                        this.setHumidityChart(data);
                    }

                }
            },
            error => {
                if (error.status == 400) {

                }
            },
            () => {
                //done
            });
    }

    // charts
    // Temperature

    setTemperatureChart(data: any) {

        let resultDataArray: any = [];
        let resultLabelsArray: any = [];

        data.forEach(function(arrayElem) {
            resultDataArray.push(arrayElem.temperature);

            let date = moment(arrayElem.timestamp).format('YYYY-MM-DD');
            resultLabelsArray.push(date);
        });

        this.temperatureChartData = [{ data: resultDataArray }]
        this.temperatureChartLabels = resultLabelsArray;

    }

    // Humidity

    setHumidityChart(data: any) {

        let resultDataArray: any = [];
        let resultLabelsArray: any = [];

        data.forEach(function(arrayElem) {
            resultDataArray.push(arrayElem.humidity);

            let date = moment(arrayElem.timestamp).format('YYYY-MM-DD');
            resultLabelsArray.push(date);
        });

        this.humidityChartData = [{ data: resultDataArray }]
        this.humidityChartLabels = resultLabelsArray;
    }

    // Strenght

    setStrenghtChart(data: any) {

        let resultDataArray: any = [];
        let resultLabelsArray: any = [];

        data.forEach(function(arrayElem) {
            resultDataArray.push(arrayElem.strenght);

            let date = moment(arrayElem.date).format('YYYY-MM-DD');
            resultLabelsArray.push(date);
        });

        this.strenghtChartData = [{ data: resultDataArray }]
        this.strenghtChartLabels = resultLabelsArray;
    }


}
