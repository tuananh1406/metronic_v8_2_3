import { Component, OnDestroy, OnInit } from "@angular/core";
import { NavigationCancel, NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { SidebarService } from "../../../_metronic/layout";

@Component({
  selector: "app-tickets-system",
  templateUrl: "./tickets-system.component.html",
  styleUrls: ["./tickets-system.component.scss"],
})
export class TicketsSystemComponent implements OnInit, OnDestroy {
  private unsubscribe: Subscription[] = [];

  constructor(private router: Router, private sidebar: SidebarService) {}

  ngOnInit(): void {
    this.sidebar.setSidebarState(true);
    this.routingChanges();
  }

  routingChanges() {
    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.sidebar.setSidebarState(true);
      }
    });
    this.unsubscribe.push(routerSubscription);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
