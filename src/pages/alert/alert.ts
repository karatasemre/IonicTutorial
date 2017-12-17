import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  showAlert() {
    let alert = this.alertController.create({
      title: "Save!",
      subTitle: "Are you sure?",
      buttons: ['OK']
    });
    alert.present();
  }

  showMessageAlert() {
    let alert = this.alertController.create({
      title: "Your name!",
      message: "Enter your name.",
      inputs: [{
        name: "firstName",
        placeholder: "First Name"
      }],
      buttons: [{
        text: 'Save',
        handler: data => {
          this.alertSave(data);
        }
      }, {
        text: 'Cancel',
        handler: data => {
          this.alertCancel();
        }
      }]
    });
    alert.present();
  }

  showRadioAlert() {
    let alert = this.alertController.create();

    alert.setTitle('Choose Color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true,
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green',
      checked: false,
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log(data + ' clicked')
      }
    });

    alert.present();
  }

  alertSave(data) {
    console.log(data.firstName + " saved!");
  }

  alertCancel() {
    console.log('Cancelled!');
  }

}
