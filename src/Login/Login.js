import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {handleOnclickButton} from "../Header";


export default function Login({loggedIn, isLoggedin}){
    const [userDetails, setUserDetails] = useState({
        username: '',
        password: ''
    });
    const history = useHistory();
    useEffect(()=>{
        if(loggedIn){
            handleOnclickButton("/admin",history)
        }
    },[loggedIn]);



    function submitForm(){
        console.log(userDetails);
        if(userDetails.username === "admin" && userDetails.password==="admin@123"){
            isLoggedin(true);
        }
        else{
            alert("enter valid login details");
        }
    }


    return (

        <div>
            <h1>Log in</h1>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type="text" placeholder="username" name="username" value={userDetails.username}
                       onChange={(e) => {
                           setUserDetails({
                               ...userDetails,
                               [e.target.name]: e.target.value
                           })
                       }}/>
                <br/>
                <input type="text" placeholder="password" name="password" value={userDetails.password}
                       onChange={(e) => {
                           setUserDetails({
                               ...userDetails,
                               [e.target.name]: e.target.value
                           });
                       }}/>
                <input onClick={()=>submitForm()} type="submit"/>
            </form>

        </div>
    );
}