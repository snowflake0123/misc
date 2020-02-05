import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { WordpressService } from '../wordpress.service';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // posts: {
  //   ID: number;
  //   title: string;
  //   content: string;
  //   date: string;
  // }[] = [];
  posts: IPost[] = [];
  constructor(
    // public http: HttpClient,
    public wordpress: WordpressService,
    public loadingController: LoadingController,
  ) {}

  async ionViewDidEnter() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    if (!this.posts.length) {
      await loading.present();
    }
    // this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/')
    this.wordpress.getPosts()
    .subscribe(data => {
      this.posts = data['posts'];
      loading.dismiss();
    });
  }

  trackByFn(index, item): number {
    return item.ID;
  }

}
