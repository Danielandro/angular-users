import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";

@NgModule({
  declarations: [UsersComponent, UserDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "users", component: UsersComponent },
      { path: "users/:id", component: UserDetailComponent }
    ])
  ],
  exports: [RouterModule, UsersComponent]
})
export class UserModule {}
