import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 HEAD
import { SignupPage } from '../pages/signup/signup';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { PlanridePage } from '../pages/planride/planride';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
 HEAD
    SignupPage,
    SettingsPage,
    HelpPage,
    MyProfilePage,
    PlanridePage
    
>>>>>>> 217b5623da70c87a6a28abd99b6
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HelpPage,
    MyProfilePage,
    PlanridePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
