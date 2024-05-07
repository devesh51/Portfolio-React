import React from "react";
import "./Skill.scss";
import javascriptImg from "../assest/javascript.svg";
import htmlImg from "../assest/html.svg";
import cssImg from "../assest/css.svg";
import githubImg from "../assest/github.svg";
import jqueryImg from "../assest/jquery.svg";
import reactImg from "../assest/react.svg";
import mysqlImg from "../assest/mysql.svg";
import pythonImg from "../assest/python.svg";
import bootstrapImg from "../assest/bootstrap.svg";

const Skills = () => {
  return (
    <div>
      <section className="section-skills skills">
        <div className="skills-header">
          <div>
            <span className="skills-text">Skills</span>
          </div>
          <div className="skills-details">
            <figure className="skill-item">
              <img src={htmlImg} alt="html" />
            </figure>
            <figure className="skill-item">
              <img src={cssImg} alt="css" />
            </figure>
            <figure className="skill-item">
              <img src={javascriptImg} alt="javascript" />
            </figure>
            <figure className="skill-item">
              <img src={reactImg} alt="react" />
            </figure>
            <figure className="skill-item">
              <img src={jqueryImg} alt="jquery" />
            </figure>
            <figure className="skill-item">
              <img src={mysqlImg} alt="mysql" />
            </figure>
            <figure className="skill-item">
              <img src={bootstrapImg} alt="bootstrap" />
            </figure>
            <figure className="skill-item">
              <img src={githubImg} alt="github" />
            </figure>
            <figure className="skill-item">
              <img src={pythonImg} alt="python" />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
