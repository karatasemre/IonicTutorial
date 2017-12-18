import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CallNumberPage} from "../call-number/call-number";
import {BatteryPage} from "../battery/battery";
import {CameraPage} from "../camera/camera";
import {BarcodePage} from "../barcode/barcode";

/**
 * Generated class for the NativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-native',
  templateUrl: 'native.html',
})
export class NativePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NativePage');
  }

  openCallNumber() {
    this.navCtrl.push(CallNumberPage);

  }

  openBatteryPage() {
    this.navCtrl.push(BatteryPage)

  }

  openCameraPage() {
    this.navCtrl.push(CameraPage)
  }

  openBarcodePage() {
    this.navCtrl.push(BarcodePage)
  }
}
