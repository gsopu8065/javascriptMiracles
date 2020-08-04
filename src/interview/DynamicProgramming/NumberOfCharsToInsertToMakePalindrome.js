/*
Example 1:

Input: s = "zzazz"
Output: 0
Explanation: The string "zzazz" is already palindrome we don't need any insertions.
Example 2:

Input: s = "mbadm"
Output: 2
Explanation: String can be "mbdadbm" or "mdbabdm".
Example 3:

Input: s = "leetcode"
Output: 5
Explanation: Inserting 5 characters the string becomes "leetcodocteel".
Example 4:

Input: s = "g"
Output: 0
Example 5:

Input: s = "no"
Output: 1
 */

var minInsertions = function(s) {

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

    var reverse = s.split("").reverse().join("");

    return s.length-longestCommonSubsequence(s, reverse);

};