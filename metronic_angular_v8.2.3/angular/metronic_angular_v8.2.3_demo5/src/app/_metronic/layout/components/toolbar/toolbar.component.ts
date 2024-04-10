import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Observable } from "rxjs";
import { LayoutService } from "../../core/layout.service";
import { PageInfoService } from "../../core/page-info.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit, AfterViewInit {
  @ViewChild("ktPageTitle", { static: true }) ktPageTitle: ElementRef;
  pageTitleDisplay?: boolean;
  headerLeft: string = "";
  toolbarActions: boolean;
  title$: Observable<string>

  pageTitleAttributes: {
    [attrName: string]: string | boolean;
  };
  toolbarContainerCssClasses: string = "";
  pageTitleCssClasses: string = "";

  constructor(private layout: LayoutService, private pageInfo: PageInfoService) {}

  ngOnInit(): void {
    this.toolbarContainerCssClasses =
      this.layout.getStringCSSClasses("toolbarContainer");
    this.pageTitleCssClasses = this.layout.getStringCSSClasses("pageTitle");
    this.pageTitleAttributes = this.layout.getHTMLAttributes("pageTitle");
    this.pageTitleDisplay = this.layout.getProp("pageTitle.display") as
      | boolean
      | undefined;
    this.headerLeft = this.layout.getProp("header.left") as string;
    this.toolbarActions = this.layout.getProp("toolbar.actions") as boolean;
    this.title$ = this.pageInfo.title.asObservable()
  }

  ngAfterViewInit() {
    if (this.ktPageTitle) {
      for (const key in this.pageTitleAttributes) {
        if (
          this.pageTitleAttributes.hasOwnProperty(key) &&
          this.ktPageTitle.nativeElement
        ) {
          this.ktPageTitle.nativeElement.attributes[key] =
            this.pageTitleAttributes[key];
        }
      }
    }
  }
}
