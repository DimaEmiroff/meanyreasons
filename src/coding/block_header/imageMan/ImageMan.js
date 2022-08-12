import React from "react";
import runman from "./image/run-man.png";
import groupman from "./image/groupman.png";
import './imageMan.css'

const ImageMan = () => (
    <div className="header-imageman">
        <div className="header-first-runman">
            <img src = {runman} className = "header-first-image-man"/>
            <img src = {groupman} className = "header-first-image-groupman"/>
        </div>
    </div>
);
export default ImageMan;
