//Regular Expressions can be created in two ways
let re1 = new RegExp("abc");
let re2 = /abc/;
console.log(re1.test("ababcd"))
console.log(re2.test("ababcd"))
console.log("ababcd".split(re2))

//Set of characters (range), use dash(-)
console.log("abcd65gvhd46".split(/[0-9]/).filter(Boolean)) //split by numbers
console.log("abcd65gvhd46".split(/[a-z]/).filter(Boolean)) //split by characters

/*
\d	Any digit character
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)
\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	Any character except for newline
 */

console.log("abcd65gvhd46".split(/\d/).filter(Boolean)) //split by numbers
console.log("abcd65gvhd46".split(/\D/).filter(Boolean)) //split by characters

//Invert ^
console.log("abcd65gvhd46".split(/[^\d]/).filter(Boolean)) //split by characters
console.log("abcd65gvhd46".split(/[^\D]/).filter(Boolean)) //split by numbers

//Repeat *(zero or more), +(one or more)

//Ex: lodash get method
console.log("movies[0].title".split(/[\.\[\]]/).filter(Boolean)) //split by numbers