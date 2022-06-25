import React from "react";
import "../styles/components/Footer.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>Want to learn more? Let's connect!</p>
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/beyzanurakin/"
          target="_blank"
          without
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/beyzanurakin"
          target="_blank"
          without
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/byznrakin"
          target="_blank"
          without
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
