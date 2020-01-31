function extractArray(a, b) {
    return a.filter(e => !b.includes(e));
}

let a = [20, 25, 30, 45, 36];
let b = [25, 49, 30, 35];

console.log(extractArray(a,b));


let x = ["hi", "raj", "mm", "kk", "ll"];
let y = ["mm", "pp"];

console.log(extractArray(x,y));