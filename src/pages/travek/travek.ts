import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TravekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travek',
  templateUrl: 'travek.html',
})
export class TravekPage {
  selectedItem: any;
  icons: string[];
  BusNo: string[] = ["M19","B30","C23","C5","27G","52F","31B","5F","6G","2Y","39A","42A"];
  
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    //this.icons = ['bus','bus']

    this.items = [];
    for (let i = 1; i < 11; i++) {
    
      this.items.push({
        title: this.BusNo[i],
        
        icon: 'bus'
      });
    }
  }

}
