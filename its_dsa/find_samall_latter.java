public class find_samall_latter {
    public static void main(String[] args) {
        char latter[]={'a', 'n', 'x'};
        char target = 'c';
       if(target < latter[2]){
        
        if(target <latter[0]){
            System.out.println("a");
        }
        else if(target < latter[1]){
            System.out.println("n");
        }
        else{
            System.out.println("x");
        }
    }
    else{
        System.out.println(latter[0]);
    }
}
}
