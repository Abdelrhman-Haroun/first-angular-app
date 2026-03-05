import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DummyTasks } from './task/dummy-Tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  tasks = DummyTasks;

  get SelectedUser() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
