import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from '../ThemeContext'; // Importing ThemeContext for Dark Mode

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const { toggleDarkMode } = useContext(ThemeContext); 
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const { darkMode } = useContext(ThemeContext);

  const darkModeStyles = {
    backgroundColor: '#333',
    color: '#fff'
  };

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"} style={darkMode ? darkModeStyles : {}}>
       <div >
       <DarkModeIcon fontSize="large" onClick={toggleDarkMode} />
      </div>
      <div className="toggleButton">
        
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
       
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
