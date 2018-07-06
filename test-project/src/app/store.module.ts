import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { clone } from 'ramda';

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

  editEmployeesList (editingItem: any) {
    this.employeesList = this.employeesList.map((element) => {
      if (element.userId === editingItem.userId) {
        return element = clone(editingItem);
      }
      return element;
    });
  }

  getUsers () {
    return this.employeesList;
  }

  deleteCheckedEmployees () {
    this.employeesList = this.employeesList.reduce((acc, element) => {
      const index  = this.employeesList.indexOf(element);
      if (element.checked === true && index > -1) {
        return acc;
      }
      acc.push(element);
      return acc;
    }, []);
  }
}
