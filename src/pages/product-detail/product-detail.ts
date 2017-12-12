import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Product} from "../../entities/product";
import {CartService} from "../../providers/cart.service";

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  selectedProduct: Product;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public cartService: CartService, public toastController: ToastController) {
    this.selectedProduct = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }


  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.showToast('top')
  }

  showToast(position?: string) {
    let toast = this.toastController.create({
      message: 'Ürün başarıyla eklendi.',
      duration: 2000,
      position: position,
      showCloseButton: true,
      closeButtonText: 'Tamam'
    })

    toast.present();
  }
}
