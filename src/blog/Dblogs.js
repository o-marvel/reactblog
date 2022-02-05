 import React ,{useState, useEffect} from 'react';
import Bloglist from './blog';  
import '../bootstrap/css/bootstrap.min.css'
import useFetch from './useFetch';


  function Dblogs (){
    
      const{blogs,setname, isPending} = useFetch('http://localhost:8001/data');
 
          return(
          <div>
              <p> this is blog output list by </p>
              
               <div> 
                 {isPending && <div> loading...</div>}
                   {blogs && <Bloglist  blog = {blogs}  mytitle = "My Blog heading" />
                   }
                </div>
          </div>
      )
  }
  export default Dblogs;