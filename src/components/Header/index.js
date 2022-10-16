import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="mb-4 py-2 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-right">
            <h1>Garrett Campbell</h1>
          <nav className="text-center">
              <>
                <Link to="/">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
              </>
          </nav>
        </div>
      </header>
    );
};

export default Header;