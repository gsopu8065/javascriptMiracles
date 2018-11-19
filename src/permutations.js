function permutation(str) {
    if (str.length < 2){
        return [str];
    }
    const results = [];
    for (var i =0;i<str.length;i++){
        permutation( str.substring(0,i) + str.substring(i+1)).forEach(x=> {
            results.push(str[i] + x)
        })
    }
    return results;
}

permutation("abcd").forEach(c => console.log(c))
//[1, 2].forEach(c => console.log(c))