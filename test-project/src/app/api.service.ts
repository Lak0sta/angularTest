import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: Http) {}
  storeServers(server: any[]) {
    return this.http.get('https://randomuser.me/api/?results=10&inc=name,login,picture,phone,email,date')
    .pipe(
      map(
        (response: Response) => {
          const data = response.json();
          data.results.map(element => {
            element.fullName = `${element.name.title}. ${element.name.first} ${element.name.last}`;
            element.picture = element.picture.medium;
            element.userId = element.login.uuid;
            delete element.name;
          });
          return data.results;
        }
      ),
      catchError (e => throwError('Something went wrong'))
    );
  }
}
