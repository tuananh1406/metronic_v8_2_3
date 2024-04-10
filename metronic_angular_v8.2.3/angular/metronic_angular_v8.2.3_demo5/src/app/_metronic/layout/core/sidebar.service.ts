import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LayoutService } from "./layout.service";

@Injectable({
  providedIn: "root",
})
export class SidebarService {
  initShowSidebar = new BehaviorSubject<boolean>(false);
  public sidebarState = new BehaviorSubject<boolean>(false);
  public showSearch = new BehaviorSubject<boolean>(true);

  constructor(private layout: LayoutService) {
    const state = this.layout.getProp("sidebar.display") as boolean;
    this.initShowSidebar.next(state);
    this.sidebarState.next(state);
  }


  setupBodyClassList(state: boolean) {
    if (state) {
      document.body.classList.add("sidebar-enabled");
    } else {
      document.body.classList.remove("sidebar-enabled");
    }
  }

  public setSidebarState(state: boolean) {
    setTimeout(() => {
      this.sidebarState.next(state);
      this.setupBodyClassList(state);
    }, 60);
  }

  public hideSearch() {
    setTimeout(() => {
      this.showSearch.next(false);
    }, 61);
  }

  public returnSidebarToInitState() {
    this.sidebarState.next(this.initShowSidebar.value);
    this.setupBodyClassList(this.initShowSidebar.value);
    this.showSearch.next(true);
  }
}
