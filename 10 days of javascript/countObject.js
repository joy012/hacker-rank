function getCount(objects) {
    let count = 0;
    for(let i = 0; i< objects.length; i++){
        if(objects[i].x === objects[i].y){
            count++;
        }
    }
    return count;
}

const ara = [{x:1,y:1}, {x:2,y:1}, {x:2,y:12}, {x:3,y:3}, {x:10,y:10}, {x:11,y:15}];
console.log(getCount(ara));