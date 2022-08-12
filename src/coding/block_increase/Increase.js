import React from 'react';
import IncreaseTraffic from "./IncreaseTraffic";
import IncreaseGraf from "./IncreaseGraf";
import './increase.css'

const Increase = () => {
    return (
        <div className="section-increase-traffic">
              <IncreaseTraffic />
              <IncreaseGraf />
        </div>
    );
};

export default Increase;