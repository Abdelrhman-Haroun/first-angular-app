import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DummyTasks } from './task/dummy-Tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { newTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  isAddingTask = false;
  tasks = DummyTasks;

  get SelectedUser() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  onComplete(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
  onAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onAddNewTask(newTask: newTask) {
   this.tasks.unshift({ 
      id: Math.random().toString(),
      userId: this.userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate
    });
    
    this.isAddingTask = false;
  }
}

  