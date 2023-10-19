import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
// import Modules from "./Modules";
// import Home from "./Home";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/AssignmentEditor";
// import Grades from "./Grades";import { Link } from "react-router-dom";
import { Link } from "react-router-dom";




function Courses() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const [empty, kanbas, courses, id, screen] = pathname.split("/");
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div>
            {/* {course.name} / {screen}
            <hr />  */}
            <Link to={`/Kanbas/Courses/${courseId}`}>{course.name}</Link> / <Link to={pathname}>{screen}</Link>
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    {/* <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor />}
                        />
                        <Route path="Grades" element={<Grades />} />
                    </Routes> */}
                </div>
            </div>

        </div>
    );
}

export default Courses;