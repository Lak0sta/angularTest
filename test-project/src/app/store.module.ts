import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class StoreService {
  employeesList = [];

  constructor() {}

  setEmployeesList (list: any[]) {
    if (this.employeesList.length > 0) {
      list.forEach(element => {
        this.employeesList.push(element);
      });
    } else {
      this.employeesList = [ ...list];
    }
  }

  getUsers () {
    return this.employeesList;
  }
}
