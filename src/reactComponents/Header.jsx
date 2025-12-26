import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ openDialogue }) => {
  //menu for mobile view
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const openMobileMenuBox = () => {
    setOpenMobileMenu(true);
  };
  const closeMobileMenuBox = () => {
    setOpenMobileMenu(false);
  };

  //dialoguebox
  const formRef = useRef();

  useEffect(() => {
    const formClose = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        closeMobileMenuBox();
      }
    };
    document.addEventListener("mousedown", formClose);
    return () => document.removeEventListener("mousedown", formClose);
  }, []);

  const navigate = useNavigate();

  const handleSelect = (e) => {
    navigate(e.target.value);
  };
  return (
    <div className="bgHeader">
      <div className="header">
        <div className="logo">web</div>
        <div className="menu">
          <ul>
            <li style={{ "--i": 3 }}>
              <Link to="/">HOME</Link>
            </li>

            <li style={{ "--i": 4 }} className="dropdown">
              <select className="selectInfo" onChange={handleSelect}>
                <option value="/">INFORMATION</option>
                <option value="/facultyinfo">FACULTY INFO</option>
                <option value="/studentinfo">STUDENT INFO</option>
              </select>
              <i className="fa-solid fa-angle-down dcarot"></i>
            </li>

            <li style={{ "--i": 5 }}>
              <Link to="/academics">ACADEMICS</Link>
            </li>

            <li style={{ "--i": 6 }} className="menu4">
              <Link to="/anouncements">ANNOUNCEMENTS</Link>
            </li>

            <li style={{ "--i": 7 }}>
              <Link to="/more">MORE</Link>
            </li>
          </ul>
        </div>
        <div className="loginButton">
          <button type="button" onClick={openDialogue}>
            Join Now
          </button>
        </div>
        <div className="menuIcon">
          <i
            onClick={openMobileMenuBox}
            className="bi bi-view-list menuBar"
          ></i>
        </div>
      </div>
      {openMobileMenu && (
        <div className="menu2" ref={formRef}>
          <ul className="mobileMenu">
            <li onClick={closeMobileMenuBox}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={closeMobileMenuBox}>
              <Link to="/facultyinfo">Faculty Info</Link>
            </li>
            <li onClick={closeMobileMenuBox}>
              <Link to="/studentinfo">Student Info</Link>
            </li>
            <li onClick={closeMobileMenuBox}>
              <Link to="/academics">Academics</Link>
            </li>
            <li onClick={closeMobileMenuBox}>
              <Link to="/anouncements">Announcements</Link>
            </li>

            <li
              onClick={() => {
                openDialogue();
                closeMobileMenuBox();
              }}
            >
              more
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
