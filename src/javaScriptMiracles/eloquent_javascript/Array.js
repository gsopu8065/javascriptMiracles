/*
concat()	Joins two or more arrays, and returns a copy of the joined arrays
join()	Joins all elements of an array into a string
fill()	Fill the elements in an array with a static value

from()	Creates an array from an object
isArray()	Checks whether an object is an array

keys()	Returns a Array Iteration Object, containing the keys of the original array
entries()	Returns a key/value pair Array Iteration Object

find()	Returns the value of the first element in an array that pass a test
findIndex()	Returns the index of the first element in an array that pass a test
includes()	Check if an array contains the specified element
indexOf()	Search the array for an element and returns its position
lastIndexOf()	Search the array for an element, starting at the end, and returns its position

forEach()	Calls a function for each array element
filter()	Creates a new array with every element in an array that pass a test
map()	Creates a new array with the result of calling a function for each array element
reduce()	Reduce the values of an array to a single value (going left-to-right)
reduceRight()	Reduce the values of an array to a single value (going right-to-left)

reverse()	Reverses the order of the elements in an array
sort()	Sorts the elements of an array

pop()	Removes the last element of an array, and returns that element
push()	Adds new elements to the end of an array, and returns the new length
splice()	Adds/Removes elements from an array
slice()	Selects a part of an array, and returns the new array
shift()	Removes the first element of an array, and returns that element
unshift()	Adds new elements to the beginning of an array, and returns the new length

ES6:
Array.of() method creates a new Array instance from a variable number of arguments,
Array.of(1, 2, 3);

Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
Array.from('foo') //['f', 'o', 'o']
Array.from([1, 2, 3]
 */

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
myFish.splice(2, 0, 'drum') //insert at 2
myFish.splice(0, 0, 'first') //insert at 0

//update
myFish.splice(0, 1, 'updatedfirst') //update at 0

//delete
myFish.splice(0, 1, ) //delete at 0
console.log(myFish)


