import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProductService} from "../../providers/product.service";
import {Product} from "../../entities/product";
import {ProductDetailPage} from "../product-detail/product-detail";
import {Category} from "../../entities/category";
import {CategoryService} from "../../providers/category.service";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
  providers: [ProductService, CategoryService]
})
export class ProductPage {

  products: Product[];
  categories: Category[];
  selectedCategory: string;
  filterText: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductService, public categoryService: CategoryService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.productService.getProducts().subscribe(res => {
      this.products = res
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res
    })
  }

  getItems() {
    let val = this.filterText;
    if (val && val.trim() != '') {
      this.productService.getProducts(this.selectedCategory).subscribe(p => {
        this.products = p.filter(item => {
          return item.productName.toLowerCase().indexOf(val.toLowerCase()) > -1;
        })
      })
    } else {
      this.productService.getProducts(this.selectedCategory).subscribe(res => {
        this.products = res;
      })
    }
  }

  itemTapped(event, product) {
    this.navCtrl.push(ProductDetailPage, {item: product})
  }

}
