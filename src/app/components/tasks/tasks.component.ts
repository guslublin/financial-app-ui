import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  Object = Object;

  tasks = [];
  
  constructor(
    private taskService: TasksService,
  ) { }


  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (res) => {
        console.log(res);
        this.tasks = res;
        console.log(this.tasks);
      },
      error: (err) => console.error(err),
    });
    
    // .subscribe(res=>{
    //   console.log(res);
    //   this.tasks = res;
    // },
    // err => {
    //   console.log('ERROR: ', err);
    // });
  }


}
