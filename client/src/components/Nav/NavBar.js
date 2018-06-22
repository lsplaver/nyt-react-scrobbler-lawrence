import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./../../pages/HomePage";
import Saved from "./../../pages/SavedPage";

const NavBar = props => (
    <nav className="navbar">
        {/* <Router> */}
            <div>
                <ul>
                    <li>
                        {/* <Link to="/Home" onClick={() => props.handlePageChange("Home")}> */}
                        <a href="/home" onClick={() => props.handlePageChange("Home")}>
                            Home
                        {/* </Link> */}
                        </a>
                    </li>
                    <li>
                        {/* <Link to="/Saved" onClick={() => props.handlePageChange("Saved")}> */}
                        <a href="/saved" onClick={() => props.handlePageChange("Saved")}>
                            Saved Articles
                        {/* </Link> */}
                        </a>
                    </li>
                </ul>

                <hr />

                {/* <Route path="/" component={Home} /> */}
                {/* <Route path="/Home" component={Home} /> */}
                {/* <Route path="/Saved" component={Saved} /> */}
            </div>
        {/* </Router> */}
    </nav>
);

export default NavBar;