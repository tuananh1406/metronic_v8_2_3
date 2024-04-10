import { Component, OnInit } from "@angular/core";
import { PageInfoService } from "src/app/_metronic/layout";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  constructor(private pageInfo: PageInfoService) {}

  ngOnInit(): void {
    this.pageInfo.updateDescription("(6,299)");
    this.pageInfo.updateBreadcrumbs([]);
  }
}
