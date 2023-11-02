import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, setAssignment } from "./assignmentsReducer";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    // const assignment = db.assignments.find(
    //     (assignment) => assignment._id === assignmentId);
    // const assginments = useSelector((state) => state.assignmentsReducer.assginments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <h2>Assignment Name</h2>
            <input value={assignment.title}
                className="form-control mb-2" />
            <hr />
            <textarea
                value={assignment.description}
                onChange={(e) =>
                    dispatch(setAssignment({ ...assignment, description: e.target.value }))
                } />

            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger">
                Cancel
            </Link>
            {/* <Link onClick={handleSave}
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-success me-2">
        Save
      </Link> */}
            <button onClick={handleSave} className="btn btn-success me-2">
                Save
            </button>
        </div>
    );
}


// // export default AssignmentEditor;
// import { createSlice } from "@reduxjs/toolkit";
// import db from "../../Database";

// const initialState = {
//     assignments: db.assignments,
//     assignment: {
//         title: "New Assignment 123",
//         description: "New Description",
//         dueDate: "2022-01-01",
//         availableFromDate: "2023-01-01",
//         availableUntilDate: "2023-02-01",
//     },
// };

// const assignmentsSlice = createSlice({
//     name: "assignments",
//     initialState,
//     reducers: {
//         addAssignment: (state, action) => {
//             state.assignments = [
//                 { ...action.payload, _id: new Date().getTime().toString() },
//                 ...state.assignments,
//             ];
//         },
//         deleteAssignment: (state, action) => {
//             state.assignments = state.assignments.filter(
//                 (assignment) => assignment._id !== action.payload
//             );
//         },
//         updateAssignment: (state, action) => {
//             state.assignments = state.assignments.map((assignment) => {
//                 if (assignment._id === action.payload._id) {
//                     return action.payload;
//                 } else {
//                     return assignment;
//                 }
//             });
//         },
//         setAssignment: (state, action) => {
//             state.assignment = action.payload;
//         },
//     },
// });

// export const {
//     addAssignment,
//     deleteAssignment,
//     updateAssignment,
//     setAssignment,
// } = assignmentsSlice.actions;

// export default assignmentsSlice.reducer;
