import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: <any>{};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEditEmployee(employeeId) {
    this.router.navigate([`/employee-form/${employeeId}`]);
  }
}
