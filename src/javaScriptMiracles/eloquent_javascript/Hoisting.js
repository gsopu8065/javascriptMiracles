/*
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
(to the top of the current script or the current function).
 */

function test() {
    x=10;
    console.log(x);
    var x;
}
test();

function test2() {
    x=10;
    console.log(x);
    let x; //error
}
test2();

