import "./Home.css";
import banner from "../assets/banner.jpg";
import logo from "../assets/halton_skills_logo_full.png";

export default function Home() {
    return (
        <div className="home">
            <div className="home_banner">
                <img className="banner_image" src={banner} alt="Banner" style={{visibility: "hidden"}}></img>
                <img className="logo_overlay" src={logo} alt="Logo Overlay"></img>
            </div>
            <h1>Halton Skills Competition</h1>

        </div>
    );
}