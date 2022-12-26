import { Component, OnInit } from '@angular/core';
import { EmpForm } from '../model/model';
import { ServiceService } from '../service.service';
import { UserformComponent } from '../userform/userform.component';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{

  isTrue:boolean = false;
  user:EmpForm[] = [];
  public static emp:EmpForm;
  constructor(private cs:ServiceService){}
  ngOnInit():void{
    this.cs.EmpGetData().subscribe(list=>{
      this.user = list;
    })
  }
  
  delete(id:number){
    this.cs.EmpDelete(id).subscribe();
    this.ngOnInit();
    
  }
  edit(emp:EmpForm,id:number){
     this.cs.EmpEdit(emp,id).subscribe();
  }
  getsingle(id:number){
    this.cs.EmpGetsingle(id).subscribe(emp => {
     UserlistComponent.emp = emp;
     this.cs.sendClickEvent();
    });
    
  }

}
