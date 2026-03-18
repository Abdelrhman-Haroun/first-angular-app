import { Component, Input,Output ,EventEmitter} from '@angular/core';
import { task } from './task.model';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: task;
  @Output() complete = new EventEmitter<string>();

  onCompelete(){
    this.complete.emit(this.task.id);
  }
}
