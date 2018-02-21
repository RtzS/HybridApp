import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dataList: string[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestServiceProvider) {

  }

  ionViewDidLoad() {
    this.getData();
    
  }

  getData() {
    this.rest.getData()
       .subscribe(
         dataList => this.dataList = dataList,
         error =>  this.errorMessage = <any>error);
  }

}
