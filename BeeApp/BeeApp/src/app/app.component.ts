import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { HivesPage } from '../pages/hives/hives';
import { LoginPage } from '../pages/login/login';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = LoginPage;


    constructor(platform: Platform) {
        console.log('lalalal');
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
}
