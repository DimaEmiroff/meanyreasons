import React from "react";
import Frame from "../image/Frame.png";

const SectionCreate = () => (
<div className= "create-newproject">
    <h2 className= "section-first-name-titl">Create your <span style={{color:"#F2994A"}}> next project </span>  with startup <br/> framework</h2>
    <button type="submit" className="HeaderSecond-Button-learn">Learn More</button>
    <img src={Frame} alt="frame" className="create-newproject-frame"/>

</div>
);
export default SectionCreate;