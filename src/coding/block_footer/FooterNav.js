import React from "react";


function FooterNav (props) {
    return (
        <>
            <ul className="footer-nav-first">
                <li>
                    <p>{props.name}</p>
                </li>
                <li>
                    <a href="#">First page</a>
                </li>
                <li>
                    <a href="#">Second page</a>
                </li>
                <li>
                    <a href="#">Third page</a>
                </li>
                <li>
                    <a href="#">Fourth page</a>
                </li>
            </ul>

        </>
    );
}
export default FooterNav;