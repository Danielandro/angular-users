import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IPost } from "./models/post";
import { tap, catchError, shareReplay } from "rxjs/operators";
import { UserService } from "../users/user.service";

class Hello {
  constructor(public world: string) {}
}
@Injectable({
  providedIn: "root"
})
export class PostService {
  postUrl: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient, private userService: UserService) {}
  hello = new Hello("Earth");

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postUrl).pipe(
      tap(posts => console.log("Getting posts")),
      shareReplay(1),
      catchError(this.handleError)
    );
  }

  getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.postUrl}/${id}`).pipe(
      tap(post => console.log("Getting book...")),
      catchError(this.handleError)
    );
  }

  returnHello() {
    return this.hello;
  }

  // getPostWithUser(id: number): Observable<any> {
  //   // get userId from the post
  //   return this.getPost(id).pipe(
  //     concatMap(post => this.userService.getUser(post.userId))
  //   )
  //   // use that to get the user
  //   // return both pieces of info to the template
  // };

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
