
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../services/data/todo-service.service';
import { TokenStorageService } from '../auth/token-storage.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]

  message: string
  userName: string;

  constructor(
    private todoService:TodoDataService,
    private tokenStorage: TokenStorageService,
    private router : Router
  ) { }

  ngOnInit() {
   
    if (this.tokenStorage.getToken()) {
      this.userName= this.tokenStorage.getUsername();
      this.refreshTodos();
    }
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos(this.userName).subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}` )
    this.todoService.deleteTodo(this.userName, id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo() {
    this.router.navigate(['todos',-1])
  }
}
