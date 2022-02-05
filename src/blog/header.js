import React from "react";
import { Link } from "react-router-dom";
import './mainPageStyle.css';

 function Header () {
   
     return(
         <div className = "card card-body ">
    
              <ul className ="myNav">
                  <Link to= "/" className = "navlink mx-2">  home </Link>
                  <Link className = "navlink mx-2" to = "/create"> create</Link>
                  <Link className = "navlink mx-2" to = "/design"> design</Link>
                  <Link className = "navlink mx-2" to = "/todo"> Todo</Link>
                  
              </ul>
         </div>
     )
 }
 export default Header;