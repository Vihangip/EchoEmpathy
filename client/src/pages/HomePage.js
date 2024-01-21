import React from 'react';
import {Button} from '@mui/material';

function HomePage() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Button variant="contained" color="primary" onClick={() => alert('Button Clicked!')}>
                Log In
            </Button>
        </div>
    );
}


export default HomePage;