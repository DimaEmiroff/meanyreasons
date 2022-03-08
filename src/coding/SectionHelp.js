import React from "react";
import Maskhelp from "../image/Maskpoint.png";
import Point2 from "../image/point 2.png";
import Point8 from "../image/point 8.png";
import Oval from "../image/oval.png";


const SectionHelp= () => (
    <div className= "section-help-img">
        <img src={Maskhelp} alt="help" className="section-help-img-mask"/>
        <img src={Oval} alt="oval" className="section-help-img-mask-oval"/>
        <img src={Point2} alt="point2" className="section-help-img-mask-point2"/>
        <img src={Point8} alt="point" className="section-help-img-mask-point8"/>

    </div>
);
export default SectionHelp;