import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { PostService } from '../service/post.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public postService:PostService,private router:Router) { }

  ngOnInit(): void {
  }

  openPost(post:any):void {
    this.postService.currentPost = post
    this.router.navigate(['/post'])
  }

}
