import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { PostDetailsPageComponent } from './pages/post-details-page/post-details-page.component';

const routers:Routes = [
  {path:"",component:MainLayoutComponent,children:[
      {path:"",redirectTo:"posts",pathMatch:"full"},
      {path:"posts",component:PostPageComponent,children:[
          {path:":id",component:PostDetailsPageComponent}
        ]},
      {path:"comments",component:CommentsPageComponent}
    ]}
]
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PostPageComponent,
    CommentsPageComponent,
    HeaderComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    PostDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
