import React from "react";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <a
          target="_blank"
          className="link"
          href="https://leetcode.com/KaranMaurya"
        >
          <SiLeetcode size={30} />
        </a>
        <a
          target="_blank"
          className="link"
          href="https://github.com/karan89588"
        >
          <AiOutlineGithub size={30} />
        </a>
        <a
          target="_blank"
          className="link"
          href="https://www.linkedin.com/in/karan-maurya-3988011b8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvO6HmyeGSWyEAZNfhKcHHg%3D%3D"
        >
          <AiFillLinkedin size={30} />
        </a>
        <a
          target="_blank"
          className="link"
          href="https://www.instagram.com/k.r.maurya/"
        >
          <BiLogoInstagramAlt size={30} />
        </a>
      </div>
      <div className="copyright">
        Copyright &#169; 2023 Karan Maurya. All rights reserved.
      </div>
    </footer>
  );
}
