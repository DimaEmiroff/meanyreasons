import React from 'react';
import './header.css'
import Navigation from "./navigation/Navigation";
import HeaderButtonSend from "../button/HeaderButtonSend";
import Title from "./title/Title";
import ImageMan from "./imageMan/ImageMan";
import Video from "./video/Video";
import Button from "../button/Button";


const Header = () => {
    return (
        <div className={'container'}>
            <div className = "header">
                <Navigation/>
                <HeaderButtonSend/>
            </div>
            <div className = "header-container">
                <div>
                <Title />
                <Button />
                <Video/>
                </div>
                <ImageMan />
            </div>
        </div>
    );
};

export default Header;