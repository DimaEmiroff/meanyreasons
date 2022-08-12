import React from "react";
import graf from "./image/graf.png";
import arrowsup from "./image/arrowsup.png";
import traffic from "./image/traffic.png";
import groupPoint from "./image/Stacked Group.png";

const IncreaseGraf = () => (
    <div className= "section-increase-traffic-img">
        <img src={ graf } alt="grafic"/>
        <img src={ traffic } alt="traffic" className="section-increase-traffic-img-table"/>
        <img src={ arrowsup } alt= "arrow" className="section-increase-traffic-img-arrow"/>
        <img src={ groupPoint } alt="grouppoint" className="section-increase-traffic-img-grouppoint"/>
    </div>
);
export default IncreaseGraf;