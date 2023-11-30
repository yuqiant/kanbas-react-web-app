// import { Link, useLocation } from "react-router-dom";
// import "./index.css"; // Make sure your CSS styles are defined in this file

// function Nav() {
//     const links = ["Home", "Search", "Signin", "Signup", "Account"];
//     const { pathname } = useLocation();

//     return (
//         <div className="navbar-container">
//             {
//                 links.map((link, index) => (
//                     <Link
//                         key={index}
//                         to={`/project/${link}`}
//                         className={`nav-item ${pathname.includes(link) && "active"}`}
//                     >
//                         {link}
//                     </Link>
//                 ))
//             }
//             {/* <div className="signin-form">
//                 <input type="text" placeholder="Username" className="username-input" />
//                 <input type="password" placeholder="Password" className="password-input" />
//                 <button className="signin-button">Signin</button>
//             </div> */}
//         </div>
//     );
// }

// export default Nav;


import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <NavLink className="nav-link" activeClassName="active" to="/project/home">
                Home
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/project/search">
                Search
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/project/signin">
                Signin
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/project/signup">
                Signup
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/project/account">
                Account
            </NavLink>
        </div>
    );
};

export default Nav;

