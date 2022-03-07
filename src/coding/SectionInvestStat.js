import React from "react";
import Vlat from "../image/vlat.png";
import Arrows from "../image/arrowsup.png";
import Month from "../image/6 month.png";

const Style = {
    color: "#13C296",
    fontSize: "24px",
}

const Upper = {
    textTransform: "uppercase",
    color: "#98A4AF",
}
const LineHr = {
    width: "230px",
    margin: "10px 20px"
}

const SectionInvestStat= () => (
    <div className= "section-invest-stat">
        <img src={Vlat} alt="vlat" width= "260px" height="200px"/>
        <img src={Arrows} alt="arrows" className="section-invest-stat-arrow"/>
        <span>Omah mukti residence</span>
        <p>Merpati sidomuncul 26 street, UK</p>
        <img src={Month} alt="month" className="section-invest-stat-mnth"/>
        <span style={Style}>$176,000</span>
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