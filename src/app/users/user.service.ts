import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IUser } from "./user";
import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  userUrl: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) {}

  // GET all users
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.userUrl).pipe(
      tap(_ => console.log("Getting users...")),
      catchError(this.handleError)
    );
  }

  // GET a user
  getUser(id: number): Observable<IUser> {
    return this.getUsers().pipe(
      tap(users => console.log("Users found: ", users.length)),
      map(users => users.find(user => user.id === id)),
      tap(user => console.log("User found: ", user)),
      catchError(this.handleError)
    );
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
