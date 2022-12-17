import React from "react";
import "./Hero.css";
import hero from "../images/zaballero00004-4-removebg.png";

const Hero = () => {
  return (
    <div>
      <main className="hero">
        <div className="fade">
          <img data-aos="fade-left" data-aos-duration="2000" src={hero} />
        </div>

        <article className="heroBack">
          <marquee width="100%" direction="left" scrollamount="20">
            <h2>developer.</h2>
          </marquee>
        </article>
        <div className="container">
          <div className="left" data-aos="fade-up" data-aos-duration="2000">
            <h5>Glenn Zaballero</h5>
            <h1>Full Stack Developer & UI Designer</h1>
            <h3>
              An optimistic, goal-oriented, and hardworking individual who is
              passionate about his work. I am confident in bringing this type of
              personality with me. With my current skills, particularly in
              JavaScript and React for front-end development, MySQL for
              databases, and Node.js and Express for back-end development, I am
              confident that I will be a valuable asset to the company.
            </h3>
            <nav class="links">
              <h4>
                <a
                  href="https://drive.google.com/file/d/14kqKRGvMDcqkoHi020uPtVvwIOowEPj_/view?usp=sharing"
                  target="_blank"
                >
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">View Resume</span>
                  </button>
                </a>
              </h4>
              {/* <div class="scrolldown" style="--color: skyblue">
                <div class="chevrons">
                  <div class="chevrondown"></div>
                  <div class="chevrondown"></div>
                </div>
              </div> */}
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
