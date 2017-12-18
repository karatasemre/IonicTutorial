import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ActionsheetPage} from "../actionsheet/actionsheet";
import {AlertPage} from "../alert/alert";
import {CheckboxPage} from "../checkbox/checkbox";
import {FabsPage} from "../fabs/fabs";
import {GesturesPage} from "../gestures/gestures";
import {LoadingPage} from "../loading/loading";
import {SliderPage} from "../slider/slider";
import {ListPage} from "../list/list";
import {List2Page} from "../list2/list2";

/**
 * Generated class for the ComponentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-components',
  templateUrl: 'components.html',
})
export class ComponentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentsPage');
  }

  openActionSheet() {
    this.navCtrl.push(ActionsheetPage)
  }

  openAlertPage() {
    this.navCtrl.push(AlertPage)
  }

  openCheckBoxPage() {

    this.navCtrl.push(CheckboxPage)
  }

  openFabsPage() {
    this.navCtrl.push(FabsPage)
  }

  openGesturesPage() {
    this.navCtrl.push(GesturesPage)
  }

  openListPage() {
    this.navCtrl.push(ListPage)
  }

  openList2Page() {
    this.navCtrl.push(List2Page)
  }

  openLoadingPage() {
    this.navCtrl.push(LoadingPage)
  }

  openSliderPage() {
    this.navCtrl.push(SliderPage)
  }

}
