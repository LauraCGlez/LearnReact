import RaccoonLogo from "../../assets/icons/RaccoonLogo.tsx";
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo-section">
                <span className="navbar__logo"><RaccoonLogo/></span>
                <span className="navbar__logo-text">Raccoon Games</span>
            </div>
        </div>
    );
}

export default NavBar;