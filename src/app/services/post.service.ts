import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IPost } from "../models/post";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostService {
  postUrl: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http
      .get<IPost[]>(this.postUrl)
      .pipe(tap(posts => console.log("Posts: ", posts)));
  }
}
