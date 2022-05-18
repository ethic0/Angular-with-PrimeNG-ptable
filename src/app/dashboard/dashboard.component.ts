import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Todos } from '../todos';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todos: Todos[];
  constructor(private service: GetDataService) { }
  
  ngOnInit() {
    // this.service.getData().then(data => this.todos = data);
    // console.log(this.todos)
    this.service.getData().subscribe((data:Todos[])=>{
      this.todos = data;
    })
  }

}
