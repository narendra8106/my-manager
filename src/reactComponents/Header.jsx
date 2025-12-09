import React, { useState, useEffect } from "react";

const Header = ({ openDialogue }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const pageScroll = () => {
      setScroll(window.scrollY > 40);
    };
    window.addEventListener("scroll", pageScroll);
    return () => window.removeEventListener("scroll", pageScroll);
  }, []);

  return (
    <div className={scroll ? "header scroll" : "header"}>
      <div className="logo">Modi</div>
      <div className="menu">
        <ul>
          <li style={{ "--i": 3 }}>
            <a href="#">HOME</a>
          </li>
          <li style={{ "--i": 4 }}>
            <a href="#">TODAY OVERVIEW</a>
          </li>
          <li style={{ "--i": 5 }}>
            <a href="#">CHALLENGES</a>
          </li>
          <li style={{ "--i": 6 }}>
            <a href="#">MORE</a>
          </li>
        </ul>
      </div>
      <div className="loginButton">
        <button type="button" onClick={openDialogue}>
          Join Now
        </button>
      </div>
      <div className="menuIcon">
        <i className="bi bi-view-list menuBar"></i>
      </div>
    </div>
  );
};

export default Header;
