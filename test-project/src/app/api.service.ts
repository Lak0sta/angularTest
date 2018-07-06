import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: Http) {}
  setUsers() {
    return this.http.get('https://randomuser.me/api/?results=10&inc=name,login,picture,phone,email,date')
    .pipe(
      map(
        (response: Response) => {
          const data = response.json();
          data.results.map(element => {
            element.fullName = `${element.name.title}. ${element.name.first} ${element.name.last}`;
            element.userId = element.login.uuid;
            element.contacts = {
              'email': element.email,
              'phone': element.phone
            };
            element.logs = {
              oldData: element,
              dateTime: '2010-05-24 19:20:14',
              author: 'Administrator'
            };
            element.checked = false;
            delete element.name;
            delete element.email;
            delete element.phone;
          });
          return data.results;
        }
      ),
      catchError (e => throwError('Something went wrong'))
    );
  }
}
