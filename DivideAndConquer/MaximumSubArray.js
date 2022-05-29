let input1 = [3, -2, 5, -1];
let input2 = [1, -3, 2, -5, 7, 6, -1, -4, 11, -23];


//Complxity O(n^3)
function maximum_sum_subarray_o_n3(arr, n) {
    let ans = -99999999999;
    for (let sub_array_size=1;sub_array_size<=n;sub_array_size++) { //0->3
        for (let start_index=0;start_index<n; start_index++) { //0->2
            if (start_index+sub_array_size > n)
                break;
            let sum = 0;
            for (let i=start_index; i < (start_index+sub_array_size) ; i++) {
                sum += arr[i];
            }
            ans = (ans > sum) ? ans : sum;
        }
    }
    return ans;
}

//Complxity O(n^2)
function maximum_sum_subarray_o_n2(arr, n) {
    let ans = -99999999999;
    for (let start_index=0;start_index<n;start_index++) { //0->3
        let sum = 0;
        for (let sub_array_size=1;sub_array_size<=n; sub_array_size++) { //1->4
            if (start_index+sub_array_size > n)
                break;
            const index = start_index + sub_array_size - 1;
            sum += arr[index]; //Last element of new Subarray
            ans = (ans > sum)? ans : sum;
        }
    }
    return ans;
}

//NOT WORKING
//  Divide and Conquer Solution
//  O(nlogn)
function maximum_sum_subarray_DAC(arr, n) {
    if (n==1) {
        return arr[0];
    }
  
    const middle = arr.length/2;

    let copy = [...arr];
    const left = copy.splice(0, middle);
    const right = copy;

    const leftDivition = maximum_sum_subarray_DAC(left, left.length); // 3
    const rightDivition = maximum_sum_subarray_DAC(right, right.length); // -2

    let left_sum = -99999999999;
    let right_sum = -99999999999;
    let center_sum_right = -99999999999;
    let center_sum_left = -99999999999;

    let sum = 0;

    for (let i=0;i<right.length;i++) {
        sum += right[i];
        right_sum = (sum > right_sum)? sum : right_sum;
    }

    sum = 0;

    for (let i=0;i<left.length;i++) {
        sum += left[i];
        left_sum = (sum > left_sum)? sum : left_sum;
    }

    sum = 0; //TODO for center <-|->
    for (let i = 0;i<right.length;i++) {
        sum += right[i];
        center_sum_right = (sum > center_sum_right) ? sum : center_sum_right;
    }
    sum = 0; //TODO for center <-|->
    for (let i = left.length-1 ; i >= 0 ; i--) {
        sum += left[i];
        center_sum_left = (sum > center_sum_left) ? sum : center_sum_left;
    }

    let ans = (leftDivition > rightDivition) ? leftDivition : rightDivition;
    ans = (ans > (center_sum_right+center_sum_left) ) ? ans : (center_sum_right+center_sum_left);
    return ans;

}

// Kadanes Algorith
// O(n)
// WORKING
function kadanesAlgorithm(arr, n) {
    let sum = 0;
    let ans = -9999999999999999;
    arr.forEach(item => {
        if ((sum + item) > 0) {
            sum = sum + item;
            if (sum > ans){
                ans = sum;
            }
        } else {
            sum = 0;
        }
    });
    return ans;
}


const result = maximum_sum_subarray_DAC (input1, input1.length);
console.log(result);