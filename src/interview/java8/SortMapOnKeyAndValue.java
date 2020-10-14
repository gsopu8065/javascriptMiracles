import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

import static java.util.Map.Entry.comparingByValue;

public class SortMapOnKeyAndValue {

    public static void main(String[] args) {
        List<Order> orders =  new ArrayList<>();
        orders.add(new Order(123, LocalDate.of(2020, 2, 12), 23.98));
        orders.add(new Order(456, LocalDate.of(2020, 2, 12), 123.98));
        orders.add(new Order(567, LocalDate.of(2020, 3, 12), 323.98));
        orders.add(new Order(123, LocalDate.of(2020, 2, 12), 243.98));
        orders.add(new Order(345, LocalDate.of(2020, 4, 12), 223.98));
        orders.add(new Order(456, LocalDate.of(2020, 5, 12), 273.98));
        orders.add(new Order(123, LocalDate.of(2020, 6, 12), 823.98));

        Map<Integer, Double> map = new HashMap<>();
        orders.forEach(order -> {
            map.putIfAbsent(order.orderId, 0.0);
            map.put(order.orderId, map.get(order.orderId)+order.price);
        });

        //create List of entries
        List<Map.Entry<Integer, Double>> list = new ArrayList<>(map.entrySet());
        Collections.sort(list, new Comparator<Map.Entry<Integer, Double>>() {
            public int compare(Map.Entry<Integer, Double> e1, Map.Entry<Integer, Double> e2){
                return e2.getValue().compareTo(e1.getValue());
            }
        });

        for(Map.Entry e : list)
            System.out.println(" key = "+e.getKey()+" value = "+e.getValue());


    }
}
class Order {
    int orderId;
    LocalDate date;
    Double price;

    public Order(int orderId, LocalDate date, Double price) {
        super();
        this.orderId = orderId;
        this.date = date;
        this.price = price;
    }
}