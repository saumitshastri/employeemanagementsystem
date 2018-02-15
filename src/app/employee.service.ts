import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {  MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class EmployeeService {
  private employeesUrl = 'api/employees';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  
  getEmployees(): Observable<Employee[]> {
    // Todo: send the message _after_ fetching the employee
    this.messageService.add('Employee Management System');
    return this.http.get<Employee[]>(this.employeesUrl)
  }


  getEmployee(id:number): Observable <Employee> {
    this.messageService.add('EmployeeService: fetched employee id=${id}');
    return of (EMPLOYEES.find(employee => employee.id === id));
  }

  private log(message: string) {
    this.messageService.add('EmployeeService: ' + message);
  }

}
