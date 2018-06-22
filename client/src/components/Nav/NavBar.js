import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, /*Route,*/ Link } from "react-router-dom";

const NavBar = props => (
    <nav className="navbar">
        <Router>
            <ul>
                <li>
                    {/* <Link to="/home" onClick={() => props.handlePageChange("Home")}> */}
                    <a href="/home" onClick={() => props.handlePageChange("Home")}>
                        Home
                    {/* </Link> */}
                    </a>
                </li>
                <li>
                    {/* <Link to="/saved" onClick={() => props.handlePageChange("Saved")}> */}
                    <a href="/saved" onClick={() => props.handlePageChange("Saved")}>
                        Saved Articles
                    {/* </Link> */}
                    </a>
                </li>
            </ul>
        </Router>
    </nav>
);

export default NavBar;