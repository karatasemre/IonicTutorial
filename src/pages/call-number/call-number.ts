import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CallNumber} from "@ionic-native/call-number";

/**
 * Generated class for the CallNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call-number',
  templateUrl: 'call-number.html',
  providers: [CallNumber]
})
export class CallNumberPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public callNumber: CallNumber) {
  }

  numberToCall: number;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallNumberPage');
  }

  call(number) {
    this.callNumber.callNumber(number, true)
      .then(() => console.log("Calling..."))
      .catch(() => console.log("Failed"));
  }

}
