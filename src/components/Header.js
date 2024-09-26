import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <a href="https://www.github.com" target="_blank" rel="noreferrer">
        <img
          className="header_image"
          src="https://i.gyazo.com/d332e600a82bb53f1a93469763aa3f9a.png"
          alt="github"
        />
      </a>
      <div className="header_navbar">
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
      <div>
        <a href="https://www.github.com" target="_blank" rel="noreferrer">
          <img
            className="header_image small"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github"
          />
        </a>
      </div>
    </div>
  );
};
