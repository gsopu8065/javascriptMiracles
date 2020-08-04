/*
Example 1:

Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

 */

var longestCommonSubsequence = function(text1, text2) {

    var dp = [];

    for(var i = 0;i<text1.length;i++){
        dp.push([...Array(text2.length)])
    }

    for(var i = 0;i<text1.length;i++){

        for(var j = 0;j<text2.length;j++){

            if(text1[i] === text2[j]){
                dp[i][j] = ((dp[i-1] && dp[i-1][j-1]) || 0) + 1;
            }
            else {
                dp[i][j] = Math.max(((dp[i-1] && dp[i-1][j]) || 0), ((dp[i] && dp[i][j-1]) || 0))
            }
        }
    }
    return dp[text1.length-1][text2.length-1];

};