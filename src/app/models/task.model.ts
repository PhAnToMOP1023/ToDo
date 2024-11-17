// src/app/models/task.model.ts
export interface Task {
    id: number;            // Unique ID for each task
    name: string;          // Task name
    dueDate: string;       // Due date (as a string)
    reminder: string;      // Reminder time (as a string)
    
  }
  