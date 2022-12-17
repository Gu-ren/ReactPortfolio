import React from "react";
import "./ProgLang.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaSass,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript, SiMysql, SiVisualstudiocode } from "react-icons/si";

const ProgLang = () => {
  return (
    <div>
      <div className="Prog">
        <h2>My Skill set</h2>
      </div>
      <div className="lang">
        <div className="html">
          <FaHtml5 />
          <span class="tooltiptext">HTML</span>
        </div>
        <div className="css">
          <FaCss3Alt />
          <span class="tooltiptext">CSS</span>
        </div>
        <div className="js">
          <SiJavascript />
          <span class="tooltiptext">Javascript</span>
        </div>
        <div className="react">
          <FaReact />
          <span class="tooltiptext">React JS</span>
        </div>
        <div className="bootstrap">
          <FaBootstrap />
          <span class="tooltiptext">Bootstrap</span>
        </div>
        <div className="sass">
          <FaSass />
          <span class="tooltiptext">Sass</span>
        </div>
        <div className="node">
          <FaNodeJs />
          <span class="tooltiptext">Node JS</span>
        </div>
        <div className="php">
          <FaPhp />
          <span class="tooltiptext">PHP</span>
        </div>
        <div className="laravel">
          <FaLaravel />
          <span class="tooltiptext">Laravel</span>
        </div>
        <div className="sql">
          <SiMysql />
          <span class="tooltiptext">MySQL</span>
        </div>
        <div className="vscode">
          <SiVisualstudiocode />
          <span class="tooltiptext">Visual Studio Code </span>
        </div>
        <div className="git">
          <FaGithub />
          <span class="tooltiptext">GitHub </span>
        </div>
      </div>
    </div>
  );
};

export default ProgLang;
