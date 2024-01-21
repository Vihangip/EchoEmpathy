import React from 'react';
import {LogInButton} from "../components/Home/LogInButton";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import './HomePageStyling.css';
import {HomeContainer} from "../components/Home/Container";

function HomePage() {
    const {loginWithRedirect} = useAuth0();

    return (
        <div className="home-page-styling">
            <NavBar/>
            <img src="https://ires.ubc.ca/files/2019/10/ubc-logo.png" alt="logo" sx={{width: '30%'}}/>
            <LogInButton onClick={() => loginWithRedirect()}>
                Log In
            </LogInButton>
            <Footer/>
        </div>
    );
}


export default HomePage;