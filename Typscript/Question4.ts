
class item{
    itemid:number;
    itemname:string;
    itemprice:number;
    category:string;
    constructor(itemid:number,itemname:string,itemprice:number,category:string){
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    }
let item1 = new item(1,"Laptop",20000,"Electronics");
let item2 = new item(2,"Computer",200000,"Electronic");
let item3 = new item(1,"Bag",200,"Clothing");
let display = (it:item) => {console.log(it)};
display(item1);
display(item2);
display(item3);

