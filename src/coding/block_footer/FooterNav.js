import React from "react";

function FooterNav(props) {
    return (
        <>
            <ul className="footer-nav-first">
                <li>
                    <p>{props.name}</p>
                </li>
                <li>
                    <a href="#" className={'footer-nav-first-link'}>
                        First page
                    </a>
                </li>
                <li>
                    <a href="#" className={'footer-nav-first-link2'}>
                        Second page
                    </a>
                </li>
                <li>
                    <a href="#" className={'footer-nav-first-link'}>
                        Third page
                    </a>
                </li>
                <li>
                    <a href="#" className={'footer-nav-first-link2'}>
                        Fourth page
                    </a>
                </li>
            </ul>
        </>
    );
}
export default FooterNav;