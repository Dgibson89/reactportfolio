import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import "../styles/ProjectDisplay.css";
import { ThemeContext } from '../ThemeContext'; // Importing ThemeContext for Dark Mode


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  // Extracting darkMode from ThemeContext for Dark Mode
  const { darkMode } = useContext(ThemeContext); 

  // Define dark mode styles only, do not define styles for light mode
  const darkModeStyles = {
    backgroundColor: '#333',
    color: '#fff'
  };

  return (
    <div className="project" style={darkMode ? darkModeStyles : {}}>
      <h1>{project.name}</h1>

      <img src={project.image} alt="{project.alttxt}" />

      <p>
        <b>Skills</b>: {project.skills}
      </p>
      <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
      <a href={project.website} target="_blank" rel="noopener noreferrer">
      <OpenInBrowserIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;


