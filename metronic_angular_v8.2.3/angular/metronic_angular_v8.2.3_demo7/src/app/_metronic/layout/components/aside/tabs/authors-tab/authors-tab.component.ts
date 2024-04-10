import { Component, OnInit } from '@angular/core';

type Author = {
  avatar: string;
  name: string;
  description: string;
};

const authors: ReadonlyArray<Author> = [
  {
    avatar: './assets/media/avatars/300-6.jpg',
    name: 'Emma Smith',
    description: 'Project Manager',
  },

  {
    avatar: './assets/media/avatars/300-5.jpg',
    name: 'Sean Bean',
    description: 'PHP, SQLite, Artisan CLI',
  },
  {
    avatar: './assets/media/avatars/300-11.jpg',
    name: 'Brian Cox',
    description: 'HTML5, jQuery, CSS3',
  },

  {
    avatar: './assets/media/avatars/300-23.jpg',
    name: 'Dan Wilson',
    description: 'MangoDB, Java',
  },

  {
    avatar: './assets/media/avatars/300-10.jpg',
    name: 'Natali Trump',
    description: 'NET, Oracle, MySQL',
  },

  {
    avatar: './assets/media/avatars/300-9.jpg',
    name: 'Francis Mitcham',
    description: 'React, Vue',
  },

  {
    avatar: './assets/media/avatars/300-12.jpg',
    name: 'Jessie Clarcson',
    description: 'Angular, React',
  },
];

@Component({
  selector: 'app-authors-tab',
  templateUrl: './authors-tab.component.html',
  styleUrls: ['./authors-tab.component.scss'],
})
export class AuthorsTabComponent implements OnInit {
  allAuthors: ReadonlyArray<Author> = [];
  constructor() {}

  ngOnInit(): void {
    this.allAuthors = authors;
  }
}
