// import React from "react";
// import './index.css';
// import { Link, useLocation } from "react-router-dom";
// import { FaUserCircle, FaTachometerAlt, FaBook, FaCalendar, FaInbox, FaClock, FaDesktop, FaShare, FaQuestionCircle } from "react-icons/fa";

// function KanbasNavigation() {
//     const links = [
//         { text: "Account", icon: FaUserCircle },
//         { text: "Dashboard", icon: FaTachometerAlt },
//         { text: "Courses", icon: FaBook },
//         { text: "Calendar", icon: FaCalendar },
//         { text: "Inbox", icon: FaInbox },
//         { text: "History", icon: FaClock },
//         { text: "Studio", icon: FaDesktop },
//         { text: "Commons", icon: FaShare },
//         { text: "Help", icon: FaQuestionCircle },
//     ];
//     const { pathname } = useLocation();

//     return (
//         <div className="left-column">
//             {links.map((link, index) => (
//                 <Link
//                     key={index}
//                     to={`/Kanbas/${link.text}`}
//                     className={`list-group-item ${pathname.includes(link.text) && "active"}`}


//                 >
//                     {React.createElement(link.icon, { style: { color: "red", display: "block", margin: "0 auto" } })}

//                     {link.text}
//                 </Link>
//             ))}
//         </div>
//     );
// }

// export default KanbasNavigation;

import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import "./index.css";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar"];

    const linkToIconMap = {
        Account: <BiUserCircle className="wd-icon" />,
        Dashboard: <RiDashboard3Fill className="wd-icon" />,
        Courses: <FaBook className="wd-icon" />,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    };

    const { pathname } = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}
                >
                    {linkToIconMap[link]}
                    <br />
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;