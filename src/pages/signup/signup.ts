import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { profile } from '../../models/login/profile.interface';
import { AngularFireDatabase} from 'angularfire2/database';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  confirm : String;
  
  profile = {} as profile;
  
  private listref=this.database.list('site');
  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase ) {
    
  }

  
  signup()
  { 
    if(this.profile.password==this.confirm){ 
    this.listref.push(this.profile);
    this.navCtrl.popTo(HomePage);
    }
    else{
      alert("Password doesn't match");
    }
}
}  
