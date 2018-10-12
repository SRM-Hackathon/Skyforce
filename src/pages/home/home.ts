import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email:string;
  username : string;
  password : string;
  constructor(public navCtrl: NavController) {

  }
  login()
  {
  console.log("username:"+this.username);
  console.log("password:"+this.password);
  }
  goSignup()
  {
    this.navCtrl.push(SignupPage);
  }

}

