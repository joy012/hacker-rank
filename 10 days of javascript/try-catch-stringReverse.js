function reverseString(s){
    let ara = [];
    let reverse = "";
    if(typeof s === "string"){
        ara = s.splite("");        // using ("") will seperate the string by char in an array
        ara.reverse();
        reverse = ara.join("");    // using ("") in join will joint the array element with out any seperator or space
    }
}