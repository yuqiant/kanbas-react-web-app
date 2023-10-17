import { Link, useLocation } from "react-router-dom";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar"];
    const { pathname } = useLocation();

    const nonLinkItems = [
        { icon: "fas fa-inbox", text: "Inbox" },
        { icon: "fas fa-clock", text: "History" },
        { icon: "fas fa-desktop", text: "Studio" },
        { icon: "fas fa-share", text: "Commons" },
        { icon: "fas fa-question-circle", text: "Help" },
    ];

    return (
        <div className="list-group" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {link}
                </Link>
            ))}

            {nonLinkItems.map((item, index) => (
                <li key={index}>
                    <i className={item.icon} style={{ color: "red" }}></i>
                    {item.text}
                </li>
            ))}
        </div>
    );
}

export default KanbasNavigation;
