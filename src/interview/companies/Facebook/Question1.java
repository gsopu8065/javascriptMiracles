package Facebook;/*

Generate all possible combinations(permitations) with a string
ex1: input: "abc"
output: abc, acb, bac, bca, cab, cba

ex2: input: "xy"
output: xy, yx

Assume: input string doesn't have any spaces and repeated characters

 */

import java.util.HashSet;
import java.util.Set;

public class Question1 {

    public static Set<String> getPermitations(String s){

        Set<String> res = new HashSet<String>();

        if(s.length() == 1){
            res.add(s);
        }
        else {
            for(int i=0;i<s.length();i++){
                String currentChar = s.charAt(i)+"";
                String preText = (i != 0)?s.substring(0,i):"";
                String posText = (i != s.length()-1)?s.substring(i+1):"";
                Set<String> strPermitations = getPermitations(preText+posText);
                for(String eachStr: strPermitations){
                    res.add(currentChar+eachStr);
                }
            }
        }

        return res;

    }

    public static void main(String[] args) {
        Set res = getPermitations("abcd");
        System.out.println(res.size());
        System.out.println(res);
    }
}
