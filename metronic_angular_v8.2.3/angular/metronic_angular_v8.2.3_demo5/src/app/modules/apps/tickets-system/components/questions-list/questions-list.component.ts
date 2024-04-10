import { Component, OnInit } from "@angular/core";
import { paginationsList, Question, questionsList } from "../../models";

@Component({
  selector: "app-questions-list",
  templateUrl: "./questions-list.component.html",
  styleUrls: ["./questions-list.component.scss"],
})
export class QuestionsListComponent implements OnInit {
  questions: ReadonlyArray<Question> = [];
  paginations: ReadonlyArray<string> = [];
  constructor() {}

  ngOnInit(): void {
    this.questions = questionsList;
    this.paginations = paginationsList;
  }
}
