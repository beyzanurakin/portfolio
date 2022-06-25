import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/components/Navbar.css";
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();
  // when location changes close the button
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className={`navbar ${expandNavbar ? "open" : "close"}`}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <FaAlignJustify />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
};

export default Navbar;
