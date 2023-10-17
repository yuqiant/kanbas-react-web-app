import { Link, useLocation } from "react-router-dom";
function KanbasNavigation() {
    // const links = ["Account", "Dashboard", "Courses", "Calendar"];
    const links = [
        { text: "Account", path: "/Kanbas/Account", icon: "fa-user-circle" },
        { text: "Dashboard", path: "/Kanbas/Dashboard", icon: "fa-tachometer-alt" },
        { text: "Courses", path: "/Kanbas/Courses", icon: "fa-book" },
        { text: "Calendar", path: "/Kanbas/Calendar", icon: "fa-calendar" },
        // 可以添加更多链接
    ];

    const { pathname } = useLocation();
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
        </div>
    );
}
export default KanbasNavigation;