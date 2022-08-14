import React from "react";
import './App.css';
import './Fonts.css';
import './coding/button/button.css'
import Partners from "./coding/block_partners/Partners.js";
import Create from "./coding/block_create/Create.js";
import manygroup from "./coding/block_many/image/manygroup.png";
import SectionMany from "./coding/block_many/SectionMany.js";
import SectionManyInput from "./coding/block_many/SectionManyInput.js"
import FooterSocial from "./coding/block_footer/FooterSocial.js";
import FooterNav from "./coding/block_footer/FooterNav.js"
import footrcircle from "./coding/block_footer/image/group-circle.png";
import FooterCont from "./coding/block_footer/FooterCont.js";
import Header from "./coding/block_header/Header";
import SectionFirstName from "./coding/section_first_name/SectionFirstName";
import Increase from "./coding/block_increase/Increase";
import Simple from "./coding/block_simple/Simple";
import Invest from "./coding/block_invest/Invest";
import Help from "./coding/block_help/Help";
import Many from "./coding/block_many/Many";
import Footer from "./coding/block_footer/Footer";


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
        <Help />
    {/* -----Block Many Reasons------*/}
        <Many />
    {/*---Footer-----*/}
        <Footer />
    </main>

  );

export default App;
