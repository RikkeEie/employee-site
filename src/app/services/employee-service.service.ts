import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private baseUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    // const url = this.baseUrl + '/employees';
    const url = `${this.baseUrl}/employees`;
    return this._http.get<Employee[]>(url);
  }

  getEmployee(id: number): Observable<Employee>{
    const url = `${this.baseUrl}/employees/${id}`;
    return this._http.get<Employee>(url);
  }

}
