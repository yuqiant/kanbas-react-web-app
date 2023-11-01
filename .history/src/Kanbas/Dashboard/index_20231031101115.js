
import db from "../Database";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import blueImg from "../Dashboard/blue.png";
import "./index.css";

function Dashboard() {
    // const courses = db.courses;
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    const addNewCourse = () => {
        setCourses([...courses,
        {
            ...course,
            _id: new Date().getTime()
        }]);
    };


    const isDashboard = window.location.pathname.includes("/Kanbas/Dashboard");

    return (
        <div className="container">

            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <hr />
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <button onClick={addNewCourse} >
                Add
            </button>

            <div class="d-flex flex-row flex-wrap">
                {/* <div className="row row-cols-4">
                    {courses.map((course, index) => (
                        // <div className="col" key={course._id}>
                        <div className="card course-card" key={course._id}>
                            <img src={blueImg} className="card-img-top" alt={`Course ${course.number}`} />
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/Kanbas/Courses/${course._id}`}>
                                        {course.number + " " + course.name}
                                    </Link>
                                    
                                </h5>
                                <p className="card-text">
                                    202410_Fall 2023 full semester
                                </p>
                            </div>
                        </div>
                        // </div>
                    ))}
                </div> */}
                <div className="row row-cols-4">
                    {courses.map((course) => (
                        // <div className="col" key={course._id}>
                        <div className="card course-card" key={course._id}>
                            <img src={blueImg} className="card-img-top" alt={`Course ${course.number}`} />
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/Kanbas/Courses/${course._id}`}>
                                        {course.number + " " + course.name}
                                    </Link>

                                </h5>
                                <p className="card-text">
                                    202410_Fall 2023 full semester
                                </p>
                            </div>
                        </div>
                        // </div>
                    ))}
                </div>



            </div>
        </div >

    );
}

export default Dashboard;
