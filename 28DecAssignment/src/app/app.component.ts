import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = 'FormMaterial';
  Message(){

  }
  openContact(){
    this.dialog.open(Contact,{
      height:'250px',
      width:'250px'
    });
  }
}
@Component({

  selector: 'Contact',

  templateUrl: './dialog.html',

})

export class Contact {

  constructor(public dialog: MatDialog) {}
  dclose(){
    this.dialog.closeAll();
  }
}
