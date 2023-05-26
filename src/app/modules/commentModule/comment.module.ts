import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentPageComponent } from './pages/comment-page/comment-page.component';


@NgModule({
  declarations: [
    CommentPageComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ]
})
export class CommentModule {
  constructor() {
    console.log("2")
  }
}
