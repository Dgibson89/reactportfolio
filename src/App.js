import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import { ThemeProvider } from './ThemeContext'; // Importing ThemeProvider

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider> {/* Wrapping components with ThemeProvider */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
