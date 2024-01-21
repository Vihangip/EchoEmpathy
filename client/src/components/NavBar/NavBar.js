import React from "react";
import { Link } from 'react-router-dom';
import {CustomNavBar, CustomNavButton, CustomToolBar, NavBarTypography} from "./NavBarStyling"

function NavBar() {
    return (
        <CustomNavBar position="static">
            <CustomToolBar>
                <NavBarTypography variant="h5">
                    MyThoughtsMyWords
                </NavBarTypography>
            </CustomToolBar>
        </CustomNavBar>
    )
}

export default NavBar;