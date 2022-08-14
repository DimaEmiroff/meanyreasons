import React from "react";
import { FooAdr } from "../../styledirectory/StyleComp";

function FooterCont() {
    return (
        <div className="footer-cont-private">
            <FooAdr>&copy;Copyright 2022</FooAdr>
            <FooAdr><a href="#">Private Police</a></FooAdr>
            <FooAdr><a href="#">Terms of service</a></FooAdr>
        </div>
    );
}
export default FooterCont;