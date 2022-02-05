const InputForm = ({inputText, setInputText, setItem, item})=>{
    // console.log(todo);

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("u cliked submit");
        setItem([
            ...item, 
            {text:inputText, completed:false, id:Math.random()*100}
        ]);
        setInputText("");
       
    }
    return(
        <div>
            {inputText}
            <form className ="form-group">
                <input
                 className ="form-control"
                 placeholder = "enter your list"
                 value = {inputText}
                 onChange ={(e)=>{setInputText(e.target.value)}}
                 />
                 <button 
                 type ="submit"
                 onClick ={handleSubmit}
                 className = "btn btn-primary sm mt-1">
                     save
                </button>
            </form>
        </div>
    )
}
export default InputForm;