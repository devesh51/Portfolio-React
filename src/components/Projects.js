import React from "react";
import "./Project.scss";
import { ProjectsData } from "../utils/ProjectData";
import { useRef } from "react";

const Projects = () => {
  const videoRef = useRef();

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
          {ProjectsData.map((item) => {
            return (
              <div className="project-Container">
                <video
                  className="video-container"
                  ref={videoRef}
                  loop
                  muted
                  autoPlay="autoplay"
                >
                  <source key={item.id} src={item.video} />
                </video>

                <div className="Project-Name">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.projectName}
                  </a>
                </div>
                {/* <div className="Project-Name">{item.projectName}</div>
                <div className="Project-Heading">{item.ProjectHeading}</div>
                <div className="Project-Details">{item.ProjectDetails}</div> */}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
