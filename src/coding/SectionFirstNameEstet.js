import React from "react";
import Styled from "styled-components";

const Folly = Styled.img.attrs((sectionElegance) => ({ tabIndex: 0 }))`
    &::before {
     content: "";
      position: absolute;
      width: 24px;
      height: 24px;
      left: -48px;
      }
`

function SectionFirstNameEstet(props) {
    return (
        <div className="section-first-name-estet-Column">
            <p className="section-first-name-estet-Elegance">{props.sectionElegance}</p>
            <img src={props.ImgUrl} className={Folly}/>
            <p>{props.sectionEstet}</p>
        </div>
    )
}

export default SectionFirstNameEstet;