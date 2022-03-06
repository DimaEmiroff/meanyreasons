import React from "react";


function SectionFirstNameEstet(props) {
    return (
        <div className="section-first-name-estet-Column">
            <p className="section-first-name-estet-Elegance">{props.sectionElegance}</p>
            <p>{props.sectionEstet}</p>
        </div>
    )
}

export default SectionFirstNameEstet;