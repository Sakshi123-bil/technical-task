import './App.css';
import MainLogin from "./Login/MainLogin";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {handleOnclickButton} from "./Header";

function App() {
    const [loggedIn, isLoggedin] = useState(false);
    return (
        <div className='mainContanier'>
            <MainLogin loggedIn={loggedIn} isLoggedin={isLoggedin}/>
            {/*<Header></Header>
            <ShippingAndPayment></ShippingAndPayment>

            <Grid container spacing={0}>
                <Grid xs={12} lg={4} md={12}>
                    <UsreInfo></UsreInfo>
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
            </div>*/}


        </div>
    );
}

export default App;
