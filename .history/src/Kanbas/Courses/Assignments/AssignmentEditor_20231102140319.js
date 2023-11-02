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
import Assignments from ".";

function AssignmentEditor() {
    // const { assignmentId } = useParams();
    const { assignmentId, courseId } = useParams();
    // const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const assignments = useSelector((state) =>
        state.assignmentsReducer.assignments
    );
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId
    );
    const dispatch = useDispatch();

    // const { courseId } = useParams();
    const navigate = useNavigate();
    const [editedTitle, setEditedTitle] = useState("");
    const [editedDescription, setEditedDescription] = useState("");
    const [editedPoints, setEditedPoints] = useState(0);
    const [editedAssignDate, setEditedAssignDate] = useState("");
    const [editedDueDate, setEditedDueDate] = useState("");
    const [editedAvailableFrom, setEditedAvailableFrom] = useState("");
    const [editedUntil, setEditedUntil] = useState("");

    useEffect(() => {
        if (assignment) {
            setEditedTitle(assignment.title);
            setEditedDescription(assignment.description);
            setEditedPoints(assignment.points);
            setEditedAssignDate(assignment.assignDate);
            setEditedDueDate(assignment.due);
            setEditedAvailableFrom(assignment.availableFrom);
            setEditedUntil(assignment.until);
        }
    }, [assignment]);

    const handleSave = () => {
        const updatedAssignment = {
            _id: assignmentId,
            title: editedTitle,
            description: editedDescription,
            points: editedPoints,
            assignDate: editedAssignDate,
            due: editedDueDate,
            availableFrom: editedAvailableFrom,
            until: editedUntil,
            course: courseId,
        };

        // const updatedAssignment = { ...assignment, courseID: courseId };
        // dispatch(updateAssignment(updatedAssignment));
        // dispatch(updateAssignment(assignment));
        navigate(`/Kanbas/Courses/${courseId}/Assignments `); // 导航回Assignments屏幕
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments`); // 导航回Assignments屏幕
    };

    return (
        <div>
            <h4>Assignment Name</h4>
            <input
                // type="text"
                value={assignment.title}
                onChange={(e) =>
                    dispatch(setAssignment({ ...assignment, title: e.target.value }))
                }
                className="form-control mb-2"
            />
            <br />
            <textarea
                value={assignment.description}
                onChange={(e) =>
                    dispatch(setAssignment({ ...assignment, description: e.target.value }))
                }
            />
            <br /><br />
            <h4>Due Date</h4>
            <input
                type="date"
                value={assignment.dueDate}
                onChange={(e) =>
                    dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))
                }
            />

            <h4>Available From Date</h4>
            <input
                type="date"
                value={assignment.availableFromDate}
                onChange={(e) =>
                    dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))
                }
            />

            <h4>Available Until Date</h4>
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
