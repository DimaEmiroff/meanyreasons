import React from "react";

const SectionManyInput = () => (
    <div >
    <form className= "section-many-form">
        <input type="text" placeholder="Your email" className="section-many-form-text"/>
        <input type="submit" placeholder="send" className="section-many-form-btn"/>
    </form>
        <p className="section-many-form-par">No spam. Only releases, updates and discounts</p>
    </div>
);
export default SectionManyInput;