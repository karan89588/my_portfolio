import React from "react";
import "./skills.css";
import UIDesign from "../../images/ui-design.png";
import WEBDesign from "../../images/website-design.png";
import APPDesign from "../../images/app-design.png";
export default function Skills() {
  return (
    <section id="skills">
      <h2 className="whatido">What I Do?</h2>
      <p className="experience">
        I am a skilled and passionate website designer with experience in
        creating visually appealing and user friendly website.I have strong
        understanding of design and a keen eye for detail.I m proficient in
        HTML,CSS,JavaScript as well as design software such as Adobe Photoshop
        and Canvas.
      </p>
      <div className="skillbars">
        <div className="skillbar">
          <img className="skillbarimg" src={UIDesign} alt="UI Design" />
          <div className="skillbarText">
            <h3 className="skillName">UI/UX Design</h3>
            <p className="skillDes">I have good ui/ux design experience.</p>
          </div>
        </div>
        <div className="skillbar">
          <img className="skillbarimg" src={WEBDesign} alt="UI Design" />
          <div className="skillbarText">
            <h3 className="skillName">Website Design</h3>
            <p className="skillDes">Created Quality projects in web Design.</p>
          </div>
        </div>
        <div className="skillbar">
          <img className="skillbarimg" src={APPDesign} alt="UI Design" />
          <div className="skillbarText">
            <h3 className="skillName">App Design</h3>
            <p className="skillDes">I can also create mobile apps.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
