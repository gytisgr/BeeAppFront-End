import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiaryCreatePage } from '../apiary-create/apiary-create';
import { ApiaryInnerPage } from '../apiary-inner/apiary-inner';

/*
  Generated class for the ApiariesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-apiaries',
  templateUrl: 'apiaries.html'
})
export class ApiariesPage {

    constructor(public navCtrl: NavController) {
    }

    openApiaryCreatePage() {
        this.navCtrl.push(ApiaryCreatePage);
    }

    openApiaryInnerPage() {
        this.navCtrl.push(ApiaryInnerPage);
    }
}
