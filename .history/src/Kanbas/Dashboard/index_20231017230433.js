import db from "../Database";
import { Link } from "react-router-dom";
import blueImg from "../Dashboard/blue.png";
function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    {courses.map((course, index) => (
                        <div class="card h-100">
                            <img src={blueImg} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{course.number + course.name}</h5>

                                <Link
                                    key={course._id}
                                    to={`/Kanbas/Courses/${course._id}`}
                                // className="btn btn-primary"
                                >
                                    {course.name}
                                </Link>
                                <p class="card-text">
                                    {course._id + course.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;