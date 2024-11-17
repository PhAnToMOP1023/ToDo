import { Injectable } from '@angular/core';
import { Task } from '../app/models/task.model';  // Assuming the Task model is in a separate file

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, name: 'Complete Angular tutorial', dueDate: '2024-11-20', reminder: '2024-11-19 10:00 AM' },
    { id: 2, name: 'Finish project report', dueDate: '2024-11-25', reminder: '2024-11-24 08:00 AM' }
  ];

  constructor() { }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  editTask(updatedTask: Task) {
    const taskIndex = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = updatedTask;
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
