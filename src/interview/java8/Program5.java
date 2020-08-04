import java.util.*;

public class Program5 {

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

    public static void basicQueue(){
        //Queue
        //Case1: Basic Queue
        ArrayDeque<Student> queue1 = new ArrayDeque<>();
        queue1.add(new Student("a", 101));
        queue1.add(new Student("b", 102));
        queue1.addLast(new Student("last", 103));
        queue1.addFirst(new Student("pre-a", 100));
        System.out.println(queue1);

        Student first = queue1.pollFirst();
        System.out.println("First = "+first);
        queue1.removeFirst();
        queue1.removeLast();
        System.out.println(queue1);

        new Random()
                .ints(5, 200, 210)
                .forEach(roll -> queue1.add(new Student("a"+roll, roll)));

        //traverse one by one
        System.out.println("Traverse: ");
        while(!queue1.isEmpty()){
            Student temp  = queue1.poll();
            System.out.println(temp);
        }
    }

    public static void maxPriorityQueue(){
        //pass function in the construction
        PriorityQueue<Integer> maxQ = new PriorityQueue<>((a,b) -> b-a);
        maxQ.add(10);
        maxQ.add(3);
        maxQ.add(12);
        maxQ.add(1);
        maxQ.add(15);
        System.out.println(maxQ);
    }

    public static void heapExample(){
        //heap is nothing but each node have multiple values but sort with one field
        // lets see we need to find the 3rd biggest number index
        /*
        Ex: [3,7,8,2,3,14]
        Index of third biggest element is 1 i.e., number 7 after 8 and 14.
         */
        //create a max heap, each element in the queue store array value and index
        //0- value, 1 is index
        PriorityQueue<int[]> maxQ = new PriorityQueue<>((a,b) -> b[0]-a[0]);
        int input[] = new int[]{3,7,8,2,3,14};
        int k = 3; //third biggest element
        for(int i=0;i<input.length;i++){
            maxQ.offer(new int[]{input[i], i});
        }

        while(!maxQ.isEmpty()){
            int[] res = maxQ.poll();
            k--;
            if(k == 0){
                System.out.println(res[1]);
            }
        }

    }

    public static void main(String[] args) {

        //basicQueue();
        //maxPriorityQueue();
        heapExample();
    }
}
