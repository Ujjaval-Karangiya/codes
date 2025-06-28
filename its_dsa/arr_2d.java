import java.util.Scanner;

public class arr_2d   {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter your row number :\n");
        int r = sc.nextInt();
        System.out.println("enter your column number :\n");
        int l = sc.nextInt();
        int[][] arr=new int[r][l];

        for (int i = 0; i < r; i++) {
            for (int j = 0; j <l; j++) {
                arr[i][j]=sc.nextInt();
            }
        }
        
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < l; j++) {
                System.out.print(arr[i][j]+"  ");
            }
            System.out.println(" ");
        }
        System.out.println("enter your target number :\n");
        int x = sc.nextInt();
        for (int i = 0; i < r; i++) {
            for (int j = 0; j <l; j++) {
                if (arr[i][j]==x){
                    System.out.println("target found at ( "+i+","+j+")");
                }
            }
        }
    }
}