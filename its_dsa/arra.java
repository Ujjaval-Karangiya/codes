import java.util.*;

public class arra {
    // print the array
    static void print(int array[]) {
        System.out.print("[");
        for (int i = 0; i < array.length; i++) {
            System.out.print(" " + array[i] + " ");
        }
        System.out.print("]");
    }

    // for linear search
    static void linear_search(int array[], int key) {
        for (int i = 0; i < array.length; i++) {
            if (array[i] == key) {
                System.out.println("in the form of linear search...index " + (i) + " have a value :" + key);
            }

        }
    }

    // for find the min max number
    static void min_max(int array[]) {
        int min = Integer.MIN_VALUE;
        for (int i = 0; i < array.length; i++) {
            if (min <= array[i]) {
                min = array[i];
            }
        }
        System.out.println("minimum is :" + min);
        int max = Integer.MAX_VALUE;
        for (int i = 0; i < array.length; i++) {
            if (max >= array[i]) {
                max = array[i];
            }
        }
        System.out.println("maximum is :" + max);
    }

    // binary search
    static void binary(int array[], int key) {
        int st = 0;
        int ed = array.length - 1;
        while (true) {
            int mid = (st + ed) / 2;
            if (array[mid] == key) {
                System.out.println("your target is in " + (mid + 1) + " position");
                break;
            } else if (array[mid] >= key) {
                st = mid + 1;
            } else if (array[mid] <= key) {
                ed = mid - 1;
            } else {
                System.out.println("invalid");
                break;
            }

        }
    }

    // this is for revese array
    static void reverse(int array[]) {
        int fi = 0;
        int la = array.length - 1;
        while (fi < la) {
            int temp = array[fi];
            array[fi] = array[la];
            array[la] = temp;
            fi++;
            la--;
        }
        System.out.println("your array is :");
        System.out.print("[");
        for (int i = 0; i < array.length; i++) {
            System.out.print(" " + array[i] + " ");
        }
        System.out.print("]");
    }

    // pair the array
    static void pair(int array[]) {
        System.out.println("it is all posible pairs");
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array.length; j++) {
                if (array[i] != array[j]) {
                    System.out.print("(" + array[i] + "," + array[j] + ")" + " ");
                }
            }
            System.out.println();
        }
        System.out.println("it is all greter posible pair");
        for (int i = 0; i < array.length; i++) {
            for (int j = i + 1; j < array.length; j++) {
                if (array[i] != array[j]) {
                    System.out.print("(" + array[i] + "," + array[j] + ")" + " ");
                }
            }
            System.out.println();
        }
    }

    // total sub arrays
    static void subArray(int array[]) {
        for (int i = 0; i < array.length; i++) {
            for (int j = i; j < array.length; j++) {
                System.out.print("[");
                for (int k = i; k < j; k++) {
                    System.out.print(" " + array[k] + " ");
                }
                System.out.print("]");
            }
            System.out.println();
        }
    }

    // bubble sort
    static void bubble(int array[]) {
        for (int i = 0; i < array.length - 1; i++) {
            for (int j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        System.out.print("[");
        for (int i = 0; i < array.length; i++) {
            System.out.print(" " + array[i] + " ");
        }
        System.out.print("]");

    }

    // selectionsort
    static void selection(int array[]) {
        for (int i = 0; i < array.length - 1; i++) {
            int minpos = i;
            for (int j = i + 1; j < array.length; j++) {
                if (array[minpos] < array[j]) {
                    minpos = j;
                }
            }
            int temp = array[minpos];
            array[minpos] = array[i];
            array[i] = temp;
        }

        System.out.print("[");
        for (int i = 0; i < array.length; i++) {
            System.out.print(" " + array[i] + " ");
        }
        System.out.print("]");
    }

    // Insertion Sort
    static void insertionSort(int array[]) {
        for (int i = 1; i < array.length; i++) {
            int key = array[i];
            int j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
    }

    // Counting Sort (non-negative only)
    static void countingSort(int array[]) {
        int max = Arrays.stream(array).max().orElse(0);
        int[] count = new int[max + 1];
        for (int num : array)
            count[num]++;
        int index = 0;
        for (int i = 0; i < count.length; i++)
            while (count[i]-- > 0)
                array[index++] = i;
    }

    // Delete at index
    static int[] deleteElement(int[] array, int index) {
        if (index < 0 || index >= array.length)
            return array;
        int[] newArr = new int[array.length - 1];
        for (int i = 0, j = 0; i < array.length; i++) {
            if (i != index)
                newArr[j++] = array[i];
        }
        return newArr;
    }

    // insert at index
    static int[] insertElement(int[] array, int index, int value) {
        int[] newArr = new int[array.length + 1];
        for (int i = 0, j = 0; i < newArr.length; i++) {
            if (i == index)
                newArr[i] = value;
            else
                newArr[i] = array[j++];
        }
        return newArr;
    }

    // main function that execute code
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int array[] = new int[5];

        System.out.println("enter your number add to array...:");
        for (int i = 0; i < array.length; i++) {
            int n = sc.nextInt();
            array[i] = n;
            if (n == 0) {
                break;
            }
        }

        int num = 1;
        for (num = 1; num >= 1; num++) {
             System.out.println("\n--- Array Operations Menu ---");
             System.out.println("1. Print Array");
             System.out.println("2. Min & Max");
            System.out.println("3. Linear Search");
            System.out.println("4. Binary Search");
            System.out.println("5. reverse array");
            System.out.println("6. pairs");
            System.out.println("7. subarray");
            System.out.println("8. Bubble Sort");
            System.out.println("9. Selection Sort");
            System.out.println("10. Insertion Sort");
            System.out.println("11. Counting Sort");
            System.out.println("12. Insert Element");
            System.out.println("13. Delete Element");
            System.out.println("0. Exit");
            System.out.print("Enter your choice: ");
            int x = sc.nextInt();
            switch (x) {
                case 1:
                    System.out.println("your array is :");
                    print(array);
                    break;

                case 2:
                    min_max(array);
                    break;

                case 3:
                    System.out.println("your guess num");
                    int key = sc.nextInt();
                    linear_search(array, key);
                    break;
                case 4:
                    System.out.println("your guess num");
                    int key2 = sc.nextInt();
                    binary(array, key2);
                    break;
                case 5:
                    reverse(array);
                    break;

                case 6:
                    pair(array);
                    break;

                case 7:
                    subArray(array);
                    break;

                case 8:
                    bubble(array);
                    break;

                case 9:
                    selection(array);
                    break;

                case 10:    
                    insertionSort(array);
                    System.out.println("After Insertion Sort:");
                    print(array);
                    break;

                case 11:
                    countingSort(array);
                    System.out.println("After Counting Sort:");
                    print(array);
                    break; 

                 case 12:
                    System.out.print("Enter index to insert: ");
                    int idx = sc.nextInt();
                    System.out.print("Enter value: ");
                    int val = sc.nextInt();
                    array = insertElement(array, idx, val);
                    print(array);
                    break;

                case 13:
                    System.out.print("Enter index to delete: ");
                    int delIdx = sc.nextInt();
                    array = deleteElement(array, delIdx);
                    print(array);
                    break;    
                    
                default:
                    num = -1;
                    break;
            }
        }

    }

}
