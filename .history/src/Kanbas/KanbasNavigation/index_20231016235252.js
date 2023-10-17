import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have React Router installed

const KanbasNavigation = () => {
    // Define an array of link objects with text and paths
    const links = [
        { text: 'Account', path: '/Kanbas/Account' },
        { text: 'Dashboard', path: '/Kanbas/Dashboard' },
        { text: 'Courses', path: '/Kanbas/Courses' },
        { text: 'Calendar', path: '/Kanbas/Calendar' },
    ];

    return (
        <div className="flex-container">
            <div className="left-column">
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <i className="fa fa-user-circle fa-inverse"></i>
                            <Link to={link.path}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default KanbasNavigation;
