import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DevExtremeModule } from 'devextreme-angular';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { PopupComponent } from './popup/popup.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ApiService } from './api.service';
import { StoreService } from './store.module';
import { HomeComponentComponent } from './home-component/home-component.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employee-form/:id', component: EmployeeFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    EmployeeComponent,
    PopupComponent,
    EmployeeFormComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DevExtremeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
