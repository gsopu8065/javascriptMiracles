package Facebook.roman;/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */

public class RomanToDecimal {
    public static void romanToDecimal(String romanNumber) {
        int res = 0;
        int lastNumber = 0;
        String romanNumeral = romanNumber.toUpperCase();
        /* operation to be performed on upper cases even if user
           enters roman values in lower case chars */
        for (int x = romanNumeral.length() - 1; x >= 0 ; x--) {
            char convertToDecimal = romanNumeral.charAt(x);

            switch (convertToDecimal) {
                case 'M':
                    res = processDecimal(1000, lastNumber, res);
                    lastNumber = 1000;
                    break;

                case 'D':
                    res = processDecimal(500, lastNumber, res);
                    lastNumber = 500;
                    break;

                case 'C':
                    res = processDecimal(100, lastNumber, res);
                    lastNumber = 100;
                    break;

                case 'L':
                    res = processDecimal(50, lastNumber, res);
                    lastNumber = 50;
                    break;

                case 'X':
                    res = processDecimal(10, lastNumber, res);
                    lastNumber = 10;
                    break;

                case 'V':
                    res = processDecimal(5, lastNumber, res);
                    lastNumber = 5;
                    break;

                case 'I':
                    res = processDecimal(1, lastNumber, res);
                    lastNumber = 1;
                    break;
            }
        }
        System.out.println(res);
    }

    public static int processDecimal(int decimal, int lastNumber, int res) {
        if (lastNumber > decimal) {
            return res - decimal;
        } else {
            return res + decimal;
        }
    }

    public static void main(java.lang.String args[]) {
        romanToDecimal("LXIV");
    }
}