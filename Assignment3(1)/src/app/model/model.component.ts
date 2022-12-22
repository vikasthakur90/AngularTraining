
export class UserForm {
  
    email: string = "Email";
    subcriptions:string = "subcriptions";
    password:string = "password";
  /**
   *
   */
  constructor(email:string,subcriptions:string,password:string) {
    this.email = email;
    this.subcriptions = subcriptions;
    this.password = password;
    
  }
}
