import React from 'react';
import './simple.css'
import SectionSimple from "./SectionSimple";
import SectionSimpleStat from "./SectionSimpleStat";

const Simple = () => {
    return (
        <div>
            <div className="section-simple">
                    <SectionSimple/>
                </div>
                <div className= "section-simple-column">
                    <SectionSimpleStat/>
                </div>
        </div>
    );
};

export default Simple;