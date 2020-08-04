/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 */
var longestPalindrome = function(s) {

    if(s.length === 0) return "";


    var checkFromMiddle = function(left, right){
        if(left > right) return 0;

        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--;
            right++;
        }
        return {
            left: left,
            right: right,
            length: right-left-1
        }
    }

    var best_start = 0, best_end = 0, best_length = 0;
    for(var i=0;i<s.length;i++){

        var even_word_length = checkFromMiddle(i,i); //abba
        var odd_word_length = checkFromMiddle(i,i+1); //racecar

        console.log(best_start, best_end)
        if(even_word_length.length > odd_word_length.length){
            if((best_end - best_start)  < even_word_length.length){
                best_start = (i - Math.floor((even_word_length.length -1)/2));
                best_end = (i + Math.floor((even_word_length.length)/2));
                //best_length = even_word_length.length;
            }

        }
        else {
            if((best_end - best_start) < odd_word_length.length){
                best_start = (i - Math.floor((odd_word_length.length -1)/2));
                best_end = (i + Math.floor((odd_word_length.length)/2));
                //best_length = odd_word_length.length;
            }
        }
    }
    return s.substring(best_start, best_end+1);


};
