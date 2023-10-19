
// import "./index.css";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
function Kanbas() {
    return (

        <div className="d-flex">
            <KanbasNavigation />
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    {/* <Route path="Dashboard" element={<Dashboard />} /> */}
                    <Route path="Courses/*" element={<h1>Courses</h1>} />
                </Routes>

            </div>
        </div>

        // );
        // <div className="flex-container">
        //     <KanbasNavigation />
        //     <div className="right-column">
        //         <div className="right-top">
        //             <h2>Right Top</h2>
        //         </div>
        //         <div className="right-bottom">
        //             <div className="right-bottom-item">
        //                 <h3>Item 1</h3>
        //                 <p>Lorem ipsum dolor sit amet.</p>
        //             </div>
        //             <div className="right-bottom-item">
        //                 <h3>Item 2</h3>
        //                 <p>Lorem ipsum dolor sit amet.</p>
        //             </div>
        //             <div className="right-bottom-item">
        //                 <h3>Item 3</h3>
        //                 <p>Lorem ipsum dolor sit amet.</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Kanbas;




