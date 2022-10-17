import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="mb-4 py-2 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-right">
            <h1>Garrett Campbell</h1>
            <h4>Full-Stack Web Developer</h4>
            <div className="header-photo"></div>
          <nav className="text-center">
              <>
                <NavLink activeclassname="active" exact="true" to="/about">About</NavLink>
                <NavLink activeclassname="active" exact="true" to="/portfolio">Portfolio</NavLink>
                <NavLink activeclassname="active" exact="true" to="/contact">Contact</NavLink>
              </>
          </nav>
        </div>
      </header>
    );
};

export default Header;