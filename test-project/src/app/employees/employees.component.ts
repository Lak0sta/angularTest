import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';

import { ApiService } from '../api.service';
import { StoreService } from '../store.module';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeesList = [];

  constructor(
    private apiService: ApiService,
    private storeService: StoreService
  ) {}

  ngOnInit() {
    this.employeesList = this.storeService.getUsers();
  }

  setData () {
    this.apiService.setUsers()
      .subscribe(
        (data: any[]) => {
          this.storeService.setEmployeesList(data);
          this.employeesList = this.storeService.getUsers();
        },
        (error) => console.error(error)
      );
  }

}
