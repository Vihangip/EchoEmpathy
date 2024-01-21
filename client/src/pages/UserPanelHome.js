import React from 'react';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import {Avatar} from "@material-ui/core";
import {CustomOuterContainer, CustomInnerContainer, CustomButton} from "../components/UserPanelHomeStyling/UserPanelHomeStyling";


const UserProfilePage = () => {

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <CustomOuterContainer>
                <Avatar src="./assets/sad.jpg" alt="User Avatar"/>  // change to photo of user
                <Typography variant="h5">User Name</Typography>   // change to user's name
                <CustomInnerContainer>
                    <CustomButton variant="contained" color="primary">
                        Answer Question
                    </CustomButton>
                    <CustomButton variant="contained" color="secondary">
                        Add New Post
                    </CustomButton>
                    <CustomButton variant="contained" color="default">
                        View Wall
                    </CustomButton>
                </CustomInnerContainer>
            </CustomOuterContainer>
        </Container>
    );
};

export default UserProfilePage;

