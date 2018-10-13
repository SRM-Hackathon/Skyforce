import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';


/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
  a : String ="hi";
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public afdb : AngularFireDatabase) {
    firebase.database().ref('/site/').orderByChild('name').equalTo("ae").once('value').then(function(snapshot) {
      var username = snapshot.val();
      
      console.log(username)
    });
  
    /*this.afdb.list("/site/").valueChanges().subscribe(_data=>{
    this.arr= _data
  })*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
    firebase.database().ref('/site/').orderByChild('name').equalTo("ae").once('value').then(function(snapshot) {
      var username = snapshot.val();
      
      console.log(username.split +"Firebase")
    });
  }

}
