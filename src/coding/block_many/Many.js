import React from 'react';
import './many.css'
import manygroup from "./image/manygroup.png";
import SectionMany from "./SectionMany";
import SectionManyInput from "./SectionManyInput";

const Many = () => {
    return (
        <div className="many">
            <img src={ manygroup } alt="many"  className="section-many-img"/>
                <div className="section-many-bg">
                    <SectionMany />
                    <SectionManyInput />
                </div>
        </div>
    );
};

export default Many;