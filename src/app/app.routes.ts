import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponent/about/about.component'; // Adjust the path as necessary
import { TodosComponent } from './MyComponent/todos/todos.component';
import { DueRemindersComponent } from './MyComponent/due-reminders/due-reminders.component';


export const routes: Routes = [
        { path: '', component: TodosComponent },
        { path: 'about', component: AboutComponent },
        { path: 'due-reminders', component: DueRemindersComponent},
        
        // other routes
      ];
      

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

