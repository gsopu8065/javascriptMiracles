var coinChange = function(coins, amount) {

    var i=0;

    coins.sort(function(a,b){return b-a;})

    console.log(coins);
    while(i<coins.length){

        var res = 0;
        var tempAmount = amount;
        for(var j=i;j<coins.length;j++){
            res+=Math.floor(tempAmount/coins[j]);
            tempAmount = tempAmount%coins[j];
        }
        console.log(tempAmount, res);
        if(tempAmount === 0)
            return res;
        i++;
    }
    return -1;
};


var res = coinChange([186,419,83,408], 6249);
console.log(res);