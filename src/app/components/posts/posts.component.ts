import { Component, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";
import { IPost } from "src/app/models/post";
import { Observable } from "rxjs";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  pageTitle: string = "Posts";
  posts$: Observable<IPost[]>;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }
}
