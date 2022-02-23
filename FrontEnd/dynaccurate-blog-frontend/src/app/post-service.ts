// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class PostService{

//   private postsUrl: string;

//   constructor(private http: HttpClient) { 
//     this.postsUrl = 'http://localhost:8080/posts';
//   }

//   public findAll(): Observable<Post.Post[]> {
//     return this.http.get<Post.Post[]>(this.postsUrl);
//   }

//   public save(post: Post.Post) {
//     return this.http.post<Post.Post>(this.postsUrl, post);
//   }
// }
