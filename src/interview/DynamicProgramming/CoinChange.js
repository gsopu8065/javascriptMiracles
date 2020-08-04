/*
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
 */

var coinChange = function(coins, amount) {

    var dp = [0];
    for(var i=0;i<amount;i++){
        dp.push(Number.MAX_VALUE);
    }

    for(var i=0;i<coins.length;i++){
        for(var j=0;j<=amount;j++){
            if(coins[i] <= j){
                dp[j] = Math.min(dp[j], 1+dp[j-coins[i]])
            }
        }
    }
    return dp[amount] > amount ? -1: dp[amount];
};