import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <h2>Assignments for course {courseId}</h2>
            <div>
                <input type="text" id="myInput" placeholder="Search for Assignment">


                    <div class="float-sm-end">
                        <div class="btn-group" style="margin-right: -5px;">
                            <button class="btn btn-light btn-sm"><i class="fa fa-plus"
                                aria-hidden="true"></i>Group</button>
                            <button class="btn btn-danger btn-sm"><i class="fa fa-plus"
                                aria-hidden="true"></i>Assignment</button>
                            <button class="btn btn-light btn-sm"><i class="fa fa-ellipsis-v"
                                aria-hidden="true"></i></button>

                        </div>

                    </div><br>
                        <hr />
                    </div>

                    <div className="list-group">
                        {courseAssignments.map((assignment) => (
                            <Link
                                key={assignment._id}
                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                className="list-group-item">
                                {assignment.title}
                            </Link>
                        ))}
                    </div>
            </div>
            );
}
            export default Assignments;