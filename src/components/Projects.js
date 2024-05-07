import React from "react";
import "./Project.scss";
import { ProjectsData } from "../utils/ProjectData";

const Projects = () => {
  return (
    <div>
      <section className="section-project projects">
        <div className="project-header">
          <h2 className="project-text">Projects</h2>
          <h3 className="project-quotes">
            Everything as simple as possible, but no simpler.
          </h3>
        </div>
        <div className="mywork-container">
          {ProjectsData.map((item, index) => {
            return (
              <div className="project-Container">
                <div className="Project-Name">{item.projectName}</div>
                <div className="Project-Heading">{item.ProjectHeading}</div>
                <div className="Project-Details">{item.ProjectDetails}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
