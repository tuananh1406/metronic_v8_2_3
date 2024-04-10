import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { LayoutService } from "./core/layout.service";
import { LayoutInitService } from "./core/layout-init.service";
import { SidebarService } from "./core/sidebar.service";
import { Observable } from "rxjs";
import { PageInfoService } from "./core/page-info.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit, AfterViewInit {
  // Public variables
  selfLayout = "default";
  asideSelfDisplay: true;
  asideMenuStatic: true;
  contentClasses = "";
  contentContainerClasses = "";
  toolbarDisplay = true;
  contentExtended: false;
  asideCSSClasses: string;
  asideHTMLAttributes: any = {};
  headerMobileClasses = "";
  headerMobileAttributes = {};
  footerDisplay: boolean;
  headerFixedDesktop?: boolean = false;
  footerCSSClasses: string;
  headerCSSClasses: string;
  headerHTMLAttributes: any = {};
  showSidebar$: Observable<boolean>;
  // offcanvases
  extrasSearchOffcanvasDisplay = false;
  extrasNotificationsOffcanvasDisplay = false;
  extrasQuickActionsOffcanvasDisplay = false;
  extrasCartOffcanvasDisplay = false;
  extrasUserOffcanvasDisplay = false;
  extrasQuickPanelDisplay = false;
  extrasScrollTopDisplay = false;
  asideDisplay: boolean;
  title$: Observable<string>;

  @ViewChild("ktAside", { static: true }) ktAside: ElementRef;
  @ViewChild("ktHeaderMobile", { static: true }) ktHeaderMobile: ElementRef;
  @ViewChild("ktHeader", { static: true }) ktHeader: ElementRef;

  constructor(
    private initService: LayoutInitService,
    private layout: LayoutService,
    private sidebar: SidebarService,
    private pageInfo: PageInfoService
  ) {
    this.initService.init();
    this.showSidebar$ = this.sidebar.sidebarState.asObservable();
  }

  ngOnInit(): void {
    // build view by layout config settings
    this.asideDisplay = this.layout.getProp("aside.display") as boolean;
    this.toolbarDisplay = this.layout.getProp("toolbar.display") as boolean;
    this.headerFixedDesktop = this.layout.getProp("header.fixed.desktop") as
      | boolean
      | undefined;
    this.contentContainerClasses =
      this.layout.getStringCSSClasses("contentContainer");
    this.asideCSSClasses = this.layout.getStringCSSClasses("aside");
    this.headerCSSClasses = this.layout.getStringCSSClasses("header");
    this.headerHTMLAttributes = this.layout.getHTMLAttributes("headerMenu");
    this.footerCSSClasses = this.layout.getStringCSSClasses("footer");
    this.title$ = this.pageInfo.title.asObservable();
  }

  ngAfterViewInit(): void {
    if (this.ktHeader) {
      for (const key in this.headerHTMLAttributes) {
        if (this.headerHTMLAttributes.hasOwnProperty(key)) {
          this.ktHeader.nativeElement.attributes[key] =
            this.headerHTMLAttributes[key];
        }
      }
    }
  }
}
