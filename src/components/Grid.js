import React from "react";
import "./Grid.css";
import Quote from "./Quote";
import Testimonial from "./Testimonial";
import ProgLang from "./ProgLang";
import Ucookin from "./Ucookin";
import Budega from "./Budega";
import Eye from "./Eye";
import Logo from "../images/portfolioLogo (4).svg";
import Icons from "./Icons";
import Kodego from "../images/kodego.svg";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Grid = () => {
  return (
    <div>
      <main class="testimonial-grid">
        <article
          class="testimonial grid-col-span-2 flow bgquotes quote text-neutral-100"
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          <Quote />
        </article>
        <article
          class="testimonial flow bg-secondary-400 text-neutral-100"
          data-aos="zoom-in-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          {" "}
        </article>
        <article
          class="testimonial flow bg-socIcons text-secondary-400"
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div className="icons">
            <div className="gm">
              <a href="mailto:zaballeroglenn052901@gmail.com" target="_blank">
                <MdEmail />
              </a>
            </div>
            <div className="ig">
              <a
                href="https://www.instagram.com/zaballeroglenn/"
                target="_blank"
              >
                {" "}
                <FaInstagram />
              </a>
            </div>
            <div classsme="lk">
              <a
                href="https://www.linkedin.com/in/glenn-zaballero/"
                target="_blank"
              >
                {" "}
                <FaLinkedin />
              </a>
            </div>
            <div className="fb">
              <a
                href="https://www.facebook.com/profile.php?id=100081482617400"
                target="_blank"
              >
                {" "}
                <FaFacebookF />
              </a>
            </div>
            <div className="tw">
              <a target="_blank">
                {" "}
                <FaTwitter />
              </a>
            </div>
            <div className="tk">
              <a target="_blank">
                {" "}
                <FaTiktok />
              </a>
            </div>
          </div>
        </article>
        <article
          class="testimonial grid-col-span-2 bg-neutral-100 "
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          <a href="https://kodego.ph/" target="_blank">
            {" "}
            <img className="Kodego" src={Kodego} />
          </a>
          <h1>Certification</h1>

          <p className="name1">Fullstack Web Development</p>
          <h2 class="name">KodeGo Bootcamp</h2>
          <p class="position">August 2022 - December 2022</p>

          <p className="testp">
            KodeGo is a coding bootcamp based in Manila, Philippines that
            teaches Filipinos how to become in-demand, sought-after full Stack
            Web Developer.
          </p>
        </article>
        <article
          class="testimonial flow  bg-neutral-100 text-secondary-400"
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          <div class="flex">
            <div>
              <h2 class="name">Glenn Zaballero</h2>
              <p class="position">KodeGo Graduate</p>
            </div>
          </div>
          <p>What a memorable experience!</p>
          <p className="testp">
            “I've never written a line of code before enrolling in the bootcamp.
            I required some guidance from experts who could help me learn
            programming in stages. Enrolling in Kodego Bootcamp was one of the
            best decisions I ever made for myself. After 12 weeks, I gained a
            lot of knowledge about web development and am now able to use my
            research and critical thinking skills to solve problems together
            with my teammates, which I think is the best part because my ability
            to work in a team will develop. For me, every day is a new learning
            experience.Teachers and staff, as well as the entire curriculum, did
            not disappoint. I never had to wait long for them because they were
            very responsive. assistance.”
          </p>
        </article>
        <article
          class="testimonial  bg-neutral-100 "
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          <Testimonial />
        </article>
        <article
          class="testimonial bgProgLang "
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          <ProgLang />
        </article>
        <article
          class="testimonial sectionAnimate "
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          <Icons />
        </article>
        <article
          class="testimonial bgExperience "
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        ></article>
        <article
          class="testimonial bgBudega"
          data-aos="zoom-out-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          <Budega />
        </article>
        <article
          class="testimonial bgucookin"
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <Ucookin />
        </article>
        <article
          class="testimonial bgfoods"
          data-aos="fade-left"
          data-aos-duration="2000"
        ></article>
        <article
          class="testimonial bgstatue"
          data-aos="fade-left"
          data-aos-duration="2000"
        ></article>
        <article
          class="testimonial bgmp1"
          data-aos="fade-up-right"
          data-aos-duration="3000"
        ></article>
        <article
          class="testimonial bgmp2"
          data-aos="fade-up-left"
          data-aos-duration="2000"
        >
          <Eye />
        </article>
        <article
          class="testimonial bg-neutral-100"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className=" footerlogo">
            <img src={Logo} />
          </div>
          <div className="iconsfoot">
            <div className="tw">
              <a href="https://github.com/Gu-ren" target="_blank">
                {" "}
                <FaGithub />
              </a>
            </div>
            <div className="gm">
              <a href="mailto:zaballeroglenn052901@gmail.com" target="_blank">
                <MdEmail />
              </a>
            </div>
            <div className="ig">
              <a
                href="https://www.instagram.com/zaballeroglenn/"
                target="_blank"
              >
                {" "}
                <FaInstagram />
              </a>
            </div>
            <div className="lk">
              <a
                href="https://www.linkedin.com/in/glenn-zaballero/"
                target="_blank"
              >
                {" "}
                <FaLinkedin />
              </a>
            </div>
            <div className="fb">
              <a
                href="https://www.facebook.com/profile.php?id=100081482617400"
                target="_blank"
              >
                {" "}
                <FaFacebookF />
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Grid;
