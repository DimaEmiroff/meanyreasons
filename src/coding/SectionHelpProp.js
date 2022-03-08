import React from "react";
import Lte from "../image/LTE.png";
import Knife from  "../image/Swiss-knife.png";
import {Feature} from "../styledirectory/StyleComp.js";


const SectionHelpProp = () => (
    <div className= "section-help-title-prop">
        <span>
        <img src={Knife} alt="knife" width="32px" height="32px"/>
        <Feature>Feature One</Feature>
        <p className="section-help-title-par">Fully customizable and neatly organized components will help you work faster </p>
            </span>
        <span>
             <img src={Lte} alt="lte" width="32px" height="32px"/>
        <Feature>Feature Two</Feature>
        <p className="section-help-title-par">Fully customizable and neatly organized components will help you work faster </p>
        </span>
    </div>

);

export default SectionHelpProp;