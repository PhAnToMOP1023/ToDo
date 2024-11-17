import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule,  } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from "../add-todo/add-todo.component";


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  localItem: string | null = null;
  todos!:Todo[];
  
  
  constructor () { 
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      this.localItem = localStorage.getItem('todos');
      if (this.localItem === null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    }


  else{
    this.todos = JSON.parse(this.localItem || '[]');
    
  }


  }
  ngOnInit(): void {
  }
  DeleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){
    console.log(todo);
    
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
}

