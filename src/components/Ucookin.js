import React from "react";
import "./Ucookin.css";
import { FaGithub } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Ucookin = () => {
  return (
    <div className="ucookin">
      <div className="ucookleft">
        <h3>UCOOKIN</h3>
        <h1>Homemade </h1>
        <h1>will always taste better</h1>
        <p>
          U-Cookin is our capstone project in Kodego; it is the startup business
          of one of our team members. This project consisted of creating recipe
          kits and offering them, allowing busy adults and inexperienced cooks
          to enjoy a unique recipe with the added convenience of grocery
          shopping done and measured for them and an easy-to-follow recipe.
        </p>

        <button className="ctacook">
          <a
            href="https://capstone-kodego-m39pjmzzk-wadze213.vercel.app/?fbclid=IwAR34eXrT2dAKNIsC_DqIwYDp3iyCI7RJBuplSVH8wbRgmRpp1HhZchpA1YE"
            target="_blank"
          >
            <span className="hover-underline-animation">
              {" "}
              <AiOutlineArrowLeft
                className="arrow"
                style={{
                  position: "absolute",
                  top: "3px",
                  right: "4.5rem",
                }}
              />
              Live Demo{" "}
            </span>
          </a>
        </button>
      </div>
      <a href="https://github.com/wadze213/Capstone-Kodego" target="_blank">
        {" "}
        <button className="btn-git-cook">
          <FaGithub /> GITHUB
        </button>
      </a>
    </div>
  );
};

export default Ucookin;
