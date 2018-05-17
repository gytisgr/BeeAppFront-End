import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Pages import
import { ApiariesPage } from '../pages/apiaries/apiaries';
import { ApiaryCreatePage } from '../pages/apiary-create/apiary-create';
import { ApiaryInnerPage } from '../pages/apiary-inner/apiary-inner';
import { FeedingPage } from '../pages/feeding/feeding';
import { FeedingCreatePage } from '../pages/feeding-create/feeding-create';
import { FeedingInnerPage } from '../pages/feeding-inner/feeding-inner';
import { HarvestPage } from '../pages/harvest/harvest';
import { HarvestCreatePage } from '../pages/harvest-create/harvest-create';
import { HarvestInnerPage } from '../pages/harvest-inner/harvest-inner';
import { HivesPage } from '../pages/hives/hives';
import { HiveCreate } from '../pages/hive-create/hive-create';
import { HiveInner } from '../pages/hive-inner/hive-inner';
import { HomePage } from '../pages/home/home';
import { InspectInnerPage } from '../pages/inspect-inner/inspect-inner';
import { InspectCreatePage } from '../pages/inspect-create/inspect-create';
import { TabsPage } from '../pages/tabs/tabs';
import { StatsPage } from '../pages/stats/stats';
import { TreatmentPage } from '../pages/treatment/treatment';
import { TreatmentInnerPage } from '../pages/treatment-inner/treatment-inner';
import { TreatmentCreatePage } from '../pages/treatment-create/treatment-create';



@NgModule({
  declarations: [
    MyApp,
    FeedingPage,
    FeedingCreatePage,
    FeedingInnerPage,
    HivesPage,
    HomePage,
    TabsPage,
    HarvestPage,
    HarvestCreatePage,
    HarvestInnerPage,
    HiveCreate,
    HiveInner,
    InspectInnerPage,
    InspectCreatePage,
    ApiariesPage,
    ApiaryCreatePage,
    ApiaryInnerPage,
    StatsPage,
    TreatmentPage,
    TreatmentInnerPage,
    TreatmentCreatePage
  ],
  imports: [
      IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedingPage,
    FeedingCreatePage,
    FeedingInnerPage,
    HivesPage,
    HomePage,
    TabsPage,
    HarvestPage,
    HarvestCreatePage,
    HarvestInnerPage,
    HiveCreate,
    HiveInner,
    InspectInnerPage,
    InspectCreatePage,
    ApiariesPage,
    ApiaryInnerPage,
    ApiaryCreatePage,
    StatsPage,
    TreatmentPage,
    TreatmentInnerPage,
    TreatmentCreatePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
