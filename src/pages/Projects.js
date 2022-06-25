import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/pages/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((item) => {
          return <ProjectItem name={item.name} image={item.image} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
