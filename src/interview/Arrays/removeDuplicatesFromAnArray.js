function removeDuplicatesFromAnArray(a) {
    return a.filter((e,index) => a.indexOf(e) == index);
}

let a = [20, 20, 30, 30, 45, 36];
console.log(removeDuplicatesFromAnArray(a));

let x = ["hi", "raj", "hi", "kk", "raj"];
console.log(removeDuplicatesFromAnArray(x));


function removeDuplicatesFromAnArray2(a) {
    return Array.from(new Set(a));
}
console.log(removeDuplicatesFromAnArray2(a));
console.log(removeDuplicatesFromAnArray2(x));