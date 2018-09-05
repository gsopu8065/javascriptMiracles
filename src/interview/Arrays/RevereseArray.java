/**
 * Created by srujan.gopu on 8/25/18.
 */

//Reverse Array with out copying
public class RevereseArray {

    public static void main(String[] args)
    {
        int arr[] = {1, 2, 3, 4, 5, 6, 7};
        int start = 0;
        int end = arr.length-1;
        int temp;
        while (start <  end){
         temp = arr[start];
         arr[start] = arr[end];
         arr[end] = temp;
         start++;
         end--;
        }
        for(int x : arr){
            System.out.println(x);
        }
    }
}
