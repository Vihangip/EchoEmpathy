import React from 'react';
import {LogInButton} from "../components/Auth/LogInButton";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function HomePage() {
    const {loginWithRedirect} = useAuth0();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}>
            <NavBar/>
            <LogInButton onClick={() => loginWithRedirect()}>
                Log In
            </LogInButton>
            <Footer />
        </div>
    );
}


export default HomePage;