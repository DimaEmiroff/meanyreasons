import React from 'react';
import './footer.css'
import footrcircle from "./image/group-circle.png";
import FooterSocial from "./FooterSocial";
import FooterNav from "./FooterNav";
import FooterCont from "./FooterCont";

const Footer = () => {
    return (
        <>
               <img src={ footrcircle } className="footer-bg"/>
            <div className="footer-social">
                <FooterSocial/>
            </div>
            <div className="footer-social-menu">
                <FooterNav name="First" />
                <FooterNav name="Second" />
                <FooterNav name="Third" />
                <FooterNav name="Fourth" />
            </div>
            <div className="footer-cont">
                <FooterCont/>
            </div>
        </>
    );
};

export default Footer;