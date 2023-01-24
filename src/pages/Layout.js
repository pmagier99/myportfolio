import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/NavBar";
import About from "../components/About";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <About />
        </>
    );
}

export default Layout;