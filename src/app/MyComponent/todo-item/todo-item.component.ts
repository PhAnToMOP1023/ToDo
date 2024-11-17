import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Todo } from '../../todo';  // Adjust the path to the correct location of Todo
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;  // The input property for receiving the Todo
  @Input() i!: number; 
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox : EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggerd")
  }
  onCheckboxClick(todo: Todo) {
    // Toggle the 'active' state of the todo
    todo.active = !todo.active;
    console.log("Checkbox clicked, todo.active:", todo.active);

    this.todoCheckbox.emit(todo);
  }

  }
 


