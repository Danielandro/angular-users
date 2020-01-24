import { Component, OnInit } from "@angular/core";
import { IUser } from "../user";
import { UserService } from "../user.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-users",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UsersComponent implements OnInit {
  pageTitle: string = "Users";
  users$: Observable<IUser[]>;
  errorMessage: string = "Unable to get users";
  constructor(private userService: UserService) {}

  ngOnInit() {
    // get all users
    this.users$ = this.userService.getUsers();
  }
}
