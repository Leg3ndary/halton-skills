import React from "react";
import "./NavBar.css";
import logo from "../assets/halton_skills_logo_only.png";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar_logo">
                <Link to="/">
                    <img src={logo} alt="Halton Skills Logo"></img>
                </Link>
            </div>
            <div className="links">
                <button className="navbar_button">
                    <Link to="/contact">Contact</Link>
                </button>
                <Link to="/news">News</Link>
                <Link to="/elementary-competitions">Elementary</Link>
                <Link to="/secondary-competitions">Secondary</Link>
                <Link to="/scopes">Scopes</Link>
                <Link to="/sponsors-donate">Sponsors/Donate</Link>
            </div>
        </div>
    );
}