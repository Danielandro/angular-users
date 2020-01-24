import { Component, OnInit } from "@angular/core";
import { IPost } from "../models/post";
import { Observable } from "rxjs";
import { PostService } from "../post.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  pageTitle: string = "Post details";
  post$: Observable<IPost>;
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.post$ = this.postService.getPost(1);
  }

  goBack(): void {
    this.router.navigate(["/posts"]);
  }
}
