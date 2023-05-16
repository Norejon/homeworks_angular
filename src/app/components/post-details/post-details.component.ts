import {Component, Input, OnInit} from '@angular/core';
import {PostInterface} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{
  @Input()
  post:PostInterface;
  postId:number;
  constructor() {
  }
  ngOnInit(): void {
  }

  getComment():void {
this.postId=this.post.id
  }
}
