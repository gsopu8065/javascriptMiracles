//1. number to string
let x = 10
console.log(x.toString());
console.log(x.toString() === x); //false

//2. typeof
console.log(typeof "aa");
console.log(typeof {});
x=()=>{};
console.log(typeof x);
console.log(typeof 10);
console.log(typeof [1, 2, 4]) //object
console.log(Array.isArray([1,2,3]))
console.log(Number.isInteger(25)); // true
console.log(Number.isInteger(25.0)); // true
console.log(Number.isInteger(25.1)); // false

//2. Higher-order-function: Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
//Examples: map, filter, reduce

//3. "use strict" at the top of your program help you spot a problem.
//ex: using variable before declare, undefined checks

/* 4.
throw "This is error"  //It shows just error
vs
throw new Error("This is error")  //it show error stacktrace
 */

//5. Prototypes are the foundation of inheritance in JavaScript