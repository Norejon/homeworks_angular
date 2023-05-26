import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostDetailsPageComponent } from './pages/post-details-page/post-details-page.component';


@NgModule({
  declarations: [
    PostPageComponent,
    PostsComponent,
    PostComponent,
    PostDetailComponent,
    PostDetailsPageComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule {

  constructor() {
    console.log('1');
  }
}
