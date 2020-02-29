import { Component } from '@angular/core';
import { Badge } from '@ionic-native/badge/ngx';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pageTitle = 'ミッション投稿';
  missionId: string;
  course: string;
  tool: string;
  title: string;
  content: string;
  photo;
  missions: {
    missionId: string;
    photo;
    course: string;
    tool: string;
    title: string;
    content: string;
  }[] = [
    {
      missionId: '1',
      photo: '/assets/scratch.jpeg',
      course: 'ゲーム&アプリプログラミング',
      tool: 'Scratch',
      title: 'ねこを左に動かすにはどうやるの？',
      content: 'おちものゲームを作りたいです。ねこは右に動くけど左には動きません。どうしたらいいですか？こまってます。',
    },
  ];
  constructor(
    public badge: Badge,
    public toastController: ToastController,
  ) {}

  ionViewWillEnter() {
    // localStorage.missions = JSON.stringify(this.missions); // localStrageにmissionsの値を保存
    if ('missions' in localStorage) {
      this.missions = JSON.parse(localStorage.missions);
    }
  }

  // upBadge() {
  //   this.badge.increase(1);
  // }

  // clearBadge() {
  //   this.badge.clear();
  // }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.DataUrl,
    });
    this.photo = image.dataUrl;
  }

  getUniqueStr(myStrong?: number): string {
    let strong = 1000;
    if (myStrong) strong = myStrong;
    return (
      new Date().getTime().toString(16) +
      Math.floor(strong * Math.random()).toString(16)
    );
  }

  addMission() {
    this.missionId = this.getUniqueStr();
    this.missions.push({
      missionId: this.missionId,
      photo: this.photo,
      course: this.course,
      tool: this.tool,
      title: this.title,
      content: this.content,
    });
    console.log(this.missions); // For debug only
    localStorage.missions = JSON.stringify(this.missions); // localStrageにmissionsの値を保存
    this.course = '';
    this.tool = '';
    this.title = '';
    this.content = '';
    this.photo = '';

    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'ミッション投稿完了！',
      duration: 3000,
      color: 'dark',
      position: 'top',
    });
    toast.present();
  }

}
