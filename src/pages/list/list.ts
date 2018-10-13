import { Component } from '@angular/core';
import { NavController, NavParams, DateTime } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  BusNo: string[] = ["M19","B30","C23","C5","27G","52F","31B","5F","6G","2Y","39A","42A"];
  Date: string[] = ["02/10/2018","01/10/2018","21/09/2018","31/08/2018","11/07/2018","11/06/2018","12/05/2018","05/05/2018","10/01/2018","26/12/2017","02/11/2017","15/08/2017"];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    //this.icons = ['bus','bus']

    this.items = [];
    for (let i = 1; i < 11; i++) {
    
      this.items.push({
        title: this.BusNo[i],
        note: this.Date[i],
        icon: 'bus'
      });
    }
  }

  /*itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
}*/
}
