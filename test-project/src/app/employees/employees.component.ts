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
  showPopup = false;

  constructor(
    private apiService: ApiService,
    private storeService: StoreService
  ) {}

  ngOnInit() {
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

  deleteCheckedEmployees() {
    this.storeService.deleteCheckedEmployees();
    this.togglePopup();
  }

  togglePopup () {
    this.showPopup = !this.showPopup;
  }

  get getEmployeesList () {
    return this.storeService.getUsers();
  }

}
