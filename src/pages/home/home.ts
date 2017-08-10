import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    base64:string;

    constructor(
        public navCtrl: NavController,
        public camera: Camera
    ) {}

    startupCamera(){
         this._getNativeCamera().then(
            data => this.base64 = data
        );
    }

    _getNativeCamera(){
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        return new Promise<string>(
            (resolve)=>{
                this.camera.getPicture(options).then((imageData) => {
                    // imageData is either a base64 encoded string or a file URI
                    // If it's base64:
                    resolve('data:image/jpeg;base64,' + imageData)
                }, (err) => {
                    // Handle error
                });
            }
        );
    }
}
