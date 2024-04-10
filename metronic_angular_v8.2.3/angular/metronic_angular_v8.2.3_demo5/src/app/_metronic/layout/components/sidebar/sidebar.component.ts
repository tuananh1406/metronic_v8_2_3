import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SidebarService } from "../../core/sidebar.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  showSearch$: Observable<boolean>;
  questions: ReadonlyArray<string> = [
    "How to use Metrponic with Django Framework ?",
    "When to expect new version of Metronic Laravel ?",
    "Could not get Metronic Demo 7 working",
    "I want to get a refund",
    "How to use Metrponic with Rails Framework ?",
  ];
  tutorials: ReadonlyArray<string> = [
    "How to use customize Metronoc's SASS",
    "How to change web font globally",
    "How to setup dark mode",
    "Metronic file structure and build tools",
    "Metronic integration with Blazor server side",
  ];
  constructor(private sidebar: SidebarService) {
    this.showSearch$ = this.sidebar.showSearch.asObservable();
  }

  ngOnInit(): void {}
}
