function isPositive(a){
    try{
        if(a > 0){
            return "YES"
        }
        else{
            throw Error(a === 0? "Zero Error" : "Negative Error"); 
        }
    }
    catch(err){
        // console.error(err.message); can also print error
        return err.message;
    }
}

// isPositive(-1); will return error msg if console.error is used in catch

console.log(isPositive(-1));
console.log(isPositive(0));
    