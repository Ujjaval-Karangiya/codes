import { useState } from "react"

export default function  Todolist(){
    let [list,setlist]=useState(["nothing"]);
    let [newvalue ,setnewvalue]=useState("");

    let addnewtodo = () => {
        setlist([...list,newvalue]);
    }

    let setnewtodo = (event) => {
        setnewvalue(event.target.value);
    }
    return (
        <>
        <input type="text" value={newvalue} onChange={setnewtodo}/><br /><br />
        <button onClick={addnewtodo}>add</button>
        <br />
        <p>here is your to do list</p>
        <ol>
         {
              list.map((list)=>(
                <li>{list}</li>
              ))
         }
        </ol>
        </>
    )
}