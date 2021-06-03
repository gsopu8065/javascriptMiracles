//What is the difference between MyObject.foo and MyObject.prototype.foo

function Test1() {
    this.callme = () => console.log("function called");
};
const obj1 = new Test1();
const obj2 = new Test1();
console.log(obj1.callme === obj2.callme)

function Test2() {};
Test2.prototype.callme = () => console.log("function called");
const obj3 = new Test2();
const obj4 = new Test2();
console.log(obj3.callme === obj4.callme)