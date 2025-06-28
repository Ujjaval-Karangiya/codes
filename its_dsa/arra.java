import java.util.*;

public class arra {
    //print the array 
    static void print(int array[]) {
        for (int i = 0; i < array.length; i++) {
            System.out.println((i + 1) + ":" + array[i]);
        }
    }

    // for linear search
    static void linear_search(int array[], int key) {
        for (int i = 0; i < array.length; i++) {
            if (array[i] == key) {
                System.out.println("in the form of linear search...index " + (i) + " have a value :" + key);
            }

        }
    }
    //for find the min max number
    static void min_max(int array[]){
        int min = Integer.MIN_VALUE;
         for (int i = 0; i < array.length; i++) {
            if (min<=array[i]) {
                min=array[i];
            }      
        }
        System.out.println("minimum is :"+min);
        int max = Integer.MAX_VALUE;
        for (int i = 0; i < array.length; i++) {
            if (max>=array[i]) {
                max=array[i];
            }
        }
        System.out.println("maximum is :"+max);
    }
    //binary search
    static void binary(int array[],int key){
        int st = 0 ;
        int ed = array.length-1;
        while (true) {
            int mid =(st+ed)/2;
        if (array[mid]==key) {
           System.out.println("your target is in "+(mid+1)+" position"); 
           break;       
        }else if (array[mid] >= key) {
            st=mid+1;
        }else if (array[mid] <= key) {
            ed=mid-1;
        }else{
           System.out.println("invalid");
           break;
        }
            
        }
    }
    //main function that execute code 
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
        for(num = 1; num >= 1;num++){
            System.out.println("\nfor print type 1 \nfor min-max number type 2 \nfor linear search type 3 \nfor binary search type 4 \n for exit type 0 ");
            int x = sc.nextInt();
        switch (x) {
            case 1 :System.out.println("your array is :");
                    print(array);
            break;
               
            case 2 :min_max(array);
            break;    
                
            case 3 :System.out.println("your guess num");
                    int key = sc.nextInt();
                    linear_search(array, key);
            break;
            case 4 :System.out.println("your guess num");
                    int key2 = sc.nextInt();
                    binary(array, key2);
            break;

            default:num=-1;
                break;
        }
    }

    }

}
