import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../services";
import {IPost} from "../../../interfaces/post.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService,private router:Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      let state = this.router.getCurrentNavigation()?.extras.state as IPost;
      this.postService.getById(id).subscribe(value => this.post = value)
    })
  }

}
