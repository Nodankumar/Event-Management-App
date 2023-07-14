import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeDetailsComponent } from './employee-details.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from '../employees/employees.component';

const routes: Routes = [
  {path:'employees', component:EmployeesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    FormsModule],
  exports: [RouterModule],
  declarations: [
    EmployeeDetailsComponent
  ],
  // Other module configurations...
})
export class EmployeeDetailsModule { }
