/*
 Input: arr[] = {1, 5, 3, 4, 2}, k = 3
 Output: 2
 There are 2 pairs with difference 3, the pairs are {1, 4} and {5, 2}

 Input: arr[] = {8, 12, 16, 4, 0, 20}, k = 4
 Output: 5
 There are 5 pairs with difference 4, the pairs are {0, 4}, {4, 8},
 {8, 12}, {12, 16} and {16, 20}
 */

function findNumberOfPairs(array, sum) {
    //remove duplicates
    let a = array.filter((e,index) => array.indexOf(e) == index);

    //sort
    let s = a.sort();

    //go through the loop
    let count = 0;
    s.forEach(e => {
        if(s.indexOf(e+sum) != -1)
            count++;
    });
    return count;
}

console.log(findNumberOfPairs([1, 5, 3, 4, 2], 3));
console.log(findNumberOfPairs([8, 12, 16, 4, 0, 20], 4));