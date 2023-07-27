import React from "react";
import "./Home.css";
import banner from "../assets/banner.jpg";
import logo from "../assets/halton_skills_logo_full.png";

export default function Home() {
    return (
        <div className="home">
            <div className="home_banner">
                <img className="banner_image" src={banner} alt="Banner" style={{visibility: "hidden"}}></img>
            </div>
            <div className="content">
                <div className="left">
                    <img src={logo} alt="Halton Skills Logo" className="logo"></img>
                    <p>The 31st annual Elementary Halton Skills Competition, hosted by the Halton District School Board will be held on March 1st 2023 at New St. Education Centre.</p>
                    <p>The 31st annual Secondary Halton Skills Competition, hosted by the Halton District School Board will be held on March 30th 2023 at MM Robinson High School.</p>
                    <p>Approximately 1,100 secondary and elementary students from the Halton District School Board compete in a wide range of Technological Skills.</p>
                    <p>Secondary school students competed in events such as 2D Character Animation, Architectural Technology & Design, Auto Collision Repair, Auto Painting, Auto Service Technology, Baking, and more.</p>
                </div>
                <div className="right">
                    <h1>Halton Skills Competition helps students by showcasing their skills</h1>
                </div>
            </div>
        </div>
    );
}