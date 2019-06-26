package Facebook;/*

if you cut the input string anywhere(any times) and couldn't able to find pieces in the list of string, it should return true
otherwise false

Input: function(str="abcde", list=["abc", "cd", "de", "bc"])
Output: true
Explanation: if i cut the input string "abcde" to two pieces "abc" and "de". Both strings ("abc" and "de") are present in the input list.


Input: function(str="abcde", list=["ab", "cd", "de", "bc"])
Output: false
Explanation: if i cut the input string "abcde" to three pieces "ab", "cd" and "e". Both strings ("ab" and "cd") are present in the input list but not "e"


Input: function(str="abcde", list=["ab", "cd", "de", "e"])
Output: true
Explanation: if i cut the input string "abcde" to three pieces "ab", "cd" and "e". three strings ("ab","cd" and "e") are present in the input list

Input: function(str="abcde", list=["abcd", "de", "xyz"])
Output: false
Explanation: if i cut the input string "abcde" to two pieces "abcd" and "e". one string ("abcd") are present in the input list but not "e"


Input: function(str="abcde", list=["abcd", "e", "xyz"])
Output: true
Explanation: if i cut the input string "abcde" to two pieces "abcd" and "e". Both strings ("abcd" and "e") are present in the input list

 */

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class Question3 {

    public static boolean findString(String s, List<String> listOfStrings){

        boolean res = listOfStrings.contains(s);
        if(!res) {
            //find each individual
            for(int i=0;i<s.length()-1;i++)
                res = res || findString(s.substring(0,i+1), listOfStrings) && findString(s.substring(i+1), listOfStrings);
        }
        return res;
    }

    public static void main(String[] args) {

        String key="abcde";
        String[] list={"abc", "cd", "de", "bc"};  //true
        //String[] list={"ab", "cd", "de", "bc"};   //false
        //String[] list={"ab", "cd", "de", "e"};  //true
        //String[] list={"abcd", "de", "xyz"};  //false
        //String[] list={"abcd", "e", "xyz"};   //true

        List<String> al = new ArrayList<String>(Arrays.asList(list));

        System.out.println(findString(key, al));

    }

}