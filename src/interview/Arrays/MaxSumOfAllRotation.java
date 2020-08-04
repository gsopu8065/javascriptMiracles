// A Naive Java program to find
// maximum sum rotation
import java.util.*;
import java.io.*;

class MaxSumOfAllRotation {

    // Returns maximum value of i*arr[i]
    //This is O(n^2)
    static int maxSum(int arr[], int n)
    {
// Initialize result
        int res = Integer.MIN_VALUE;

// Consider rotation beginning with i
// for all possible values of i.
        for (int i = 0; i < n; i++)
        {

            // Initialize sum of current rotation
            int curr_sum = 0;

            // Compute sum of all values. We don't
            // acutally rotation the array, but compute
            // sum by finding ndexes when arr[i] is
            // first element
            for (int j = 0; j < n; j++)
            {
                int index = (i + j) % n;
                curr_sum += j * arr[index];
            }

            // Update result if required
            res = Math.max(res, curr_sum);
        }

        return res;
    }


    //This is O(n)
    static int maxSum2(int arr[], int n){

        // Compute sum of all array elements
        int total_sum = 0;
        for (int i = 0; i < n; i++)
            total_sum += arr[i];

        // Compute sum of i*arr[i] for
        // initial configuration.
        int curr_val = 0;
        for (int i = 0; i < n; i++)
            curr_val += i * arr[i];

        // Initialize result
        int res = curr_val;

        // Compute values for other iterations
        for (int i = 1; i < n; i++)
        {
            // Compute next value using previous
            // value in O(1) time

            //Its anti-clock rotation
            //Every iteartion,
            // 1. previous value goes to end which is arr[n-1]*(n-1)  (ADD this)
            // 2. Each number decrease by one, except previous number
            int next_val = curr_val;
            next_val += arr[i-1] * (n-1);
            next_val -= (total_sum - arr[i-1]);

            // Update current value
            curr_val = next_val;

            // Update result if required
            res = Math.max(res, next_val);
        }

        return res;
    }

    // Driver code
    public static void main(String args[])
    {
        int arr[] = {8, 3, 1, 2};
        int n = arr.length;
        System.out.println(maxSum2(arr, n));
    }


}