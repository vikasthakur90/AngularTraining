import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { EmpForm } from './model/model';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 private subject = new Subject();
  constructor(public http:HttpClient) { }
 
  url:string = "http://localhost:3000";
  emp!:EmpForm;
  sendClickEvent(){
    this.subject.next(this.emp);
  }
  getClickEvent(){
    return this.subject.asObservable();
  }
  Empset(emp:EmpForm){
    this.emp = emp;
  }
  EmpSave(emp:EmpForm){
    console.log(EmpForm.name);
    return this.http.post<EmpForm>(this.url+"/Emp",emp);
    
  }
  EmpGetData():Observable<EmpForm[]>
  {
     return this.http.get<EmpForm[]>(this.url+"/Emp");
  }
  EmpGetsingle(id:number):Observable<EmpForm>{
    return this.http.get<EmpForm>(this.url+"/Emp/"+id);
  
  }

 EmpDelete(id:number)
 {
     return this.http.delete(this.url+"/Emp/"+id);
 }
 EmpEdit(emp:EmpForm,id:number){
    console.log(id);
     return this.http.put<EmpForm>(this.url+"/Emp/"+id,emp);
 }
}
