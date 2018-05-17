import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedingCreatePage } from '../feeding-create/feeding-create';
import { FeedingInnerPage } from '../feeding-inner/feeding-inner';

@Component({
  selector: 'page-feeding',
  templateUrl: 'feeding.html'
})
export class FeedingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedingPage');
  }

  openFeedingCreatePage() {
      this.navCtrl.push(FeedingCreatePage);
  }

  openFeedingInnerPage() {
      this.navCtrl.push(FeedingInnerPage);
  }

}
