function getSecondLargest(nums){
    nums.sort(function(a,b){return b-a});  // sort number in descending order
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[0]){
            continue;
        }
        else{
            return nums[i];
        }
    }
}

let ara = [2,6,6,9,9,4,7,7,7,7,5];
console.log(getSecondLargest(ara));
