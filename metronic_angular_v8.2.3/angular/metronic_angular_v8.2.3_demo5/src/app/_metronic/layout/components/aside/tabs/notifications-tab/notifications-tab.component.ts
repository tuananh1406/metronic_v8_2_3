import { Component, OnInit } from '@angular/core';

type Notification = {
  color: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'danger';
  icon: string;
  title: string;
  text: string;
  number: string;
};

const notifications: ReadonlyArray<Notification> = [
  {
    color: 'warning',
    icon: './assets/media/icons/duotune/abstract/abs027.svg',
    title: 'Group lunch celebration',
    text: 'Due in 29 Days',
    number: '+28%',
  },

  {
    color: 'success',
    icon: './assets/media/icons/duotune/files/fil008.svg',
    title: 'Navigation optimization',
    text: 'Due in 2 Days',
    number: '+50%',
  },

  {
    color: 'danger',
    icon: './assets/media/icons/duotune/communication/com012.svg',
    title: 'Humbert Bresnen',
    text: 'Due in 5 Days',
    number: '-27%',
  },

  {
    color: 'info',
    icon: './assets/media/icons/duotune/finance/fin006.svg',
    title: 'Air B & B - Real Estate',
    text: 'Due in 8 Days',
    number: '+21%',
  },

  {
    color: 'primary',
    icon: './assets/media/icons/duotune/arrows/arr031.svg',
    title: 'B & Q - Food Company',
    text: 'Due in 6 Days',
    number: '+12%',
  },

  {
    color: 'danger',
    icon: './assets/media/icons/duotune/art/art005.svg',
    title: 'Nexa - Next generation',
    text: 'Due in 4 Days',
    number: '+34%',
  },
];
@Component({
  selector: 'app-notifications-tab',
  templateUrl: './notifications-tab.component.html',
  styleUrls: ['./notifications-tab.component.scss'],
})
export class NotificationsTabComponent implements OnInit {
  allNotifications: ReadonlyArray<Notification> = [];
  constructor() {}

  ngOnInit(): void {
    this.allNotifications = notifications;
  }
}
