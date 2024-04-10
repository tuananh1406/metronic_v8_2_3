export type Icon = {
  path: string;
  class: string;
  tooltip: string;
};

export type Question = {
  title: string;
  summary: string;
  author: string;
  date: string;
  avatar?: string;
  answers: string;
  upvotes: string;
  icons: ReadonlyArray<Icon>;
  tags: ReadonlyArray<string>;
};

export type Reply = {
  message: string;
  author: string;
  date: string;
  avatar?: string;
  upvotes: string;
  indent: string;
};

export const questionsList: ReadonlyArray<Question> = [
  {
    title: "How to use Metronic with Django Framework ?",
    summary:
      "I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.",
    author: "James Hunt",
    date: "24 minutes ago",
    avatar: undefined,
    answers: "16",
    upvotes: "23",
    icons: [
      {
        path: "./assets/media/icons/duotune/general/gen045.svg",
        class: "svg-icon-primary",
        tooltip: "New question",
      },
      {
        path: "./assets/media/icons/duotune/communication/com010.svg",
        class: "svg-icon-danger",
        tooltip: "User replied",
      },
    ],
    tags: ["Metronic"],
  },
  {
    title: "When to expect new version of Laravel ?",
    summary:
      "When approx. is the next update for the Laravel version planned? Waiting for the CRUD, 2nd factor etc. features before starting my project. Also can we expect the Laravel + Vue version in the next update ?",
    author: "Sandra Piquet",
    date: "1 day ago",
    avatar: "./assets/media/avatars/300-2.jpg",
    answers: "2",
    upvotes: "4",
    icons: [
      {
        path: "./assets/media/icons/duotune/general/gen044.svg",
        class: "svg-icon-warning",
        tooltip: "In-process",
      },
    ],
    tags: ["Pre-sale"],
  },

  {
    title: "Could not get Demo 7 working",
    summary:
      "could not get demo7 working from latest metronic version. Had a lot of issues installing, I had to downgrade my npm to 6.14.4 as someone else recommended here in the comments, this goot it to compile but when I ran it, the browser showed errors TypeErr..",
    author: "Niko Roseberg",
    date: "2 days ago",
    answers: "4",
    upvotes: "",
    icons: [
      {
        path: "./assets/media/icons/duotune/general/gen044.svg",
        class: "svg-icon-warning",
        tooltip: "In-process",
      },
    ],
    tags: ["Angular"],
  },

  {
    title: "I want to get refund",
    summary:
      "Your Metronic theme is so good but the reactjs version is typescript only. The description did not write any warn about it. Since I only know javascript, I can not do anything with your theme. I want to refund.",
    author: "Alex Bold",
    date: "1 day ago",
    avatar: "./assets/media/avatars/300-23.jpg",
    answers: "22",
    upvotes: "11",
    icons: [
      {
        path: "./assets/media/icons/duotune/general/gen043.svg",
        class: "svg-icon-success",
        tooltip: "Resolved",
      },
    ],
    tags: ["React", "Demo 1"],
  },

  {
    title: "How to integrate Metronic with Blazor Server Side ?",
    summary:
      "could not get demo7 working from latest metronic version. Had a lot of issues installing, I had to downgrade my npm to 6.14.4 as someone else recommended here in the comments, this goot it to compile but when I ran it, the browser showed errors TypeErr..",
    author: "Tim Nilson",
    date: "3 days ago",
    answers: "44",
    upvotes: "3",
    icons: [
      {
        path: "./assets/media/icons/duotune/general/gen043.svg",
        class: "svg-icon-success",
        tooltip: "In-process",
      },
    ],
    tags: ["Blazor"],
  },

  {
    title: "Using Metronic with .NET multi tenant application",
    summary:
      "When approx. is the next update for the Laravel version planned? Waiting for the CRUD, 2nd factor etc. features before starting my project. Also can we expect the Laravel + Vue version in the next update ?",
    author: "Ana Quil",
    date: "5 days ago",
    avatar: "./assets/media/avatars/300-10.jpg",
    answers: "2",
    upvotes: "4",
    icons: [
      {
        path: "./assets/media/icons/duotune/general/gen043.svg",
        class: "svg-icon-success",
        tooltip: "Resolved",
      },
    ],
    tags: ["Aspdotnet"],
  },
];

export const repliesList: ReadonlyArray<Reply> = [
  {
    message:
      "I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.",
    author: "Sandra Piquet",
    date: "24 minutes ago",
    avatar: "./assets/media/avatars/300-2.jpg",
    upvotes: "",
    indent: "",
  },

  {
    message:
      "I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.",
    author: "Niko Roseberg",
    date: "1 day ago",
    upvotes: "2",
    indent: "ms-5 ms-lg-10",
  },

  {
    message:
      "I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.",
    author: "Sandra Piquet",
    date: "24 minutes ago",
    avatar: "./assets/media/avatars/300-12.jpg",
    upvotes: "6",
    indent: "",
  },

  {
    message:
      "I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.",
    author: "Sandra Piquet",
    date: "24 minutes ago",
    upvotes: "4",
    indent: "",
  },

  {
    message:
      "I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.",
    author: "Niko Roseberg",
    date: "1 day ago",
    avatar: "./assets/media/avatars/300-20.jpg",
    upvotes: "",
    indent: "",
  },
];

export const paginationsList: ReadonlyArray<string> = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "..",
  "19",
];

export const moduleBC = [
  {
    title: "Home",
    path: "/apps/tickets-system/main",
    isActive: false,
    isSeparator: false,
  },
  {
    title: "",
    path: "/apps/tickets-system/main",
    isActive: false,
    isSeparator: true,
  },
  {
    title: "Apps",
    path: "/apps/tickets-system/main",
    isActive: false,
    isSeparator: false,
  },
  {
    title: "Devs forum",
    path: "/apps/tickets-system/main",
    isActive: false,
    isSeparator: false,
  },
  {
    title: "Apps",
    path: "/apps/tickets-system/main",
    isActive: false,
    isSeparator: true,
  },
]