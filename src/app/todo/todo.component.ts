import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../services/data/todo-service.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number
  todo: Todo
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

 

  ngOnInit(): void {
    
    
    this.id = this.route.snapshot.params['id'];
    
    this.todo = new Todo(this.id,'','',new Date());
    
    if(this.id!=-1) {
      this.todoService.retrieveTodo( this.id)
          .subscribe (
            data => this.todo = data
          )
    }
  }

  

  
  saveTodo() {
   
      this.todoService.createTodo( this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    
  }

}

