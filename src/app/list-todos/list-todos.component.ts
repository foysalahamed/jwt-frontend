
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../services/data/todo-service.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';  

export class Todo {
  constructor(
    public id: number,
    public name: string,
    public description: string,
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
  closeResult: string;
  constructor(
    private todoService:TodoDataService,
    private router : Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
   
    
    this.getTodos();
  }

  refreshTodos(){
    this.todoService.getTodos().subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }


  getTodos(): void {
    this.todoService.getTodos().toPromise()
      .then(todos => this.todos = todos );
  }
  deleteTodo(id) {
    console.log(`delete todo ${id}` )
    this.todoService.deleteTodo( id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete Successful!`;
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

  open(content, todoId) {  
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {  
      this.closeResult = `Closed with: ${result}`;  
      if (result === 'yes') {  
        this.deleteTodo(todoId);  
      }  
    }, (reason) => {  
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;  
    });  
  }  
  
  private getDismissReason(reason: any): string {  
    if (reason === ModalDismissReasons.ESC) {  
      return 'by pressing ESC';  
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {  
      return 'by clicking on a backdrop';  
    } else {  
      return `with: ${reason}`;  
    }  
  }  
  
}
