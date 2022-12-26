import * as $ from 'jquery';
import { Component ,OnInit } from '@angular/core';
import { EmpForm } from '../model/model';
import { FormGroup,FormBuilder, FormControl, FormArray, Validators} from '@angular/forms';
import { ServiceService } from '../service.service';
import { UserlistComponent } from '../userlist/userlist.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
 clickEventSubcription:Subscription;
  constructor(private fb:FormBuilder,private cs:ServiceService) { 
     this.clickEventSubcription = this.cs.getClickEvent().subscribe(()=>{
      this.Edt(this.emp)
    })
  }
  isValid = true;
  isMob = true;
  isAdd = true;
  uform!:FormGroup;
  emp:EmpForm = UserlistComponent.emp;
  namepattern!:"[a-zA-Z][a-zA-Z ]+";
  
  ngOnInit(): void {
    
    this.uform=this.fb.group({
      id:[''],
      name:['',[Validators.required,Validators.pattern(this.namepattern)]],
      mob:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      addr:['',[Validators.required]],
   })
   
  }
  
   Edt(emp:EmpForm):void{
    
    console.log(UserlistComponent.emp);
   this.uform = new FormGroup({
    id:new FormControl(UserlistComponent.emp.id),
    name:new FormControl(UserlistComponent.emp.name),
    mob:new FormControl(UserlistComponent.emp.mob),
    addr:new FormControl(UserlistComponent.emp.addr),
   })
  }
  onSubmit()
  {

    if(this.uform.valid)
    {
      if(this.uform.value['id'] == ''){
      this.cs.EmpSave(this.uform.value).subscribe();
      this.isValid = true;
      this.isMob=true;
      this.isAdd=true;
      window.location.reload();
      }
      else{
        this.cs.EmpEdit(this.uform.value,this.uform.value['id']).subscribe();
        window.location.reload();
      }
     
    }
    else{
      
      let str = "";
      if($("#name").val() == ""){
       str += " 1)Name Required\n";
       $("#name").css({'border-color':'red'});
       this.isValid = false;
      }
      if($("#mob").val() == "" || $("#mob").length != 10){
        str += "2)Empty Or Invalid Mobile No.\n";
        $("#mob").css({'border-color':'red'});
        this.isMob = false;
       }
      if($("#addr").val() == ""){
        str += " 3)Address Required";
        $("#addr").css({'border-color':'red'});
        this.isAdd = false;
       };
     alert(str);
    }
 }
 onReset(){
  this.uform.reset();
  this.isValid = true;
      this.isMob=true;
      this.isAdd=true;
 }
 
}
