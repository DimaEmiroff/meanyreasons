import React from "react";
import Profit from "../image/profit.svg";
import Appcues from "../image/appcuse.svg";
import Shipbob from "../image/shipbob.svg";
import Bench from "../image/shipbench.svg";
import Subble from "../image/subble.svg";
import Demio from "../image/demio.svg";
import Group from  "../image/group 9.png";
import GroupLeft from "../image/1.png";
const HeaderPartners = () => (
    <div className= "header_partners_img">
     <img src={Group} alt="groupleft" className="header_partners_img_groupLeft"/>
   <img src={Profit} alt= "profit"/>
    <img src={Appcues} alt= "appcues"/>
     <img src={Shipbob} alt= "shipbob"/>
    <img src={Bench} alt= "bench"/>
    <img src={Subble} alt= "subble"/>
    <img src={Demio} alt= "demio"/>
     <img src={GroupLeft} alt="group" className="header_partners_img_groupRight"/>
    </div>
);
export default HeaderPartners;