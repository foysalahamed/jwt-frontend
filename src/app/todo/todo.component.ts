import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../services/data/todo-service.service';
import { Todo } from '../list-todos/list-todos.component';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number
  todo: Todo
  userName: string
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) { }

 

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      
      this.userName= this.tokenStorage.getUsername();
    }
    
    this.id = this.route.snapshot.params['id'];
    
    this.todo = new Todo(this.id,'',false,new Date());
    
    if(this.id!=-1) {
      this.todoService.retrieveTodo(this.userName, this.id)
          .subscribe (
            data => this.todo = data
          )
    }
  }

  // saveTodo(){
  //   this.todoService.createTodo(this.userName, this.todo)
  //   .subscribe (
  //     // data => {
  //     //   console.log(data)
  //     //   this.router.navigate(['todos'])
  //     // }
  //   )
  // }

  saveTodo() {
    if(this.id == -1) { //=== ==
      this.todoService.createTodo(this.userName, this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    } else {
      this.todoService.updateTodo(this.userName, this.id, this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    }
  }

}

