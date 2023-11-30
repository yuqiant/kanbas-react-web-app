import { Link, useLocation } from "react-router-dom";
import "./index.css"; // Make sure your CSS styles are defined in this file

function Nav() {
    const links = ["Home", "Search", "Signin", "Signup", "Account"];
    const { pathname } = useLocation();

    return (
        <div className="navbar-container">
            {
                links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/${link}`}
                        className={`nav-item ${pathname.includes(link) && "active"}`}
                    >
                        {link}
                    </Link>
                ))
            }
            {/* <div className="signin-form">
                <input type="text" placeholder="Username" className="username-input" />
                <input type="password" placeholder="Password" className="password-input" />
                <button className="signin-button">Signin</button>
            </div> */}
        </div>
    );
}

export default Nav;
