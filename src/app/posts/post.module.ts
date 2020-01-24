import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsComponent } from "./post-list/post-list.component";
import { RouterModule } from "@angular/router";
import { PostDetailComponent } from "./post-detail/post-detail.component";

@NgModule({
  declarations: [PostsComponent, PostDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "posts", component: PostsComponent },
      { path: "posts/:id", component: PostDetailComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PostModule {}
