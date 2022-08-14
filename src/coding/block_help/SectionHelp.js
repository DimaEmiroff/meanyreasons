import React from "react";
import mskhelp from "./image/Maskpoint.png";
import point2 from "./image/point 2.png";
import point8 from "./image/point 8.png";
import oval from "./image/oval.png";


const SectionHelp= () => (
    <div className= "section-help-img">
        <img src={ mskhelp } alt="help" className="section-help-img-mask"/>
        <img src={ oval } alt="oval" className="section-help-img-mask-oval"/>
        <img src={ point2 } alt="point2" className="section-help-img-mask-point2"/>
        <img src={ point8 } alt="point" className="section-help-img-mask-point8"/>
    </div>
);
export default SectionHelp;