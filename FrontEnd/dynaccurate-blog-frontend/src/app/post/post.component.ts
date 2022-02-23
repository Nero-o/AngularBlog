import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:any

  constructor(public postService:PostService) {
   
   }

  ngOnInit(): void {
  }

}
