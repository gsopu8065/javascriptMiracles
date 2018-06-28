function mostFrequentWords(a) {
    let maxWord ={ word: "", count:0};
    a.split(' ').reduce((final, current) => {
        final[current] = final[current] + 1 || 1;
        if(maxWord.count < final[current]){
            maxWord.count = final[current];
            maxWord.word = current;
        }
        return final;
    },{});
    return maxWord;
}

let a = "there is so much there much there is so there";
console.log(mostFrequentWords(a));