import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

/**
 * Generated class for the BarcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
  providers: [BarcodeScanner]
})
export class BarcodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public barcodeScanner: BarcodeScanner) {
  }

  barcodeText: string;
  barcodeFormat: string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
  }

  scanBarcode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      console.log(barcodeData.text)

      this.barcodeText = barcodeData.text;
      this.barcodeFormat = barcodeData.format;
    }, (err) => {
      // An error occurred
      console.log('failed')
    });
  }

}
