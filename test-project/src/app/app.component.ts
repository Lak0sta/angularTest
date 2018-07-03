import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employeesList = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.setData();
  }

  setData () {
    this.apiService.storeServers()
      .subscribe(
        (data: any[]) => { this.employeesList = [ ...data ]; console.log(data); },
        (error) => console.error(error)
      );
  }
}
