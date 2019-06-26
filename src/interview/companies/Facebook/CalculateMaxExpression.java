package Facebook;

/*
Input : 01231
        Output :
        ((((0 + 1) + 2) * 3) + 1) = 10
        In above manner, we get the maximum value i.e. 10

        Input : 891
        Output :73
        As 8*9*1 = 72 and 8*9+1 = 73.So, 73 is maximum.*/
class CalculateMaxExpression {
    // Mehod to calculate the value
    static int calcMaxValue(String str)
    {
        // Store first character as integer
        // in result
        int res = str.charAt(0) -'0';

        // Start traversing the string
        for (int i = 1; i < str.length(); i++)
        {
            // Check if any of the two numbers
            // is 0 or 1, If yes then add current
            // element
            if (str.charAt(i) == '0' || str.charAt(i) == '1' ||
                    str.charAt(i-1) == '0' || str.charAt(i-1) == '1' )
                res += (str.charAt(i)-'0');

                // Else multiply
            else
                res *= (str.charAt(i)-'0');
        }

        // Return maximum value
        return res;
    }

    // Driver Method
    public static void main(String[] args)
    {
        String str = "01891";
        System.out.println(calcMaxValue(str));
    }
}