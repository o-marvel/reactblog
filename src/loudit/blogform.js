import {useState} from 'react';



const BlogForm = () =>{

    const [name , setName] = useState('');
    const [summary, setSummary] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('test');
        let blogobj = {
            n : name,
            s : summary
        }
        console.log(blogobj);
        fetch('http://localhost:3004/data',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blogobj)
        })
        .catch(err=> console.log(err))
        .then(()=> {console.log('msg sent');
        })
        
        
    }

    return(
        <div>
            <div className = "col-10 mx-auto">
               <h1> form for login</h1>
            <form 
            className="form-horizontal"
            onSubmit = {handleSubmit}
            >
    {/* <p>{name}</p><p>{summary}</p> */}
                <label> Name: </label>
                <input
                 className ="form-control"
                 placeholder =" Name of Sender"
                 value = {name}
                 onChange = {(e)=>{ setName(e.target.value)}}
                 />

                <label> Summary</label>
                <textarea 
                className = "form-control"
                placeholder = " send a summary"
                value = {summary}
                onChange = {e=>setSummary(e.target.value)}
                />
                <button 
                className = "btn btn-info btn-block mt-1"> 
                send 
                </button>
            </form> 
            </div>
            
        </div>
    )
}
export default BlogForm;