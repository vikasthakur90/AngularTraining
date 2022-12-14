var cone = /** @class */ (function () {
    function cone(r, l) {
        this.shapename = "Cone";
        this.r = r;
        this.l = l;
    }
    cone.prototype.printname = function () {
        console.log(this.shapename);
    };
    cone.prototype.area = function () { return 3.14 * this.r * (this.r + this.l); };
    return cone;
}());
var Sphere = /** @class */ (function () {
    function Sphere(r) {
        this.shapename = "Sphere";
        this.r = r;
    }
    Sphere.prototype.printname = function () {
        console.log(this.shapename);
    };
    Sphere.prototype.area = function () { return 4 * 3.14 * this.r * this.r; };
    return Sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(l, b) {
        this.shapename = "Rectangle";
        this.l = l;
        this.b = b;
    }
    Rectangle.prototype.printname = function () {
        console.log(this.shapename);
    };
    Rectangle.prototype.area = function () { return this.l * this.b; };
    return Rectangle;
}());
var obj = new cone(5, 4);
obj.printname();
console.log(obj.area());
var obj1 = new Sphere(5);
obj1.printname();
console.log(obj1.area());
var obj2 = new Rectangle(5, 4);
obj2.printname();
console.log(obj2.area());
