import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Todo } from "../../models/todo.model";

@Component({
  selector: "app-todo-list",
  // standalone: true,
  // imports: [CommonModule, FormsModule],
  templateUrl: "./todo-list.component.html",
  styleUrl: "./todo-list.component.css",
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodoTitle: string = "";

  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.newTodoTitle.trim(),
        completed: false,
      };
      this.todos.push(newTodo);
      this.newTodoTitle = "";
    }
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
