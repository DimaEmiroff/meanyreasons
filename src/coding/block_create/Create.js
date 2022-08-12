import React from "react";
import './create.css'
import create from "./image/create.png";

const Create = () => (
    <div className= "create-newproject">
        <h2 className= "section-first-name-titl">Create your
            <span style={{color:"#F2994A"}}> next project </span>
            with startup <br/> framework
        </h2>
        <button type="submit" className="Button-learn">
            Learn More
        </button>
        <img src={ create } alt="frame" className="create-newproject-frame"/>

    </div>
);
export default Create;