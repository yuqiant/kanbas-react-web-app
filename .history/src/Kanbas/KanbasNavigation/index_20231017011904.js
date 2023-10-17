import "../../public/vendors/fontawesome/css/all.min.css";
import "../../public/vendors/bootstrap/css/bootstrap.min.css";


import { Link, useLocation } from "react-router-dom";

function KanbasNavigation() {
    const links = [
        { text: "Account", icon: "fa fa-user-circle fa-inverse" },
        { text: "Dashboard", icon: "fas fa-tachometer-alt" },
        { text: "Courses", icon: "fas fa-book" },
        { text: "Calendar", icon: "fas fa-calendar" },
        { text: "Inbox", icon: "fas fa-inbox" },
        { text: "History", icon: "fas fa-clock" },
        { text: "Studio", icon: "fas fa-desktop" },
        { text: "Commons", icon: "fas fa-share" },
        { text: "Help", icon: "fas fa-question-circle" },
    ];
    const { pathname } = useLocation();

    return (
        <div className="list-group" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link.text}`}
                    className={`list-group-item ${pathname.includes(link.text) && "active"}`}
                >
                    <i className={link.icon} style={{ color: "red" }}></i>
                    {link.text}
                </Link>
            ))}
        </div>
    );
}

export default KanbasNavigation;
