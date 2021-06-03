//1. Use let/const instead of var
//2. forEach, for-in, for-of
for(let ch of "srujan")
    console.log(ch)

//3. EC6 string methods : startsWith(), endsWith(), repeat() and includes()
console.log("hi".repeat(3))
console.log("hello".includes("ll"))

//4. Template literals ``
let x = 10;
console.log(`this is ${x}`)

//5. Default Parameter Values
const test = (x=10) => {}

//6. Rest Parameters (...): combine multiple values into array
const add = (x, y, ...rest) => [...rest].reduce((curr, sofar) => sofar+curr, x+y);
console.log(add(10,20))
console.log(add(10,20, 30))
console.log(add(10,20, 30, 40))
console.log(add(10,20, 30, 40, 50))

//7. The Spread Operator (...): spread array into values
let arr = [1,2,3,4,5,6,7];
let testSpread = [...arr];
console.log(testSpread)

//8. name property on function
console.log(add.name)

//9. Arrow function
let display = text => console.log(text);
display("Hello world")

//10. Property Initializer Shorthand
console.log({x})

//11. Object.is(), Object.getOwnPropertyNames() and Object.assign()

//12. Object.setPrototypeOf(friend, person) and Object.getPrototypeOf(friend)

//13. Object Destructuring
let data = {
    name: "srujan",
    age: "10"
};
let { name, age } = data;
console.log(name, age);

let { name: myname, age: myage } = data;
console.log(myname, myage);

//14. Array Destructuring
let movies = ["spider", "avathar", "family guy"];
let [fisrt, second] = movies;
console.log(fisrt, second)

let [fisrtMovie, ...restMovies] = movies;
console.log(fisrtMovie, restMovies)

//14. cloning object
let source = {
    name: "raj",
    address: {
        street: "abc street",
        city: "nashville"
    }
}
let {...sourceCopy} = source;
source.name = "srujan";
console.log(source, sourceCopy)

//15. clone array
let [...cloneMovies] = movies;
console.log(cloneMovies)

//16. Set class: Set in ES6 supports different type values
const setExamp1 = new Set();
setExamp1.add("5");
setExamp1.add(5);
console.log(setExamp1.size)

//17. Map class:
// a. Map in ES6 supports different type keys
// b. Objects can be used as keys
const mapExamp1 = new Map();
mapExamp1.set(5, "0");
mapExamp1.set('5', "2");
let keyObj = {'a': '5'};
mapExamp1.set(keyObj, "20");
mapExamp1.set(keyObj, "30");
console.log(mapExamp1.size)
mapExamp1.forEach((value, key) => console.log(key+" "+value))

//18. ECMAScript 6 aims to fully support Unicode
var message = "A 𠮷 B";
for (let c of message) {
    console.log(c);
}

//19. From require to  Import and export

//20.  __proto__ allows you to set the prototype of an object literal directly.
let person = {
    getGreeting() {
        return "Hello";
    }
};

// prototype is person
let friend = {
    __proto__: person
};
console.log(friend.getGreeting());