import logo from "../assets/images/halton_skills_logo_only.png";
import "./NavBar.css";

function NavBar( props: any ) {
    return (
        <div className="nav-bar">
            <div className="nav-bar-logo">
                <img src={logo} alt="Halton Skills Logo"></img>
            </div>
        </div>
    );
}

export default NavBar;