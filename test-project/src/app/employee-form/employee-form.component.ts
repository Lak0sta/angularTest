import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { StoreService } from '../store.module';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee = {};
  selectedImage = null;


  constructor(private route: ActivatedRoute, private storeService: StoreService) { }

  ngOnInit() {
    this.findEmployeeData();
  }

  onFileSelected(e) {
    this.selectedImage = e.target.files[0];
    this.getBase64(this.selectedImage);
  }

  findEmployeeData () {
    this.employee = this.storeService.getUsers().find(el => el.userId === this.route.snapshot.params['id']);
    console.log(this.employee);
  }

  getBase64 (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.employee.picture.medium = reader.result;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }
}
