//Create a class of item (itemid, itemname, itemprice, category) 
//and create object of the class and print each detail of item. 
//With arrow function
var item = /** @class */ (function () {
    function item(itemid, itemname, itemprice, category) {
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    return item;
}());
var item1 = new item(1, "Laptop", 20000, "Electronics");
var item2 = new item(2, "Computer", 200000, "Electronic");
var item3 = new item(1, "Bag", 200, "Clothing");
var display = function (it) { console.log(it); };
display(item1);
display(item2);
display(item3);
