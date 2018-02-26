import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

   doLogin(){
       //Code to set rootpage after login
       this.navCtrl.setRoot(MenuPage);

       //Code for Page loading masking
       this.loadingCtrl.create({
       content: 'Please wait...',
       duration: 3000,
       dismissOnPageChange: true
       }).present();
   }

}
