import { Component, OnInit } from "@angular/core";
import { IUser } from "src/app/models/user";
import { UserService } from "../../../services/user.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  pageTitle: string = "User Details";
  user$: Observable<IUser>;
  errorMessage: string = "Unable to retrieve user";
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.getUser(1);
  }
}
