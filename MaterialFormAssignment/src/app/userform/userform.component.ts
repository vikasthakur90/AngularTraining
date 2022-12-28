import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms'
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit{
  constructor(private fb:FormBuilder,private cs:ServiceService){}
  
  hide = true;
  empForm!:FormGroup;
  emailpattern!:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  passpatern!:"^[a-zA-Z0-9]";
  ngOnInit(): void {
    this.empForm = this.fb.group({
      id:[''],
      name : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern(this.passpatern)]],
      gender : ['',[Validators.required]],
      dob : ['',[Validators.required]],
      mob : ['',[Validators.required,Validators.minLength(10)]],
      skills : ['',[Validators.required]]
    })
  }
  
  OnSubmit(){
    console.log(this.empForm.value);
    if(this.empForm.valid){
      this.cs.EmpPost(this.empForm.value).subscribe();
    }
  }
}
