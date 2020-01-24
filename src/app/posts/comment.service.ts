import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IComment } from "./models/comment";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CommentService {
  commentUrl: string =
    "https://jsonplaceholder.typicode.com/comments?_limit=100";

  constructor(private http: HttpClient) {}

  getComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.commentUrl).pipe(tap(console.log));
  }
}
