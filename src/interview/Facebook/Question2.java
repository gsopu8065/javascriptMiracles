/*
find the maximum element of every k-elements

ex: input(array = [1,5,6,7,34,12,38,56], k= 3)

output: [6,7,34,34,38,56]

explanation: since k = 3, we have to go through every k elements
 6 is biggest in [1,5,6]
 7 is biggest in [5,6,7]
 34 is biggest in [6,7,34]
 34 is biggest in [7,34,12]
 38 is biggets in [34,12,38]
 56 is biggest in [12,38,56]

 Output: [6,7,34,34,38,56]

 Clue: Dont modify/clone the array, solve it with the least space and time complexity

 */

import java.util.ArrayList;
import java.util.List;

public class Question2 {

    public static List solve(int a[], int k){

        List res = new ArrayList();
        for(int i=0;i<a.length-k+1;i++){
            res.add(getMax(a, i, i+k-1));
        }
        return res;
    }

    public static int getMax(int a[], int start, int end){
        int max = a[start];
        for(int i=start+1;i<=end;i++) {
            if (max < a[i]) {
                max = a[i];
            }
        }
        return max;
    }

    public static void main(String[] args) {

        int i[] = {1,5,6,7,34,12,38,56};
        List res = solve(i, 3);
        System.out.println(res);

    }
}
