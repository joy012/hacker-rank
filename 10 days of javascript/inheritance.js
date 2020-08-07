class Rectangle{
    constructor(w,h){
        this.w = w;
        this.h = h;
    }
}

// constructor can't be accessed to assign a new property.... this.length will not work here
// use prototype to access the class constructor. add new method or property with prototype
Rectangle.prototype.area = function () {
    return (this.w * this.h);
}

// inherit from Rectangle. Rectangle is the parent class. Square is the child class
class Square extends Rectangle{
    constructor(length){
        super(length,length);
    }
}

const newRect = new Rectangle(3,4);
console.log(newRect.area());

const newSquare = new Square(3);
console.log(newSquare.area());

