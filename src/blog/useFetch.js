import React ,{useState, useEffect} from 'react';

const useFetch = (url) =>{
      
       const [blogs, setblogs] = useState(null);
       const [name, setname] = useState('ossy');
       const [isPending , setispending] = useState(true);

       useEffect(() => {  
         fetch(url)
          .then (res=>{
            return res.json()
          })
          .then(data => {
            console.log(data);
            setblogs(data);
            setispending(false);
          })
          .catch(err =>{
            console.log(err.message);
          })
        },
         [url] 
      );

      return {blogs, setname, isPending}
}

export default useFetch;