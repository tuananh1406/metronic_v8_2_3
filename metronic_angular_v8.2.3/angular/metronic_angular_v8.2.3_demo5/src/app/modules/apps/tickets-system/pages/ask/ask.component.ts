import { Component, OnInit } from "@angular/core";
import { PageInfoService } from "src/app/_metronic/layout";
import { moduleBC } from "../../models";

@Component({
  selector: "app-ask",
  templateUrl: "./ask.component.html",
  styleUrls: ["./ask.component.scss"],
})
export class AskComponent implements OnInit {
  constructor(private pageInfo: PageInfoService) {}

  ngOnInit(): void {
    this.pageInfo.updateTitle("Ask a Questions");
    this.pageInfo.updateBreadcrumbs(moduleBC);
  }
}
