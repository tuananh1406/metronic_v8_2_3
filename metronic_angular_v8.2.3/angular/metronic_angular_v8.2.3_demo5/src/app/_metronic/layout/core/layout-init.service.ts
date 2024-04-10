import { Injectable } from "@angular/core";
import { ILayout } from "./default-layout.config";
import { LayoutService } from "./layout.service";

@Injectable({
  providedIn: "root",
})
export class LayoutInitService {
  constructor(private layout: LayoutService) {}

  init() {
    this.layout.initConfig();

    // init base layout
    this.initLayout();
    this.initHeader();
    this.initPageTitle();
    this.initToolbar();
    this.initContent();
    this.initAside();
    this.initFooter();
  }

  update(fieldsToUpdate: Partial<ILayout>) {
    this.layout.updateConfig(fieldsToUpdate);
    this.initLayout();
    this.initHeader();
    this.initPageTitle();
    this.initToolbar();
    this.initContent();
    this.initAside();
    this.initFooter();
  }

  private initLayout() {
    document.body.setAttribute("style", "");
    document.body.setAttribute("id", "kt_body");
  }

  private initHeader() {
    this.layout.setCSSClass(
      "headerContainer",
      this.layout.getProp("header.width") === "fluid"
        ? "container-fluid"
        : "container-xxl"
    );

    const fixedDesktop = this.layout.getProp("header.fixed.desktop") as boolean;
    if (fixedDesktop) {
      document.body.classList.add("header-fixed");
    }

    const tabletAndMobile = this.layout.getProp(
      "header.fixed.tabletAndMobile"
    ) as boolean;
    if (tabletAndMobile) {
      document.body.classList.add("header-tablet-and-mobile-fixed");
    }
  }

  private initPageTitle() {}

  private initToolbar() {}

  private initContent() {
    const width = this.layout.getProp("content.width") as string;
    this.layout.setCSSClass(
      "contentContainer",
      width === "fluid" ? "container-fluid" : "container-xxl"
    );
  }

  private initAside() {
    const display = this.layout.getProp("aside.display") as boolean;
    if (display) {
      document.body.classList.add("aside-enabled");
    }
  }

  private initFooter() {
    const width = this.layout.getProp("footer.width") as string;
    this.layout.setCSSClass(
      "footerContainer",
      width === "fluid" ? "container-fluid" : "container-xxl"
    );
  }
}
