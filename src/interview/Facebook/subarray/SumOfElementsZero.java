package subarray;

import java.util.Arrays;

public class SumOfElementsZero {

    public static void sumOfTwo(int arr[]){
        Arrays.sort(arr);

        boolean found = false;
        int n = arr.length;
        for (int i=0; i<n-1; i++)
        {
            // initialize left and right
            int l = i;
            int r = n - 1;
            while (l < r)
            {
                if (arr[l] + arr[r] == 0)
                {
                    // print elements if it's sum is zero
                    System.out.println(arr[l]+" "+arr[r]);
                    l++;
                    r--;
                    found = true;
                }

                // If sum of three elements is less
                // than zero then increment in left
                else if (arr[l] + arr[r] < 0)
                    l++;

                    // if sum is greater than zero than
                    // decrement in right side
                else
                    r--;
            }
        }
        if(!found) {
            System.out.println("Not found");
        }
    }

    public static void sumOfThree(int arr[]){
        Arrays.sort(arr);

        boolean found = false;
        int n = arr.length;
        for (int i=0; i<n-1; i++)
        {
            // initialize left and right
            int l = i + 1;
            int r = n - 1;
            int x = arr[i];
            while (l < r)
            {
                if (x+arr[l] + arr[r] == 0)
                {
                    // print elements if it's sum is zero
                    System.out.println(""+x+" "+arr[l]+" "+arr[r]);
                    l++;
                    r--;
                    found = true;
                }

                // If sum of three elements is less
                // than zero then increment in left
                else if (x+arr[l] + arr[r] < 0)
                    l++;

                    // if sum is greater than zero than
                    // decrement in right side
                else
                    r--;
            }
        }
        if(!found) {
            System.out.println("Not found");
        }


    }


    public static void main(String[] args) {
        int x[] = {-1,0,1,2,-1,-4};
        //sumOfTwo(x);
        sumOfThree(x);
    }
}
