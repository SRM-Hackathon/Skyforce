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
  
  
  public key : String =' ';
  public value : String =' ';
  public value1 : Number =null;
  public value2 : String =' ';
  public name1 : String =' ';

  constructor(public navCtrl: NavController, public navParams: NavParams,public afdb : AngularFireDatabase) {
  
    var arr = [];
      
    /*this.afdb.list("/site/").valueChanges().subscribe(_data=>{
    this.arr= _data
  })*/
  this.value=arr[0];
  this.value1=arr[2];
  this.value2=arr[3];
  this.name1=arr[1];

    firebase.database().ref('/site/').orderByChild('mobile').equalTo("8428626214").once('value').then(function(snapshot) {
      //var username = snapshot.forEach;
    
    
      snapshot.forEach(function(childSnapshot){
  
         var key =childSnapshot.key;
         var value =childSnapshot.child("email").val();
         var name1 =childSnapshot.child("name").val();
         var value1 =childSnapshot.child("mobile").val();
         var value2 =childSnapshot.child("username").val();
        
      })    
    });

  }

  
  ionViewDidLoad() {
  
  var p = new MyProfilePage(this.navCtrl,this.navParams,this.afdb);
  
  
    console.log('ionViewDidLoad MyProfilePage');
    
  }

}
