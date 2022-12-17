import React from "react";
import "./Budega.css";

import { FaGithub } from "react-icons/fa";

const Budega = () => {
  return (
    <div className="budega">
      <div className="budleft">
        <h2>BUDEGA</h2>
        <h1>Shop for your store</h1>
        <p>
          Budega is an online wholesale retailer that offers direct delivery of
          products via its web app. It can make shopping easier for sari-sari
          store owners, hustle-free, convenient, and fun. So they can focus on
          things that really matter.
        </p>
        <a href="https://github.com/Gu-ren/budega" target="_blank">
          <button className="btn-git">
            <FaGithub /> GITHUB
          </button>
        </a>
        <button class="cta">
          <a href=" https://gu-ren.github.io/budega/" target="_blank">
            <span class="hover-underline-animation"> Live Demo </span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Budega;
