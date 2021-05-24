import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  TEXT_LOCAL_API_KEY: string;

  constructor(
    // private request: HttpClient,
    private router: Router,
    private db: AngularFirestore) {
      this.TEXT_LOCAL_API_KEY = 'i+iy0zbPgcs-634j1eHbd3vFluj9jMwbnWWiCDOuGJ';
  }

  isHomeMenuPage(){

    let homeMenuPageUrls = ['/home/main', '/home/about', '/home/feature'];
    console.log('HomeComponent: isHomeMenuPage : ', homeMenuPageUrls.indexOf(this.router.url));
    return homeMenuPageUrls.indexOf(this.router.url) >= 0;
  }

  sendUserAppLink() {
    // const firstChar = this.mobile.toString().charAt(0);
    // const date = new Date();
    // if ((this.mobile.toString().length !== 10) || parseInt(firstChar, 0) < 6) {
    //   alert('This mobile ' + this.mobile + ' is not valid. Please enter a valid indian mobile number.');
    //   return;
    // }

    // const txtLocalApi = 'https://api.textlocal.in/send/?';
    // const apiKey = 'apikey=' + this.TEXT_LOCAL_API_KEY;
    // const sender = '&sender=' + 'MNFOOD';
    // const numbers = '&numbers=' + '+91' + this.mobile;
    // const message = '&message=' + 'MidNightFood App Link: https://midnightfood.page.link/invite';

    // const url = txtLocalApi + apiKey + sender + numbers + message;

    // // $('#sendAppLinkModalClose').click();


    // const docRef = this.db.collection('getapp/fromwebsite/users').doc(this.mobile.toString()).ref;
    // docRef.get().then( (docR: any) => {

    //   if (! docR.exists) {
    //     docR.ref.set({
    //       mobile: this.mobile,
    //       date: date,
    //       windowNavigatorAppName: window.navigator.appName,
    //       windowNavigatorAppCodeName: window.navigator.appCodeName,
    //       windowNavigatorUserAgent: window.navigator.userAgent,
    //       windowNavigatorVendor: window.navigator.vendor,
    //       url: url,
    //       count: 1
    //     });
    //     this.mobile = '';
    //     alert('We will send you MidNightFood app link shortly. Thank You!!!');
    //   } else {
    //     const count = docR.data().count + 1;
    //     docR.ref.update({
    //       count: count
    //     });
    //     this.mobile = '';
    //     alert('We will send you MidNightFood app link shortly. Thank You!!!');
    //   }
    // });
  }
  
}
