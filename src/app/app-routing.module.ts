import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
 
import { TodoComponent } from './todo/todo.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
 // import { UserinfoComponent } from './userinfo/userinfo.component';
 
const routes: Routes = [
    // { path: '', component: LoginComponent  },//canActivate, RouteGuardService
    // { path: 'login', component: LoginComponent },
    // {path: 'home',component: HomeComponent},
    // {path: 'user',component: UserComponent,canActivate:[RouteGuardService]},
    // {path: 'userinfo',component: UserinfoComponent},
    // {path: 'admin',component: AdminComponent,canActivate:[RouteGuardService]},
    // {path: 'auth/login',component: LoginComponent},
    // {path: 'signup',component: RegisterComponent},
    {path: 'todo',component: TodoComponent},
    {path: 'list-todos',component: ListTodosComponent},
    { path: 'todos', component: ListTodosComponent },
    { path: 'todos/:id', component: TodoComponent },
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    // { path: 'register', component: RegisterComponent },
    // {path: 'logout',component: LogoutComponent},
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
   
    exports: [RouterModule]
})
export class AppRoutingModule { }