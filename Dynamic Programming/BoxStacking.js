const input1 = [{length:2,width:3,height:3}, {length:4,width:4,height:2}, {length:2,width:2,height:4}];
const input2 = [{length:4,width:5,height:3}, {length:2,width:3,height:2}, {length:3,width:6,height:2}, {length:1,width:5,height:4}, {length:2,width:4,height:1}, {length:1,width:2,height:2}];


function boxStacking(input) {
    input.sort((a,b) => a.length-b.length); //Sort the input based on the length
    let heights = Array(input.length);
    for (const x in input) {
        heights[x] = input[x].height;
    }
    for (let i = 1; i < input.length; i++) {
        let box = input[i];
        let S = []; // An array with the heights of the boxes that can be stacked on top of the currect one
        for (let j=0 ; j<i ; j++) {
            if (canBeStacked(input[j], box)) {
                S.push(heights[j]);
            }
        }
        heights[i] = heights[i] + Math.max(...S, 0);
    }
    //Get the maximum 
    heights.sort((a,b) => a - b);
    return heights[heights.length-1];
}

function canBeStacked(top, bottom) {
    return top.length < bottom.length && top.width < bottom.width;
}

const result = boxStacking(input2);
console.log(result);