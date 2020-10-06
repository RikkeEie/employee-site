import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.interface';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employeeId: number;
  employee: Employee;
  // employee$: Observable<Employee>;

  constructor(
    private httpService: EmployeeServiceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.paramMap.get('id');
    // this.employee$ = this.httpService.getEmployee(this.employeeId);
    this.httpService.getEmployee(this.employeeId).subscribe(
      result => this.employee = result
    )
  }
}
