import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-databindingassignment',
  templateUrl: './databindingassignment.component.html',
  styleUrls: ['./databindingassignment.component.css']
})
export class DatabindingassignmentComponent {
  Username:string = "";
  isDisable:boolean = false;
  
  constructor() {
    
    
  }
  input(){
    if(this.Username.length > 0){
    this.isDisable = true;
    }
    else{
      this.isDisable = false;
    }
  }
  reset(){
    this.Username = "";
    this.isDisable = false
  }

}
