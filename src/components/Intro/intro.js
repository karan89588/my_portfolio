import React from "react";
import "./introcss.css";
import { Link } from "react-scroll";
import pic from "../../images/image.png";
import hireme from "../../images/hireme.png";

export default function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <p className="introHello">Hello</p>
        <p className="introText">
          I'm <span className="myName">Karan Maurya</span>
        </p>
        <p className="introJob">Web Developer</p>
        <p className="introDescription">
          I am a skilled web developer with experience of <br />
          creating visually appealing and user friendly Website.
        </p>
        <button
          className="hiremebtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img className="hiremepic" src={hireme} alt="hiremepic" />
          <p className="hiremeText">Hire Me</p>
        </button>
      </div>
      <img className="myPic" src={pic} alt="Profile Picture" />
    </section>
  );
}
