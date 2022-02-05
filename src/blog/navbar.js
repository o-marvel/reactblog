import { Link } from "react-router-dom";
import './mainPageStyle.css';


const Navbar = () =>{
    return(
        < div className="">
            <ul className="navbar navbar-nav navbar-expand-sm">
                <Link to = "/" className="navlink nav-item ">home</Link>
                <Link to = "/create" className=" nav-item navlink">create</Link>
                <Link to="/detail" className ="nav-item navlink">BlogDetail</Link>
            </ul>
        </div>
    )
}
export default Navbar;
