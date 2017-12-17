import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

/**
 * Generated class for the ActionsheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actionsheet',
  templateUrl: 'actionsheet.html',
})
export class ActionsheetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetController: ActionSheetController, public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionsheetPage');
  }

  openMenu() {
    let actionSheet = this.actionSheetController.create({
      title: 'Actions',
      buttons: [{
        text: "Delete",
        icon: !this.platform.is('ios') ? 'trash' : null,
        handler: () => {
          this.delete();
        }
      },
        {
          text: "Share",
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            this.share();
          }
        },
        {
          text: "Favorite",
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            this.favorite();
          }
        }]
    });
    actionSheet.present();
  }

  delete() {
    console.log('Deleted');
  }

  share() {
    console.log('Shared');
  }

  favorite() {
    console.log('Favorited');
  }
}
