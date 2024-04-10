import { Component, OnInit } from "@angular/core";
import { SidebarService } from "src/app/_metronic/layout";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  constructor(private sidebar: SidebarService) {}

  ngOnInit(): void {
    this.sidebar.hideSearch();
  }
}
