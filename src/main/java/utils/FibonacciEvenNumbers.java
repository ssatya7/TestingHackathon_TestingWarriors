package utils;

import java.util.ArrayList;
import java.util.List;

public class FibonacciEvenNumbers {
    public static List<Integer> generateFibonacciEvenNumbers(int limit) {
        List<Integer> fibonacciNumbers = new ArrayList<>();
        int a = 0;
        int b = 1;

        while (a <= limit) {
            if (a % 2 == 0) {
                fibonacciNumbers.add(a);
            }
            int temp = a + b;
            a = b;
            b = temp;
        }
        return fibonacciNumbers;
    }
}

