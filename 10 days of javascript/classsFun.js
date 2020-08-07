class Polygon{
    constructor(ara){
        this.sides = ara;
    }
    perimeter(){                      //a function can added in a class. after constructor it is applied
        let sum = 0;
        for(let i=0; i<this.sides.length;i++){
            sum += this.sides[i];
        }
        return sum;
    }
}

let tri = new Polygon([3,4,10]);
console.log(tri.perimeter());