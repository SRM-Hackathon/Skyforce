import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { PlanridePage } from '../pages/planride/planride';


import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { Home1Page } from '../pages/home1/home1';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SignupPage,
    SettingsPage,
    HelpPage,
    MyProfilePage,
    PlanridePage,
    Home1Page
 ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home1Page,
    HomePage,
    SignupPage,
    ListPage,
    HelpPage,
    MyProfilePage,
    SettingsPage,
    PlanridePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
