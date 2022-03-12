import React from "react";
import runman from  "./image/run-man.png";
import groupman from "./image/groupman.png";
import './App.css';
import './Fonts.css';
import HeaderNavigation from "./coding/HeaderNavigation.js";
import HeaderButtonSend from "./coding/HeaderButtonSend.js";
import HeaderTitle from "./coding/HeaderTitle.js";
import HeaderSecondButton from "./coding/HeaderSecondButton.js";
import HeaderSecondVideo from "./coding/HeaderSecondVideo.js";
import HeaderSecondPar from "./coding/HeaderSecondPar.js";
import HeaderPartners from "./coding/HeaderPartners.js";
import SectionFirstName from  "./coding/SectionFirstName.js";
import SectionFirstNameEstet from "./coding/SectionFirstNameEstet.js";
import SectionIncreaseTraffic from "./coding/SectionIncreaseTraffic.js";
import SectionIncreaseTrafficGraf from "./coding/SectionIncreaseTrafficGraf.js";
import SectionSimple from "./coding/SectionSimple.js";
import SectionSimpleStat from "./coding/SectionSimpleStat.js";
import SectionCreate from "./coding/SectionCreate.js";
import SectionInvest from "./coding/SectionInvest.js";
import SectionInvestStat from "./coding/SectionInvestStat.js";
import SectionHelp, {group} from "./coding/SectionHelp.js";
import SectionHelpTitle from "./coding/SectionHelpTitle.js";
import SectionHelpProp from "./coding/SectionHelpProp.js";
import group9 from "./image/group 9.png";
import manygroup from "./image/manygroup.png";
import SectionMany from "./coding/SectionMany.js";
import SectionManyInput from "./coding/SectionManyInput.js"
import FooterSocial from "./coding/FooterSocial.js";
import FooterNav from "./coding/FooterNav.js"
import footrcircle from  "./image/group-circle.png";
import FooterCont from "./coding/FooterCont.js";



const App = () => (
    <main>

        <section className="app">

          {/*  ----Navigation----*/}
          <div className="app-header">
            <HeaderNavigation/>
            <HeaderButtonSend/>
          </div>
        </section>

        {/*--Title Block----*/}
        <section className = "header-first">
           <div>
               <HeaderTitle/>
               <HeaderSecondButton/>
           </div>

            <div className="header-first-runman">
                <img src = {runman} className = "header-first-image-man"/>
                <img src = {groupman} className = "header-first-image-groupman"/>
            </div>
        </section>

        {/*----Header-Block2----*/}
    <section className= "Header_two_block">
        <HeaderSecondVideo/>
        <HeaderSecondPar/>
    </section>

        {/*----Block partners-----*/}
        <section className= "header_partners">
            <HeaderPartners/>
        </section>

        {/*----Block First Name-----*/}
        <section className="section-first-name">
        <SectionFirstName/>
            <div className="section-first-name-estet">

                <SectionFirstNameEstet
                    sectionElegance= "Ecstatic elegance"
                    sectionEstet= "Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add."
                />
                <SectionFirstNameEstet
                    sectionElegance= "Folly words widow"
                    sectionEstet= "Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what."
                />
                <SectionFirstNameEstet
                    sectionElegance= "Possible procured trifling"
                    sectionEstet= "We me rent been part what. An concluded sportsman offending so provision mr education."
                />
                <SectionFirstNameEstet
                    sectionElegance= "Open Game"
                    sectionEstet= "Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable."
                />
                <SectionFirstNameEstet
                    sectionElegance= "Endeavor"
                    sectionEstet= "Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady."
                />
                <SectionFirstNameEstet
                    sectionElegance= "Comfort pursuit"
                    sectionEstet= "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug."
                />
            </div>
        </section>

        {/*-----Block Increase-----*/}
        <section>
            <div className="section-increase-traffic">
                <SectionIncreaseTraffic/>
                <SectionIncreaseTrafficGraf/>
            </div>
        </section>

        {/*---Block Simple-----*/}
        <section>
            <div className="section-simple">
                <SectionSimple/>
            </div>
            <div className= "section-simple-column">
                <SectionSimpleStat
                    rait="10+"
                    text="5 Reasons To Purchase
                    Desktop Computers"
                />
                <SectionSimpleStat
                    rait="43,000+"
                    text="3 Simple Ways To Save A Bunch Of Money When Buying A New Computer"
                />
                <SectionSimpleStat
                    rait="30+"
                    text="A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More"
                />

            </div>
        </section>

    {/* ---Block create--*/}
        <section>
            <div>
                <SectionCreate/>
            </div>
        </section>

    {/* ----Block Invest-----*/}
        <section>
            <div className="section-invest-traffic">
                <SectionInvest/>
                <SectionInvestStat/>
            </div>
        </section>

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
