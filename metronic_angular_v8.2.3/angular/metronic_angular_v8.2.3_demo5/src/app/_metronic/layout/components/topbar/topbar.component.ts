import { Component } from "@angular/core";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
})
export class TopbarComponent {
  itemClass: string = "ms-1 ms-lg-2";
  btnClass: string =
    "btn btn-icon btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px";
  toolbarButtonIconSizeClass: string = "svg-icon-1";
}
