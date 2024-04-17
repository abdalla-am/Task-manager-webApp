import { Component } from '@angular/core';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent {
  tasks: Task[] = [];
  newTask: Task = {
    name: '',
    description: '',
    dueDate: '',
    completed: false
  };
  editingTask: Task | null = null;

  addTask() {
    if (this.newTask.name.trim() !== '') {
      if (this.editingTask) {
        this.editingTask.name = this.newTask.name;
        this.editingTask.description = this.newTask.description;
        this.editingTask.dueDate = this.newTask.dueDate;
        this.editingTask = null;
      } else {
        this.tasks.push({...this.newTask});
      }
      this.newTask = {
        name: '',
        description: '',
        dueDate: '',
        completed: false
      };
    }
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  editTask(task: Task) {
    this.editingTask = task;
    this.newTask = {...task};
  }
}

interface Task {
  name: string;
  description: string;
  dueDate: string;
  completed: boolean;
}