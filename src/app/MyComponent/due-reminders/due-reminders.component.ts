import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';  // Import TaskService
import { Task } from '../../models/task.model';   // Import Task interface
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-due-reminders',
  standalone: true,
  imports:[FormsModule, CommonModule],
  templateUrl: './due-reminders.component.html',
  styleUrls: ['./due-reminders.component.css']
})
export class DueRemindersComponent implements OnInit {
  tasks: Task[] = [];                // List of tasks
  selectedTask: Task | null = null;   // Store the task being edited
  newTask: Task = { id: 0, name: '', dueDate: '', reminder: '' };  // Temporary task for adding

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();  // Get tasks from TaskService
  }

  onEditTask(task: Task): void {
    this.selectedTask = { ...task };  // Set the task being edited
  }

  onSaveTask(): void {
    if (this.selectedTask) {
      this.taskService.editTask(this.selectedTask);  // Save the updated task
      this.selectedTask = null;  // Clear selected task
    }
  }

  onDeleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);  // Delete the task
    this.tasks = this.taskService.getTasks();  // Refresh task list
  }

  onAddTask(): void {
    if (this.newTask.name && this.newTask.dueDate && this.newTask.reminder) {
      this.newTask.id = this.tasks.length + 1;  // Assign a new ID
      this.taskService.addTask(this.newTask);  // Add the new task
      this.tasks = this.taskService.getTasks();  // Refresh task list
      this.newTask = { id: 0, name: '', dueDate: '', reminder: '' };  // Clear new task form
    }
  }
}
