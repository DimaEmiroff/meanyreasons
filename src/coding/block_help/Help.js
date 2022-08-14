import React from 'react';
import './help.css'
import SectionHelp from "./SectionHelp";
import SectionHelpTitle from "./SectionHelpTitle";
import SectionHelpProp from "./SectionHelpProp";
import group9 from "../block_partners/image/group 9.png";

const Help = () => {
    return (
        <div className="help">
            <SectionHelp/>
                <div className="section-help-clmn">
                    <SectionHelpTitle/>
                    <SectionHelpProp/>
                        <img src={ group9 } alt="group9" className="section-help-clmn-img"/>
                </div>
        </div>
    );
};

export default Help;