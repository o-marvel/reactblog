import react from "react";
import Todotray from "./todotray";

const Todolist =({item})=>{
    console.log(item);
    return(
        <>
         <div className = "">
            { item.map((i)=>
                 <Todotray jobname = {i.text} /> 
            )}          
        </div> 
        </>
       
    )
}

export default Todolist;