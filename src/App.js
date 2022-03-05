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


const App = () => (
    <main>
        <section className="app">
          {/*  ----menu----*/}
          <div className="app-header">
            <HeaderNavigation/>
            <HeaderButtonSend/>
          </div>

        </section>
        {/*--Title----*/}
        <section className = "header-first">
            <HeaderTitle/>
            <img src = {runman} className = "header-first-image-man"/>
            <img src = {groupman} className = "header-first-image-man"/>
        </section>
        {/*----Header-Block2----*/}
        <section className = "header-second-block">
            <HeaderSecondButton/>
        </section>
        {/*----Header-Block3----*/}
    <section className= "Header_three_block">
        <HeaderSecondVideo/>
        <HeaderSecondPar/>
    </section>
        {/*----Block partners-----*/}
        <section className= "header_partners">
            <HeaderPartners/>
        </section>
        <section>

        </section>
    </main>
  );


export default App;
