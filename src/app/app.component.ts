import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CoreModule } from "./core/core.module";
import { TodoListComponent } from "./todo-list/todo-list.component";

const IMPORTS = [CoreModule];

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ...IMPORTS, TodoListComponent],
  template: "<app-todo-list></app-todo-list>",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Todo List App";
}
