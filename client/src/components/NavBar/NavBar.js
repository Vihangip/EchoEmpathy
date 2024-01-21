import React from "react";
import { Link } from 'react-router-dom';
import {CustomNavBar, CustomToolBar, NavBarTypography} from "./NavBarStyling"
import {Container} from "@mui/system";

function NavBar() {
    return (
        <CustomNavBar position="static">
            <CustomToolBar>
                <NavBarTypography variant="h5">
                    Echo Empathy
                </NavBarTypography>
            </CustomToolBar>
        </CustomNavBar>
    )
}

export default NavBar;