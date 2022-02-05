import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetail = () =>{
    const{id} = useParams();
    const {blogs, isPending} = useFetch('http://localhost:3004/'+id);
    console.log(blogs);    
    return(
        <div className= " card card-body">
             <h2> blog Detail - {id} </h2>
            {isPending && <div>loading .....</div>}
            
        </div>
    )
}
export default BlogDetail;