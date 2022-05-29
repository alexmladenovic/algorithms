
//WORKING
function mergeSort(nums) {
    let middle = nums.length/2;
    
    //We have arrived at the base 
    if (nums.length == 1) {
        return nums;
    }
    
    const left = nums.splice(0, middle);
    const right = nums;
    const left_mergeSort = mergeSort(left);
    const right_mergeSort = mergeSort(right);
    return merge(left_mergeSort, right_mergeSort);
}

function merge(left, right) {
    let sortedArray = [];
    
    
    while (left.length && right.length) {
        if (left[0] > right[0]) {
            sortedArray.push(right.shift())
        } else {
            sortedArray.push(left.shift())
        }
    }
    
    return [...sortedArray, ...left, ...right];
}

let nums = [2,0,2,1,1,0];
nums = mergeSort(nums);
console.log(nums);
