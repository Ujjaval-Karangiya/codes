import java.util.Scanner;

class binarySearch {
  public static void main(String[] args) {
    int arr[] ={10,20,30,40,50,60,70,80,90,100};
    int target = 80;
    int start = 0;
    int end = arr.length;
    
    while (start <= end) {
        int mid = start + (end - start) / 2;
        
        if (arr[mid] == target) {
            System.out.println(mid); 
        }
        
        if (arr[mid] < target) {
            start = mid + 1;
        } 
        else {
            end = mid - 1;
        }
    }
}
}
