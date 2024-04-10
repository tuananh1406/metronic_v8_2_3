import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketsSystemComponent } from "./tickets-system.component";
import { AskComponent } from "./pages/ask/ask.component";
import { MainComponent } from "./pages/main/main.component";
import { QuestionsComponent } from "./pages/questions/questions.component";
import { SearchComponent } from "./pages/search/search.component";
import { TagComponent } from "./pages/tag/tag.component";
import { ReplyComponent } from "./pages/reply/reply.component";

const routes: Routes = [
  {
    path: "",
    component: TicketsSystemComponent,
    children: [
      {
        path: "main",
        component: MainComponent,
      },
      {
        path: "search",
        component: SearchComponent,
      },
      {
        path: "replies",
        component: ReplyComponent,
      },
      {
        path: "tag",
        component: TagComponent,
      },
      {
        path: "ask",
        component: AskComponent,
      },
      {
        path: "questions",
        component: QuestionsComponent,
      },
      { path: "", redirectTo: "main", pathMatch: "full" },
      { path: "**", redirectTo: "main", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsSystemRoutingModule {}
