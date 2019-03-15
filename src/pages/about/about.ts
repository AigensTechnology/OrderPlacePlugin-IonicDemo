import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  Abounce = false;
  constructor(public navCtrl: NavController) {

  }

  close() { 
    console.log('close..');
    
    this.Abounce = !this.Abounce;
  }
}
