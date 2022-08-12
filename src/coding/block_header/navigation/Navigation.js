import React from "react";
import logo from "./image/logo.png";
import './navigation.css'

const Navigation = () => (
<nav className= "navigation">
    <ul>
        <img src={ logo } className="logo" alt="logo" />
        <li><a href="#">About</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Benefits</a></li>
    </ul>
</nav>
);
export default Navigation;
