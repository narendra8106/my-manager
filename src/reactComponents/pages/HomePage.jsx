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
        <span className="aboutTitle">
          About <span className="hilites">Electronics & Communication</span>
        </span>
        <p className="aboutDiscription">
          Engineering the <span className="hilites">Core</span> of Modern
          Technology
        </p>
        <div className="about-cards">
          <p class="about-card">
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

          <p class="about-card">
            Our curriculum is aligned with industry standards and focuses on key
            areas such as digital and analog electronics, communication systems,
            signal processing, embedded systems, VLSI design, and emerging
            technologies. Modern laboratories and project-based learning enable
            students to apply concepts to real-world challenges.
          </p>

          <p class="about-card">
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
          <span class="vm-title hilites">Vision & Mission</span>
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
      <section className="tags-container">
        <span className="hilites tags-title">Accreditations & Highlights</span>
        <div className="tags-grades">
          <span className="tags-card">
            Established <br />
            <span className="highlites">2008</span>{" "}
          </span>
          <span className="tags-card">
            Accreditations <br />
            <span className="highlites">
              NAAC A+ <br />
              NBA
            </span>{" "}
          </span>
          <span className="tags-card">
            Faculty Strength <br />
            <span className="highlites">30+ Experienced Professors</span>
          </span>
          <span className="tags-card">
            Labs & Facilities <br />
            <span className="highlites">10+ Advanced Laboratories</span>
          </span>
        </div>
      </section>
      <section className="home-explore">
        <span className="hilites exp-title">Join Our ECE Community</span>
        <div className="exploreBtn">
          <p>Register now and explore courses, labs, and latest updates.</p>

          <button className="button-exp">Register</button>
          <button className="button-exp">Log In</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
