import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {ProductPage} from '../pages/product/product';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpModule} from "@angular/http";
import {ProductDetailPage} from "../pages/product-detail/product-detail";
import {CartService} from "../providers/cart.service";
import {CartPage} from "../pages/cart/cart";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    ProductDetailPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    ProductDetailPage,
    CartPage
  ],
  providers: [
    CartService,
    {provide: "apiUrl", useValue: "http://northwindapi.azurewebsites.net/api"},
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}