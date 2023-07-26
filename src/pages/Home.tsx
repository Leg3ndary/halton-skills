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
                </div>
                <div className="right">
                    <h1>Halton Skills Competition helps students by showcasing their skills</h1>
                </div>
            </div>
        </div>
    );
}