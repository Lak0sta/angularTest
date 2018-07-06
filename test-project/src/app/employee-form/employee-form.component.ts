import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { clone, assocPath } from 'ramda';

import { StoreService } from '../store.module';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee = {};
  selectedImage = null;


  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit() {
    this.findEmployeeData();
  }

  onFileSelected(e) {
    this.selectedImage = e.target.files[0];
    this.getBase64(this.selectedImage);
  }

  findEmployeeData () {
    this.employee = clone(this.storeService.getUsers().find(el => el.userId === this.route.snapshot.params['id']));
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

  removePhoto () {
    this.employee.picture.medium = '';
    console.log(this.employee);
  }

  get photoUrl () {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${this.employee.picture.medium})`);
  }

  get employeeData () {
    return this.employee;
  }

  saveData () {
    this.storeService.editEmployeesList(this.employee);
    this.router.navigate(['/employees']);
  }

  backToTheEmployeesList() {
    this.router.navigate(['/employees']);
  }
}
