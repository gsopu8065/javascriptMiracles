public class TrappingRainWater {

    public static int getWater(int x[]){

        int leftBiggest = 0;
        int rightBiggest = 0;

        int leftIndex = 0;
        int rightIndex = x.length-1;
        int water = 0;

        while (leftIndex<rightIndex){

            if(x[leftIndex]<x[rightIndex]){

                if(leftBiggest<x[leftIndex]){
                    leftBiggest = x[leftIndex];
                }
                else{
                    water += (leftBiggest - x[leftIndex]);
                }
                leftIndex++;
            }
            else {

                if(rightBiggest< x[rightIndex]){
                    rightBiggest = x[rightIndex];
                }
                else{
                    water += (rightBiggest - x[rightIndex]);
                }
                rightIndex--;
            }

        }


        return water;
    }

    public static void main(String[] args) {
        int[] p = {3,0,0,2,0,4};
        System.out.println(getWater(p) == 10);

        int[] p1 = {2,0,2};
        System.out.println(getWater(p1) == 2);

        int[] p2 = {2, 1, 0, 3};
        System.out.println(getWater(p2) == 3);
    }
}
