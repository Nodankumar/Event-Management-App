import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {


  constructor(private es:EmployeesService, private router:Router){

  }

  employees:any = null;
  id:any;
  first_name:any;
  last_name:any;
  email:any;

  ngOnInit(){
    this.getEmployees();
  }

  getEmployees(){
    this.es.getEmployees().subscribe(
      (data)=>{this.employees=data},
      (error)=>{
        console.log(error)
      }
    )
  }

  viewEmployeeDetails(employeeId: number) {
    this.router.navigate(['/employeeDetails', employeeId]);
  }

  clearform(){
    this.id=null;
    this.first_name=null;
    this.last_name=null;
    this.email=null;
  }

  // isModal:string='';
  AddEmployee(){
    let body = {
      id:this.id,
      first_name :this.first_name,
      last_name:this.last_name,
      email:this.email
    }
    this.es.postEmployee(body).subscribe(
      ()=>{this.getEmployees()}
    );
    // this.isModal = "modal"
    
    this.router.navigate(['/employees']);
    this.clearform()
  }

}
