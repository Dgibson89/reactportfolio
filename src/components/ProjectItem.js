import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from '../ThemeContext'; // Importing ThemeContext for Dark Mode

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate()
  const { darkMode } = useContext(ThemeContext);
    // Define dark mode styles only, do not define styles for light mode
    const darkModeStyles = {
      backgroundColor: '#333',
      color: '#fff'
    };
  return (
    <div className="projectItem" onClick={() => {navigate("/project/" + id)}} style={darkMode ? darkModeStyles : {}}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" >
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default ProjectItem;
