import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TabsPage } from '../tabs/tabs';

export interface pageInterface{
      title:string;
      pageName:string;
      tabsComponent?: any;
      index?:number;
      icon:string;
} 

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
 @ViewChild(Nav) nav: Nav;
  rootPage = TabsPage;

  pages: pageInterface[] = [
       {title:'Home', pageName: 'HomePage', tabsComponent: 'HomePage', index: 0, icon:'home'},
       {title:'About', pageName: 'AboutPage', tabsComponent: 'AboutPage', index: 1, icon:'information-circle'},
       {title:'Contact', pageName: 'ContactPage', tabsComponent: 'ContactPage', index: 2, icon:'contacts'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   openPage(p:pageInterface) {
     let params = {};
     if(p.index){
          params= {tabIndex : p.index}
     }
    if(this.nav.getActiveChildNav() && p.index != undefined){
           this.nav.getActiveChildNav().select(p.index);
      }
  }

}
