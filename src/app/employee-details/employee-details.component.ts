import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  [x: string]: any;

  
  employeeId: any;
  employee:any;
  first_name:any;
  last_name:any;
  email:any;

  constructor(private route: ActivatedRoute, private es:EmployeesService, private router:Router) { }

  ngOnInit() {
    const paramMap = this.route.snapshot.paramMap;
    const idParam = paramMap.get('id');
    if (idParam !== null) {
      this.employeeId = +idParam;
      console.log(this.employeeId)
      this.es.getSpecificEmployee(this.employeeId).subscribe(
        (data: any)=>{
          this.employee = data;
        },
        (error: any)=>{
          console.log(error)
        }
      )
    }
  }

  deleteEmployee(id: any){
    this.es.deleteEmployee(id).subscribe(
      (res)=>{},
    )
    this.router.navigate(['/employees']);
  }

  updateFirstname(e: any){
    return this.first_name = e.target.value;
  }
  updateLastname(e: any){
    return this.last_name = e.target.value;
  }
  updateEmail(e: any){
    return this.email = e.target.value;
  }

  updateEmployee(id:Number){

    let body = {
      first_name :this.first_name,
      last_name : this.last_name,
      email:this.email
    }

    this.es.putEmployee(id, body).subscribe(
      (res)=>{},
      (complete)=>{console.log(complete)}
    )
    window.location.href ="http://localhost:4200/employees";
  }

}
