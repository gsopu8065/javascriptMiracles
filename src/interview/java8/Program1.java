

import com.sun.org.apache.xpath.internal.operations.Bool;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Program1 {

    static class Student {
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

    public static void main(String[] args) {

        List<Student> students = new ArrayList<Student>();
        students.add(new Student("a", 101));
        students.add(new Student("b", 102));
        students.add(new Student("c", 103));


        //ForEach
        students.forEach(System.out::println);

        //Arrays to List
        Student[] studentsArray = new Student[]{new Student("p", 106), new Student("q", 107),new Student("r", 108)};
        Arrays.asList(studentsArray).forEach(System.out::println);


        //List to Array
        studentsArray = Arrays.asList(studentsArray).toArray(studentsArray);
        for(Student s: studentsArray)
            System.out.println(s);

        //create 10 students and fill them with name "jack and roll 10
        Student[] studentsArray2 = new Student[10];
        Arrays.fill(studentsArray2, new Student("jack", 10));
        Arrays.asList(studentsArray2).forEach(System.out::println);

        //Create 50 to 100 integers and print
        IntStream.range(50, 100).forEach(System.out::print);

        //Stream Sorted: get 20 random numbers from (100 to 200) and map to students and sort decending Stream
        new Random()
                .ints(20, 100, 200)
                .mapToObj(roll -> new Student("test", roll))
                .sorted(new Comparator<Student>() {
                    @Override
                    public int compare(Student o1, Student o2) {
                        return o2.roll-o1.roll;
                    }
                }).forEach(System.out::println);

        //Array sorted: get 20 random numbers from (100 to 200) and map to students and sort decending Stream
        Student[] randomStudents = new Student[20];
        int[] idx = { 0 };
        new Random()
                .ints(20, 100, 200)
                .forEach(x -> randomStudents[idx[0]++] = new Student("jhg", x));
        Arrays.sort(randomStudents, new Comparator<Student>() {
            @Override
            public int compare(Student o1, Student o2) {
                return o1.roll-o2.roll;
            }
        });
        for(Student s: randomStudents)
            System.out.println(s);


        //Stream API
        //Section1: stream, map all rollnumbers, filter greater than 102 and collect integers
        students.stream()
                .map(student -> student.roll)
                .filter(roll -> roll >=102)
                .collect(Collectors.toList())
                .forEach(System.out::println);

        //Section2: parallel stream and disply names
        students.parallelStream().forEach(System.out::println);


        //flatmap
        //List<Interval> allSchdules = schedule.stream().flatMap(List::stream).collect(Collectors.toList());

        System.out.println("apple".compareTo("banana"));

        LinkedList<Integer> x = new LinkedList<>();
        x.add(5);
        x.add(7);
        System.out.println(x);

    }
}

