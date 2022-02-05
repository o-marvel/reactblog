import { useState } from "react";

const Create =()=>{
    const [ title, setTitle ] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [ test, setTest] = useState('');

    function submitEventHandler(e) {
      e.preventDefault();
      console.log('u submited the form');
      const blog = {title, body, author};
      console.log(blog);
      
      //  fetch().then((res)=>res.json()).then((data)=>{console.log(data);})
      fetch('http://localhost:8001/data',{
        method : "POST", 
        headers : {"Content-type": "application/json"},
        body: JSON.stringify(blog)
      }).catch((err)=>{console.log(err.message);})
    }

    return(
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
          <h1 className ="text-center"> Create and Post your blog </h1>  
            <form className = "form-horizontal p-3"
            onSubmit = {submitEventHandler}>
              <label> Blog-Title</label>
              
              <input 
                type= "text"
                className= "form-control mb-3"
                onChange ={(e)=>{setTitle(e.target.value)}} 
                required
              />
              <label> Blog-Body</label>
              <textarea
              onChange = {(e)=>{setBody(e.target.value)}}
              placeholder = "write your blog here"
              className = "form-control mb-3"
               />
               <select
               onChange = {(e)=>setAuthor(e.target.value)}
                className = "form-control w-25 ">
                 <option value ='mario'> mario</option>
                 <option value = 'yoshi'> Yoshi</option>
               </select>
               <button className ="btn btn-primary mt-1"> submit</button>
            </form>
           
        </div>
    )
}
 export default Create;