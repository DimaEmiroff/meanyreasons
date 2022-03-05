import React from "react";
import Graf from "../image/graf.png";
import Arrowsup from "../image/arrowsup.png";
import Traffic from "../image/traffic.png";
import GroupPoint from  "../image/Stacked Group.png";

const SectionIncreaseTrafficGraf = () => (
    <div className= "section-increase-traffic-img">
        <img src={Graf} alt="grafic"/>
        <img src={Traffic} alt="traffic" className="section-increase-traffic-img-table"/>
        <img src={Arrowsup} alt= "arrow" className="section-increase-traffic-img-arrow"/>
        <img src={GroupPoint} alt="grouppoint" className="section-increase-traffic-img-grouppoint"/>

    </div>
);
export default SectionIncreaseTrafficGraf;