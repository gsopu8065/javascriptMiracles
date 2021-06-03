// Objects
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(Object.keys(day1))
console.log(Object.values(day1))

console.log(Object.entries(day1))
console.log(Object.fromEntries(Object.entries(day1)))

console.log(Object.assign({test: 10}, day1))