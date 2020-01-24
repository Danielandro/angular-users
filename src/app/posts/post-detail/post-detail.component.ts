import { Component, OnInit } from "@angular/core";
import { IPost } from "../models/post";
import { Observable } from "rxjs";
import { PostService } from "../post.service";
import { Router, ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  pageTitle: string = "Post details";
  post$: Observable<IPost>;
  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      switchMap(params => this.postService.getPost(+params.get("id")))
    );
  }

  goBack(): void {
    this.router.navigate(["/posts"]);
  }
}
