import React from "react";
import logo from "../image/logo2.png";

const HeaderNavigation = () => (
<nav className= "app-header-navigation">
    <ul>
        <img src={logo} className="App-logo" alt="logo" />
        <li><a href="#">About</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Benefits</a></li>
    </ul>
</nav>
);
export default HeaderNavigation;
