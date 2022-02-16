let input = [5,2,3,1];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    const n = nums.length;

    for (let i = 0 ; i <n ; i++) {
        for ( let j=0 ; j<n ; j++ ) {
            if (nums[j] > nums[j+1]) {
                const temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
};

console.log("Starting with: [" + input + "]");
sortArray(input);
console.log("Result: [" + input + "]");