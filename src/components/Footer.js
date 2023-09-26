import React, { useContext } from "react";
import "../styles/Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@mui/icons-material/Web";
import { ThemeContext } from '../ThemeContext'; // Importing ThemeContext for Dark Mode

function Footer() {
  const githubLink = "https://github.com/Dgibson89";
  const linkedinLink = "https://www.linkedin.com/in/dgibson89/";
  const devtoLink = "https://dev.to/dgibson89";
   // Extracting darkMode from ThemeContext for Dark Mode
   const { darkMode } = useContext(ThemeContext); 

  // Define dark mode styles only, do not define styles for light mode
  const darkModeStyles = {
    backgroundColor: '#333',
    color: '#fff'
  };
 
  return (
    <div className="footer" style={darkMode ? darkModeStyles : {}}>
      <div className="socialMedia">
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href={devtoLink} target="_blank" rel="noopener noreferrer">
          <WebIcon />
        </a>
      </div>
      <p> &copy; 2023 dgibson89</p>
    </div>
  );
}

export default Footer;
