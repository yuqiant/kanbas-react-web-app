import Signin from "../users/signin";
import Account from "../users/account";
import { Routes, Route, Navigate } from "react-router-dom";
import { signup } from "../users/client";

import Nav from "./nav";
import UserTable from "../users/tables";
function Project() {
    return (
        <div className="row">
            <div className="col-2">
                <Nav />
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="/project/home" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/signout" element={<signup />} />
                </Routes>
            </div>
        </div>
    );
}
export default Project;