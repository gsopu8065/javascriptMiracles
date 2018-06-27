function removeDuplicatesFromAnArray(a) {
    return a.filter((e,index) => a.indexOf(e) == index);
}

let a = [20, 20, 30, 30, 45, 36];
console.log(removeDuplicatesFromAnArray(a));

let x = ["hi", "raj", "hi", "kk", "raj"];
console.log(removeDuplicatesFromAnArray(x));