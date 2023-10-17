import React from "react";
import './index.css';
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle, FaTachometerAlt, FaBook, FaCalendar, FaInbox, FaClock, FaDesktop, FaShare, FaQuestionCircle } from "react-icons/fa";

function KanbasNavigation() {
    const links = [
        { text: "Account", icon: FaUserCircle },
        { text: "Dashboard", icon: FaTachometerAlt },
        { text: "Courses", icon: FaBook },
        { text: "Calendar", icon: FaCalendar },
        { text: "Inbox", icon: FaInbox },
        { text: "History", icon: FaClock },
        { text: "Studio", icon: FaDesktop },
        { text: "Commons", icon: FaShare },
        { text: "Help", icon: FaQuestionCircle },
    ];
    const { pathname } = useLocation();

    return (
        <div className="left-column">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link.text}`}
                    className={`list-group-item ${pathname.includes(link.text) && "active"}`}
                >
                    {React.createElement(link.icon, { style: { color: "red" } })}
                    {link.text}
                </Link>
            ))}
        </div>
    );
}

export default KanbasNavigation;
