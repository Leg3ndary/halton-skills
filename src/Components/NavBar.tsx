import React from "react";
import "./NavBar.css";
import logo from "../assets/halton_skills_logo_only.png";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar_logo">
                <Link to="/">
                    <img className="logo" src={logo} alt="Halton Skills Logo"></img>
                    <h1>Halton Skills</h1>
                </Link>
            </div>
            <div className="navbar_links">
                <ul className="navbar_links">
                    <Link to="/">Home</Link>
                    <Link to="/elementary-competitions">Elementary</Link>
                    <Link to="/secondary-competitions">Secondary</Link>
                    <Link to="/scopes">Scopes</Link>
                    <Link to="/sponsors-donate">Sponsors/Donate</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/news">News</Link>
                </ul>
            </div>
        </div>
    );
}