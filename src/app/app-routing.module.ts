import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { RouteGuardService } from './services/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
 
const routes: Routes = [
    { path: '', component: LoginComponent  },//canActivate, RouteGuardService
    { path: 'login', component: LoginComponent },
    {
        path: 'home',component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent,canActivate:[RouteGuardService]
    },
    {
        path: 'pm',
        component: PmComponent,canActivate:[RouteGuardService]
    },
    {
        path: 'admin',
        component: AdminComponent,canActivate:[RouteGuardService]
    },
    {
        path: 'auth/login',component: LoginComponent
    },
    {
        path: 'signup',component: RegisterComponent
    },
    {
        path: 'todo',component: TodoComponent
    },
    {
        path: 'list-todos',component: ListTodosComponent
    },
    { path: 'todos', component: ListTodosComponent },
    { path: 'todos/:id', component: TodoComponent },
    {
        path: '', redirectTo: 'home',
        pathMatch: 'full'
    }
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }