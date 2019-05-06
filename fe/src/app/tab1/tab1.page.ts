import { Component, OnInit } from '@angular/core';
import { PostsService } from '../modules/data-provider/services/posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  posts = [];

  constructor(private postsService: PostsService,
  ) {

  }

  ngOnInit(): void {
    this.postsService.getPosts()
      .then(posts => {
        this.posts = posts;
      });
  }

}
