import { Component, OnInit } from "@angular/core";
import { IPost } from "../models/post";
import { Observable } from "rxjs";
import { PostService } from "../post.service";
import { Router, ActivatedRoute } from "@angular/router";
import { switchMap, map, tap } from "rxjs/operators";
import { UserService } from "src/app/users/user.service";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  pageTitle: string = "Post details";
  post$: Observable<IPost>;
  username$: Observable<string>;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      switchMap(params => this.postService.getPostById(+params.get("id"))),
      // use side effect to get username using data from post
      tap(post => this.setPostUsername(post.userId)),
      tap(post => console.log(`Post: ${post}`))
    );

    // Example using combineLatest to build a new object
    // this.userList$ = this.userService.getUsers();
    // combineLatest(this.post$, this.userList$)
    //   .pipe(
    //     map(([post, users]) => {
    //       const userId = post.userId;
    //       const postUser = users.find(user => user.id === userId);

    //       console.log("map", postUser);
    //       return;
    //     })
    //   )
    //   .subscribe(console.log);
  }

  goBack(): void {
    this.router.navigate(["/posts"]);
  }

  // call this in the side effect after getting post
  // returns an observable string of username
  setPostUsername(userId: number) {
    this.username$ = this.userService
      .getUser(userId)
      .pipe(map(user => user.name));
  }
}
