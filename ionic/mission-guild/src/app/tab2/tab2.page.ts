import { Component } from '@angular/core';
import { Badge } from '@ionic-native/badge/ngx';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pageTitle = 'ミッション投稿';
  course: string;
  tool: string;
  title: string;
  content: string;
  imgpath: string;
  photo;
  missions: {
    imgpath: string;
    course: string;
    tool: string;
    title: string;
    content: string;
  }[] = [
    {
      imgpath: '/assets/scratch.jpeg',
      course: 'ゲーム&アプリプログラミング',
      tool: 'Scratch',
      title: 'ねこを左に動かすにはどうやるの？',
      content: 'おちものゲームを作りたいです。ねこは右に動くけど左には動きません。どうしたらいいですか？こまってます。',
    },
    {
      imgpath: '/assets/scratch.jpeg',
      course: 'ロボットクリエイト',
      tool: 'WeDo',
      title: 'ワニのくちがうごかない！！！',
      content: 'ワニをつくってます。くちがうまくうごきません。',
    },
  ];
  constructor(
    public badge: Badge
  ) {}

  ionViewWillEnter() {
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

  addMission() {
    this.missions.push({
      imgpath: '/assets/scratch.jpeg',
      course: this.course,
      tool: this.tool,
      title: this.title,
      content: this.content,
    });
    localStorage.missions = JSON.stringify(this.missions); // localStrageにmissionsの値を保存
    this.course = '';
    this.tool = '';
    this.title = '';
    this.content = '';
    this.imgpath = '';
  }

}
