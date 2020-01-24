import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IPost } from "./models/post";
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostService {
  postUrl: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http
      .get<IPost[]>(this.postUrl)
      .pipe(tap(posts => console.log("Getting posts")));
  }

  getPost(id: number): Observable<IPost> {
    return this.getPosts().pipe(
      map(posts => posts.find(post => post.id === id))
    );
  }
}
