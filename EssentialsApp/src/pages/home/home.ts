import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, AlertController } from 'ionic-angular';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public photos : any;
  public base64Image : string;
  dataList: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestServiceProvider, private camera : Camera, private alertCtrl : AlertController) {

  }
  ngOnInit() {
      this.photos = [];
      this.dataList = [];
  }
 deletePhoto(index) {
    let confirm = this.alertCtrl.create({
        title: 'Sure you want to delete this photo? There is NO undo!',
        message: '',
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('Disagree clicked');
            }
          }, {
            text: 'Yes',
            handler: () => {
              console.log('Agree clicked');
              this.photos.splice(index, 1);
            }
          }
        ]
      });
    confirm.present();
  }

  takePhoto() {
    const options : CameraOptions = {
      quality: 50, // picture quality
      saveToPhotoAlbum: true,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
      }, (err) => {
        console.log(err);
      });
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
