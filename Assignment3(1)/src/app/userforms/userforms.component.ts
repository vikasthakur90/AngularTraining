import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, FormArray, Validators} from '@angular/forms';
import { UserForm } from '../model/model.component';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-userforms',
  templateUrl: './userforms.component.html',
  styleUrls: ['./userforms.component.css']
})
export class UserformsComponent implements OnInit {
  constructor(private fb:FormBuilder,private cs:ServiceService) { }
  user:UserForm[] = [];
  userform!:FormGroup;
 
  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  
  ngOnInit(): void {


    this.userform=this.fb.group({

      email:['',[Validators.required,Validators.pattern(this.emailpattern)]],
      subcriptions:['',[Validators.required]],
      password:['',[Validators.required]],
      
    })
  }


  onSubmit()
  {
    if(this.userform.valid)
    {
     console.log(this.userform.value);
     this.user.push(this.userform.value);
    }
    console.log(this.user)
 }
}
