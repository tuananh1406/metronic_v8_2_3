import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../../core/layout.service';

type Tabs =
  | 'kt_sidebar_tab_1'
  | 'kt_sidebar_tab_2'
  | 'kt_sidebar_tab_3'
  | 'kt_sidebar_tab_4'
  | 'kt_sidebar_tab_5';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private layout: LayoutService) {
  }

  activeTab: Tabs = 'kt_sidebar_tab_1';

  setTab(e: Event, tab: Tabs) {
    e.preventDefault();
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  ngOnInit(): void {
  }
}
