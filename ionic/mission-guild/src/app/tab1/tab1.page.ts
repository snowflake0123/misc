import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pageTitle = 'ミッション一覧';
  missions: {
    photo;
    course: string;
    tool: string;
    title: string;
    content: string;
  }[] = [];
  constructor(
    public loadingController: LoadingController,
  ) {}

  // localStorageからmissionsの値を読み込む
  async ionViewWillEnter() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();
    if ('missions' in localStorage) {
      this.missions = JSON.parse(localStorage.missions)
    }
    loading.dismiss();
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
