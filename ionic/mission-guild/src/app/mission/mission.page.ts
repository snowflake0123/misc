import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.page.html',
  styleUrls: ['./mission.page.scss'],
})
export class MissionPage implements OnInit {
  pageTitle = 'ミッション詳細'
  refresher = document.getElementById('refresher');
  missions = null;
  missionId: string;
  missionInfo: {
    missionId: string;
    photo;
    course: string;
    tool: string;
    title: string;
    content: string;
  } = {
    missionId: null,
    photo: null,
    course: null,
    tool: null,
    title: null,
    content: null
  }
  constructor(
    public route: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.missionId = params.get('missionId');
    });
  }

  ionViewDidEnter() {
    this.missions = JSON.parse(localStorage.missions);
    this.missionInfo = this.missions.find((v) => v.missionId === this.missionId);
    // console.log(this.missionInfo);
  }

  async changeMission() {
    const actionSheet = await this.actionSheetController.create({
      header: 'ミッションの削除',
      buttons: [
        {
          text: '削除',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Destructive clicked');
            this.presentAlertConfirm();
          }
        // }, {
        //   text: '変更',
        //   icon: 'create',
        //   handler: () => {
        //     console.log('Archive clicked');
        //   }
        }, {
          text: '閉じる',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    actionSheet.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'ミッションの削除',
      message: 'このミッションを削除しますか？',
      buttons: [
        {
          text: 'キャンセル',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: '削除',
          handler: () => {
            console.log('Confirm Delete');
            const missions = JSON.parse(localStorage.missions);
            const targetId = this.missionId
            this.missions.some(function (v, i) {
              if (v.missionId == targetId) missions.splice(i, 1);
            });
            localStorage.missions = JSON.stringify(missions);
            this.router.navigateByUrl('/tabs/tab1');
          }
        }
      ]
    });
    await alert.present();
  }

}
