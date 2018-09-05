//one string away
// pale, ple --> true
// pales, pale --> true
// pale, bale --> true
// pale, bae --> false

function oneStringAway(str1, str2) {

    if(Math.abs(str1.length - str2.length) > 1)
        return false;

    //take the big string to s1 and small string to s2
    //let s1 = str1.length > str2.length? str1: str2;
    //let s2 = str1.length > str2.length? str2: str1;


    let index1 = 0;
    let index2 = 0;
    let diffFound = false;
    while(index1 < str1.length && index2 < str2.length){

        if(str1[index1] != str2[index2]){
            if(diffFound){
                return false
            }
            diffFound = true;

            if(str1.length > str2.length){
                index1++;
            }
            else if(str2.length > str1.length){
                index2++;
            }
            else {
                index1++;
                index2++;
            }
        }
        else {
            index1++;
            index2++;
        }
    }
    return true;
}

console.log(oneStringAway("pale",  "ple"));
console.log(oneStringAway("pales",  "pale"));
console.log(oneStringAway("pale",  "bale"));
console.log(oneStringAway("pale",  "bae"));