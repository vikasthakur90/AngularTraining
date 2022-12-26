export class EmpForm{
    id:number;

    name:string;

    mob:String;

    addr:string;
    constructor(id:number,name:string,mob:String,addr:string){
        this.id = id;
        this.name = name;
        this.mob = mob;
        this.addr = addr;
    }
}