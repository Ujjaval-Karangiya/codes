import java.util.*;

class binary_search_in_2d {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
        int[][] arr={
            {1,2,3,4},
            {5,6,7,8},
            {9,10,11,12},
            {13,14,15,16},
        };
           int r = 4;
           int l = 4;
          for (int i = 0; i < r; i++) {
            for (int j = 0; j < l; j++) {
                System.out.print(arr[i][j]+"  ");
            }
            System.out.println(" ");
        }
        System.out.println("enter your target");
        int target = sc.nextInt();
        System.out.println(Arrays.toString(search(arr, target)));
    }

    static int[] binary_search(int arr[][],int r, int cstart, int cend, int target){
        while (cstart <= cend) {
            int mid = cstart + (cend - cstart) / 2;

            if (arr[r][mid]==target) {
                return new int[]{r,mid};
            }
            if (arr[r][mid] < target) {
                cstart = mid + 1;
            }else{
                cend = mid-1;
            }
        }
      return new int[]{-1,-1};
    }


   static int[] search(int[][] arr,int target){
          int r =arr.length;
          int c = arr[0].length;

          if(r==1){ 
               return binary_search(arr, 0, 0, c-1, target);
          }
          int rs =0;
          int re =r-1;
          int cmid = c/2;

          while (rs<(re-1)) {
            int mid =rs+(re-rs)/2  ;
            if (arr[mid][cmid]==target) {
                return new int[]{mid,cmid};
            }
            if (arr[mid][cmid]<target) {
                rs = mid;
            }else{
                re = mid;
            }
          }

          if (arr[rs][cmid]==target) {
             return new int[]{rs,cmid}; 
          }
          if (arr[rs+1][cmid]==target) {
             return new int[]{rs+1,cmid}; 
          }



          if (target <= arr[rs][cmid-1]) {
            return binary_search(arr, rs,0,cmid-1, target);
          }
          if (target >= arr[rs][cmid+1] && target  <=  arr[rs][c-1] ) {
            return binary_search(arr, rs,cmid+1,c-1, target);
          }
          if (target <= arr[rs+1][cmid-1]) {
            return binary_search(arr, rs+1,0,cmid-1, target);
          }else{
            return binary_search(arr, rs+1,cmid+1,c-1, target);
          }
    }
}
