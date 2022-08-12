import React from 'react';
import './invest.css'
import SectionInvest from "./SectionInvest";
import SectionInvestStat from "./SectionInvestStat";

const Invest = () => {
    return (
        <div className="section-invest-traffic">
                    <SectionInvest/>
                    <SectionInvestStat/>
       </div>
    );
};

export default Invest;