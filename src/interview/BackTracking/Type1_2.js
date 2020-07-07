//Given a digit string, return all possible letter combinations that the number could represent.
// phone letters
// Input: 2 ---> ['a', 'b', 'c']
// Input: 3 ---> ['d', 'e', 'f']
// Input: 23 ---> ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']

const dict = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
};

function solution(digits, index, resultString, resultList) {

    if(index === digits.length) {
        resultList.push(resultString);
        return null;
    }
    else {
        dict[digits[index]].forEach(x => solution(digits, index+1, resultString +x, resultList))
    }
}

var digits = ['2', '3'];
var list = [];
solution(digits, 0, "", list);
console.log(list);

