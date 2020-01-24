import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { IPost } from "src/app/posts/post";
import { Observable } from "rxjs";

@Component({
  selector: "app-post",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostsComponent implements OnInit {
  pageTitle: string = "Posts";
  posts$: Observable<IPost[]>;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }
}
