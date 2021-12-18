import React, {useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import Header, {handleOnclickButton} from "../Header";
import ShippingAndPayment from "../ShippingAndPayment";
import Grid from "@mui/material/Grid";
import PaymentMethod from "../PaymentMethod";
import Cart from "../Cart";
import Button from "@mui/material/Button";
import UserInfo from "../UserInfo";


export default function Admin({loggedIn, isLoggedin}){

    const history = useHistory();
    useEffect(()=>{
        if(loggedIn){
            // handleOnclickButton("/admin",history)
        }else{
            handleOnclickButton("/",history)
        }
    },[loggedIn]);

    function logout() {
        isLoggedin(false)
    }

    return(
       <div>
         <h1>This is Admin Page only Auth pepole can see this</h1>
           <Button onClick={()=>logout()}>Log OUt</Button>
           <Header></Header>
           <ShippingAndPayment></ShippingAndPayment>

           <Grid container spacing={0}>
               <Grid xs={12} lg={4} md={12}>
                   <UserInfo/>
               </Grid>
               <Grid xs={12} lg={4} md={12}>
                   <PaymentMethod></PaymentMethod>
               </Grid>
               <Grid xs={12} lg={4} md={12}>
                   <Cart></Cart>
               </Grid>
           </Grid>


           <div className='subcontainer'>
               <div style={{display: 'flex'}}>
                   <i class="fas fa-arrow-left" style={{marginTop: 20}}></i>
                   <p>Back</p>
               </div>
               <div style={{marginTop: 40}} className='btn-section'>
                   <Button variant='outlined'
                           style={{color: 'gray', borderColor: 'gray', borderRadius: 20, fontSize: 13}}>CONTINUE
                       SHOPPING</Button>
                   <Button variant='contained' style={{
                       borderColor: 'white',
                       borderRadius: 20,
                       backgroundColor: 'MediumTurquoise',
                       marginLeft: 10
                   }}>proceed to payment</Button>
               </div>
           </div>
       </div>
    )
}


