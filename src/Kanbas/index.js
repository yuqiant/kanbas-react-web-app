import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
// import Account from "./Account";
import Dashboard from "./Dashboard";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "../users/signin";

function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const URL = "http://localhost:4000/api/courses";
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    // const addNewCourse = () => {
    //     setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    // };
    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            response.data,
            ...courses,
        ]);
        setCourse({ name: "" });
        //     const findAllCourses = async () => {... };
        //     useEffect(() => {...}, []);
        // return (... );

    };



    // const deleteCourse = (courseId) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };
    // const deleteCourse = async (courseId) => {

    //     await axios.delete(
    //         `${URL}/${courseId}`
    //     );
    //     setCourses(courses.filter((course) => course._id !== courseId));
    //     console.log(courses);

    // };
    const deleteCourse = async (courseId) => {
        try {
            await axios.delete(`${URL}/${courseId}`);
            setCourses(courses.filter((course) => course._id !== courseId));
        } catch (error) {
            console.error("Error deleting course:", error);
        }
    };

    // const updateCourse = async () => {

    //     // const response = await axios.put(`${URL}/${course._id}`, course);
    //     // setCourses(courses.map((c) => {
    //     //     if (c._id === course._id) {
    //     //         return response.data; // Use updated data from the server
    //     //     }
    //     //     return c;
    //     // }));
    //     // // setCourse(response.data);
    //     const response = await axios.put(`${URL}/${course._id}`, course);
    //     const updatedCourse = response.data; // Updated course data from server
    //     console.log("Updated course:", updatedCourse); // Check updated course data
    //     setCourses(prevCourses => {
    //         return prevCourses.map(c => (c._id === updatedCourse._id ? updatedCourse : c));
    //     });
    //     // Optionally, update the currently edited course if necessary
    //     setCourse(updatedCourse);
    // };

    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return response.data;
                }
                return c;
            })
        );
        setCourse({ name: "" });
    };












    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };

    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation />
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        {/* <Route path="Account" element={<Account />} /> */}
                        <Route path="Dashboard" element={<Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse} />
                        } />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                        <Route path="Calendar" element={<h1>Calendar</h1>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;