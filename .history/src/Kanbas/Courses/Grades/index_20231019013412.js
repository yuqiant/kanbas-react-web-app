import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div style={{ marginRight: "20px" }}>
            <h1>Grades</h1>
            <div class="btn-group" style={{ marginRight: "20px" }}>

                <div class="btn-group">
                    <button class="btn btn-light btn-sm" type="button" aria-expanded="false"><i
                        class="fas fa-upload"></i> Import
                    </button>
                    <button class="btn btn-light btn-sm dropdown-toggle" type="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                            class="fas fa-download"></i>
                        Export
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Option 1</a>
                        <a class="dropdown-item" href="#">Option 2</a>
                        <a class="dropdown-item" href="#">Option 3</a>
                    </div>
                </div>
                <span class="tool-icon"></span>

            </div>

            <div class="row">
                <div class="col-md-6">
                    <h6>Studnets Name</h6>
                    <form id="text-fields">
                        <input id="text-fields-studentname" placeholder="Search Students"
                            style={{ width: "100%" }} /><br />
                    </form>

                </div>
                <div class="col-md-6">
                    <h6>Assignments Name</h6>
                    <form id="text-fields">
                        <input id="text-fields-assginment" placeholder="Search Assignments"
                            style={{ width: "100%" }} /><br />
                    </form>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div >);
}
export default Grades;