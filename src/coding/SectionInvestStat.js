import React from "react";
import Vlat from "../image/vlat.png";
import Arrows from "../image/arrowsup.png";
import Month from "../image/6 month.png";
import Mask from  "../image/Mask Group.png";
import {Upper, LineHr, Prices} from "../styledirectory/StyleComp.js"


const SectionInvestStat= () => (
    <div className= "section-invest-stat">
        <img src={Vlat} alt="vlat" width= "260px" height="200px"/>
        <img src={Arrows} alt="arrows" className="section-invest-stat-arrow"/>

        <span>Omah mukti residence</span>
        <p>Merpati sidomuncul 26 street, UK</p>
        <img src={Month} alt="month" className="section-invest-stat-mnth"/>
        <img src={Mask} alt="mask" className="section-invest-stat-mask"/>
        <Prices>$176,000</Prices>
        <p style={Upper}>Funding Request</p>
        <hr style={LineHr}></hr>
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