import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BatteryStatus, BatteryStatusResponse} from "@ionic-native/battery-status";

/**
 * Generated class for the BatteryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-battery',
  templateUrl: 'battery.html',
  providers: [BatteryStatus]
})
export class BatteryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public batteryStatus: BatteryStatus) {
  }

  batteryLevel: number;
  pluggedStatus: boolean;

  ionViewDidLoad() {
    console.log('ionViewDidLoad BatteryPage');
    this.seeBatteryStatus();
  }

  seeBatteryStatus() {
    let subcription = this.batteryStatus.onChange().subscribe((status: BatteryStatusResponse) => {
      console.log(status.level, status.isPlugged)
      this.batteryLevel = status.level;
      this.pluggedStatus = status.isPlugged;
    });
  }

}
