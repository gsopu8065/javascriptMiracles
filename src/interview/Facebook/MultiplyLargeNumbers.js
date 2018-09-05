//multiply large numbers

function multiply(str1, str2) {

    if(str1.length == 0 || str2.length == 0)
        return 0;

    str1 = str1.split('').reverse().join('');
    str2.split('').reverse().forEach((ch1, i) => {
        console.log(mul(str1, ch1, i));
    });

}

function addLargeNumbers(str1, str2) {
    //make sure str1 and str2 are equal length
    //append zeros and return

}

function mul(str1, str2, appendCount) {
    console.log(str1, str2, appendCount)
    let carry = 0;
    let res = "";
    str1.split('').reverse().forEach(ch => {
        let m = (parseInt(ch) * parseInt(str2)) + carry;
        carry = Math.floor(m / 10);
        res += m % 10;
    });

    if(carry > 0){
        res += carry
    }
    let append = "";
    for(let j=0;j<appendCount;j++)
        append +="0";

    return res+append.split('').reverse().join('');

}

console.log(multiply("23958233", "5830"));