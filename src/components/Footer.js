import React from "react";
import "../styles/Footer.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from '@mui/icons-material/Web';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <GitHubIcon />
        <WebIcon />
      </div>
      <p> &copy; 2023 dgibson89</p>
    </div>
  );
}

export default Footer;
