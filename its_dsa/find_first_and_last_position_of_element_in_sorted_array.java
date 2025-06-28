public class find_first_and_last_position_of_element_in_sorted_array {
    public static void main(String[] args) {
        int nums[]={5,7,7,8,8,10};
        int target=8;
        int s = 0;
        int e = nums.length - 1;
        int mid = 0;
        

        while (s <= e) {
            mid = s + (e - s) / 2; 

            if (nums[mid] > target) {
                e = mid - 1;
            } else if (nums[mid] < target) {
                s = mid + 1;
            } else {
               int last = mid;
               while ( mid - 1 <= (nums.length-1)&& (nums[mid-1] == target)){
                 last = mid + 1;
               }
               int first = mid;
               while(mid+1>=(nums.length+1)&&(nums[mid+1] == target)){
                first = mid + 1;
   
            }
            
            int ar[] ={first,last};
            System.out.println(ar[0] +"," +ar[1]);
        }
    }
    int arr[]={-1,-1};
    System.out.println(arr[0] +"," +arr[1]);
            
}
}
       
    
    