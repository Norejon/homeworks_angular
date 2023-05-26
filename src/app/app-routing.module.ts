import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes:Routes=[
  {path:"",component:MainLayoutComponent,children:[
      {path:"", redirectTo:"posts",pathMatch:"full"},
      {path:"posts",loadChildren:()=>import("./modules/postModule/post.module").then(m=>m.PostModule)},
      {path:"comments",loadChildren:()=>import("./modules/commentModule/comment.module").then(m=>m.CommentModule)}
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
