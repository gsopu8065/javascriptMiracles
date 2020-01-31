//check permutations

function checkPermutations(str1, str2) {
   let sortedA = str1.split('').sort((a,b) => a.localeCompare(b)).join('');
   let sortedB = str2.split('').sort((a,b) => a.localeCompare(b)).join('');
   return sortedA == sortedB
}

//console.log(checkPermutations("god", "dog"));
//console.log(checkPermutations("abcd", "xyfd"));



//check palindrome permutations
//ex: str = "atco cta" ---> true
//logic: all palindrome charcters should be either all even # of characters or all even characters and one odd character
// ex: "helleh" (even) or "heluleh" (1 odd & all even)

function checkPalindromePermutations(str1) {
    let charCount = {};
    str1.split('').map(e => {
       let count = charCount[e]?charCount[e]:0;
       charCount[e] = ++count;
    });
    let res = Object.values(charCount).filter(eachValue => eachValue%2==1);
    return res.length <= 1;
}

console.log(checkPalindromePermutations("atccta"));