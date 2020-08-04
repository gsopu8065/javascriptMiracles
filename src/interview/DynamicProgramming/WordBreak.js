/*
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
 */
var wordBreak = function(s, wordDict) {

    var flags = [...Array(s.length+1)];
    flags[0] = true;

    for(var p=1;p<=s.length;p++){
        for(var q=0;q<p;q++){
            if(flags[q] && wordDict.indexOf(s.substring(q,p)) !== -1){
                flags[p] = true;
                break;
            }
        }
    }
    return flags[s.length] || false;
};