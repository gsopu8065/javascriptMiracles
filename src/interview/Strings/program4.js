//string compressor
//ex: aaabffff --> a3bf4

function stringCompressor(str) {
    let res = "";
    let current = str[0];
    let count = 0;
    str.split('').map(ch => {

        if(ch != current){
            //new character
            res += current+count;
            current = ch;
            count = 1;
        }
        else {
            //same character
            count++;
        }
    });
    if(count !=0){
        res += current+count;
    }
    return res;
}

console.log(stringCompressor("aaabffff"));
console.log(stringCompressor("aaabbbxffff"));