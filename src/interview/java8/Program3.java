import java.util.*;

public class Program3 {

    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("raj");
        names.add("abc");
        names.add("pankaj");
        names.add("xyz");
        names.add("123");


        //section1: List methods
        System.out.println("contains abc ="+names.contains("abc"));
        System.out.println("size ="+names.size());

        names.add(2, "srujan");
        System.out.println("list = "+names);


        List<String> sub = names.subList(0,2);
        System.out.println("sublist = "+sub);

        //List to arry
        String namesArr[]=names.toArray(new String[names.size()]);

        //reverse the list
        Collections.reverse(names);
        System.out.println("reverse list = "+names);

        //max value
        System.out.println("max in list = "+Collections.max(names));

        //convert it to set
        names.add("xyz");
        System.out.println("List to Set = "+new HashSet<>(names));

        //copy of list
        List<String> copyNames =new ArrayList<>(names);
        copyNames.add("taryn");
        System.out.println("old list = "+names);
        System.out.println("clone list = "+copyNames);
    }
}
