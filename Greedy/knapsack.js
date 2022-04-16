const item1 = {
    size: 22,
    value: 19
};

const item2 = {
    size: 10,
    value: 9
};

const item3 = {
    size: 9,
    value: 9
};

const item4 = {
    size: 7,
    value: 6
};

const items = [item1, item2, item3, item4];
let size = 25;


function knapsack(items, size) {
    let bag = [];
    
    for (const item of items) {
        item.ratio = item.value / item.size;
    }

    while (size != 0) {
        // find the bigger items and remove it
        // add to bag as much as it goes in 
    }
    
    return bag;
}


//Call the function 
const result = knapsack(items, size);
console.log(result);