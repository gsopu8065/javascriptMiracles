import java.util.Arrays;

public class Program2 {

    public static void main(String[] args) {

        //Strings
        //Section1: split string into words and display it
        Arrays.asList("abc def gh".split(" ")).forEach(System.out::println);

        //Section2: string replace
        System.out.println("abca".replace('a','d'));


    }
}
