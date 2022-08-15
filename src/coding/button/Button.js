import React, {useState} from 'react';
import ButtonDemo from "./ButtonDemo";
import ButtonLearnMore from "./ButtonLearnMore";

const Button = () => {

    return (
        <div className="Button">
            <ButtonLearnMore />
            <ButtonDemo />
        </div>
    );
};

export default Button;