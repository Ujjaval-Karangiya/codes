import { useState } from "react"
function Count1(){
    let [count,setcount]= useState(0);

    let incCount = ()=>{
        setcount(count+1);
    }
    return (
        <>
        <button onClick={incCount}>your count is : {count}</button>
        </>
    )
}
export default Count1;