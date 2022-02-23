import { Injectable } from '@angular/core';
import {ApiService} from './apiHttp.service'
@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts:any[] = []
  currentPost:any

  constructor(private api:ApiService) { }

  getAllPosts():void {
    this.api.getPosts().subscribe((result) => {
      this.posts = result
    })
  }

}
