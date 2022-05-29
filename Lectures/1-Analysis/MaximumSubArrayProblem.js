let input1 = [3, -2, 5, -1];
let input2 = [1, -3, 2, -5, 7, 6, -1, -4, 11, -23]; //ans 19
let input3 = [1, -3, -2, -5, 7, 6, -1, -4, 11, -23]; //ans 19



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

function maximum_sum_subarray_o_n2(arr, n) {
    let SetSums =[arr[0]];
    for (let i=1;i<n;i++) {
        SetSums[i] = SetSums[i-1] + arr[i];
    }
    let ans = 0;
    for (let i=0;i<n;i++) {
        for (let k=i; k < n;k++) {
            let s;
            if (i == 0) {
                s = SetSums[k];
            } else {
                s = SetSums[k] - SetSums[i-1];
            }
            if (s > ans) {
                ans = s;
            }
        }
    }
    return ans;
}

function maximum_sum_subarray_o_n(arr, n) {
    let ans = 0;
    let M = [];
    for (let i=0;i<n;i++) {
        if (i==0) {
            M[0] = Math.max(0, arr[0])
        } else {
            M[i] = Math.max(0, M[i-1] + arr[i]);
        }
    }
    for (let i = 0; i< n;i++) {
        ans = Math.max(ans, M[i]);
    }
    return ans;
}


function maximum_sum_subarray_o_n_getTheSubSequence(arr, n) {
    let ans = {
        v: -1000000000000000000000000000000000000000,
        i: -1,
        e: -1,
    };
    let M = [];
    for (let i=0;i<n;i++) {
        if (i==0) {
            M[0] = Math.max(0, arr[0])
        } else {
            M[i] = Math.max(0, M[i-1] + arr[i]);
        }
    }
    let tempAns = {
        v: -10000000000000000,
        i: 0,
        e: -1,
    };
    for (let i = 0; i< n;i++) {
        if (M[i] == 0) {
            if (tempAns.v > ans.v) {
                ans.v = tempAns.v;
                ans.i = tempAns.i;
                ans.e = tempAns.e;
            }
            tempAns.v = -10000000000000000;
            tempAns.i = i+1;
            tempAns.e = i+1;
        }else if (ans.v < M[i]) {
            tempAns.v = Math.max(tempAns.v, M[i]);
            tempAns.e = i;
        }
        
    }
    return ans;
}

const result = maximum_sum_subarray_o_n_getTheSubSequence (input3, input3.length);
console.log(result);