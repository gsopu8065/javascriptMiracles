class RotateArray
{
    /*Function to left rotate arr[] of size n by d*/
    void leftRotate(int arr[], int d)
    {
        for (int i = 0; i < d; i++)
            leftRotatebyOne(arr);
    }

    void leftRotatebyOne(int arr[])
    {
        int i, temp;
        temp = arr[0];
        for (i = 0; i < arr.length - 1; i++)
            arr[i] = arr[i + 1];
        arr[i] = temp;
    }

    void rightRotatebyOne(int arr[])
    {
        int i, temp;
        temp = arr[arr.length - 1];
        for (i = arr.length - 1; i > 0; i--)
            arr[i] = arr[i - 1];
        arr[0] = temp;
    }

    /* utility function to print an array */
    void printArray(int arr[])
    {
        for (int i = 0; i < arr.length; i++)
            System.out.print(arr[i] + " ");
    }

    // Driver program to test above functions
    public static void main(String[] args)
    {
        RotateArray rotate = new RotateArray();
        int arr[] = {1, 2, 3, 4, 5, 6, 7};
        rotate.leftRotate(arr, 2);
        rotate.rightRotatebyOne(arr);
        rotate.printArray(arr);
    }
}
