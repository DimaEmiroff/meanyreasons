import React from "react";
import './App.css';
import './Fonts.css';
import './coding/button/button.css'
import Partners from "./coding/block_partners/Partners.js";
import Create from "./coding/block_create/Create.js";
import SectionHelp, {group} from "./coding/SectionHelp.js";
import SectionHelpTitle from "./coding/SectionHelpTitle.js";
import SectionHelpProp from "./coding/SectionHelpProp.js";
import group9 from "./coding/block_partners/image/group 9.png";
import manygroup from "./image/manygroup.png";
import SectionMany from "./coding/SectionMany.js";
import SectionManyInput from "./coding/SectionManyInput.js"
import FooterSocial from "./coding/block_footer/FooterSocial.js";
import FooterNav from "./coding/block_footer/FooterNav.js"
import footrcircle from  "./image/group-circle.png";
import FooterCont from "./coding/block_footer/FooterCont.js";
import Header from "./coding/block_header/Header";
import SectionFirstName from "./coding/section_first_name/SectionFirstName";
import Increase from "./coding/block_increase/Increase";
import Simple from "./coding/block_simple/Simple";
import Invest from "./coding/block_invest/Invest";


const App = () => (
    <main>
        {/*  ----HEADER----*/}
        <Header />
        {/*----Block partners-----*/}
        <Partners />
        {/*----Block first name-----*/}
        <SectionFirstName />
        {/*-----Block Increase-----*/}
        <Increase />
        {/*---Block Simple-----*/}
        <Simple />
         {/* ---Block create--*/}
        <Create/>
        {/* ----Block Invest-----*/}
        <Invest />

    {/* -----Block Help-----*/}
        <section className="section-help">
            <SectionHelp/>
            <div className="section-help-clmn">
                <SectionHelpTitle/>
                <SectionHelpProp/>
                <img src={group9} alt="group9" className="section-help-clmn-img"/>
            </div>
        </section>

    {/* -----Block Many Reasons------*/}
        <section className="section-many">
            <img src={manygroup} alt="many"  className="section-many-img"/>
                <div className="section-many-bg">
                    <SectionMany/>
                    <SectionManyInput/>

                </div>
            </section>

        {/*---Footer-----*/}
        <footer>
            <img src={footrcircle} className="footer-bg"/>
            <section className="footer-social">
                <div>
                    <FooterSocial/>

                </div>
                <div className="footer-social-menu">

                    <FooterNav
                        name="First"
                    />
                    <FooterNav
                        name="Second"
                    />
                    <FooterNav
                        name="Third"
                    />
                    <FooterNav
                        name="Fourth"
                    />
                </div>
                <div className="footer-cont">
                    <FooterCont/>
                </div>
            </section>
        </footer>
    </main>

  );

export default App;
