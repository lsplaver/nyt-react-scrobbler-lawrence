import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const NavBar = props => (
    <nav className="navbar">
        <Router>
            <ul>
                <li>
                    <Link to="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/saved">
                        Saved Articles
                    </Link>
                </li>
            </ul>
        </Router>
    </nav>
);

export default NavBar;