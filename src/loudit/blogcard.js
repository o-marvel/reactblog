function BlogCard(props) {
    console.log(props);
    // let [story] = props.blog;
    let story = props.blog;
    let handleDelete = props.handleDelete;
    
   
   
    return(
        <div>
            {story.map((item)=>
             <div className="card-body table-bordered mt-1" key={item.Id}>
               <p> {item.Title}</p>
            <p>{item.Body } - {item.Id}</p>
            <button className ='btn btn-primary mr-1'> submit</button>
               <button
                onClick = {()=>{ handleDelete(item.Id)}}
                className="btn btn-danger">
                    delete {item.Id}
                </button>
            </div> 
            )}
        </div>
    )
}
export default BlogCard;