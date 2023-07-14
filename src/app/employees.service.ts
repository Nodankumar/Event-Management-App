import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) {

  }

  url = "http://localhost:3000/employees";
  getEmployees() {
    return this.http.get(this.url);
  }
  getSpecificEmployee(id: any){
    return this.http.get(this.url+"/"+id)
  }
  deleteEmployee(id:any){
    return this.http.delete(this.url+"/"+id)
  }
  // func to add employee
  postEmployee(body: any){
    return this.http.post(this.url, body)
  }
  // func to update employee
  putEmployee(id:any, body:any){
    return this.http.put(this.url+"/"+id, body)
  }


}
