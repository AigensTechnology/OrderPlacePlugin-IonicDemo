import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openOP() {
    console.log('openOP');

    var url = "https://test.order.place/#/court-store-list/5175539845300224";  /// Use the correct url
    var params = {
      url: url,
      features: "scan,gps,alipayhk,applepay,googlepay",  // features, imporant
      alipayScheme: "langhamScheme123", //  If you set alipay Schemes through parameters , please keep consistent in xcode ; (Please see the 7 point)
      "appleMerchantIdentifier": "merchant.com.aigens.pay",
      member: {
        memberId: "123456",
        session: "ABCDEF",
        source: "lp",
        language: "zh",
        name: "Optional Name",
        gender: "M",
        age: 25,
        phone: "65448231",
        email: "peter.liu@gmail.com"
      }
    };

    var OrderPlace = window['OrderPlace'];
    OrderPlace.openUrl(function (result) { console.log(result) }, function (error) { }, params);

  }

}
