const input1 = [3,1,8,2,5];
const input2 = [5,2,8,6,3,6,9,5];


function LIS(input) {
    const L = Array(input.length).fill(1);
    for (let i = 1; i < input.length; i++) {
        let subproblem = [];
        for (let k = 0; k < i; k++) {
            if (input[k] < input[i]) {
                subproblem.push(L[k]);
            }
        }
        L[i] = 1 + Math.max(...subproblem, 0);
    }
    return Math.max(...L, 0);
}

function LIS_path(input) {
    let L = Array(input.length).fill(1);
    let prev = [];
    prev[0] = -1;
    for (let i = 1; i < input.length; i++) {
        let subproblem = [];
        for (let k = 0; k < i; k++) {
            if (input[k] < input[i]) {
                subproblem.push(L[k]);
                prev[i] = k;
            }
        }
        if (subproblem.length == 0) {
            prev[i] = -1;
        }
        L[i] = 1 + Math.max(...subproblem, 0);
    }
    //Print the path
    console.log(prev);
    console.log(L);
    return Math.max(...L, 0);
}


const result = LIS_path(input2);
console.log(result);