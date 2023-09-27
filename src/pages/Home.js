import React, { useContext } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Home.css";
import { ThemeContext } from "../ThemeContext"; // Importing ThemeContext for Dark Mode

function Home() {
  const emailLink = "mailto:donovan.gibson89@gmail.com";
  const linkedinLink = "https://www.linkedin.com/in/dgibson89/";
  // Extracting darkMode from ThemeContext for Dark Mode
  const { darkMode } = useContext(ThemeContext);

  // Define dark mode styles only, do not define styles for light mode
  const darkModeStyles = {
    backgroundColor: "#333",
    color: "#660022",
  };
  return (
    <div className="home" style={darkMode ? darkModeStyles : {}}>
      <div className="about">
        <h2>Hello, My name is Donovan</h2>
        <div className="prompt">
          <p>
            Passionate about learning code and embracing new technologies to
            create innovative solutions. Every line of code is a step towards
            limitless possibilities.
          </p>
          <a href={emailLink} target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, JavaScript, NPM, MaterialUI, Yarn, API, UI
              Design, Responsive Web Design, Web Architecture, Bootstrap, Tailwind CSS
            </span>
          </li>
          <li className="item">
            <h2>Coding Tools/Skills</h2>
            <span>
              VS Code, Git, Github, Version Control, Jira, Functional Testing,
              Non-functional Testing, TestRail
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
