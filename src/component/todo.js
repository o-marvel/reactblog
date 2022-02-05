import { useState } from "react";
import InputForm from "./InputForm";
import Todolist from "./todolist";

const Todo = ()=>{
 const [inputText, setInputText] = useState('');
 const [item, setItem] = useState([]);

    return(
        <div className =" col-lg-6 col-md-9 col-sm-10 mx-auto">
            <div className = "card card-body">
            <h2 className ="text-center"> To-Do List </h2>
            <InputForm item ={item} setItem ={setItem} inputText = {inputText} setInputText={setInputText}/>
            <Todolist item = {item}/>
            </div>
        </div>
        
    )
}
export default Todo;