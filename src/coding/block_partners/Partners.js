import React from "react";
import './partners.css'
import profit from "./image/profit.svg";
import appcues from "./image/appcuse.svg";
import shipbob from "./image/shipbob.svg";
import bench from "./image/shipbench.svg";
import subble from "./image/subble.svg";
import demio from "./image/demio.svg";
import group from "./image/group 9.png";
import groupLeft from "./image/1.png";

const Partners = () => (
    <div className= "header_partners_img">
         <img src={ group } alt="groupleft" className="header_partners_img_groupLeft"/>
         <img src={ profit } alt= "profit"/>
         <img src={ appcues } alt= "appcues"/>
         <img src={ shipbob } alt= "shipbob"/>
         <img src={ bench } alt= "bench"/>
         <img src={ subble } alt= "subble"/>
         <img src={ demio } alt= "demio"/>
         <img src={ groupLeft } alt="group" className="header_partners_img_groupRight"/>
    </div>
);
export default Partners;