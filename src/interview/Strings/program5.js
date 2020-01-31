//string rotation
// "waterbottle" is rotation of "erbottlewat"

function stringRotation(str1, str2) {
    if(str1.length > 0  && str2.length > 0 && str2.length == str1.length){
        return (str1+str1).indexOf(str2) != -1;
    }
    return false;
}

console.log(stringRotation("waterbottle", "erbottlewat"));
console.log(stringRotation("waterbottle", "erbottletat"));