import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { MyProfilePage } from '../my-profile/my-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username : string;
  password : string;
  constructor(public navCtrl: NavController) {

  }
  login()
  {
  this.navCtrl.setRoot(MyProfilePage);
  }
  goSignup()
  {
    this.navCtrl.push(SignupPage);
  }

}

