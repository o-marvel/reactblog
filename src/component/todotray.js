const Todotray = ({jobname}) =>{
    return(
        <div className="card card-body mt-1">
             <p> {jobname} </p>
            <div className="d-flex flex-end">
                <button className ="btn btn-danger btn-sm mr-1"> delete</button>
                <button className ="btn btn-success btn-sm"> completed</button>
            </div>
        </div>
    )
}
export default Todotray;