import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsComponent } from "./posts.component";
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
