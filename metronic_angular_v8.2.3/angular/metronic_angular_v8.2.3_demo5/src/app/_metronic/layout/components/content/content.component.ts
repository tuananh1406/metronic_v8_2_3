import { Component, OnDestroy, OnInit } from "@angular/core";
import { NavigationCancel, NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs/internal/Subscription";
import { PageInfoService } from "../../core/page-info.service";
import { SidebarService } from "../../core/sidebar.service";
@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent implements OnInit, OnDestroy {
  private unsubscribe: Subscription[] = [];

  constructor(
    private router: Router,
    private pageInfo: PageInfoService,
    private sidebar: SidebarService
  ) {}

  ngOnInit(): void {
    this.routingChanges();
  }

  routingChanges() {
    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        // DrawerComponent.hideAll();
        this.pageInfo.setDescription("");
        this.sidebar.returnSidebarToInitState();
      }
    });
    this.unsubscribe.push(routerSubscription);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
