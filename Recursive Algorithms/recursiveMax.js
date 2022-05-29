/**
 * 
 * @param {*} A Array that we want to find the Max
 * @param {*} n Length of the Array
 */
function recursiveMax(A, n) {
    if (n==1) {
        return A[0];
    }
    let recursiveCall = recursiveMax(A, n-1);
    let max = (recursiveCall > A[n-1]) ? recursiveCall : A[n-1];
    return max;
}


let A = [0,32,1,5,21,53,12];

const result = recursiveMax(A, A.length);
console.log(result);