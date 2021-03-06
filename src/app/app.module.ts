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
import {ComponentsPage} from "../pages/components/components";
import {ActionsheetPage} from "../pages/actionsheet/actionsheet";
import {AlertPage} from "../pages/alert/alert";
import {CheckboxPage} from "../pages/checkbox/checkbox";
import {FabsPage} from "../pages/fabs/fabs";
import {GesturesPage} from "../pages/gestures/gestures";
import {LoadingPage} from "../pages/loading/loading";
import {SliderPage} from "../pages/slider/slider";
import {NativePage} from "../pages/native/native";
import {CallNumberPage} from "../pages/call-number/call-number";
import {BatteryPage} from "../pages/battery/battery";
import {CameraPage} from "../pages/camera/camera";
import {List2Page} from "../pages/list2/list2";
import {BarcodePage} from "../pages/barcode/barcode";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    ProductDetailPage,
    CartPage,
    ComponentsPage,
    ActionsheetPage,
    AlertPage,
    CheckboxPage,
    FabsPage,
    GesturesPage,
    LoadingPage,
    SliderPage,
    NativePage,
    CallNumberPage,
    BatteryPage,
    CameraPage,
    List2Page,
    BarcodePage
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
    CartPage,
    ComponentsPage,
    ActionsheetPage,
    AlertPage,
    CheckboxPage,
    FabsPage,
    GesturesPage,
    LoadingPage,
    SliderPage,
    NativePage,
    CallNumberPage,
    BatteryPage,
    CameraPage,
    List2Page,
    BarcodePage
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
