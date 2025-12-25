import React from "react";
import image1 from "./src/assets/aicte_logo-01.png";
import image2 from "./src/assets/naac A+.png";
import image3 from "./src/assets/nba.png";
const Footer = () => {
  return (
    <div className="webFooter">
      <div className="footer">
        <div className="cols">
          <h2 className="footerTitles">Quick Links</h2>
          <a href="">Home</a>
          <a href="">Faculty Info</a>
          <a href="">About Department</a>
          <a href="">Student Info</a>
          <a href="">Announcements</a>
          <a href="">Academics</a>
          <a href="">Contact</a>
        </div>
        <div className="cols">
          <h2 className="footerTitles">Academic links</h2>
          <a href="">Syllabus</a>
          <a href="">Academic Calendar</a>
          <a href="">Timetable</a>
          <a href="">Laboratories</a>
          <a href="">Research & Publications</a>
        </div>
        <div className="cols">
          <h2 className="footerTitles">Follow Us</h2>
          <div className="appLogos">
            <a href="">
              <i class="fa-brands fa-facebook-square facebook"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-x-twitter twitter"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-linkedin linkedin"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-youtube youtube"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-square-instagram instagram"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-square-github github"></i>
            </a>
          </div>
        </div>
        <div className="cols">
          <h2 className="footerTitles">Contact Us</h2>
          <h3>ECE Department</h3>
          <h3>NRI Institute of Technology</h3>
          <h3>Visadala (522009),Guntur</h3>
          <h3>nriit@gmail.com</h3>
          <h3>+91 9999999999</h3>
        </div>
        <div className="col-img">
          <img src={image1} alt="AICTE approved" />
          <img src={image2} alt="NAAC A+" />
          <img src={image3} alt="NBA Accredited" />
        </div>
      </div>
      <div className="copyRight">&copy; all rights reserved by modi</div>
    </div>
  );
};

export default Footer;
