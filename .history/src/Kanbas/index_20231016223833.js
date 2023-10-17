import { Link } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
function Kanbas() {
    return (
        // <div>
        //     {/* <Link to="/hello">Hello</Link> |
        //     <Link to="/Labs/a3">A3</Link> |
        //     <Link to="/Kanbas">Kanbas</Link> */}
        //     <Nav />
        //     <h1>Kanbas</h1>
        // </div>
        <div className="d-flex">
            <KanbasNavigation />
            <div>
                <h1>Account</h1>
                <h1>Dashboard</h1>
                <h1>Courses</h1>
            </div>
        </div>

    );
}
export default Kanbas