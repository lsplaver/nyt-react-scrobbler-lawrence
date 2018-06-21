import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => (
    <nav className="navbar">
        <Link to="/home">
            Home
        </Link>
        <Link to="/saved">
            Saved Articles
        </Link>
    </nav>
);

export default NavBar;