//Create interface shape with shapename, and a method 
//printname method. Now implement the shape interface to 
//class Cone, Sphere, and Rectangle class. Now you have to 3.14 3.14r(l+r)
//print the area of each shape using area method input will be 
//pass to constructor of each class
interface shape{
    shapename:string;
    printname();
    
}
class cone implements shape{
    shapename: string = "Cone";
    printname(){
        console.log(this.shapename);
    }
   private r:number;
   private l:number;
    constructor(r:number,l:number) {
        this.r = r;
        this.l = l;
    }
    area()
    {return 3.14*this.r*(this.r+this.l)}

}
class Sphere implements shape{
    shapename: string = "Sphere";
    printname(){
        console.log(this.shapename);
    }
   private r:number;
   
    constructor(r:number) {
        this.r = r;
        
    }
    area()
    {return 4*3.14*this.r*this.r}

}
class Rectangle implements shape{
    shapename: string = "Rectangle";
    printname(){
        console.log(this.shapename);
    }
   private l:number;
   private b:number;
    constructor(l:number,b:number) {
        this.l = l;
        this.b = b;
    }
    area()
    {return this.l*this.b}

}
let obj = new cone(5,4);
obj.printname();
console.log(obj.area());
let obj1 = new Sphere(5);
obj1.printname();
console.log(obj1.area());
let obj2 = new Rectangle(5,4);
obj2.printname();
console.log(obj2.area());