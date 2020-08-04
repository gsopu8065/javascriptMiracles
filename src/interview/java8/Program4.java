import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Program4 {
    static class Student{
        String name;
        int roll;
        public Student(String n, int r){
            name = n;
            roll = r;
        }
        @Override
        public String toString() {
            return "Student{" +
                    "name='" + name + '\'' +
                    ", roll=" + roll +
                    '}';
        }
    }

    public static void hashmap(){
        //Hashmap
        Map<Integer, Student> map1 = new HashMap<>();
        IntStream.range(20,25).forEach(i -> map1.put(i, new Student("test"+i, i)));
        System.out.println(map1);

        //Print only keys
        map1.keySet().forEach(System.out::println);

        //Print only values
        map1.values().forEach(System.out::println);

        //print values only greater than 22
        map1.values().stream().filter(s -> s.roll > 22).forEach(System.out::println);

        //process each row, add key prefix to names and return
        map1.entrySet()
                .stream().map(row -> row.getKey()+row.getValue().name)
                .forEach(System.out::println);

        //search for key
        System.out.println(map1.containsKey(23));

        //put if absecnt
        map1.putIfAbsent(23, new Student("test", 23));


        //sort Limit and skip methods
        map1.entrySet().stream().sorted((a,b) -> a.getKey() - b.getKey()).limit(2).collect(Collectors.toList());

    }

    public static void treemap(){
        //Treemap:
        //1. dont allow null keys
        //2. order keys
        Map<Integer, Student> map1 = new TreeMap<>();

        new Random()
                .ints(5, 30, 35)
                .forEach(i -> map1.put(i, new Student("test"+i, i)));
        System.out.println(map1);

        //reverse tree map
        Map<String, String> treemap =
                new TreeMap<String, String>(Collections.reverseOrder());

        // Put elements to the map
        treemap.put("1", "Welcome");
        treemap.put("2", "to");
        treemap.put("3", "the");
        treemap.put("4", "Geeks");
        treemap.put("5", "Community");
        System.out.println(treemap);

    }

    public static void linkedHashMapInsertOrder(){
        //LinkedHashMap:
        Map<Integer, Student> map1 = new LinkedHashMap<>();
        map1.put(1, new Student("test1", 1));
        map1.put(5, new Student("test5", 5));
        map1.put(3, new Student("test3", 3));
        map1.put(4, new Student("test4", 4));
        System.out.println(map1);

    }

    public static void linkedHashMapFetchOrder(){
        //LinkedHashMap:
        Map<Integer, Student> map1 = new LinkedHashMap<>(3, 0.75f, true);
        map1.put(1, new Student("test1", 1));
        map1.put(5, new Student("test5", 5));
        map1.put(3, new Student("test3", 3));
        map1.put(4, new Student("test4", 4));
        System.out.println(map1);

        map1.get(1);
        map1.get(3);
        System.out.println(map1);
        /*
        extends LinkedHashMap and override it to get LRU
        @Override
        protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
            return size() > capacity;
        }
         */
    }
    public static void main(String[] args) {

        //hashmap();
        //treemap();
        //linkedHashMapInsertOrder();
        linkedHashMapFetchOrder();
    }
}
