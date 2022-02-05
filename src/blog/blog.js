import React from 'react'
import { Link } from 'react-router-dom'

function Bloglist(props) {

    
    const blogTitle = props.mytitle
    const blogs = props.blog
    
    return (

        <div>
        <h1 className = "display-5" > { blogTitle } </h1>
         {blogs.map((user) => ( 
            <div className = "card card-body"
                key = { user.Id } >
                <Link className = "no-line" to = {`/blog/${user.Id }`} >
                    <h2> { user.Id } </h2>  
                    <p> { user.Body } <i> -{ user.Author } </i> </p> 
                </Link> 
            </div>
        ))
        }

 
        </div>
        
        
)
}
export default Bloglist;