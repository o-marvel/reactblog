import React, { useState } from 'react'
import '../bootstrap/css/bootstrap.min.css'
import Dblogs from './Dblogs'



export default function Home () {
   return (
       <div className = "card card-body"> 
        <Dblogs />
       </div>
   ) 
}