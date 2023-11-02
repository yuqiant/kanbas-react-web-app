// import React from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import db from "../../Database";
// import { useSelector, useDispatch } from "react-redux";
// import { addAssignment, deleteAssignment, updateAssignment, setAssignment } from "./assignmentsReducer";

// function AssignmentEditor() {
//     const { assignmentId } = useParams();
//     // const assignment = db.assignments.find(
//     //     (assignment) => assignment._id === assignmentId);
//     const assginments = useSelector((state) => state.assignmentsReducer.assginments);
//     const assignment = useSelector((state) => state.assignmentsReducer.assignment);
//     const dispatch = useDispatch();

//     const { courseId } = useParams();
//     const navigate = useNavigate();
//     const handleSave = () => {
//         console.log("Actually saving assignment TBD in later assignments");
//         navigate(`/Kanbas/Courses/${courseId}/Assignments`);
//     };
//     return (
//         <div>
//             <h2>Assignment Name</h2>
//             <input value={assignment.title}
//                 className="form-control mb-2" />
//             <hr />
//             <textarea
//                 value={assignment.description}
//                 onChange={(e) =>
//                     dispatch(updateAssignment({ ...assignment, description: e.target.value }))
//                 } />

//             <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
//                 className="btn btn-danger">
//                 Cancel
//             </Link>
//             {/* <Link onClick={handleSave}
//             to={`/Kanbas/Courses/${courseId}/Assignments`}
//             className="btn btn-success me-2">
//         Save
//       </Link> */}
//             <button onClick={handleSave} className="btn btn-success me-2">
//                 Save
//             </button>
//         </div>
//     );
// }
// export default AssignmentEditor;





import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAssignment, updateAssignment } from "./assignmentsReducer";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    const { courseId } = useParams();
    const navigate = useNavigate();

    const handleSave = () => {
        dispatch(updateAssignment(assignment)); // 更新任务
        navigate(`/Kanbas/Courses/${courseId}/Assignments`); // 导航回Assignments屏幕
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments`); // 导航回Assignments屏幕
    };

    return (
        <div>
            <h2>Assignment Name</h2>
            <input
                type="text"
                value={assignment.title}
                onChange={(e) =>
                    dispatch(setAssignment({ ...assignment, title: e.target.value }))
                }
                className="form-control mb-2"
            />
            <h2>Description</h2>
            <textarea
                value={assignment.description}
                onChange={(e) =>
                    dispatch(setAssignment({ ...assignment, description: e.target.value }))
                }
            />

            <h2>Due Date</h2>
            <input
                type="date"
                value={assignment.dueDate}
                onChange={(e) =>
                    dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))
                }
            />

            <h2>Available From Date</h2>
            <input
                type="date"
                value={assignment.availableFromDate}
                onChange={(e) =>
                    dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))
                }
            />

            <h2>Available Until Date</h2>
            <input
                type="date"
                value={assignment.availableUntilDate}
                onChange={(e) =>
                    dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))
                }
            />

            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
                Cancel
            </Link>

            <button onClick={handleSave} className="btn btn-success me-2">
                Save
            </button>
        </div>
    );
}

export default AssignmentEditor;
