import { Component } from '@angular/core';

@Component({
  selector: 'app-dirrectiveassignment',
  templateUrl: './dirrectiveassignment.component.html',
  styleUrls: ['./dirrectiveassignment.component.css']
})
export class DirrectiveassignmentComponent {

  n:number = 0;
  arr:number[] = [];
  str:string = "My Name Is Vikas Thakur";
  toggle(){
    this.n++;
    this.arr.push(this.n);
  }
  getCol(){
    if(this.n>=5){
      return 'blue';
    }
    else{
      return 'none';
    }
  }
  getclass(){
    if(this.n>=5){
      return 'one';
    }
    else{
      return 'none';
    }
  }
}
