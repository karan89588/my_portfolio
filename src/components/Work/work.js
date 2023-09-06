import React from "react";
import Portfolio1 from "../../images/portfolio-1.png";
import Portfolio2 from "../../images/portfolio-2.png";
import Portfolio3 from "../../images/portfolio-3.png";
import Portfolio4 from "../../images/portfolio-4.png";
import Portfolio5 from "../../images/portfolio-5.png";
import Portfolio6 from "../../images/portfolio-6.png";
import "./work.css";
export default function Work() {
  return (
    <section id="works">
      <h2 className="myPortfolio">My Portfolio</h2>
      <p className="workDes">
        I take pride in paying attention to the smallest details and make sure
        that my work is pixel perfect.I am excited to bring my skills and
        experience to help businesses achieve thier goals and create a strong
        online presence.
      </p>
      <div className="workimgs">
        <img className="workimg" src={Portfolio1} alt="Portfolio1" />
        <img className="workimg" src={Portfolio2} alt="Portfolio2" />
        <img className="workimg" src={Portfolio3} alt="Portfolio3" />
        <img className="workimg" src={Portfolio4} alt="Portfolio4" />
        <img className="workimg" src={Portfolio5} alt="Portfolio5" />
        <img className="workimg" src={Portfolio6} alt="Portfolio6" />
      </div>
    </section>
  );
}
