import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostServiceService} from "../../../../services";
import {IPost} from "../../../../interfaces";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
    this.postServiceService.getById(id).subscribe(value => this.post=value)}
    )
  }

  post:IPost;

  constructor(private activatedRoute:ActivatedRoute,private postServiceService:PostServiceService) {
  }

}
