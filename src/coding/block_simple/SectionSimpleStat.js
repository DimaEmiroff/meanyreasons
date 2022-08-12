import React from "react";

const stats = [
    {
        raiting: "10+",
        text: "5 Reasons To Purchase Desktop Computers"
    },
    {
        raiting: "43,000+",
        text: "3 Simple Ways To Save A Bunch Of Money When Buying A New Computer"
    },
    {
        raiting: "30+",
        text: "A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More"
    },
]

const SectionSimpleStat = () => (
    <>
        {stats.map((rait,index) => {
            return (
                <div className="section-simple-col">
                <h3 key={index} className="section-simple-col-name">
                    { rait.raiting }
                </h3>
            <p className="section-simple-col-par">{ rait.text }</p>
                </div>
            )}
        )}
    </>
);
export default SectionSimpleStat;