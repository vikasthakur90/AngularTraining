import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformsComponent } from './userforms/userforms.component';
import { FormsModule } from '@angular/forms';
import { ProjectformComponent } from './projectform/projectform.component';
@NgModule({
  declarations: [
    AppComponent,
    UserformsComponent,
    ProjectformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
