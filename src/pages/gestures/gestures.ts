import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the GesturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestures',
  templateUrl: 'gestures.html',
})
export class GesturesPage {

  press: number = 0;
  pan: number = 0;
  swipe: number = 0;
  tap: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GesturesPage');
  }

  pressEvent() {
    this.press++;
  }

  panEvent() {
    this.pan++;
  }

  swipeEvent() {
    this.swipe++;
  }

  tapEvent() {
    this.tap++;
  }
}
