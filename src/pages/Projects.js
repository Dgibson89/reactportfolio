import React, { useContext } from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";
import { ThemeContext } from '../ThemeContext'; // Importing ThemeContext for Dark Mode


function Projects() {
    // Extracting darkMode from ThemeContext for Dark Mode
    const { darkMode } = useContext(ThemeContext); 

  // Define dark mode styles only, do not define styles for light mode
  const darkModeStyles = {
    backgroundColor: '#333',
    color: '#fff'
  };
  return (
    <div className="projects" style={darkMode ? darkModeStyles : {}}>
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
