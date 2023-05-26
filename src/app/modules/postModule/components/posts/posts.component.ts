import {Component, OnInit} from '@angular/core';
import {PostServiceService} from "../../../../services";
import {IPost} from "../../../../interfaces";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts:IPost[];

  constructor(private postServiceService:PostServiceService) {
  }

  ngOnInit(): void {
    this.postServiceService.getAll().subscribe(value => this.posts=value)
  }

}
