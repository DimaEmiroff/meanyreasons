import React from "react";
import vlat from "./image/vlat.png";
import arrows from "../block_increase/image/arrowsup.png";
import month from "./image/6 month.png";
import mask from "./image/Mask Group.png";
import { Upper, LineHr, Prices } from "../../styledirectory/StyleComp.js"


const SectionInvestStat= () => (
    <div className= "section-invest-stat">
        <img src={ vlat } alt="vlat" width= "260px" height="200px"/>
        <img src={ arrows } alt="arrows" className="section-invest-stat-arrow"/>
        <span>Omah mukti residence</span>
        <p>Merpati sidomuncul 26 street, UK</p>
        <img src={ month } alt="month" className="section-invest-stat-mnth"/>
        <img src={ mask } alt="mask" className="section-invest-stat-mask"/>
        <Prices>$176,000</Prices>
        <p style={ Upper }>Funding Request</p>
        <p style={ LineHr }></p>
        <span className="section-invest-stat-text">
            <p>13%</p>
            <p>68%</p>
            <p>12 mth</p>
        </span>
        <p className="section-invest-stat-par">
            <p>Apr</p>
            <p>Ltv</p>
            <p>Loan</p>
        </p>
    </div>
);
export default SectionInvestStat;