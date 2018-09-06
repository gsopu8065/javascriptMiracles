package Sorting;

public class BubbleSort {

    public static void sort(int arr[]){
        int n = arr.length;
        for (int i = 0; i < n-1; i++)
            for (int j = 0; j < n-i-1; j++)
                if (arr[j] > arr[j+1])
                {
                    // swap temp and arr[i]
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
    }

    public static void main(String[] args) {
        int x[] = {1, 60, -10, 70, -80, 85, 10};
        sort(x);
    }
}
