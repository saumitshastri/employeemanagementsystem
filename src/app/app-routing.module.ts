import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {EmployeeDetailsComponent} from './employee-details/employee-details.component'

const routes: Routes = [
  {path: 'employees', component: EmployeesComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path:'', redirectTo: '/dashboard', pathMatch:'full'},
  {path: 'details/:id', component: EmployeeDetailsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
   
})

export class AppRoutingModule {
  
 }
