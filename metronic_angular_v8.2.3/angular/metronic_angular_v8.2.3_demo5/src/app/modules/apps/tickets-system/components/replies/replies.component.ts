import { Component, OnInit } from "@angular/core";
import { paginationsList, repliesList, Reply } from "../../models";

@Component({
  selector: "app-replies",
  templateUrl: "./replies.component.html",
  styleUrls: ["./replies.component.scss"],
})
export class RepliesComponent implements OnInit {
  replies: ReadonlyArray<Reply> = [];
  paginations: ReadonlyArray<string> = [];

  constructor() {}

  ngOnInit(): void {
    this.replies = repliesList;
    this.paginations = paginationsList;
  }
}
