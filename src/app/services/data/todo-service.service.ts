import { TODO_JPA_API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/todos`)
      .pipe(
        retry(1)
      );
  }


  

  deleteTodo(id){
    return this.http.delete(`${TODO_JPA_API_URL}/todos/${id}`);
  }

  retrieveTodo( id){
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/todos/${id}`);
  }

  updateTodo( id, todo){
    return this.http.put(
          `${TODO_JPA_API_URL}/todos/${id}`
                , todo);
  }

  createTodo( todo){
    return this.http.post(
              `${TODO_JPA_API_URL}/todos`
                , todo);
  }

}
