//is string characters are unique or not

function isStringUnique(str) {
    let removeDuplicates = str.split('').filter((e,index) => str.indexOf(e) == index).join('');
    return removeDuplicates.length == str.length;
}

console.log(isStringUnique("hello"));
console.log(isStringUnique("abcd"));


