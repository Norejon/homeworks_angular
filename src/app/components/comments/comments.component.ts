import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from "../../services";
import {CommentInterface} from "../../interfaces";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  @Input()
  postId:number;
  comments:CommentInterface[];
  constructor(private commentsService:CommentsService) {
  }
  ngOnInit(): void {
    this.commentsService.getCommentsByPostId(this.postId).subscribe(value => this.comments=value)
  }

}
