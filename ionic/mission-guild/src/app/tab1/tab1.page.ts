import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pageTitle = 'ミッション一覧';
  missions: {
    imgpath: string;
    course: string;
    tool: string;
    title: string;
    content: string;
  }[] = [];
  constructor() {}

  // localStorageからmissionsの値を読み込む
  ionViewWillEnter() {
    if ('missions' in localStorage) {
      this.missions = JSON.parse(localStorage.missions)
    }
  }

  // localNotification() {
  //   Plugins.LocalNotifications.schedule({
  //     notifications: [
  //       {
  //         id: 1,
  //         title: 'ようこそ',
  //         body: 'Ionic Frameworkへ',
  //         schedule: { at: new Date(Date.now() + 1000 * 2) },
  //         sound: 'normail'
  //       }
  //     ]
  //   });
  // }

}
