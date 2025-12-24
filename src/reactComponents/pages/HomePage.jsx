import React from "react";
import "../../css/Home.css";

const HomePage = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="clgName">NRI Institute of Technology</div>
        <div className="tag">
          <span className="heroBranchName">ECE Department</span>
        </div>

        <span className="heroQuote">
          where <strong className="strongInHero">Electronics</strong> <br />
          meets <strong className="strongInHero">Communication</strong>
        </span>

        <h1 className="heroTag">
          A future-focused department shaping engineers in VLSI, Wireless
          Communication, Signal Processing and Embedded Technologies.
        </h1>
        <div className="progress">
          <h1>
            <span>30+ </span> Faculty
          </h1>
          <h1>
            <span>400+ </span> Students
          </h1>
        </div>
        <div className="heroButtons">
          <div className="explore">
            <h1>Explore</h1>
          </div>

          <div className="buttons">
            <button>Department</button>
            <button>Progress</button>
            <button>Join Now</button>
          </div>
        </div>
      </section>
      <section className="about">
        <h1 className="aboutTitle">
          About <span className="hilites">Electronics & Communication</span>
        </h1>
        <p className="aboutDiscription">
          Engineering the <span className="hilites">Core</span> of Modern
          Technology
        </p>
        <div className="aboutBoxes">
          <p class="about-text">
            The
            <strong>
              {" "}
              Department of Electronics and Communication Engineering (ECE)
            </strong>{" "}
            is dedicated to academic excellence, innovation, and research. The
            department offers a strong theoretical foundation combined with
            practical exposure to prepare students for the rapidly evolving
            technological landscape.
          </p>

          <p class="about-text">
            Our curriculum is aligned with industry standards and focuses on key
            areas such as digital and analog electronics, communication systems,
            signal processing, embedded systems, VLSI design, and emerging
            technologies. Modern laboratories and project-based learning enable
            students to apply concepts to real-world challenges.
          </p>

          <p class="about-text">
            Supported by experienced faculty and a collaborative learning
            environment, the department encourages research, innovation,
            internships, and technical activities. We strive to develop skilled,
            ethical, and industry-ready engineers who can contribute effectively
            to society and global technology advancement.
          </p>
        </div>
      </section>
      <section class="vision-mission-section">
        <div class="vm-container">
          <h2 class="vm-title">Vision & Mission</h2>
          <p class="vm-subtitle">Guiding Principles That Shape Excellence</p>

          <div class="vm-cards">
            <div class="vm-card vision">
              <h3>Our Vision</h3>
              <p>
                To emerge as a center of excellence in Electronics and
                Communication Engineering by nurturing technically competent,
                innovative, and socially responsible engineers who contribute to
                global technological advancement.
              </p>
            </div>

            <div class="vm-card mission">
              <h3>Our Mission</h3>
              <ul>
                <li>
                  To deliver high-quality education with a strong foundation in
                  electronics and communication engineering.
                </li>
                <li>
                  To promote innovation, research, and problem-solving skills
                  through practical and project-based learning.
                </li>
                <li>
                  To strengthen industry interaction and prepare students for
                  professional excellence.
                </li>
                <li>
                  To instill ethical values, leadership qualities, and lifelong
                  learning skills.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
