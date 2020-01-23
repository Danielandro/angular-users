import { Component, OnInit } from "@angular/core";
import { IUser } from "../../models/user";
import { UserService } from "../../services/user.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  pageTitle: string = "Users";
  users$: Observable<IUser[]>;
  errorMessage: string = "Unable to get users";
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }
}
