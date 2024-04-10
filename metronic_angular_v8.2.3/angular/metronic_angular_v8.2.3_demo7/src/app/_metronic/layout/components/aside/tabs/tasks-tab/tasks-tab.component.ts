import { Component, OnInit } from '@angular/core';

type Task = {
  icon: string;
  color: 'success' | 'warning' | 'primary' | 'danger' | 'info';
  title: string;
  description: string;
};

const tasks: ReadonlyArray<Task> = [
  {
    icon: './assets/media/icons/duotune/abstract/abs027.svg',
    color: 'success',
    title: 'Project Briefing',
    description: 'Project Manager',
  },
  {
    icon: './assets/media/icons/duotune/art/art005.svg',
    color: 'warning',
    title: 'Concept Design',
    description: 'Art Director',
  },
  {
    icon: './assets/media/icons/duotune/communication/com012.svg',
    color: 'primary',
    title: 'Functional Logics',
    description: 'Lead Developer',
  },
  {
    icon: './assets/media/icons/duotune/coding/cod008.svg',
    color: 'danger',
    title: 'Development',
    description: 'DevOps',
  },
  {
    icon: './assets/media/icons/duotune/general/gen049.svg',
    color: 'info',
    title: 'Testing',
    description: 'QA Managers',
  },
  {
    icon: './assets/media/icons/duotune/finance/fin006.svg',
    color: 'success',
    title: 'HTML, CSS Coding',
    description: 'Art Director',
  },
  {
    icon: './assets/media/icons/duotune/graphs/gra008.svg',
    color: 'danger',
    title: 'ReactJS Developer',
    description: 'Web, UI/UX Design',
  },
];

@Component({
  selector: 'app-tasks-tab',
  templateUrl: './tasks-tab.component.html',
  styleUrls: ['./tasks-tab.component.scss'],
})
export class TasksTabComponent implements OnInit {
  allTasks: ReadonlyArray<Task> = [];
  constructor() {}

  ngOnInit(): void {
    this.allTasks = tasks;
  }
}
