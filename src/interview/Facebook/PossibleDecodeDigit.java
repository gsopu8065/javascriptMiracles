/**
 * Created by srujan.gopu on 8/30/18.
 */
public class PossibleDecodeDigit {

    // Given a digit sequence of length n,
// returns count of possible decodings by
// replacing 1 with A, 2 woth B, ... 26 with Z
    static int countDecoding(char[] digits, int n)
    {
        // base cases
        if (n == 0 || n == 1)
            return 1;

        // Initialize count
        int count = 0;
        int index = n-1;
        char currentDigit = digits[index];
        char beforeDigit = digits[index - 1];


        if (currentDigit > '0')
            count = countDecoding(digits, n - 1);


        if (beforeDigit == '1' || (beforeDigit == '2' && currentDigit < '7'))
            count += countDecoding(digits, n - 2);

        return count;
    }

    // Driver program to test above function
    public static void main(String[] args)
    {
        char digits[] = {'1', '2', '3', '4'};
        int n = digits.length;
        System.out.printf("Count is %d", countDecoding(digits, n));
    }
}
