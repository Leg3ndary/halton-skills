import "./NavBar.css";
import logo from "../assets/halton_skills_logo_only.png";

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar_logo">
                <img src={logo} alt="Halton Skills Logo"></img>
            </div>
        </div>
    );
}