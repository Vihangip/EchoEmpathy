import React, {useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './HomePageStyling.css';
import loginLogo from '../../pics/logo.jpeg';
import {Typography} from "@mui/material";

function HomePage() {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            // Specify the redirect URI if needed
            redirectUri: 'http://localhost:3000/answer-question'
        });
    };

    return (
        <div className="home-page-styling">
            <button className="login-button">
                <img
                    src={loginLogo}
                    alt="login-button"
                    onClick={() => handleLogin()}></img>
            </button>
            <Typography sx={{fontFamily:"Kreon", fontSize:"5rem"}}>Echo Empathy</Typography>
        </div>
    );
}


export default HomePage;