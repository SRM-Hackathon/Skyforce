import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { from } from 'rxjs/observable/from';
import { ListPage } from '../list/list';

/**
 * Generated class for the PlanridePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planride',
  templateUrl: 'planride.html',
})

export class PlanridePage {
  from ='';
  to ='';
  time ='';
  private listref=this.database.list('site');
  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase) {
    
  }
search  (){
  this.navCtrl.push(ListPage);  
}
ionViewDidLoad() {
  console.log('ionViewDidLoad PlanridePage');
}
go(){
  this.navCtrl.push(ListPage);
}
}
