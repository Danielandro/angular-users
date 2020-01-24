import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsComponent } from "./post-list/post-list.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "posts", component: PostsComponent }])
  ],
  exports: [RouterModule]
})
export class PostModule {}
