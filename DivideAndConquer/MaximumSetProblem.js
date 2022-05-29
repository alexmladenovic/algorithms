let input = [[1,2],[4,2],[2,1],[4,6],[5,2]];


let sortedInput = mergeSort([...input]);
const result = maximumSetPoints(sortedInput);
console.log(result);

/**
 * Given a set of n points 
 * Construct the maxima set of points in S
 */
function maximumSetPoints(arr) {
    if (arr.length <= 1){
        return arr;
    }
    const middle = arr.length/2;
    const medium = arr[middle]; 

    let left = arr.splice(0, middle);
    let right = arr;

    let M1 = maximumSetPoints(left);
    let M2 = maximumSetPoints(right);

    let q = M2[0];
    let M1copy = [...M1]; 

    M1.forEach(element => {
        if (element[0]<=q[0] && element[1]<=q[1]) {
            M1copy = M1copy.filter(function(value, index, arr){ 
                return value[0] != element[0] && value[1] != element[1];
            });
        }
    });
    return [...M1copy, ...M2];
}

function mergeSort(arr) {
    const half = arr.length / 2;
  
    // the base case is array length <=1
    if (arr.length <= 1) {
      return arr;
    }
  
    const left = arr.splice(0, half); // the first half of the array
    const right = arr;
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let sortedArr = []; // the sorted elements will go here
    
    while (left.length && right.length) {
      // insert the smallest element to the sortedArr
      if (left[0][0] <= right[0][0] && left[0][1] <= right[0][1]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
  
    // use spread operator and create a new array, combining the three arrays
    sortedArr = [...sortedArr, ...left, ...right];
    return sortedArr;
  }