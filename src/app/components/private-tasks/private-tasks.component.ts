import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  Object = Object;

  tasks = [];
  
  constructor(
    private taskService: TasksService,
  ) { }


  ngOnInit(): void {
    this.taskService.getPrivateTasks().subscribe({
      next: (res) => {
        console.log(res);
        this.tasks = res;
        console.log(this.tasks);
      },
      error: (err) => console.error(err),
    });
  }
  
}
