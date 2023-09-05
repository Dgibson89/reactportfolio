import React from "react";
import "../styles/Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@mui/icons-material/Web";

function Footer() {
  const githubLink = "https://github.com/Dgibson89";
  const linkedinLink = "https://www.linkedin.com/in/dgibson89/";
  const devtoLink = "https://dev.to/dgibson89";
  return (
    <div className="footer">
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
