import React, { useState, useEffect } from "react";

const Header = ({ openDialogue }) => {
  return (
    <div className="bgHeader">
      <div className="header">
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
          <i onClick={openDialogue} className="bi bi-view-list menuBar"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
