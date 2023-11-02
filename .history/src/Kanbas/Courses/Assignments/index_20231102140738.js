import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { BiPlus, BiCheckCircle, BiDotsVertical } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { setAssignment, deleteAssignment } from './assignmentsReducer';
function Assignments() {
    const { courseId } = useParams();
    // const assignments = db.assignments;
    const navigate = useNavigate();

    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const dispatch = useDispatch();
    const [deleteAssignmentId, setDeleteAssignmentId] = useState(null);


    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="assignments">
            <h2>Assignments for course {courseId}</h2>
            <div>
                <input type="text" id="myInput" placeholder="Search for Assignment"></input>


                {/* <div class="float-sm-end"> */}
                <div class="btn-group" style={{ marginRight: '-5px' }}>
                    <button class="btn btn-light btn-sm"><BiPlus />Group</button>
                    <button class="btn btn-danger btn-sm"><BiPlus />Assignment</button>
                    <button class="btn btn-light btn-sm"><BiDotsVertical /></button>

                </div>

                <hr />
                <div class="list-group mb-4">
                    <a href="edit.html" class="list-group-item list-group-item-secondary"><BiDotsVertical /><BiDotsVertical />
                        Assignments
                        <div class="float-sm-end">
                            <span class="percentage">40% of Total</span>
                            <span class="icon"><BiPlus /></span>
                            <span class="icon"><BiDotsVertical /></span>
                        </div>


                    </a>
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



            </div>
        </div >

    );
}
export default Assignments;