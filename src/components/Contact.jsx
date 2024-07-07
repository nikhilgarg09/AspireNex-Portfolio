import React from "react";
import { SiCodeforces } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.linkedin.com/in/narendra-garg-254455214/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/nikhilgarg09" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="https://codeforces.com/profile/Narendragarg" target="_blank" className="items">
            <SiCodeforces className="icons" />
          </a>
          <a
            href="mailto:narendragarg090909@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
