import React from "react";
import { Link } from "react-router-dom";


export default function Logout({loggedIn, isLoggedin}){
    return(
       <div>
         <h1>You have been logged out</h1>
         <Link to="/">Log in again</Link>
       </div>
    )
}


