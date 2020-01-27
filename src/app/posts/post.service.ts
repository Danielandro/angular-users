import { Injectable } from "@angular/core";
import { Observable, throwError, forkJoin, of } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IPost } from "./models/post";
import {
  tap,
  catchError,
  shareReplay,
  map,
  distinctUntilChanged
} from "rxjs/operators";

class Hello {
  constructor(public world: string) {}
}
@Injectable({
  providedIn: "root"
})
export class PostService {
  private postUrl: string = "https://jsonplaceholder.typicode.com/posts";
  private allPosts: Observable<IPost[]> = this.http
    .get<IPost[]>(this.postUrl)
    // shareReplay caches the response, distinct only updates data if it changes
    .pipe(distinctUntilChanged(), shareReplay(1));

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.allPosts.pipe(
      tap(posts => console.log("Getting posts")),
      catchError(this.handleError)
    );
  }

  // both are the same
  getPost(id: number): Observable<IPost> {
    return this.allPosts.pipe(
      map(posts => posts.find(post => post.id === id)),
      tap(post => console.log("Getting book...")),
      catchError(this.handleError)
    );
  }

  getPostById(id: number) {
    return this.http
      .get(`${this.postUrl}/${id}`)
      .pipe(tap(console.log), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    // in the real world, we may send the server to some remote logging infrastructure
    // instead of logging to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occured. Handle it accordingly!
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
