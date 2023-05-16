import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentInterface} from "../interfaces/comment.interface";
import {urls} from "../constants/urls/urls";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient:HttpClient) { }
  getCommentsByPostId(id:number):Observable<CommentInterface[]>{
    return this.httpClient.get<CommentInterface[]>(`${urls.posts}/${id}/comments`)
  }
}
