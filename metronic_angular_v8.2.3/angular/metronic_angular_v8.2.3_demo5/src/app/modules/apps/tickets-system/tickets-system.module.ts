import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardsModule, DropdownMenusModule } from "src/app/_metronic/partials";
import { InlineSVGModule } from "ng-inline-svg-2";
import { TicketsSystemComponent } from "./tickets-system.component";
import { AskComponent } from "./pages/ask/ask.component";
import { MainComponent } from "./pages/main/main.component";
import { SearchComponent } from "./pages/search/search.component";
import { TagComponent } from "./pages/tag/tag.component";
import { QuestionsComponent } from "./pages/questions/questions.component";
import { TicketsSystemRoutingModule } from "./tickets-system.routing.module";
import { QuestionsListComponent } from "./components/questions-list/questions-list.component";
import { RepliesComponent } from "./components/replies/replies.component";
import { TextFormattingComponent } from "./components/text-formatting/text-formatting.component";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { ReplyComponent } from "./pages/reply/reply.component";

@NgModule({
  declarations: [
    TicketsSystemComponent,
    AskComponent,
    MainComponent,
    SearchComponent,
    TagComponent,
    QuestionsComponent,
    QuestionsListComponent,
    RepliesComponent,
    TextFormattingComponent,
    ReplyComponent
  ],
  imports: [
    CommonModule,
    TicketsSystemRoutingModule,
    DropdownMenusModule,
    CardsModule,
    InlineSVGModule,
    NgbTooltipModule,
  ],
})
export class TicketsSystemModule {}
