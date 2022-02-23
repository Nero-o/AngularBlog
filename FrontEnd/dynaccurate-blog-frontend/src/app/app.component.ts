import { Component } from '@angular/core';
import { PostService } from './service/post.service';


//@ts-ignore
import api from "../service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynaccureatblog';
  posts = [{data: '', id: '', titulo: ''}];

  constructor(private postService:PostService) {}

  ngOnInit() {
   this.postService.getAllPosts()
  }
}