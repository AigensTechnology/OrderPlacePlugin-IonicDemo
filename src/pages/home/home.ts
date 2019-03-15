import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  clickBtn = false;
  constructor(public navCtrl: NavController) {

    // let vs = ["2A", "1", "4C", "2", "3", "1B", "2B", "5", "4", "1A", "2", "3", "1B", "2B", "A1", "B1", "B2", "B10", "", "1", "4C", "2", "3", "1B", "2B", "5", "4", "1A", "2", "3", "1B", "2B", "A1", "B1", "B2", "B10", "A", "B9", "C11", "D4", "1A", "1A", "A", "11", "10", "14", "21", "11A", "12B"];
    // this.sort(vs)
    // console.log('vs:', vs);


  }

  pushToNext() {
    this.navCtrl.push(AboutPage)
  }

  // 转换成数字: e.g  : A23 -> 23;
  toNumber(v: string) {
    return Number(v.replace(/[^0-9]/ig, ""));
  }

  // 是否是数字
  isNumber(value): boolean {
    return /^\d+$/.test(value);
  }

  sort(values: string[]) {
    values.sort((v1, v2) => {

      if (!v1 || !v2) return 0;

      let tempV1 = v1;
      let tempV2 = v2;
      let v1IsDegital = tempV1.substr(0, 1);
      let v2IsDegital = tempV2.substr(0, 1);

      if (!this.isNumber(v1IsDegital) && !this.isNumber(v2IsDegital) && (v1IsDegital == v2IsDegital) && this.toNumber(v1) > this.toNumber(v2)) {
        return 1;
      } else if (!this.isNumber(v1IsDegital) && (v1IsDegital == v2IsDegital) && !this.isNumber(v2IsDegital) && this.toNumber(v1) < this.toNumber(v2)) {
        return - 1;
      } else if (this.isNumber(v1IsDegital) && this.isNumber(v2IsDegital) && this.toNumber(v1) < this.toNumber(v2)) {
        return -1;
      } else if (this.isNumber(v1IsDegital) && this.isNumber(v2IsDegital) && this.toNumber(v1) > this.toNumber(v2)) {
        return 1;
      }
      if (v1 < v2) {
        return -1;
      }

      return 0;
    })
  }
  openOP() {
    console.log('openOP');

    var url = "https://test.order.place/#/court-store-list/5175539845300224";  /// Use the correct url
    var params = {
      url: url,
      features: "scan,gps,alipayhk,applepay,googlepay,wechatpay",  // features, imporant
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
