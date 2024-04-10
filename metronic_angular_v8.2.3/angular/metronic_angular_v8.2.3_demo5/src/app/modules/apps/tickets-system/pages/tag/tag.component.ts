import { Component, OnInit } from "@angular/core";
import { PageInfoService } from "src/app/_metronic/layout";
import { moduleBC } from "../../models";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.scss"],
})
export class TagComponent implements OnInit {
  constructor(private pageInfo: PageInfoService) {}

  ngOnInit(): void {
    this.pageInfo.updateTitle("Tag: Metronic");
    this.pageInfo.updateBreadcrumbs(moduleBC);
  }
}
