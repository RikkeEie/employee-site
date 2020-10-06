import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.interface';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  empId: number;

  constructor(private httpService: EmployeeServiceService) { }

  ngOnInit(): void {
    console.log("ngOnInit employeeList");

    this.httpService.getAllEmployees().subscribe(
      (result) => this.employees = result,
      (err) => console.log('ERROR', err), //Kan undværes
      () => console.log('COMPLETET')      //Kan undværes
    )
  }
}
