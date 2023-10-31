import React from "react";
import Add from "./Add";
import PassingFunctions from "./PassingFunctions";
import PassingDataOnEvent from "./PassingDataOnEvent";
const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }

    return (
        <>
            <h1>Assignment 4</h1>
            <PassingFunctions theFunction={sayHello} />
            <Add a={1} b={2} />

        </>
    );
};
export default Assignment4;