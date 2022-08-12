import React from "react";
import './sectionFirstName.css'
import Estet from "./estet/Estet";
import Folly from "./folly/Folly";
import Possible from "./possible/Possible";
import Game from "./game/Game";
import Endeavor from "./endeaver/Endeavor";
import Comfort from "./comfort/Comfort";

const SectionFirstName = () => (
    <div className="section-first-name">
            <h2 className="section-first-name-titl">Your choice</h2>
            <p className= "section-first-name-par">There are many reasons to get down and start to get depressed about your situation. </p>
        <div className="section-first-name-estet">
                <Estet />
                <Folly />
                <Possible />
                <Game />
                <Endeavor />
                <Comfort/>
        </div>
    </div>
);
export default SectionFirstName;